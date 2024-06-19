'use client'
import React from "react";
import {InternationalOverview, ProdiOverview} from "@/lib/types";
import BlurImage from "@/components/BlurImage";


const TabOverviewJurusan = ({image, description, judul}: InternationalOverview) => {
    return <section data-aos={"zoom-in"}
                    className={"lg:py-12 text-left flex flex-col lg:flex-row gap-12 items-center justify-between w-full"}>
        <div className={""}>
            <h1 className={"text-5xl font-semibold text-primary"}>{judul}</h1>
            <article>
                <div className={"text-left mt-10 "}>
                    <div className={"!items-stretch relative text-sm"}
                         dangerouslySetInnerHTML={{__html: description as string}}/>
                </div>
            </article>
            
        </div>

        <div className={" flex justify-end"}>
            <div className={'relative w-[350px] lg:w-[430px] h-[350px] lg:h-[430px]'}>
                <BlurImage
                    image={image}
                    alt={"Overview Jurusan"}
                />
                <div className={"absolute hidden lg:block w-[445px] h-full -bottom-3 -z-10"}/>
            </div>
        </div>

    </section>

}

export default TabOverviewJurusan
