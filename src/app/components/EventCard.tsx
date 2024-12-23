'use client'
import {ChevronRight, MapPin, Timer} from "lucide-react";
import React from "react";
import {EventType} from "@/lib/types";
import Image from "next/image";
import Tags from "@/components/Tags";
import {convertDate, convertDateTime} from "@/lib/utils";
import Link from "next/link";


const EventCard = ({acf, tags, id}: EventType) => {

    return <Link href={`/event/${id}`}>
        <div data-aos="fade-left" className={"space-y-4 relative bg-white pb-4 rounded-xl card-shadow"}>
            {
                acf?.image &&
                <div className={"relative h-[270px] w-full "}>
                    <Image
                        src={acf?.image?.url}
                        layout={"fill"}
                        objectFit={"cover"}
                        alt={acf?.image.alt}
                        className={"rounded-t-xl brightness-75"}
                    />
                </div>
            }
            <div className={"flex flex-col px-4 gap-12 justify-between min-h-[200px]"}>
                <div className={"text-left space-y-4"}>
                    <h3 className={"text-md md:text-xl font-semibold mt-2"}>{acf?.title}</h3>
                    <ul className={"space-y-2"}>
                        <li className={"flex gap-2 items-center"}>
                            <MapPin className={"w-5 h-5 capitalize"} strokeWidth={1}/>
                            {acf?.place}
                        </li>
                        <li className={"flex gap-2 items-center"}>
                            <Timer className={"w-5 h-5"} strokeWidth={1}/>
                            {convertDateTime(acf?.event_start)}
                        </li>
                    </ul>
                </div>

                <div
                    className={"text-center w-[200px]  mx-auto hover:bg-primary hover:text-white rounded-md py-2 cursor-pointer gap-1 font-semibold flex items-center justify-center"}>
                    Details
                    <ChevronRight/>
                </div>

            </div>
            <div className={"absolute top-4 left-4 flex gap-2 text-white text-sm"} style={{marginTop: "0px"}}>
                <Tags
                    key={"event"}
                    ids={tags}
                    className={"bg-primary rounded-md py-1 px-2"}
                />
            </div>
            <div
                className={"absolute bg-gradient-black   w-full h-[50px] top-[205px] shadow-[inset_-12px_-8px_40px_#46464620] text-left px-4 flex items-center text-white text-2xl font-semibold"}>
                <h2>{convertDate(acf.event_start)}</h2>

            </div>
        </div>
    </Link>
}

export default EventCard
