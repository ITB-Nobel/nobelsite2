import Image from 'next/image'
import HomeLayout from "@/components/layout/HomeLayout";
import SectionJoinUs from "@/app/components/SectionJoinUs";
import ExploreDegreesSection from "@/app/components/ExploreDegreesSection";
import SectionPodcast from "@/app/components/SectionPodcast";
import SectionNews from "@/app/components/SectionNews";
import SectionEvent from "@/app/components/SectionEvent";
export default function Home() {
  return (
    <HomeLayout>
      {/*<SectionJoinUs/>*/}

      <ExploreDegreesSection data={[]}/>

      <SectionPodcast/>

      <SectionNews nodes={[]}/>

      {/*<SectionEvent data={[]}/>*/}
    </HomeLayout>
  )
}
