'use client'
import React from "react";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/Accordion";
import TableKurikulumJurusan from "@/app/jurusan/[slug]/components/TableKurikulumJurusan";
import {ProdiCurriculum, ProdiStudyPlan} from "@/lib/types";



const SectionCurriculumStudyJurusan = ({description}:ProdiCurriculum) => {

    return <section
        className={"py-12 space-y-12 text-left w-full"}>
        <h1 className={"text-5xl font-semibold text-primary"}>Study Plan</h1>
        <div>
            <Accordion type="single" defaultValue={"item-1"} collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className={"text-2xl text-slate-700"}>Semester 1</AccordionTrigger>
                    <AccordionContent>
                        {/*<div className={"!font-light"} dangerouslySetInnerHTML={{__html: semester_1 as string}}/>*/}
                        {/*<TableKurikulumJurusan />*/}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className={"text-2xl text-slate-700"}>Semester 2</AccordionTrigger>
                    <AccordionContent>
                        <TableKurikulumJurusan />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className={"text-2xl text-slate-700"}>Semester 3</AccordionTrigger>
                    <AccordionContent>
                        <TableKurikulumJurusan />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger className={"text-2xl text-slate-700"}>Semester 4</AccordionTrigger>
                    <AccordionContent>
                        <TableKurikulumJurusan />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger className={"text-2xl text-slate-700"}>Semester 5</AccordionTrigger>
                    <AccordionContent>
                        <TableKurikulumJurusan />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger className={"text-2xl text-slate-700"}>Semester 6</AccordionTrigger>
                    <AccordionContent>
                        <TableKurikulumJurusan />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                    <AccordionTrigger className={"text-2xl text-slate-700"}>Semester 7</AccordionTrigger>
                    <AccordionContent>
                        <TableKurikulumJurusan />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </section>
}

export default SectionCurriculumStudyJurusan
