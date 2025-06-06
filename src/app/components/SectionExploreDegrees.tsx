'use client'

import React, {useState} from "react";
import {motion} from 'framer-motion'
import Link from "next/link";
import useSWR from "swr";
import {fetcher} from "@/lib/api";
import {ProdiACF, ProdiType} from "@/lib/types";
import Image from "next/image";


type SectionBerandaType = {
    title: string
    color_title: string
    subtitle: string
}
const SectionExploreDegrees = ({title, color_title, subtitle}: SectionBerandaType) => {
    const {data} = useSWR<ProdiType[]>('prodi', () => fetcher<ProdiType[]>('prodi?orderby=slug&order=asc&_fields=acf,slug,id'))
    const [filter, setFilter] = useState<"sarjana" | "magister" | string>("sarjana")
        return (
            <section className={"container relative py-12 md:py-24 text-center  "}>
                <h1 className={"text-2xl md:text-4xl font-semibold "}>{title}<span
                    className={"text-primary"}>{color_title}</span></h1>

                <p className={"text-slate-500 text-md md:text-lg mt-2"}>{subtitle}</p>

                <ButtonFilter type={filter} handleClick={(input: string) => {
                    setFilter(input)
                }}/>
                <div className={"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 min-h-[89vh]"}>
                    {data?.map((item, index) => {
                        return (
                            <>
                                {
                                    filter === item?.acf.jenjang &&
                                    <Link href={`/jurusan/${item?.id as string}`} key={index}>
                                        <motion.div
                                            data-aos={"fade-up"}
                                            whileHover={{scale: 1.1}}
                                            className={
                                                "relative  font-semibold shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-2xl  gap-4  " +
                                                " hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                                            }
                                        >
                                            {
                                                <div className={"rounded-xl w-[342px] h-[180px] relative"}>
                                                    <Image alt={item?.slug as string}
                                                           src={item.acf.overview.image}
                                                           layout={"fill"}
                                                           className={"rounded-xl"}
                                                           objectFit={"cover"}
                                                           sizes={"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
                                                    />
                                                </div>

                                            }
                                            <div
                                                className={" text-center absolute top-16 left-1/2 transform -translate-x-1/2 h-full flex"}>
                                                <h2 className={"text-lg lg:text-xl max-w-[200px] capitalize text-white"}>{item.acf.overview?.jurusan}</h2>
                                            </div>
                                        </motion.div>
                                    </Link>}
                            </>
                        );
                    })}
                </div>
            </section>
        );
};

const ButtonFilter = ({type, handleClick}: { type: string, handleClick: (input: string) => void }) => {
    const colorSarjana = `${type === 'sarjana' ? "bg-primary  text-white" : ""}`
    const colorMagister = `${type === 'magister' ? "bg-primary  text-white" : ""}`
    return <div
        className={"bg-gray-100 rounded-xl w-[320px] h-12 mx-auto my-6 md:my-12 items-center gap-4 flex font-medium "}>
        <button className={`h-full flex-1 rounded-l-xl capitalize ${colorSarjana}`}
                onClick={() => handleClick('sarjana')}>
            Undergraduate (S1)
        </button>
        <button className={`h-full flex-1 rounded-r-xl capitalize ${colorMagister}`}
                onClick={() => handleClick('magister')}>
            Graduate (S2)
        </button>
    </div>
}

export default SectionExploreDegrees;
