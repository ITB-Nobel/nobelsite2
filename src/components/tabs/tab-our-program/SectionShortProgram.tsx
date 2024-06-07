import BlurImage from "@/components/BlurImage";
import React from "react";
import {OurProgramType} from "@/lib/types";


export default function SectionShortProgram(props: Pick<OurProgramType, "short_program">) {
    const {short_program} = props
    return short_program && <section data-aos={"zoom-in"}
                    className={"py-4 lg:py-12 text-left flex flex-col lg:flex-row gap-12 items-center justify-between w-full"}>
        <div className={""}>
            <h1 className={"text-5xl font-semibold text-primary"}>{short_program?.title}</h1>
            <article>
                <div className={"text-left mt-10 "}>
                    <div className={"!items-stretch relative"}
                         dangerouslySetInnerHTML={{__html: short_program?.description as string}}/>
                </div>
            </article>
        </div>

        <div className={" flex justify-end"}>
            <div className={'relative w-[350px] lg:w-[430px] h-[350px] lg:h-[430px]'}>
                <BlurImage
                    image={short_program?.image}
                    alt={short_program?.image}
                />
                <div className={"absolute hidden lg:block w-[445px] h-full -bottom-3 -z-10"}/>
            </div>
        </div>

    </section>
}
