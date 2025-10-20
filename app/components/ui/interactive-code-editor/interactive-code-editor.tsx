'use client';

import { memo, useState, useEffect, useRef } from 'react';

import { Dictionary } from '@/app/lib/definitions';
import './interactive-code-editor.css';
import { createMarkup, highlightSyntax } from './utils';

type CodeEditorProps = {
  dict: Dictionary;
};

const addYearsOfExperience = (snippet: string) => {
  const today = new Date();
  const lastEmployedDate = new Date('2023-12-08');
  const yearOffset = Math.round((+today - +lastEmployedDate) / (1000 * 60 * 60 * 24 * 365.25)); // TODO: Update me when employed again!
  const startingDate = new Date('2016-04-01');
  let yearsOfExp = today.getFullYear() - startingDate.getFullYear() - yearOffset;

  // if current month/day is before the starting month/day, subtract 1
  const month = today.getMonth() - startingDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < startingDate.getDate())) {
    yearsOfExp--;
  }

  return snippet.replace('{yearsOfExperience}', `${yearsOfExp}`);
};

const InteractiveCodeEditor = ({ dict }: CodeEditorProps) => {
  const [currentCode, setCurrentCode] = useState('');
  const [currentSnippetIndex, setCurrentSnippetIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [cursorVisible, setCursorVisible] = useState(true);
  const editorRef = useRef(null);

  // Typing and deleting
  useEffect(() => {
    const snippets = dict.interactiveCodeEditor.codeSnippets;
    const currentSnippet = currentSnippetIndex === 1
      ? addYearsOfExperience(snippets[1])
      : snippets[currentSnippetIndex];

    let typingTimeout: NodeJS.Timeout | undefined;
    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex <= currentSnippet.length) {
        setCurrentCode(currentSnippet.slice(0, currentIndex));
        currentIndex++;
        typingTimeout = setTimeout(typeText, isTyping ? 50 : 30); // Faster when deleting
      } else {
        // Finished typing, wait then start deleting
        setTimeout(() => setIsTyping(false), 2000);
      }
    };

    const deleteText = () => {
      if (currentIndex >= 0) {
        setCurrentCode(currentSnippet.slice(0, currentIndex));
        currentIndex--;
        typingTimeout = setTimeout(deleteText, 30);
      } else {
        // Finished deleting, move to next snippet
        setIsTyping(true);
        setCurrentSnippetIndex((prev) => (prev + 1) % snippets.length);
      }
    };

    if (isTyping) {
      typeText();
    } else {
      deleteText();
    }

    return () => clearTimeout(typingTimeout);
  }, [currentSnippetIndex, isTyping, dict.interactiveCodeEditor.codeSnippets]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const handleEditorClick = () => {
    // Skip to next snippet immediately
    const snippets = dict.interactiveCodeEditor.codeSnippets;
    setCurrentSnippetIndex((prev) => (prev + 1) % snippets.length);
    setIsTyping(true);
    setCurrentCode(''); // Reset current code
  };

  return (
    <div
      ref={editorRef}
      className='interactive-code-editor'
      onClick={handleEditorClick}
      role='button'
      tabIndex={0}
      aria-label='Click to skip to next code snippet'
    >
      {/** Editor Header */}
      <div className='editor-header'>
        <div className='window-controls'>
          <span className='control close'></span>
          <span className='control minimize'></span>
          <span className='control maximize'></span>
        </div>
        <div className='file-name'>
          {dict.interactiveCodeEditor.aboutMeFile}
        </div>
      </div>

      {/** Code Content */}
      <div className='editor-content'>
        <pre className='code-display'>
          <code
            dangerouslySetInnerHTML={createMarkup(highlightSyntax(currentCode))}
          />
          <span className={`cursor ${cursorVisible ? 'visible' : ''}`}>
            |
          </span>
        </pre>
      </div>

      {/** Interactive Hint */}
      <div className='editor-footer'>
        <span className='hint'>
          {dict.interactiveCodeEditor.skipCTA}
        </span>
      </div>
    </div>
  );
};

export default memo(InteractiveCodeEditor);
