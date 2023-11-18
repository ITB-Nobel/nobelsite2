'use client'
import React from "react";
import {ProdiOverview, ProfilLulusanType} from "@/lib/types";
import Image from "next/image";
import BlurImage from "@/components/BlurImage";


const TabOverviewJurusan = ({jurusan, image, description, image_detail, videoProfil, profil_lulusan}: ProdiOverview & { videoProfil: string, profil_lulusan: ProfilLulusanType }) => {
    return <>
        <section data-aos={"zoom-in"}
                 className={"py-12 text-left flex flex-col lg:flex-row gap-12 items-center justify-between w-full"}>
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
                <div className={'relative w-[430px] h-[430px]'}>
                    <BlurImage
                        image={image_detail}
                        alt={"Overview Jurusan"}
                    />
                    <div className={"absolute bg-black w-[445px] h-full -bottom-3 -z-10"}/>
                </div>
            </div>

        </section>
        <section data-aos={"zoom-in"} className={"flex flex-row items-center py-20"}>
            {videoProfil && <div dangerouslySetInnerHTML={{__html: videoProfil as string}}/>}
            {videoProfil && <h1 className={"text-5xl px-12"}>Video <span className={"text-primary"}>Profil</span></h1>}
        </section>


        {profil_lulusan?.image && <section data-aos={"zoom-in"}
                  className={"py-12 text-left flex flex-col lg:flex-row gap-12 items-center justify-between w-full"}>
            <div className={""}>
                <h1 className={"text-5xl font-semibold text-primary"}>{profil_lulusan.judul}</h1>
                <article>
                    <div className={"text-left mt-10 "}>
                        <div className={"!items-stretch relative "}
                             dangerouslySetInnerHTML={{__html: profil_lulusan.description as string}}/>
                    </div>
                </article>
            </div>

            <div className={" flex justify-end"}>
                <div className={'relative w-[430px] h-[430px]'}>
                    <BlurImage
                        image={profil_lulusan.image}
                        alt={"Overview Jurusan"}
                    />
                    <div className={"absolute bg-black w-[445px] h-full -bottom-3 -z-10"}/>
                </div>
            </div>

        </section>}
    </>
}

export default TabOverviewJurusan
