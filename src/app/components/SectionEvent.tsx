import React from "react";
import EventCard from "@/app/components/EventCard";
import Link from "next/link";
import useSWR from "swr";
import {EventType} from "@/lib/types";
import {fetcher} from "@/lib/api";
import {Skeleton} from "@/components/Skeleton";

type SectionEventType = {
    title: string,
    color_title: string,
    subtitle: string
}
const SectionEvent = ({title, subtitle, color_title}: SectionEventType) => {
    const {data} =
        useSWR<EventType[]>
        ('events', () => fetcher<EventType[]>('event?_embed&orderby=date&order=desc&_fields=id,acf,slug,title,categories&per_page=5'))

    return <section className={" text-center bg-slate-100 "}>
        <div className={"container py-12 md:py-24"}>
            <h1 className={"text-2xl md:text-4xl font-semibold"}>{title} <span
                className={"text-primary"}>{color_title}</span>
            </h1>
            <p className={"text-slate-500 text-md nd:text-lg mt-2"}>{subtitle}</p>
            <div className={"w-full grid grid-cols-1 lg:grid-cols-3 gap-8  mt-12 md:mt-24 "}>
                {
                    data ?
                    data?.map((props, index) => <EventCard key={index} {...props}/>) : <Skeleton className={"min-h-screen"} />
                }
            </div>
            {
                (data && data.length > 5) &&
                <Link href={"/events"}>
                    <button
                        className={"border-2 px-4 py-2 border-black hover:bg-black hover:text-white mt-12 md:mt-24"}>
                        Show More <span className={"ml-2"}>&#8594;</span>
                    </button>
                </Link>}

        </div>
    </section>
}


export default SectionEvent;
