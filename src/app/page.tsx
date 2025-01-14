import HomeLayout from "@/components/layout/HomeLayout";
import SectionJoinUs from "@/app/components/SectionJoinUs";
import SectionExploreDegrees from "@/app/components/SectionExploreDegrees";
import SectionPodcast from "@/app/components/SectionPodcast";
import SectionNews from "@/app/components/SectionNews";
import SectionEvent from "@/app/components/SectionEvent";
import SectionNewsSlider from "@/app/components/SectionNewsSlider";
import {fetcher} from "@/lib/api";
import {GeneralPageType} from "@/lib/types";

export default async function Home() {
    const data = await fetcher<GeneralPageType[]>('pages?slug=beranda')
    return (
        <HomeLayout data={data}>
            <SectionJoinUs
                title={'Start Here Go Anywhere'}
                quotes={'Communication, the human connection, is the key to personal and career success.'}
                author={'Paul J. Meyer'}
                contact_button_title={'Contact Us'}
                contact_button_link={'https://api.whatsapp.com/send/?phone=081142466235&text=Please feel free to contact us if you need any further information&type=phone_number&app_absent=0'}
                join_button_title={'Join Now'}
                join_button_link={"https://join.nobel.ac.id"}
            />

            <SectionExploreDegrees
                title={"Explore Our"}
                color_title={" Degrees"}
                subtitle={"Information on degrees, requirements, policies"}
            />

            <SectionPodcast
                iframeUrl={"https://www.youtube.com/embed/N_7H5r_iqM4"}
                title={"Listen to"}
                color_title={"our podcast"}
                title2={"and you know things"}
                subtitle={"Let our podcasts on education, business, and ideas inspire you to live better. Hearing conversations that provoke thought and challenge your perspective"}
                button_title={"Watch More"}
                button_link={"https://www.youtube.com/@nobelindonesiainstitute"}
            />

            {/* <SectionNews
                title={"Latest"}
                color_title={"News"}
                subtitle={"Find all the latest news from Nobel and across the higher education sector."}
            /> */}

            <SectionNewsSlider
                
            />



            <SectionEvent
                title={"Events"}
                color_title={""}
                subtitle={""}/>
        </HomeLayout>
    )
}
