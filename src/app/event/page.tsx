'use client'
import React, {useEffect, useState} from "react";
import GeneralLayout from "@/components/layout/GeneralLayout";
import SearchEvent from "@/app/event/components/SearchEvent";
import useSWR from "swr";
import {EventType} from "@/lib/types";
import {fetcher} from "@/lib/api";
import EventList from "@/app/event/components/EventList";


const EventPage = () => {
    const [rangeDate, setRangeDate] = useState({
        start_date: new Date(),
        end_date: new Date()
    })

    const {data, mutate} =
        useSWR<EventType[]>
        ('event', () => fetcher<EventType[]>(`event?_embed&orderby=date&order=desc&per_page=10&start_date=${rangeDate.start_date}&end_date=${rangeDate.end_date}`))

    useEffect(() => {
        (async () => await mutate())()
    }, [rangeDate, mutate])

    return (<GeneralLayout

        featuredTitle={"Event Page"}
        featuredImage={"/images/header_news.jpg"}
    >
        <main>
            <SearchEvent rangeDate={rangeDate} setRangeDate={setRangeDate}/>
            <EventList key={"event"} events={data}/>
        </main>
    </GeneralLayout>)
}

export default EventPage;
