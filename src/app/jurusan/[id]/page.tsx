'use client'

import React from "react";
import GeneralLayout from "@/components/layout/GeneralLayout";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/Tabs";
import TabCurriculumJurusan from "@/app/jurusan/[id]/components/TabCurriculumJurusan";
import TabOverviewJurusan from "@/app/jurusan/[id]/components/TabOverviewJurusan";
import TabDosenJurusan from "@/app/jurusan/[id]/components/TabDosenJurusan";
import TabAktivitasJurusan from "@/app/jurusan/[id]/components/TabAktivitasJurusan";
import {usePathname} from 'next/navigation'
import {fetcher} from "@/lib/api";
import useSWR from "swr";
import {ProdiACF} from "@/lib/types";


const JurusanDetailPage = () => {
    const pathname = usePathname()
    const idProdi = pathname.split('/')[2]
    const {data} = useSWR<{
        acf: ProdiACF,
        title: { rendered: string }
    }>(`prodi-${idProdi}`, () => fetcher<{
        acf: ProdiACF,
        title: { rendered: string }
    }>(`prodi/${idProdi}?per_page=1000`))

    return <GeneralLayout
        featuredTitle={data?.title?.rendered}
        featuredImage={data?.acf?.header_image?.url}
    >
        <main className={"min-h-screen"}>
            <Tabs defaultValue="1" className={"container py-12 text-center "}>
                <TabsList className="lg:grid lg:grid-cols-6 border-b-2 py-12 ">
                    <TabsTrigger   value="1">
                        OVERVIEW
                    </TabsTrigger>
                    <TabsTrigger  value="2">
                        KURIKULUM
                    </TabsTrigger>
                    <TabsTrigger value="3">
                        DOSEN
                    </TabsTrigger>
                    <TabsTrigger   value="4">
                        AKTIVITAS
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="1">
                    {data?.acf?.overview && <TabOverviewJurusan {...data?.acf.overview}
                                                                videoProfil={data?.acf.video_profil}
                                                                profil_lulusan={data?.acf.profil_lulusan}

                    />}
                </TabsContent>
                <TabsContent value="2">
                    {(data?.acf?.curriculum) && <TabCurriculumJurusan {...data.acf.curriculum} idProdi={idProdi}/>}
                </TabsContent>
                <TabsContent value="3">
                    <TabDosenJurusan idProdi={idProdi}/>
                </TabsContent>
                <TabsContent value="4">
                    {data && <TabAktivitasJurusan idProdi={idProdi} {...data?.acf?.activity_news_category} />}
                </TabsContent>
            </Tabs>

        </main>
    </GeneralLayout>
}

export default JurusanDetailPage;
