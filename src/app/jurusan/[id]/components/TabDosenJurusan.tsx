'use client'
import React from "react";
import StaffDialog from "@/components/StaffDialog";
import useSWR from "swr";
import {fetcher, fetcherAcf} from "@/lib/api";
import {Dosen} from "@/lib/types";

const TabDosenJurusan = ({idProdi}: { idProdi: string }) => {
    const {data} = useSWR<{ acf: Dosen }[]>(`dosen-prodi-${idProdi}`, () => fetcherAcf('dosen'))
    return <section className={"py-12 grid grid-cols-3 text-left w-full"}>
        {
            data && data?.map((item, index) => <StaffDialog
                position={item.acf.position}
                image={item.acf.photo?.url}
                key={index}
                description={item.acf.description}
                group={""}
                title={item.acf.name}
            />)
        }
    </section>
}

export default TabDosenJurusan;
