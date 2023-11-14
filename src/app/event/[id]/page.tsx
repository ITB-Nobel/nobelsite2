'use client'

import GeneralLayout from "@/components/layout/GeneralLayout";
import React from "react";
import {ClockIcon} from "lucide-react";
import Image from "next/image";
import useSWR from "swr";
import {fetcher} from "@/lib/api";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {Skeleton} from "@/components/Skeleton";
import {EventType} from "@/lib/types";
import Tags from "@/components/Tags";
import {convertDate} from "@/lib/utils";
import EventCard from "@/app/components/EventCard";

const DetailEventPage = () => {
    const pathname = usePathname()
    const idEvent = pathname.split('/')[2]
    const {data} =
        useSWR<EventType>(`event-${idEvent}`, () => fetcher(`event/${idEvent}`))
    return <GeneralLayout
        withFeaturedImage={true}
        featuredTitle={"Detail Event"}
    >
        <main className={"pt-12"}>
            {data ? <>
                    <section data-aos={"fade-in"} className={"container"}>
                        <DetailEventContent {...data}/>
                    </section>
                    <EventCardList exceptID={idEvent}/>
                </>
                : <Skeleton className={"w-full rounded-xl h-screen"}/>}
        </main>
    </GeneralLayout>
}

const DetailEventContent = ({acf, tags}: EventType) =>
    <div className={""}>
        <h1 className={"text-5xl font-semibold "}>{acf.title}</h1>
        <div className={"flex mt-6"}>
            <span className={" flex gap-2 items-center"}>
                <ClockIcon className={"w-4 h-4"}/>
                {convertDate(acf.end_registration)}
            </span>
            <span>

            </span>
        </div>

        <div className={"mb-12 mt-6"}>
            <div className={"relative w-full aspect-w-2 aspect-h-1"}>
                <Image
                    src={acf.image.url}
                    alt={acf.image.alt}
                    layout={"fill"}
                    objectFit={"cover"}

                />
            </div>
            <p className={"text-sm my-2 text-center"}>{acf.image.description}</p>
        </div>

        <div className={"space-y-4 text-justify w-full"} dangerouslySetInnerHTML={{__html: acf.description}}/>

        <hr className={"my-4"}/>
        <div className={"capitalize"}>Author : {acf?.author?.display_name ?? "Unknown"}</div>
        <div className={"flex gap-2 items-center"}>
            Tags :
            <div className={"flex gap-4 items-center"}>
                {
                    <Tags key={`tags-detail-event`} ids={tags?.map((item) => item.name)}/>
                }
            </div>
        </div>

        <hr className={"mt-4"}/>
    </div>

const EventCardList = ({exceptID}: { exceptID: string }) => {
    const {data} =
        useSWR<EventType[]>
        (`latest-event`, () => fetcher(`event?_embed&orderby=date&order=desc&_fields=id,acf,slug,title,categories&per_page=5&exclude=${exceptID}`))
    if (data && data.length > 0)
        return <section className={"py-24 text-center"}>
            <h1 className={"text-4xl font-semibold"}>Event <span className={"text-primary"}>Lainnya</span></h1>
            <div className={"overflow-x-auto snap-x whitespace-nowrap space-x-8 mt-6 px-36 py-6"}>
                {data && data.map((item, index) =>
                    <div className={"inline-block"} key={index}>
                        <EventCard {...item}/>
                    </div>)}
            </div>
            <Link href={"/event"}>
                <button className={"border-2 px-4 py-2 border-black hover:bg-black hover:text-white mt-12 md:mt-24"}>
                    Lihat Semua Event <span className={"ml-2"}>&#8594;</span>
                </button>
            </Link>
        </section>
    else return <Skeleton className={"min-h-[200px]"}/>
}


export default DetailEventPage;
