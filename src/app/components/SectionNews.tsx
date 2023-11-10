'use client'
import React from "react";
import {NewsHigherCard, NewsNormalCard, NewsWiderCard, NewsWidestCard} from "@/app/components/NewsCard";

;

const SectionNews = ({nodes}: { nodes: any[] }) => {
    return (<section id={"news-section"} className={"container pt-12 lg:pt-24 pb-12 md:pb-24 text-center "}>
        <h1 className={"text-2xl lg:text-4xl font-semibold"}>Latest <span className={"text-primary"}>News</span></h1>
        <p className={"text-slate-500 text-md lg:text-lg mt-2"}>
            Find all the latest news from Nobel and across the
            higher education sector.
        </p>
        <div className={"w-full grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-8  mt-12 lg:mt-24"}>
            {
                nodes?.map(({frontmatter, html}, index) => {
                    const item = {frontmatter, html}
                    switch (index) {
                        case 0 :
                            // @ts-ignore
                            return <NewsWidestCard {...item} key={index}/>
                        case 1 :
                            // @ts-ignore
                            return <NewsHigherCard {...item} key={index}/>
                        case 2 :
                            // @ts-ignore
                            return <NewsNormalCard {...item} key={index}/>
                        case 3 :
                            // @ts-ignore
                            return <NewsNormalCard {...item} key={index}/>
                        case 4 :
                            // @ts-ignore
                            return <NewsWiderCard {...item} key={index}/>
                        default:
                            return <div key={index}></div>
                    }
                })
            }
        </div>
        {/*<button className={"border-2 px-4 py-2 border-black hover:bg-black hover:text-white mt-12 md:mt-24"}>*/}
        {/*    Show More <span className={"ml-2"}>&#8594;</span>*/}
        {/*</button>*/}
    </section>)
}


export default SectionNews;