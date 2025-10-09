// This is the About page. Path = '/'

import { getDictionary } from "@/app/lib/dictionaries";
import { LangParams } from "@/app/lib/definitions";

interface PageParams {
  params: LangParams;
}

export default async function Home({ params }: PageParams) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div>
      Home Page ({dict.siteHeader.nav.links.about}?)
    </div>
  );
}
