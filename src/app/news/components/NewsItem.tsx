'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import BlurImage from "@/components/BlurImage";
import {DetailNewsType} from "@/lib/types";
import {convertDate} from "@/lib/utils";
import Tags from "@/components/Tags";

export const NewsItem = ({acf, tags, id,slug}: DetailNewsType) => {

    return <Link href={`/news/${slug}`}>
        <div className={"min-h-[200px] flex flex-col md:flex-row shadow-md rounded-md"}>
            <div>
                <BlurImage alt={acf.photo.alt} image={acf.photo.url} className={"h-full w-full md:w-[200px]"}/>
            </div>

            <div className={"p-4"}>
                <h3 className={"text-sm md:text-lg font-semibold"}> {acf.title}</h3>
                {
                    tags.length > 0 &&
                    <div className={"flex flex-row gap-2 mt-2 text-xs flex-wrap"}>
                        <Tags key={"tags"} className={"bg-primary text-white rounded-full px-2 py-1"}
                              ids={tags}/>
                    </div>}
                <p className={"mt-2 text-xs"}>{convertDate(acf.date)}</p>
            </div>
        </div>
    </Link>
}
