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
    const {data} = useSWR<{
        acf: ProdiACF,
        title: { rendered: string }
    }>('prodi', () => fetcher(`prodi/${pathname.split('/')[2]}`))
    console.log(data, 'overview')
    return <GeneralLayout
        withFeaturedImage={true}
        featuredTitle={data?.title.rendered}
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
                    {data?.acf.overview && <TabOverviewJurusan {...data?.acf.overview}/>}
                </TabsContent>
                <TabsContent value="2">
                    {(data?.acf?.curriculum && data?.acf?.study_plan) &&
                        <TabCurriculumJurusan {...data.acf.curriculum} {...data.acf.study_plan}  />}
                </TabsContent>
                <TabsContent value="3">
                    <TabDosenJurusan/>
                </TabsContent>
                <TabsContent value="4">
                    <TabAktivitasJurusan/>
                </TabsContent>
            </Tabs>

        </main>
    </GeneralLayout>
}

export default JurusanDetailPage;
