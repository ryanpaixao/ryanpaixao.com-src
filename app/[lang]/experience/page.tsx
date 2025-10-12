import PageHeaderTitle from '@/app/components/ui/page-header-title';
import { LangParams } from "@/app/lib/definitions";
import { getDictionary } from "@/app/lib/dictionaries";

interface ExperiencePageProps {
  params: LangParams;
};

export default async function Page({ params }: ExperiencePageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div>
      <PageHeaderTitle>
        {dict.experiencePage.pageHeaderTitle}
      </PageHeaderTitle>
    </div>
  );
}
