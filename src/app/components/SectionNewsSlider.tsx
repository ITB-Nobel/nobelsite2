'use client'
import React, {useEffect, useState} from "react";

import GeneralLayout from "@/components/layout/GeneralLayout";
import NewsList from "@/app/components/NewsList";
import useSWR from "swr";
import {DetailNewsType} from "@/lib/types";
import {fetcher} from "@/lib/api";


const SectionNewsSlider = () => {
    const [rangeDate, setRangeDate] = useState({
        start_date: new Date(),
        end_date: new Date()
    })
    const {data, mutate} =
        useSWR<DetailNewsType[]>
        ('news', () => fetcher<DetailNewsType[]>(`news?_embed&orderby=date&order=desc&per_page=10&start_date=${rangeDate.start_date}&end_date=${rangeDate.end_date}`))


    useEffect(() => {
        (async () => await mutate())()
    }, [rangeDate, mutate])


    return (
        <main>
            
            <NewsList news={data}/>
        </main>
    )
}

export default SectionNewsSlider;
