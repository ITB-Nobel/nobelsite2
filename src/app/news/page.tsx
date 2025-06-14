'use client'
import React, {useEffect, useState} from "react";

import GeneralLayout from "@/components/layout/GeneralLayout";
import NewsList from "@/app/news/components/NewsList";
import useSWR from "swr";
import {DetailNewsType} from "@/lib/types";
import {fetcher} from "@/lib/api";


const NewsPage = () => {
    const [rangeDate, setRangeDate] = useState({
        start_date: new Date(),
        end_date: new Date()
    })
    const {data, mutate} =
        useSWR<DetailNewsType[]>
        ('news', () => fetcher<DetailNewsType[]>(`news?_embed&orderby=date&order=desc&per_page=100&start_date=${rangeDate.start_date}&end_date=${rangeDate.end_date}`))


    useEffect(() => {
        (async () => await mutate())()
    }, [rangeDate, mutate])

    console.log("DATA NEWS", data)


    return (<GeneralLayout
        featuredTitle={"News Page"}
        featuredImage={"/images/header_news.jpg"}
    >
        <main>
            {/*<SearchNews rangeDate={rangeDate} setRangeDate={setRangeDate}/>*/}
            <NewsList news={data}/>
        </main>
    </GeneralLayout>)
}

export default NewsPage;
