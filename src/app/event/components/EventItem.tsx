import React from "react";
import Link from "next/link";
import {EventType} from "@/lib/types";
import Image from "next/image";

export const EventItem = ({acf, tags, id}: EventType) => {
    return <Link href={`/news/${id}`}>
        <div className={"min-h-[150px] flex flex-col md:flex-row shadow-md rounded-md"}>
            <div className={"relative h-full w-full md:w-[250px]"}>
                <Image
                    src={acf?.image?.url}
                    layout={"fill"}
                    objectFit={"cover"}
                    alt={acf?.image.alt}
                    className={"rounded-t-xl brightness-75"}
                />
            </div>
            <div className={"p-4"}>
                <h3 className={"text-sm md:text-lg font-semibold"}>{acf.title}</h3>
                <div className={"flex flex-row gap-2 mt-2 text-xs"}>
                    {
                        tags && tags.map((tag, index) => <button
                            key={index}
                            className={"bg-blue-800 p-2 rounded-md text-white"}>{tag.name}</button>)
                    }

                </div>
                <p className={"mt-2 text-xs"}>2 Days Ago</p>
            </div>
        </div>
    </Link>
}
