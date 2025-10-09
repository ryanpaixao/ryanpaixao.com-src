import Link from "next/link";

import { LangParams } from '@/app/lib/definitions';
import { getDictionary } from "@/app/lib/dictionaries";
import PageHeaderTitle from '@/app/components/ui/page-header-title';

interface ProjectsPageProps {
  params: LangParams;
};

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const PROJECTS = [
    dict.projectsPage.iHaveNotions,
    dict.projectsPage.localDeepseek,
    dict.projectsPage.productivityDash,
    dict.projectsPage.dashCap,
  ];

  return (
    <div>
      <PageHeaderTitle>
        {dict.projectsPage.pageHeaderTitle}
      </PageHeaderTitle>
      <ol>
        {PROJECTS.map((project, i) => {
          return (
            <li key={`project-${i}`} className="flex flex-col mb-4">
              <div>
                <b className="text-2xl dark:text-gray-400 text-gray-600">
                  {`[${i}].${project.title}`}
                </b>
              </div>
              <div className="pl-2 mb-2">
                <p className="font-bold">
                  {`${dict.projectsPage.item.description} =>`}
                </p>
                <p>
                  {`-- ${project.description}`}
                </p>
              </div>
              <div className="pl-2 mb-2">
                <p className="font-bold">
                  {`Tech Stack =>`}
                </p>
                <p>
                  {`-- ${project.stack}`}
                </p>
              </div>
              <div className="pl-2 mb-2">
                <p className="font-bold">
                  {`Site => `}
                </p>
                {project.siteHref
                ? <div className="pl-2">
                    <Link
                      className="text-green-400"
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
              <div className="pl-2 mb-2">
                <p className="font-bold">
                  {`Github => `}
                </p>
                <ul className="mb-2">
                  {project.githubUrls.map((url, j) => {
                    return (
                      <li key={`${i}-github-${j}`} className="pl-2">
                        <Link
                          className="w-full text-green-400"
                          href={url}
                        >
                          {`-- ${url}`}
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