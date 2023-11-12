'use client'
import React from "react";
import SectionCurriculumJurusan from "@/app/jurusan/[id]/components/SectionCurriculumJurusan";
import SectionCurriculumStudyJurusan from "@/app/jurusan/[id]/components/SectionCurriculumStudyJurusan";
import {ProdiCurriculum, ProdiStudyPlan} from "@/lib/types";


const TabCurriculumJurusan = (props : ProdiCurriculum & {idProdi: string} ) => <>
    <SectionCurriculumJurusan {...props} />
    <SectionCurriculumStudyJurusan {...props} />
</>

export default TabCurriculumJurusan
