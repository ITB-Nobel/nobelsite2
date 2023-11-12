'use client'
import React from "react";
import {ProdiCurriculum, ProdiStudyPlan} from "@/lib/types";
import Image from "next/image";

const SectionCurriculumJurusan = ({description, title, image}: ProdiCurriculum) => <section
    className={"py-12 text-left flex flex-col lg:flex-row gap-12 items-center justify-between w-full"}>
    <div className={"basis-1/2"}>
        <h1 className={"text-5xl font-semibold text-primary"}>{title}</h1>
        <article>
            <div className={"text-left mt-10 max-w-md"}>
                <div className={"!font-light"} dangerouslySetInnerHTML={{__html: description as string}}/>
            </div>
        </article>
    </div>
    <div className={"basis-1/2 flex justify-end"}>
        <div className={'relative w-[480px] h-[480px]'}>
            <Image
                src={image}
                alt={title}
                layout={"fill"}
                objectFit={"cover"}
                className={""}
            />
            <div className={"absolute bg-primary w-[495px] h-full -bottom-3 -z-10"}/>
        </div>
    </div>
</section>

export default SectionCurriculumJurusan
