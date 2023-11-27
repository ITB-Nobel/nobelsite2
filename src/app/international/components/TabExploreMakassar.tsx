'use client'
import React from "react";
import SectionCurriculumJurusan from "@/app/jurusan/[id]/components/SectionCurriculumJurusan";
import SectionCurriculumStudyJurusan from "@/app/jurusan/[id]/components/SectionCurriculumStudyJurusan";
import {Dosen, ProdiCurriculum, ProdiStudyPlan, StaffACF, StaffType} from "@/lib/types";
import BlurImage from "@/components/BlurImage";
import useSWR from "swr";
import {fetcher, fetcherAcf} from "@/lib/api";
import StaffDialog from "@/components/StaffDialog";
import {Skeleton} from "@/components/Skeleton";


const TabExploreMakassar = () => {
    return <section data-aos={"zoom-in"}
                    className={"py-4 lg:py-12 text-left flex flex-col lg:flex-row gap-12 items-center justify-between w-full"}>
        <div className={""}>
            <h1 className={"text-5xl font-semibold text-primary"}>Explore Makassar</h1>
            <article>
                <div className={"text-left mt-10 "}>
                    {/*<div className={"!items-stretch relative flex"}*/}
                    {/*     dangerouslySetInnerHTML={{__html: description as string}}/>*/}
                </div>
            </article>
        </div>

        <div className={" flex justify-end"}>
            <div className={'relative w-[350px] lg:w-[430px] h-[350px] lg:h-[430px]'}>
                {/*<BlurImage*/}
                {/*    image={image}*/}
                {/*    alt={"Overview Jurusan"}*/}
                {/*/>*/}
                <div className={"absolute hidden lg:block bg-black w-[445px] h-full -bottom-3 -z-10"}/>
            </div>
        </div>

    </section>
}


export default TabExploreMakassar
