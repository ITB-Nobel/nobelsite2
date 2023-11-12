'use client'
import React from "react";
import StaffDialog from "@/components/StaffDialog";
import useSWR from "swr";
import {fetcher, fetcherAcf} from "@/lib/api";
import {Dosen} from "@/lib/types";

const TabDosenJurusan = ({idProdi}: { idProdi: string }) => {
    const {data} = useSWR<{ acf: Dosen }[]>(`dosen-prodi-${idProdi}`, () => fetcherAcf('dosen'))
    console.log(data, 'dosen-prodi')
    return <section className={"py-12 grid grid-cols-3 text-left w-full"}>
        {
            data && data?.map((item, index) => <StaffDialog
                id={index}
                name={item.acf.name}
                position={item.acf.position}
                image={item.acf.photo?.url}
                key={index}
                description={item.acf.description}
            />)
        }
    </section>
}

export default TabDosenJurusan;
