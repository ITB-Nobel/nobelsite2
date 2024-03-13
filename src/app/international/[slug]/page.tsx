'use client'
import React from "react";
import GeneralLayout from "@/components/layout/GeneralLayout";
import useSWR from "swr";
import {fetcher} from "@/lib/api";
import {GeneralPageType} from "@/lib/types";
import {Skeleton} from "@/components/Skeleton";
import BlurImage from "@/components/BlurImage";

const SejarahPage = () => {
    const {data} = useSWR<GeneralPageType[]>('page-sejarah', () => fetcher<GeneralPageType[]>('pages?slug=sejarah'))
    return <GeneralLayout

        featuredTitle={"Sejarah Nobel"}
    >
        {
            data ?
                <main>
                    <section data-aos={"fade-in"} className={"container py-24 text-center "}>
                        <h1 className={"text-4xl font-semibold"}>{data[0]?.acf.title} <span
                            className={"text-primary"}>{data[0]?.acf.color_title}</span></h1>
                        <p className={"text-slate-500 text-lg mt-2"}>{data[0]?.acf.subtitle}</p>

                        {
                            data[0]?.acf.image &&
                            <div className={"relative w-full h-16 lg:h-64"}>

                                <BlurImage
                                    image={data[0]?.acf.image.url}
                                    alt={data[0]?.acf.image.title}
                                    // layout={"fill"}
                                    // objectFit={"cover"}
                                    className={" !aspect-w-3 !aspect-h-1  my-16 object-center"}
                                />

                            </div>
                        }


                        {data[0]?.acf.description && <div className={"text-left  space-y-4 basis-3/4 mt-24"}
                                                          dangerouslySetInnerHTML={{__html: data[0]?.acf.description}}/>}


                    </section>
                </main> : <Skeleton className={"w-full rounded-xl h-screen"}/>
        }
    </GeneralLayout>

}

export default SejarahPage;