'use client'
import React, {useState} from "react";
import {motion} from 'framer-motion'
import Link from "next/link";


const ExploreDegreesSection = ({data}: { data: any[] }) => {
    const [filter, setFilter] = useState<"sarjana" | "magister" | string>("sarjana")
    return (
        <section className={"container relative py-12 md:py-24 text-center  "}>
            <h1 className={"text-2xl md:text-4xl font-semibold "}>Explore Our <span
                className={"text-primary"}>Degrees</span></h1>

            <p className={"text-slate-500 text-md md:text-lg mt-2"}>Information on degrees, requirements, policies</p>

            <ButtonFilter type={filter} handleClick={(input: string) => {
                setFilter(input)
            }}/>
            <div className={"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 min-h-[89vh]"}>
                {data.map((item, index) => {
                    const degree = item?.prodiField

                    return (
                        <>
                            {
                                filter === degree?.jenjang &&
                                <Link href={`/jurusan/${item?.slug as string}`} key={index}>
                                    <motion.div
                                        whileHover={{scale: 1.1}}
                                        className={
                                            "relative  font-semibold shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-2xl  gap-4  " +
                                            " hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                                        }
                                    >
                                        {/*{*/}
                                        {/*    imageData &&*/}
                                        {/*    <GatsbyImage alt={item?.title as string}*/}
                                        {/*                 image={imageData}*/}
                                        {/*                 className={"rounded-xl w-full"}*/}
                                        {/*    />*/}
                                        {/*}*/}
                                        <div
                                            className={" text-left absolute top-0 left-36 h-full flex items-center"}>
                                            <h2 className={"text-xl max-w-[200px] capitalize"}>{degree.overview?.jurusan}</h2>
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
        className={"bg-gray-100 rounded-xl w-[300px] h-12 mx-auto my-6 md:my-12 items-center gap-4 flex font-medium "}>
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

export default ExploreDegreesSection;
