import PageHeaderTitle from '@/app/components/ui/page-header-title';
import { LangParams } from "@/app/lib/definitions";
import { getDictionary } from "@/app/lib/dictionaries";

interface AboutPageProps {
  params: LangParams;
};

export default async function Page({ params }: AboutPageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div>
      <PageHeaderTitle>
        {dict.aboutPage.pageHeaderTitle}
      </PageHeaderTitle>
    </div>
  );
}
