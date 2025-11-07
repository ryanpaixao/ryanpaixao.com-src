import UiLink from "@/app/components/ui/ext-link";
import PageHeaderTitle from '@/app/components/ui/page-header-title';
import { LangParams } from "@/app/lib/definitions";
import { getDictionary } from "@/app/lib/dictionaries";
import PageContentWrapper from "@/app/components/ui/page-content-wrapper";

interface ContactPageProps {
  params: LangParams;
};

export default async function ContactPage({ params }: ContactPageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <PageContentWrapper>
      <PageHeaderTitle>
        {dict.contactPage.pageHeaderTitle}
      </PageHeaderTitle>
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
    </PageContentWrapper>
  );
}
