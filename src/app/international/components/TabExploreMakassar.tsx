'use client'
import React from "react";
import {InternationalACF} from "@/lib/types";
import BlurImage from "@/components/BlurImage";


const TabExploreMakassar = ({
                                explore_makassar: {
                                    image,
                                    title,
                                    description
                                }
                            }: Pick<InternationalACF, "explore_makassar">) => {
    return <section data-aos={"zoom-in"}
                    className={"py-4 lg:py-12 text-left flex flex-col lg:flex-row gap-12 items-center justify-between w-full"}>
        <div className={""}>
            <h1 className={"text-2xl font-semibold text-primary"}>{title}</h1>
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


export default TabExploreMakassar
