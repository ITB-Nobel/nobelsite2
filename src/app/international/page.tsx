// 'use client'

import React from "react";
import GeneralLayout from "@/components/layout/GeneralLayout";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/Tabs";
import {fetcher} from "@/lib/api";
import TabOVerviewInternational from "@/app/international/components/TabOVerviewInternational";
import TabAktivitasInternational from "@/app/international/components/TabAktivitasInterational";
import TabExploreMakassar from "@/app/international/components/TabExploreMakassar";

import {InternationalType} from "@/lib/types";
import TabOurProgram from "@/app/international/components/tab-our-program/TabOurProgram";


const InternationalPage = async () => {
    const data = await fetcher<InternationalType[]>(`pages?slug=international-program`)
    if (data && data.length > 0) {
        const tempData = data[0]
        return <GeneralLayout
            featuredTitle={tempData?.title?.rendered}
            // featuredImage={tempData?.acf.header_image.url}
        >
            <main className={"min-h-screen"}>
                <Tabs defaultValue="1" className={"container py-12 text-center "}>
                    <TabsList className="hidden lg:grid w-full grid-cols-4 border-b-2 pb-10">
                        <TabsTrigger value="1">
                            OVERVIEW
                        </TabsTrigger>
                        <TabsTrigger value="2">
                            EXPLORE MAKASSAR
                        </TabsTrigger>
                        <TabsTrigger value="3">
                            OUR PROGRAM
                        </TabsTrigger>
                        <TabsTrigger value="4">
                            ACTIVITY
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="1">
                        {tempData?.acf?.overview && <TabOVerviewInternational {...tempData?.acf.overview}/>}
                    </TabsContent>
                    <TabsContent value="2">
                        {(tempData?.acf?.explore_makassar) &&
                            <TabExploreMakassar explore_makassar={tempData.acf.explore_makassar}/>}
                    </TabsContent>
                    <TabsContent value="3">
                        <TabOurProgram {...tempData.acf.our_program} />
                    </TabsContent>
                    <TabsContent value="4">
                        {data && <TabAktivitasInternational idProdi={0} {...tempData?.acf.activity_news_category} />}
                    </TabsContent>
                </Tabs>

            </main>
        </GeneralLayout>
    }
}

export default InternationalPage;
