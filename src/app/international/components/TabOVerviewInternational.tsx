'use client'
import React from "react";
import {ProdiOverview} from "@/lib/types";
import BlurImage from "@/components/BlurImage";


const TabOverviewJurusan = ({jurusan, image, description, image_detail}: ProdiOverview) => {
    return <section data-aos={"zoom-in"}
                    className={"py-12 text-left flex flex-col lg:flex-row gap-12 items-center justify-between w-full"}>
        <div className={""}>
            <h1 className={"text-5xl font-semibold text-primary"}>{jurusan}</h1>
            <article>
                <div className={"text-left mt-10 "}>
                    <div className={"!items-stretch relative flex"}
                         dangerouslySetInnerHTML={{__html: description as string}}/>
                </div>
            </article>
        </div>

        <div className={" flex justify-end"}>
            <div className={'relative w-[430px] h-[430px]'}>
                <BlurImage
                    image={image_detail}
                    alt={"Overview Jurusan"}
                />
                <div className={"absolute bg-black w-[445px] h-full -bottom-3 -z-10"}/>
            </div>
        </div>

    </section>

}

export default TabOverviewJurusan
