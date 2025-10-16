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
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1>
            {dict.homePage.hello}
          </h1>
          <p className="hero-subtitle">
            {dict.homePage.description}
          </p>

          {/** Interactive Code Editor */}
          <InteractiveCodeEditor dict={dict} />

          {/** Call to Action Buttons */}
          {/* <div className="cta-buttons">
            <button className="btn btn-primary">
              {dict.homePage.primaryCTA}
            </button>
            <button className="btn btn-primary">
              {dict.homePage.secondaryCTA}
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
