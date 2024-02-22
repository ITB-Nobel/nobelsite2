import BlurImage from "@/components/BlurImage";
import React from "react";
import {OurProgramType} from "@/lib/types";


export default function SectionStudyVisit(props: Pick<OurProgramType, "study_visit">) {
    const {study_visit} = props
    return study_visit && <section data-aos={"zoom-in"}
                    className={"py-4 lg:py-12 text-left flex flex-col lg:flex-row gap-12 items-center justify-between w-full"}>
        <div className={""}>
            <h1 className={"text-5xl font-semibold text-primary"}>{study_visit?.title as string}</h1>
            <article>
                <div className={"text-left mt-10 "}>
                    <div className={"!items-stretch relative"}
                         dangerouslySetInnerHTML={{__html: study_visit?.description as string}}/>
                </div>
            </article>
        </div>

        <div className={" flex justify-end"}>
            <div className={'relative w-[350px] lg:w-[430px] h-[350px] lg:h-[430px]'}>
                <BlurImage
                    image={study_visit?.image as string}
                    alt={"Overview Jurusan"}
                />
                <div className={"absolute hidden lg:block bg-black w-[445px] h-full -bottom-3 -z-10"}/>
            </div>
        </div>

    </section>
}
