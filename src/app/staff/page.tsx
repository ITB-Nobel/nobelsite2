'use client'

import GeneralLayout from "@/components/layout/GeneralLayout";
import React, {useState} from "react";
import useSWR from "swr";
import { StaffType } from "@/lib/types";
import {fetcher} from "@/lib/api";
import StaffDialog from "@/components/StaffDialog";
import {Skeleton} from "@/components/Skeleton";

const StaffPage = () => {
    const {data} = useSWR<StaffType[]>('staff', () => fetcher<StaffType[]>('staff'))
    const [filter, setFilter] = useState<string>("rektorat")
    const handleClick = (value: string) => setFilter(value)
    return <GeneralLayout>
        <>
            <main className={"text-center py-16 lg:px-24 min-h-screen"}>
                <h1 className={"text-6xl"}>Nobel <span className={"text-primary"}>Staff</span></h1>
                <Filter handleClick={handleClick} filter={filter}/>
                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 "}>
                    {data ? data.map((props, index) => {
                        return filter === props?.acf.group && <StaffDialog {...props.acf} key={index}/>
                    }) : <Skeleton className={"w-full rounded-xl h-screen"}/>}
                </div>

            </main>
        </>
    </GeneralLayout>
}


const Filter = ({handleClick, filter}: { handleClick: (input: string) => void, filter: string }) => {
    const activeClass = `text-white bg-primary rounded-xl  py-1 px-6`
    return <div
        className={" text-lg  lg:text-2xl py-4 justify-center min-w-full overflow-x-scroll  lg:overflow-x-hidden px-12 mx-auto lg:max-w-fit my-6 md:my-12 items-center gap-8 lg:gap-12 flex font-medium capitalize "}>
        <button
            className={`!capitalize min-w-fit  ${filter === 'rektorat' && activeClass}`}
            onClick={() => handleClick('rektorat')}
        >
            Rektorat
        </button>
        <button
            className={`!capitalize min-w-fit  ${filter === 'teknologi' && activeClass}`}
            onClick={() => handleClick('teknologi')}
        >
            Fakultas Teknoligi dan Bisnis
        </button>
        <button
            className={`!capitalize min-w-fit ${filter === "fakultas pascasarjana" && activeClass}`}
            onClick={() => handleClick('fakultas pascasarjana')}
        >
            Fakultas Pascasarjana
        </button>
        <button
            className={`!capitalize min-w-fit ${filter === "lembaga" && activeClass}`}
            onClick={() => handleClick('lembaga')}
        >
            Lembaga
        </button>
        <button
            className={`!capitalize min-w-fit  ${filter === "Bagian" && activeClass}`}
            onClick={() => handleClick('Bagian')}
        >
            Bagian
        </button>
        <button
            className={`!capitalize min-w-fit  ${filter === "Yayasan" && activeClass}`}
            onClick={() => handleClick('Yayasan')}
        >
            Yayasan
        </button>
    </div>
}

export default StaffPage
