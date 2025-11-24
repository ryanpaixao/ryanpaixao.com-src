import Link from 'next/link';

import InteractiveCodeEditor from "@/app/components/ui/interactive-code-editor/interactive-code-editor";
import { getDictionary } from "@/app/lib/dictionaries";
import { LangParams } from "@/app/lib/definitions";

interface PageParams {
  params: LangParams;
}

export default async function Home({ params }: PageParams) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="home-container font-sans grid grid-rows-[56px_1fr_20px] items-center justify-items-center min-h-screen gap-4">
      <div className="hero-section flex flex-col row-start-2 items-center sm:items-start">
        <div className="hero-content">
          <div>
            <h1 className='text-center mx-2'>
              {dict.homePage.hello}
            </h1>
            <p className="hero-subtitle text-center mx-2">
              {dict.homePage.description}
            </p>

            {/** Interactive Code Editor */}
            <div className="mt-5 mb-5">
              <InteractiveCodeEditor dict={dict} />
            </div>
          </div>

          {/** Call to Action Buttons */}
          <div className="flex flex-auto space-between cta-buttons w-full justify-center">
            <div className="mr-3">
              <button className="btn btn-primary">
                <Link href={`/${lang}/projects`}>
                  {dict.homePage.primaryCTA}
                </Link>
              </button>
            </div>
            <div>
              <button className="btn btn-primary">
                <Link href={`/${lang}/contact`}>
                  {dict.homePage.secondaryCTA}
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
