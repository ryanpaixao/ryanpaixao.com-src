interface Experience {
  companyName: string;
  jobTitle: string;
  timeWorked: string;
  positionType: string;
  location: string;
  jobDescription: string;
};
interface Project {
  title: string;
  description: string;
  stack: string;
  siteHref: string;
  githubUrls: [string];
};

export type Dictionary = {
  siteHeader: {
    nav: {
      links: {
        about: string;
        experience: string;
        projects: string;
        contact: string;
      }
    }
  },
  interactiveCodeEditor: {
    aboutMeFile: string;
    skipCTA: string;
    codeSnippets: [string];
  },
  homePage: {
    hello: string;
    description: string;
    primaryCTA: string;
    secondaryCTA: string;
  },
  aboutPage: {
    pageHeaderTitle: string;
    aboutParagraphs: [string];
  },
  experiencePage: {
    pageHeaderTitle: string;
    type: string;
    experiences: [Experience]
  },
  projectsPage: {
    pageHeaderTitle: string;
    item: {
      description: string;
    },
    iHaveNotions: Project,
    localDeepseek: Project,
    productivityDash: Project,
    dashCap: Project,
    ryanpaixaoCom: Project
  },
  contactPage: {
    pageHeaderTitle: string;
    personalEmail: string;
    personalGithub: string;
    personalLinkedIn: string;
  }
};

export type AvailableLanguages = 'en' | 'pt';

export type LangParams = {
  lang: AvailableLanguages;
};
