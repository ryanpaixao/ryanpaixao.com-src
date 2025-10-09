import { LangParams } from "@/app/lib/definitions";
import { getDictionary } from "@/app/lib/dictionaries";
import UiLink from "@/app/components/ui/ext-link";

interface ContactPageProps {
  params: LangParams;
};

export default async function ContactPage({ params }: ContactPageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div>
      <h1 className="text-4xl mb-5 font-extrabold">
        {`<${dict.contactPage.pageHeaderTitle}>`}
      </h1>
      <ol>
        <li className="flex flex-col mb-4">
          <div>
            <b>
              {`Email:  `}
            </b>
            <UiLink
              href={`mailto:${dict.contactPage.personalEmail}`}
            >
              {dict.contactPage.personalEmail}
            </UiLink>
          </div>
        </li>
        <li className="flex flex-col mb-4">
          <div>
            <b>
              {`Github:  `}
            </b>
            <UiLink
              href={dict.contactPage.personalGithub}
            >
              {dict.contactPage.personalGithub}
            </UiLink>
          </div>
        </li>
        <li className="flex flex-col mb-4">
          <div>
            <b>
              {`LinkedIn:  `}
            </b>
            <UiLink
              href={dict.contactPage.personalLinkedIn}
            >
              {dict.contactPage.personalLinkedIn}
            </UiLink>
          </div>
        </li>
      </ol>
    </div>
  );
}
