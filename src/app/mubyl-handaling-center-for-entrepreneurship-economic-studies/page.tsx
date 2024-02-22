import React from "react";
import GeneralLayout from "@/components/layout/GeneralLayout";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/Tabs";
import {fetcher} from "@/lib/api";
import {CustomPageType} from "@/lib/types";
import TabAktivitas from "@/components/tabs/TabAktivitas";
import TabGallery from "@/components/tabs/TabGallery";
import TabOVerview from "@/components/tabs/TabOverview";
import TabOurProgram from "@/components/tabs/tab-our-program/TabOurProgram";


export default async  function MubylHandalingCenterForEntrepreneurshipEconomicStudiesPage(){
    const data = await fetcher<CustomPageType[]>(`pages?slug=mubyl-handaling-center-for-entrepreneurship-economic-studies`)
    if (data && data.length > 0) {
        const tempData = data[0]
        return <GeneralLayout
            featuredTitle={tempData?.title?.rendered}
            featuredImage={tempData?.acf?.header_image?.url}
        >
            <main className={"min-h-screen"}>
                <Tabs defaultValue="1" className={"container py-12 text-center "}>
                    <TabsList className="hidden lg:grid w-full grid-cols-4 border-b-2 pb-10">
                        <TabsTrigger value="1">
                            OVERVIEW
                        </TabsTrigger>
                        <TabsTrigger value="2">
                            GALLERY
                        </TabsTrigger>
                        <TabsTrigger value="3">
                            OUR PROGRAM
                        </TabsTrigger>
                        <TabsTrigger value="4">
                            ACTIVITY
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="1">
                        {tempData?.acf?.overview && <TabOVerview {...tempData?.acf.overview}/>}
                    </TabsContent>
                    <TabsContent value="2">
                        {(tempData?.acf?.gallery) &&
                            <TabGallery {...tempData.acf.gallery}/>}
                    </TabsContent>
                    <TabsContent value="3">
                        <TabOurProgram {...tempData.acf.our_program} />
                    </TabsContent>
                    <TabsContent value="4">
                        {data && <TabAktivitas idProdi={0} {...tempData?.acf.activity_news_category} />}
                    </TabsContent>
                </Tabs>

            </main>
        </GeneralLayout>
    }
}

