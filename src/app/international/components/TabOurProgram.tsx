'use client'
import React from "react";
import SectionCurriculumJurusan from "@/app/jurusan/[id]/components/SectionCurriculumJurusan";
import SectionCurriculumStudyJurusan from "@/app/jurusan/[id]/components/SectionCurriculumStudyJurusan";
import {ProdiCurriculum, ProdiStudyPlan} from "@/lib/types";
import BlurImage from "@/components/BlurImage";


const TabOurProgram  = ({description, title, image}: ProdiCurriculum) => <section
    data-aos={"zoom-in"}
    className={"py-12 text-left flex flex-col lg:flex-row items-center justify-between w-full gap-12 ju"}>
    <div className={""}>
        <h1 className={"text-5xl font-semibold text-primary"}>{title}</h1>
        <article>
            <div className={"text-left mt-10 "}>
                <div className={"!items-stretch relative flex"} dangerouslySetInnerHTML={{__html: description as string}}/>
            </div>
        </article>
    </div>
    <div className={" flex justify-end"}>
        <div className={'relative w-[430px] h-[430px]'}>
            <BlurImage
                image={image}
                alt={"Overview Jurusan"}
            />
            <div className={"absolute bg-primary w-[445px] h-full -bottom-3 -z-10"}/>
        </div>
    </div>
</section>

export default TabOurProgram
