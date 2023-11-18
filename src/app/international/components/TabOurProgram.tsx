'use client'
import React from "react";
import SectionCurriculumJurusan from "@/app/jurusan/[id]/components/SectionCurriculumJurusan";
import SectionCurriculumStudyJurusan from "@/app/jurusan/[id]/components/SectionCurriculumStudyJurusan";
import {OurProgramType, ProdiCurriculum, ProdiStudyPlan} from "@/lib/types";
import BlurImage from "@/components/BlurImage";


const TabOurProgram = ({description, title, image}: OurProgramType) =>
    <section
        data-aos={"zoom-in"}
        className={"py-6 text-left"}>
        <div className={'relative w-full mb-12 '}>
            <BlurImage
                image={image.url}
                alt={"Overview Jurusan"}
                className={"aspect-w-4 aspect-h1 object-cover"}
            />
        </div>
        <div className={""}>
            <h1 className={"text-5xl font-semibold text-primary"}>{title}</h1>
            <article>
                <div className={"text-left mt-10 "}>
                    <div className={"!items-stretch relative flex"}
                         dangerouslySetInnerHTML={{__html: description as string}}/>
                </div>
            </article>
        </div>

    </section>

export default TabOurProgram
