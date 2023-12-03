'use client'
import React from "react";
import {OurProgramType} from "@/lib/types";
import SectionFullDegree from "@/app/international/components/tab-our-program/SectionFullDegree";
import SectionInternationalClass from "@/app/international/components/tab-our-program/SectionInternationalClass";
import SectionStudyVisit from "@/app/international/components/tab-our-program/SectionStudyVisit";
import SectionSchoolarship from "@/app/international/components/tab-our-program/SectionSchoolarship";
import SectionNeon from "@/app/international/components/tab-our-program/SectionNeon";
import SectionCourse from "@/app/international/components/tab-our-program/SectionCourse";
import SectionShortProgram from "@/app/international/components/tab-our-program/SectionShortProgram";
import SectionInternship from "@/app/international/components/tab-our-program/SectionInternship";
import SectionVolunteer from "@/app/international/components/tab-our-program/SectionVolunteer";


const TabOurProgram = ({
                           full_degree,
                           international_class,
                           study_visit,
                           short_program,
                           neon,
                           course,
                           volunteer,
                           schoolarship,
                           internship
                       }: OurProgramType) =>
    <>
        <SectionFullDegree full_degree={full_degree}/>
        <SectionInternationalClass international_class={international_class}/>
        <SectionStudyVisit study_visit={study_visit}/>
        <SectionCourse course={course}/>
        <SectionShortProgram short_program={short_program}/>
        <SectionInternship internship={internship}/>
        <SectionVolunteer volunteer={volunteer}/>
        <SectionNeon neon={neon}/>
        <SectionSchoolarship schoolarship={schoolarship}/>
    </>


export default TabOurProgram
