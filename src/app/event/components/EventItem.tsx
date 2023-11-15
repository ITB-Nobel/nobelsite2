import React from "react";
import Link from "next/link";
import {EventType} from "@/lib/types";
import Image from "next/image";
import Tags from "@/components/Tags";
import {convertDate} from "@/lib/utils";

export const EventItem = ({acf, tags, id}: EventType) => {

    return <Link href={`/event/${id}`}>
        <div className={"min-h-[150px] flex flex-col md:flex-row shadow-md rounded-md"}>
            <div className={"relative w-[150px] md:w-[250px] "}>
                <Image
                    src={acf?.image?.url}
                    layout={"fill"}
                    objectFit={"cover"}
                    alt={acf?.image.alt}
                    className={"rounded-tl-md rounded-bl-md brightness-75"}
                />
            </div>
            <div className={"p-4"}>
                <h3 className={"text-sm md:text-lg font-semibold"}>{acf.title}</h3>
                <div className={"flex flex-row gap-2 mt-2 text-xs"}>
                    <Tags key={"event-tag"} className={"bg-primary py-1 px-2 rounded-full text-white"} ids={tags} />

                </div>
                <p className={"mt-2 text-xs"}>{convertDate(acf.start_registration)} - {convertDate(acf.end_registration)}</p>
            </div>
        </div>
    </Link>
}
