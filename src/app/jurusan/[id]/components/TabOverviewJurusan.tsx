'use client'
import React from "react";
import {ProdiOverview, ProfilLulusanType} from "@/lib/types";
import BlurImage from "@/components/BlurImage";


const TabOverviewJurusan = ({jurusan, image, description, image_detail, videoProfil, profil_lulusan}: ProdiOverview & {
    videoProfil: {url:string},
    profil_lulusan: ProfilLulusanType
}) => {
    return <>
        <section data-aos={"zoom-in"}
                 className={"lg:py-12 text-left flex flex-col lg:flex-row gap-12 items-center justify-between w-full"}>
            <div className={""}>
                <h1 className={"text-5xl font-semibold text-primary"}>{jurusan}</h1>
                <article>
                    <div className={"text-left mt-10 "}>
                        <div className={"!items-stretch relative "}
                             dangerouslySetInnerHTML={{__html: description as string}}/>
                    </div>
                </article>
            </div>

            <div className={" flex justify-end"}>
                <div className={'relative w-[350px] lg:w-[430px] lg:h-[430px]'}>
                    <BlurImage
                        image={image_detail}
                        alt={"Overview Jurusan"}
                    />
                    <div className={"absolute hidden lg:block w-[445px] h-full -bottom-3 -z-10"}/>
                </div>
            </div>

        </section>
        
        <section data-aos={"zoom-in"} className={"w-full items-center py-8 lg:py-20"}>
            {videoProfil &&
                <iframe
                    src={videoProfil.url}
                    title="How to improve our English speaking skills NIOUS episode #2"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className={"rounded-xl mx-auto h-[250px] md:w-[70%] lg:w-[80%] md:h-[500px]"}
                />
            }
            {/*{videoProfil &&*/}
            {/*    <h1 className={"text-5xl mx-auto py-12"}>Video <span className={"text-primary"}>Profil</span></h1>}*/}
        </section>


            {profil_lulusan?.image && <section data-aos={"zoom-in"}
                                               className={"py-12 text-left flex flex-col lg:flex-row gap-12 items-center justify-between w-full"}>
                <div className={"lg:text-left w-full px-4"}>
                    <h1 className={"text-5xl font-semibold text-primary"}>{profil_lulusan.judul}</h1>
                    <article>
                        <div className={"text-left mt-10 "}>
                            <div className={"!items-stretch relative "}
                                 dangerouslySetInnerHTML={{__html: profil_lulusan.description as string}}/>
                        </div>
                    </article>
                </div>

                <div className={" flex justify-end"}>
                    <div className={'relative w-[350px] lg:w-[430px] lg:h-[430px]'}>
                        <BlurImage
                            image={profil_lulusan.image}
                            alt={"Overview Jurusan"}
                        />
                        <div className={"absolute hidden lg:block w-[445px] h-full -bottom-3 -z-10"}/>
                    </div>
                </div>

            </section>}
    </>
}

export default TabOverviewJurusan
