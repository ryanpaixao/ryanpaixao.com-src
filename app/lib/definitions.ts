export type Dictionary = {
  siteHeader: {
    nav: {
      links: {
        about: string;
        skills: string;
        projects: string;
        contact: string;
      }
    }
  },
  aboutPage: {
    pageHeaderTitle: string;
  },
  skillsPage: {
    pageHeaderTitle: string;
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
      githubUrls: [];
    },
    localDeepseek: {
      title: string;
      description: string;
      stack: string;
      siteHref: string;
      githubUrls: [];
    },
    productivityDash: {
      title: string;
      description: string;
      stack: string;
      siteHref: string;
      githubUrls: [];
    },
    dashCap: {
      title: string;
      description: string;
      stack: string;
      siteHref: string;
      githubUrls: [];
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
