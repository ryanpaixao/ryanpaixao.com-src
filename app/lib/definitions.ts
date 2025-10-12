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
  aboutPage: {
    pageHeaderTitle: string;
    aboutParagraphs: [string];
  },
  experiencePage: {
    pageHeaderTitle: string;
    experiences: [
      {
        companyName: string;
        jobTitle: string;
        timeWorked: string;
        location: string;
        jobDescription: string;
      },
      {
        companyName: string;
        jobTitle: string;
        timeWorked: string;
        location: string;
        jobDescription: string;
      }
    ]
  },
  projectsPage: {
    pageHeaderTitle: string;
    item: {
      description: string;
    },
    iHaveNotions: {
      title: string;
      description: string;
      stack: string;
      siteHref: string;
      githubUrls: [string];
    },
    localDeepseek: {
      title: string;
      description: string;
      stack: string;
      siteHref: string;
      githubUrls: [string];
    },
    productivityDash: {
      title: string;
      description: string;
      stack: string;
      siteHref: string;
      githubUrls: [string];
    },
    dashCap: {
      title: string;
      description: string;
      stack: string;
      siteHref: string;
      githubUrls: [string];
    },
    ryanpaixaoCom: {
      title: string;
      description: string;
      stack: string;
      siteHref: string;
      githubUrls: [string];
    }
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
