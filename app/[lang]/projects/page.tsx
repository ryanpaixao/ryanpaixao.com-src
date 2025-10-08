import Link from "next/link";

export default function Page() {
  const PROJECTS = [
    {
      siteHref: 'https://i-have-notions.netlify.app/',
      githubHrefs: ['https://github.com/ryanpaixao/I-have-notions'],
    },
    {
      siteHref: undefined,
      githubHrefs: ['https://github.com/ryanpaixao/local_deepseek'],
    },
    {
      siteHref: 'https://wonderful-semifreddo-optimized.netlify.app/',
      githubHrefs: [
        'https://github.com/ryanpaixao/productivity-dashboard-frontend',
        'https://github.com/ryanpaixao/productivity-dashboard-backend',
      ]
    },
    {
      siteHref: 'https://dash-cap.vercel.app',
      githubHrefs: ['https://github.com/ryanpaixao/dash-cap'],
    }
  ];

  return (
    <div>
      <h1 className="text-2xl mb-5">
        {`<Projects>`}
      </h1>
      <ol>
        {PROJECTS.map((project, i) => {
          return (
            <li key={`project-${i}`} className="flex flex-col mb-4">
              <div>
                {`${i}) `}
              </div>
              <div className="pl-2">
                <p className="font-bold">
                  {`Site => `}
                </p>
                {project.siteHref
                ? <div className="pl-2">
                    <Link
                      href={project.siteHref}
                    >
                      {`-- ${project.siteHref}`}
                    </Link>
                  </div>
                : <div className="pl-2">
                    {'-- N/A'}
                  </div>
                }
              </div>
              <div className="pl-2">
                <p className="font-bold">
                  {`Github => `}
                </p>
                <ul className="">
                  {project.githubHrefs.map((href, j) => {
                    return (
                      <li key={`${i}-github-${j}`} className="pl-2">
                        <Link
                          className="w-full"
                          href={href}
                        >
                          {`-- ${href}`}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  );
}