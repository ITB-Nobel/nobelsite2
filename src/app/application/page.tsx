"use client"

import GeneralLayout from "@/components/layout/GeneralLayout";
import FormInput from "@/components/form/form-input";
import {SubmitHandler, useForm} from "react-hook-form";
import * as zod from 'zod'
import {zodResolver} from "@hookform/resolvers/zod"
import {Form} from "@/components/Form";
import {Button} from "@/components/Button";

{/*
    Upload Attached Document :
    - Academic transcripts and high school / MK,  diploma, or equivalent
    - Certificate of academic achievement and/or non-academic achievement (if Any)
    - Maximum age 35 years (Proved by Birth Certificate)
    - Motivation Letter (Ms. Word or PDF)
    - Passport (min. 30 months after entering college)
    - Medical certificate
    - Passport-sized photo
    - English Proficiency Certificate: TOEFL/TOEIC/IELTS or other valid certificate)
*/
}

const formSchema = zod.object({
    name: zod.string(),
    birthday: zod.string(),
    country: zod.string(),
    identity: zod.string(),
    identity_number: zod.string(),
    expiration_date: zod.string(),
    faculty_objectives: zod.string(),
    study_program: zod.string(),
    phone: zod.string(),
    transcript: zod.string(),
    certificate: zod.string(),
    certificate_birthday: zod.string(),
    motivation_letter: zod.string(),
    passport: zod.string(),
    medical_certificate: zod.string(),
    passport_photo: zod.string(),
    english_certificate: zod.string(),
})
export type FormData = zod.infer<typeof formSchema>
export default function ApplicationPage() {
    const form = useForm<FormData>({
        resolver: zodResolver(formSchema)
    })
    const handleFormSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data)
    }

    return <GeneralLayout featuredTitle={"APPLICATION FORM"}>
        <main className={"bg-slate-50"}>
            <section className={" mx-auto py-12 items-center container"}>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleFormSubmit)}>
                        <h2 className={"my-8 font-bold text-2xl"}>FOREIGN STUDENT APPLICATION FORM</h2>
                        <div className={"grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-2"}>
                                <FormInput
                                    control={form.control}
                                    label={"NAME"}
                                    name={"name"}
                                    required={true}
                                />

                                <FormInput
                                    control={form.control}
                                    label={"PLACE AND DATE OF BIRTH"}
                                    name={"birthday"}
                                    type={"date"}
                                    required={true}
                                />

                                <FormInput
                                    control={form.control}
                                    label={"COUNTRY OF ORIGIN"}
                                    name={"country"}
                                    required={true}
                                />

                                <FormInput
                                    control={form.control}
                                    label={"IDENTITY CARD"}
                                    name={"identity"}
                                    type={"number"}
                                    required={true}
                                />

                                <FormInput
                                    control={form.control}
                                    label={"IDENTITY CARD NUMBER"}
                                    name={"identity_number"}
                                    type={"number"}
                                    required={true}
                                />

                                <FormInput
                                    control={form.control}
                                    label={"EXPIRATION DATE"}
                                    name={"expiration_date"}
                                    type={"date"}
                                    required={true}
                                />

                                <FormInput
                                    control={form.control}
                                    label={"FACULTY OBJECTIVES"}
                                    name={"faculty_objectives"}
                                    required={true}
                                />

                                <FormInput
                                    control={form.control}
                                    label={"STUDY PROGRAM"}
                                    name={"study_program"}
                                    required={true}
                                />

                                <FormInput
                                    control={form.control}
                                    label={"PHONE NUMBER/WA"}
                                    name={"phone"}
                                    required={true}
                                />
                        </div>

                        <h2 className={"my-8 font-bold text-2xl"}>CRITERIA AND REQUIREMENTS</h2>
                        <div className={"grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-2"}>

                                <FormInput
                                    control={form.control}
                                    label={"Academic transcripts of high school / MK,  diploma, or equivalent"}
                                    name={"transcript"}
                                    type={"file"}
                                    required={true}
                                />

                                {/*<FormInput*/}
                                {/*    control={form.control}*/}
                                {/*    label={"Certificate of academic achievement and/or non-academic achievement (if Any)"}*/}
                                {/*    name={"certificate"}*/}
                                {/*    type={"file"}*/}
                                {/*    required={true}*/}
                                {/*/>*/}

                                {/*<FormInput*/}
                                {/*    control={form.control}*/}
                                {/*    label={"Maximum age 35 years (Proved by Birth Certificate)"}*/}
                                {/*    name={"certificate_birthday"}*/}
                                {/*    type={"file"}*/}
                                {/*    required={true}*/}
                                {/*/>*/}

                                {/*<FormInput*/}
                                {/*    control={form.control}*/}
                                {/*    label={"Motivation Letter (Ms. Word or PDF)"}*/}
                                {/*    name={"motivation_letter"}*/}
                                {/*    type={"file"}*/}
                                {/*    required={true}*/}
                                {/*/>*/}

                                <FormInput
                                    control={form.control}
                                    label={"Passport (min. 30 months after entering college)"}
                                    name={"passport"}
                                    type={"file"}
                                    required={true}
                                />

                                <FormInput
                                    control={form.control}
                                    label={"Medical certificate"}
                                    name={"medical_certificate"}
                                    type={"file"}
                                    required={false}
                                />

                                <FormInput
                                    control={form.control}
                                    label={"Passport-sized photo"}
                                    name={"passport_photo"}
                                    type={"file"}
                                    required={true}
                                />

                                {/*<FormInput*/}
                                {/*    control={form.control}*/}
                                {/*    label={"English Proficiency Certificate: TOEFL/TOEIC/IELTS or other valid certificate)"}*/}
                                {/*    name={"english_certificate"}*/}
                                {/*    type={"file"}*/}
                                {/*    required={true}*/}
                                {/*/>*/}
                        </div>
                        <Button type={"submit"} className={"mt-4 w-24 text-white"}>Submit</Button>
                    </form>
                </Form>
            </section>

        </main>

    </GeneralLayout>
}
