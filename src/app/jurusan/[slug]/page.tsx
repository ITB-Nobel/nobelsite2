'use client'

import React from "react";
import GeneralLayout from "@/components/layout/GeneralLayout";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/Tabs";
import TabCurriculumJurusan from "@/app/jurusan/[slug]/components/TabCurriculumJurusan";
import TabOverviewJurusan from "@/app/jurusan/[slug]/components/TabOverviewJurusan";
import TabDosenJurusan from "@/app/jurusan/[slug]/components/TabDosenJurusan";
import TabAktivitasJurusan from "@/app/jurusan/[slug]/components/TabAktivitasJurusan";

import {usePathname, useRouter} from 'next/navigation'
import {fetcher} from "@/lib/api";
import useSWR from "swr";
import {ProdiACF} from "@/lib/types";

const JurusanDetailPage = () => {
    const pathname = usePathname()
    const idProdi = pathname.split('/')[2]
    const {data} = useSWR<{
        acf: ProdiACF,
        title: { rendered: string }
    }>(`prodi-${idProdi}`, () => fetcher(`prodi/${idProdi}`))
    return <GeneralLayout
        withFeaturedImage={true}
        featuredTitle={"Prodi Detail"}
    >
        <main className={"min-h-screen"}>
            <Tabs defaultValue="1" className={"container py-12 text-center "}>
                <TabsList className="grid w-full grid-cols-4 border-b-2 pb-10">
                    <TabsTrigger value="1">
                        OVERVIEW
                    </TabsTrigger>
                    <TabsTrigger value="2">
                        KURIKULUM
                    </TabsTrigger>
                    <TabsTrigger value="3">
                        DOSEN
                    </TabsTrigger>
                    <TabsTrigger value="4">
                        AKTIVITAS</TabsTrigger>
                </TabsList>
                <TabsContent value="1">
                    {data?.acf?.overview && <TabOverviewJurusan {...data?.acf.overview}/>}
                </TabsContent>
                <TabsContent value="2">
                    {(data?.acf?.curriculum) && <TabCurriculumJurusan {...data.acf.curriculum} />}
                </TabsContent>
                <TabsContent value="3">
                    <TabDosenJurusan idProdi={idProdi}/>
                </TabsContent>
                <TabsContent value="4">
                    {data && <TabAktivitasJurusan idProdi={idProdi} {...data?.acf.activity_news_category} />}
                </TabsContent>
            </Tabs>

        </main>
    </GeneralLayout>
}

export default JurusanDetailPage;
