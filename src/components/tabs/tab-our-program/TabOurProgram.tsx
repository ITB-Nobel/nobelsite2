'use client'
import React from "react";
import {OurProgramType} from "@/lib/types";
import SectionFullDegree from "@/components/tabs/tab-our-program/SectionFullDegree";
import SectionInternationalClass from "@/components/tabs/tab-our-program/SectionInternationalClass";
import SectionStudyVisit from "@/components/tabs/tab-our-program/SectionStudyVisit";
import SectionSchoolarship from "@/components/tabs/tab-our-program/SectionSchoolarship";
import SectionNeon from "@/components/tabs/tab-our-program/SectionNeon";
import SectionCourse from "@/components/tabs/tab-our-program/SectionCourse";
import SectionShortProgram from "@/components/tabs/tab-our-program/SectionShortProgram";
import SectionInternship from "@/components/tabs/tab-our-program/SectionInternship";
import SectionVolunteer from "@/components/tabs/tab-our-program/SectionVolunteer";


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
