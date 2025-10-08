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
  projectsPage: {
    item: {
      description: string;
    },
    iHaveNotions: {
      title: string;
      description: string;
      stack: string;
      siteHref: string;
      githubHrefs: [];
    },
    localDeepseek: {
      title: string;
      description: string;
      stack: string;
      siteHref: string;
      githubHrefs: [];
    },
    productivityDash: {
      title: string;
      description: string;
      stack: string;
      siteHref: string;
      githubHrefs: [];
    },
    dashCap: {
      title: string;
      description: string;
      stack: string;
      siteHref: string;
      githubHrefs: [];
    }
  }
};

export type AvailableLanguages = 'en' | 'pt';

export type LangParams = {
  lang: AvailableLanguages;
};
