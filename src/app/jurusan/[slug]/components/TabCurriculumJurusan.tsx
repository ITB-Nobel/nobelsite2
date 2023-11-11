import React from "react";
import SectionCurriculumJurusan from "@/app/jurusan/[slug]/components/SectionCurriculumJurusan";
import SectionCurriculumStudyJurusan from "@/app/jurusan/[slug]/components/SectionCurriculumStudyJurusan";
import {ProdiCurriculum, ProdiStudyPlan} from "@/lib/types";


const TabCurriculumJurusan = (props : ProdiCurriculum & ProdiStudyPlan) => <>
    <SectionCurriculumJurusan {...props} />
    <SectionCurriculumStudyJurusan {...props} />
</>

export default TabCurriculumJurusan
