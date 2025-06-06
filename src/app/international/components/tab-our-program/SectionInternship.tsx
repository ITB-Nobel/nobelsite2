import BlurImage from "@/components/BlurImage";
import React from "react";
import {OurProgramType} from "@/lib/types";


export default function SectionInternship({
                                        internship: {
                                            image,
                                            title,
                                            description
                                        }
                                    }: Pick<OurProgramType, "internship">) {
    return <section data-aos={"zoom-in"}
                    className={"py-4 lg:py-12 text-left flex flex-col lg:flex-row-reverse gap-12 items-center justify-between w-full"}>
        <div className={""}>
            <h1 className={"font-semibold text-primary"}>{title}</h1>
            <article>
                <div className={"text-left mt-10 "}>
                    <div className={"!items-stretch relative"}
                         dangerouslySetInnerHTML={{__html: description as string}}/>
                </div>
            </article>
        </div>

        <div className={" flex justify-end"}>
            <div className={'relative w-[350px] lg:w-[430px] h-[350px] lg:h-[430px]'}>
                <BlurImage
                    image={image}
                    alt={image}
                />
                <div className={"absolute hidden lg:block w-[445px] h-full -bottom-3 -z-10"}/>
            </div>
        </div>

    </section>
}
