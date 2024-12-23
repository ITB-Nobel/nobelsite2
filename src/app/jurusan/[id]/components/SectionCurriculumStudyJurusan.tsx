'use client'
import React, {useEffect, useState} from "react";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/Accordion";
import TableKurikulumJurusan from "@/app/jurusan/[id]/components/TableKurikulumJurusan";
import {MatakuliahAcf, ProdiCurriculum} from "@/lib/types";
import useSWR from "swr";
import {fetcherAcf} from "@/lib/api";
import {uniqueArray} from "@/lib/utils";


export type SectionCurriculumStudyJurusanType = {
    acf: MatakuliahAcf,
    id: string
}

const SectionCurriculumStudyJurusan = ({idProdi}: ProdiCurriculum & { idProdi: string }) => {
    const [matakuliahArray, setMatakuliahArray] = useState<SectionCurriculumStudyJurusanType[]>([])
    const [semesterArray, setSemesterArray] = useState<string[]>([])
    const {data} = useSWR<SectionCurriculumStudyJurusanType[]>(`matakuliah-${idProdi}`, () => fetcherAcf<SectionCurriculumStudyJurusanType[]>(`mata_kuliah?prodi=${idProdi}&per_page=100000`))
    useEffect(() => {
        if (data) {
            let tempSemesterArray: string[] = [];
            const tempData = data
                .filter((item) => item.acf.prodi[0].ID.toString() === idProdi)
                .map((item) => {
                    tempSemesterArray.push(item.acf.semester)
                    return item
                })

            // @ts-ignore
            let tempArray: string[] = uniqueArray(tempSemesterArray).sort((a, b) => a - b);
            setSemesterArray(tempArray)
            setMatakuliahArray(tempData)
        }
    }, [data])

    return matakuliahArray?.length > 0 && <section
        data-aos={"zoom-in"}
        className={"py-1 space-y-12 text-left w-full"}>
        <h1 className={"font-semibold text-primary"}>Study Plan</h1>
        <div>
            <Accordion type="single" defaultValue={"1"} collapsible className="w-full">
                {
                    semesterArray.map((semester, index) => {
                        return <AccordionItem value={semester} key={index}>
                            <AccordionTrigger
                                className={"text-2xl text-slate-700"}>Semester {semester}</AccordionTrigger>
                            <AccordionContent>
                                {/*<div className={"!font-light"} dangerouslySetInnerHTML={{__html: semester_1 as string}}/>*/}
                                <TableKurikulumJurusan
                                    items={matakuliahArray.filter((item) => item.acf.semester === semester)}/>
                            </AccordionContent>
                        </AccordionItem>
                    })
                }


            </Accordion>
        </div>
    </section>
}

export default SectionCurriculumStudyJurusan
