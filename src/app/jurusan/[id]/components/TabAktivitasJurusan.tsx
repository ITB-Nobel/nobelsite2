'use client'
import React from "react"
import {ActivityProdiCategory, DetailNewsType, NewsACF, ProdiType} from "@/lib/types";
import useSWR from "swr";
import {fetcher, fetcherAcf} from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import BlurImage from "@/components/BlurImage";


const TabAktivitasJurusan = ({term_id, idProdi}: ActivityProdiCategory & { idProdi: string }) => {
    // const {data} = useSWR<DetailNewsType[]>(`news-${idProdi}/${term_id}`, () => fetcherAcf<DetailNewsType[]>(`news?_fields=acf,slug,id&categories=${term_id}`))
    const {data} = useSWR<DetailNewsType[]>('mews', () => fetcher<ProdiType[]>(`news?orderby=slug&order=desc&_fields=acf,slug,id&categories=${term_id}`))
    //     console.log(data,'dataku')
    return <>
        <section
            data-aos={"zoom-in"}
            className={"py-4 lg:py-12 text-left w-full flex flex-col lg:flex-row gap-12 items-center"}>
            {
                (data && data.length > 0) && <>
                    <div className={"basis-3/4 space-y-4"}>
                        <h1 className={"text-primary"}>{data[0]?.acf.title}</h1>
                        <article>
                            <div className={"!font-light"}
                                 dangerouslySetInnerHTML={{__html: data[0]?.acf.description.split('<p>')[1] as string}}/>
                            <Link href={`/news/${data[0].slug}`}><p
                                className={"text-sm font-semibold text-slate-500 mt-2"}>Lihat
                                selengkapnya</p></Link>
                        </article>
                    </div>

                    <div className={"relative w-full h-auto"}>
                    <Image
                        src={data[0]?.acf.photo.url}
                        alt={"Image"}
                        layout={"responsive"}
                        objectFit={"cover"}
                        quality={100}
                        width={768}
                        height={400}
                    />
                </div>

                
                </>
            }

        </section>
        <section className={"grid grid-cols-1 lg:grid-cols-3 gap-4"}>
            {
                data && data.map((news, index) => <AktivitasJurusanNews idNews={news.slug} index={index} {...news.acf}
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
        return <Link href={`/news?slug=${idNews}`}>
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


export default TabAktivitasJurusan
