'use client'
import React from "react";
import {ProdiOverview} from "@/lib/types";
import Image from "next/image";


const TabOverviewJurusan = ({jurusan, image, description, image_detail}: ProdiOverview) => {
    return <section data-aos={"zoom-in"} className={"py-12 text-left flex flex-col lg:flex-row gap-12 items-center justify-between w-full"}>
        <div className={"basis-1/2"}>
            <h1 className={"text-5xl font-semibold text-primary"}>{jurusan}</h1>
            <article>
                <div className={"text-left mt-10 "}>
                    <div className={"!justify-stretch"} dangerouslySetInnerHTML={{__html: description as string}}/>
                </div>
            </article>
        </div>

        <div className={"basis-1/2 flex justify-end"}>
            <div className={'relative w-[480px] h-[480px]'}>
                <Image
                    src={image_detail}
                    alt={"Overview Jurusan"}
                    layout={"fill"}
                    objectFit={"cover"}
                    className={""}
                />
                <div className={"absolute bg-black w-[495px] h-full -bottom-3 -z-10"}/>
            </div>
        </div>

    </section>

}

export default TabOverviewJurusan
