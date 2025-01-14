'use client'
import React from "react";
import {NewsHigherCard, NewsNormalCard, NewsWiderCard, NewsWidestCard} from "@/app/components/NewsCard";
import {DetailNewsType} from "@/lib/types";
import useSWR from "swr";
import {fetcher} from "@/lib/api";
import Link from "next/link";

type SectionNewsType = {
    title: string
    color_title: string
    subtitle: string
}

const SectionNews = ({title, color_title, subtitle}: SectionNewsType) => {
    const {data} =
        useSWR<DetailNewsType[]>
        ('news', () => fetcher<DetailNewsType[]>('news?_embed&orderby=date&order=desc&_fields=id,acf,slug,title,tags&per_page=5'))

    return (<section id={"news-section"} className={"container pt-12 lg:pt-24 pb-12 md:pb-24 text-center  "}>
        <h1 className={"text-2xl lg:text-4xl font-semibold"}>{title} <span
            className={"text-primary"}>{color_title}</span></h1>
        <p className={"text-slate-500 text-md lg:text-lg mt-2"}>
            {subtitle}
        </p>
        <div className={"w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-8  mt-12 lg:mt-24"}>
            {
                data &&
                data?.map((item, index) => {
                    switch (index) {
                        case 0 :
                            return <NewsWidestCard {...item} key={index}/>
                        case 1 :
                            return <NewsHigherCard {...item} key={index}/>
                        case 2 :
                            return <NewsNormalCard {...item} key={index}/>
                        case 3 :
                            return <NewsNormalCard {...item} key={index}/>
                        case 4 :
                            return <NewsWiderCard {...item} key={index}/>
                        default:
                            return <div key={index}></div>
                    }
                })
            }
        </div>
        <Link href={"/news"}>
            <button className={"border-2 px-4 py-2 border-black hover:bg-black hover:text-white mt-12 md:mt-24"}>
                View More Articles <span className={"ml-2"}>&#8594;</span>
            </button>
        </Link>
    </section>)
}


export default SectionNews;
