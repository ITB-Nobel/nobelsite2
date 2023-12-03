'use client'

import GeneralLayout from "@/components/layout/GeneralLayout";
import React from "react";
import {ClockIcon, Contact} from "lucide-react";
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
import {Link1Icon} from "@radix-ui/react-icons";


const DetailEventPage = () => {
    const pathname = usePathname()
    const idEvent = pathname.split('/')[2]
    const {data} =
        useSWR<EventType>(`event-${idEvent}`, () => fetcher<EventType>(`event/${idEvent}`))
    return <GeneralLayout

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
        <h1 className={"text-3xl lg:text-5xl font-semibold "}>{acf.title}</h1>
        <div className={"flex flex-col lg:flex-row mt-6 gap-4"}>
            <span className={" flex gap-2 items-center"}>
                <ClockIcon className={"w-4 h-4"}/>
                {
                    (convertDate(acf.event_start) === convertDate(acf.event_end)) ? <>
                        {convertDate(acf.event_start)}
                    </> : <>
                        {convertDate(acf.event_start)} - {convertDate(acf.event_end)}
                    </>
                }
            </span>
            <span className={" flex gap-2 items-center"}>
                <Contact className={"w-4 h-4"}/>
                {acf.contact_phone} ({acf.contact_name})
            </span>
            <a href={acf.registration_link.url} target={"_blank"} className={"w-fit"}>
                     <span className={"flex gap-2 items-center bg-primary px-2 rounded-md py-1 text-white"}>
                    <Link1Icon className={"w-4 h-4"}/>
                    <button>
                        {acf.registration_link.title}
                    </button>
                </span>
            </a>

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

        <div className={"flex flex-col lg:flex-row justify-between lg:items-center"}>
            <div>
                <div className={"capitalize"}>Registration Date
                    : {convertDate(acf?.start_registration)} - {convertDate(acf?.end_registration)}</div>
                <div className={"capitalize"}>Location : {acf?.place ?? "Unknown"}</div>
                <div className={"flex gap-2 items-center"}>
                    Tags :
                    <div className={"flex gap-4 items-center"}>
                        {
                            <Tags key={`tags-detail-event`} ids={tags}/>
                        }
                    </div>
                </div>
            </div>
            <a href={acf.registration_link.url} target={"_blank"} className={"my-8 w-fit"}>
                 <span className={"flex gap-2 items-center bg-primary px-2 rounded-md py-1 text-white"}>
                <Link1Icon className={"w-4 h-4"}/>
                <button>
                    {acf.registration_link.title}
                </button>
            </span>
            </a>

        </div>


        <hr className={"mt-4"}/>
    </div>

const EventCardList = ({exceptID}: { exceptID: string }) => {
    const {data} =
        useSWR<EventType[]>
        (`latest-event`, () => fetcher<EventType[]>(`event?_embed&orderby=date&order=desc&_fields=id,acf,slug,title,categories&per_page=5&exclude=${exceptID}`))
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
