'use client'
import React from "react";
import SectionCurriculumJurusan from "@/app/jurusan/[id]/components/SectionCurriculumJurusan";
import SectionCurriculumStudyJurusan from "@/app/jurusan/[id]/components/SectionCurriculumStudyJurusan";
import {Dosen, ProdiCurriculum, ProdiStudyPlan, StaffACF, StaffType} from "@/lib/types";
import BlurImage from "@/components/BlurImage";
import useSWR from "swr";
import {fetcher, fetcherAcf} from "@/lib/api";
import StaffDialog from "@/components/StaffDialog";
import {Skeleton} from "@/components/Skeleton";


const TabOurTeam = ({staffIDs}:{staffIDs: string[]}) => {
    const {data} = useSWR<StaffType[]>(`staff-international`, () => fetcher(`staff?include=${staffIDs.toString()}`))
    console.log(data,'international-staff')
    return <section
        data-aos={"zoom-in"}
        className={"py-12 grid grid-cols-3 text-left w-full"}>
        {
            data ? data?.map((item, index) => {
                return <StaffDialog
                    position={item.acf.position}
                    image={item.acf.image}
                    key={index}
                    description={item.acf.description}
                    group={""}
                    title={item.acf.title}
                />
            }) : <Skeleton className={"w-full rounded-xl h-screen"}/>
        }
    </section>
}


export default TabOurTeam
