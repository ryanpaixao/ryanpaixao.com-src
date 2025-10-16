// Syntax highlighting function
export const highlightSyntax = (code: string) => {
  return code
    // Comments
    .replace(/(\/\/.*)/g, '<span>$1</span>')
    // Strings
    .replace(/(".*?"|'.*?')/g, '<span class="string">$1</span>')
    // Keywords
    .replace(/\b(const|function|return|React)\b/g, '<span class="keyword">$1</span>')
    // Numbers
    .replace(/\b(\d+)\b/g, '<span class="number">$1</span>')
    // Function names
    .replace(/(\w+)(?=\s*\()/g, '<span class="function">$1</span>')
    // Object keys
    .replace(/(\w+):/g, '<span class="property">$1</span>:')
};

// WARNING!: Helper for dangerous HTML insertion
export const createMarkup = (html: string) => {
  return { __html: html };
};
