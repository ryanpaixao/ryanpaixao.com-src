import Image from 'next/image';

import PageHeaderTitle from '@/app/components/ui/page-header-title';
import { LangParams } from "@/app/lib/definitions";
import { getDictionary } from "@/app/lib/dictionaries";
import PageContentWrapper from "@/app/components/ui/page-content-wrapper";


interface AboutPageProps {
  params: LangParams;
};

export default async function Page({ params }: AboutPageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <PageContentWrapper>
      <div className='flex flex-col justify-center'>
        <div className='text-center'>
          <PageHeaderTitle>
            {dict.aboutPage.pageHeaderTitle}
          </PageHeaderTitle>
        </div>
        <div>
            <div className='flex justify-center justify-items-center mb-6'>
              <Image
                src="/images/ryan_1.webp"
                alt="Image of Ryan"
                width={338}
                height={313}
                priority
              />
            </div>
            <div className='mt-6'>
              {dict.aboutPage.aboutParagraphs.map((paragraph, index) => {
                return (
                  <p
                    key={`about-para-${index}`}
                    className='mb-3'
                  >
                    {paragraph}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
    </PageContentWrapper>
  );
}
