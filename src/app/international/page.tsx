'use client'

import React from "react";
import GeneralLayout from "@/components/layout/GeneralLayout";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/Tabs";
import {usePathname} from 'next/navigation'
import {fetcher} from "@/lib/api";
import useSWR from "swr";
import {ProdiACF} from "@/lib/types";
import TabOVerviewInternational from "@/app/international/components/TabOVerviewInternational";
import TabAktivitasInternational from "@/app/international/components/TabAktivitasInterational";


const InternationalPage = () => {
    const pathname = usePathname()
    const idProdi = pathname.split('/')[2]
    const {data} = useSWR<{
        acf: ProdiACF,
        title: { rendered: string }
    }>(`prodi-${idProdi}`, () => fetcher(`prodi/${idProdi}`))

    return <GeneralLayout
        withFeaturedImage={true}
        featuredTitle={data?.title?.rendered}
    >
        <main className={"min-h-screen"}>
            <Tabs defaultValue="1" className={"container py-12 text-center "}>
                <TabsList className="grid w-full grid-cols-4 border-b-2 pb-10">
                    <TabsTrigger value="1">
                        OVERVIEW
                    </TabsTrigger>
                    <TabsTrigger value="2">
                        OUR TEAM
                    </TabsTrigger>
                    <TabsTrigger value="3">
                        OUR PROGRAM
                    </TabsTrigger>
                    <TabsTrigger value="4">
                        ACTIVITY
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="1">
                    {data?.acf?.overview && <TabOVerviewInternational {...data?.acf.overview}/>}
                </TabsContent>
                <TabsContent value="2">
                    {/*{(data?.acf?.curriculum) && <TabOurTeam {...data.acf.curriculum} idProdi={idProdi}/>}*/}
                </TabsContent>
                <TabsContent value="3">
                    {/*<TabOurProgram idProdi={idProdi}/>*/}
                </TabsContent>
                <TabsContent value="4">
                    {data && <TabAktivitasInternational idProdi={idProdi} {...data?.acf.activity_news_category} />}
                </TabsContent>
            </Tabs>

        </main>
    </GeneralLayout>
}

export default InternationalPage;
