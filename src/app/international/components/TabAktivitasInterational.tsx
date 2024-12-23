'use client'
import React from "react"
import {ActivityNewsCategory, NewsACF} from "@/lib/types";
import useSWR from "swr";
import {fetcherAcf} from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import BlurImage from "@/components/BlurImage";


const TabAktivitasInternational = ({term_id, idProdi}:  ActivityNewsCategory & { idProdi: number }) => {
    const {data} = useSWR<{
        acf: NewsACF, id: string
    }[]>(`news-${idProdi}/${term_id}`, () => fetcherAcf<any>(`news?categories=${term_id}`))

    return <>
        <section
            data-aos={"zoom-in"}
            className={"py-12 text-left w-full flex flex-col lg:flex-row gap-12 items-center"}>
            {
                (data && data.length > 0) && <>
                    <div className={"basis-3/4 space-y-4"}>
                        <h1 className={"text-primary"}>{data[0]?.acf.title}</h1>
                        <article>
                            <div className={"!font-light"}
                                 dangerouslySetInnerHTML={{__html: data[0]?.acf.description.split('<p>')[1] as string}}/>
                            <Link href={`/news/${data[0].id}`}><p
                                className={"text-sm font-semibold text-slate-500 mt-2"}>Lihat
                                selengkapnya</p></Link>
                        </article>
                    </div>
                    <div className={"relative  w-[350px] lg:w-[450px]"}>
                        <BlurImage
                            image={data[0]?.acf.photo.url}
                            alt={"Image"}
                            // layout={"fill"}
                            // objectFit={"cover"}
                            className={"rounded-2xl"}
                        />
                    </div>
                </>
            }

        </section>
        <section className={"grid grid-cols-1 lg:grid-cols-3 gap-4"}>
            {
                data && data.map((news, index) => <AktivitasJurusanNews idNews={news.id} index={index} {...news.acf}
                                                                        key={index}/>)
            }
        </section>
    </>
}


const AktivitasJurusanNews = ({title, photo, description, index, idNews}: NewsACF & {
    index: number,
    idNews: string
}) => {
    if (index > 0)
        return <Link href={`/news/${idNews}`}>
            <div data-aos={"zoom-in"} className={"flex flex-row relative group"}>
                <div className={"relative w-full h-80"}>
                    <Image
                        src={photo.url}
                        alt={title}
                        className={"brightness-50 group-hover:brightness-90 rounded-2xl"}
                        layout={"fill"}
                        objectFit={"cover"}
                    />
                </div>

                <div className={"absolute bottom-0 !text-white text-left px-8 py-4 space-y-4"}>
                    <h4 className={"text-xl font-semibold"}>{title}</h4>
                    {/*<article>*/}
                    {/*    <div className={"text-sm"}*/}
                    {/*         dangerouslySetInnerHTML={{__html: description.split('<p>')[1] as string}}/>*/}
                    {/*</article>*/}
                </div>
            </div>
        </Link>
}


export default TabAktivitasInternational
