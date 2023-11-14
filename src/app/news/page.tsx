'use client'
import React from "react";

import GeneralLayout from "@/components/layout/GeneralLayout";
import SearchNews from "@/app/news/components/SearchNews";
import NewsList from "@/app/news/components/NewsList";
import useSWR from "swr";
import {DetailNewsType} from "@/lib/types";
import {fetcher} from "@/lib/api";


const NewsPage = () => {
    const {data} =
        useSWR<DetailNewsType[]>
        ('news', () => fetcher('news?_embed&orderby=date&order=desc&per_page=10'))
    return (<GeneralLayout
        withFeaturedImage={true}
        featuredTitle={"News Page"}
    >
        <main>
            <SearchNews/>
            <NewsList news={data}/>
        </main>
    </GeneralLayout>)
}

export default NewsPage;
