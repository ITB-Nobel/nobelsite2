'use client'
import React from "react";
import StaffDialog, {StaffDialog2} from "@/components/StaffDialog";
import useSWR from "swr";
import {fetcherAcf} from "@/lib/api";
import {Dosen} from "@/lib/types";
import {Skeleton} from "@/components/Skeleton";

const TabDosenJurusan = ({idProdi}: { idProdi: string }) => {

    const {data} = useSWR<{ acf: Dosen }[]>(`dosen-prodi-${idProdi}`, () => fetcherAcf<{
        acf: Dosen
    }[]>('dosen?per_page=500'))

    return <section
        data-aos={"zoom-in"}
        className={"py-12 grid grid-cols-1 lg:grid-cols-4 text-left w-full"}>
        {
            data ? data?.map((item, index) => {
                const prodis = item.acf.prodi.map(prodi => prodi.ID)
                if (prodis.includes(Number(idProdi)))
                    return <StaffDialog2
                        position={item.acf.position}
                        image={item.acf.photo?.url}
                        key={index}
                        description={item.acf.description}
                        group={""}
                        title={item.acf.name}
                    />
            }) : <Skeleton className={"w-full rounded-xl h-screen"}/>
        }
    </section>
}


export default TabDosenJurusan;
