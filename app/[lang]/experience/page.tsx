import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

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
      {dict.experiencePage.experiences.map((job, index) => {
        return (
          <Card key={`exp-${index}`} className='mb-8'>
            <CardHeader>
              <CardTitle>
                {job.jobTitle} @ {job.companyName}
              </CardTitle>
              <CardDescription className='flex flex-col md:flex-row w-full'>
                <div className='flex w-full'>
                  {job.location}
                </div>
                <div className='flex w-full'>
                  {job.timeWorked}
                </div>
                <div className='flex w-full'>
                  {`${dict.experiencePage.type}: ${job.positionType}`}
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              {job.jobDescription}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
