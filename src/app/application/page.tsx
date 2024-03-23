"use client"

import GeneralLayout from "@/components/layout/GeneralLayout";
import FormInput from "@/components/form/form-input";
import {useForm} from "react-hook-form";
import * as zod from 'zod'
import {zodResolver} from "@hookform/resolvers/zod"
import {Form} from "@/components/Form";
import {Button} from "@/components/Button";
import {useState} from "react";
import swal from "sweetalert";

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
    country_origin: zod.string(),
    identity_card: zod.string(),
    identity_number: zod.string(),
    expired_date: zod.string(),
    faculty_objectives: zod.string(),
    study_program: zod.string(),
    phone: zod.string(),
    transcript: zod.string(),
    medical_certificate: zod.string(),
    passport1: zod.string(),
    passport2: zod.string(),
})
export type FormData = zod.infer<typeof formSchema>
export default function ApplicationPage() {
    const [loading, setLoading] = useState(false)
    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            birthday: "",
            country_origin: "",
            identity_card: "",
            identity_number: "",
            expired_date: "",
            faculty_objectives: "",
            study_program: "",
            phone: "",
            transcript: "",
            medical_certificate: "",
            passport1: "",
            passport2: "",
        }
    })


    const handleFormSubmit = async (data: any, e: any) => {
        setLoading(true)
        await fetch("https://hris.nobel.ac.id/api/application", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).catch(() => {
            swal({
                title: "Application form error, please try again",
                icon: "error",
            });
        }).then(() => {
            form.reset();
            clearFileInput("file1")
            clearFileInput("file2")
            clearFileInput("file3")
            clearFileInput("file4")
            swal({
                title: "Application form succeed, please contact our admin for more info",
                icon: "success",
            });
        }).finally(() => {
            setLoading(false)
        })

    }

    function clearFileInput(filename: string) {
        const fileInput: HTMLInputElement = document.getElementById(filename) as HTMLInputElement;
        if (fileInput) {
            fileInput.value = ''; // This line does not work for file inputs
            fileInput.files = null; // Reset the files property instead
        }
    }

    async function handleFile(e: any,
                              fieldName: "transcript" | "medical_certificate" | "passport1" | "passport2") {
        const image = e.target.files[0];
        const imageBase64 = await convertToBase64(image);
        if (imageBase64)
            form.setValue(fieldName, imageBase64 as string)
    }

    const convertToBase64 = (file: any) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };


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
                                name={"country_origin"}
                                required={true}
                            />

                            <FormInput
                                control={form.control}
                                label={"IDENTITY CARD"}
                                name={"identity_card"}
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
                                name={"expired_date"}
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
                        <div className={"grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-8"}>

                            <label className={"text-md space-y-3 flex flex-col"}>
                                <span>Academic transcripts of high school / MK,  diploma, or equivalent</span>
                                <input
                                    id={"file1"}
                                    type='file'
                                    // accept="image/*"
                                    className=""
                                    onChange={e => handleFile(e, "transcript")}
                                />
                            </label>

                            <label className={"text-md space-y-3  flex flex-col"}>
                                <span>Medical certificate</span>
                                <input
                                    id={"file2"}
                                    type='file'
                                    // accept="image/*"
                                    className=""
                                    onChange={e => handleFile(e, "medical_certificate")}
                                />
                            </label>

                            <label className={"text-md space-y-3  flex flex-col"}>
                                <span>Passport (min. 30 months after entering college)</span>
                                <input
                                    id={"file3"}
                                    type='file'
                                    // accept="image/*"
                                    className=""
                                    onChange={e => handleFile(e, "passport1")}
                                />
                            </label>

                            <label className={"text-md space-y-3  flex flex-col"}>
                                <span>Passport-sized photo</span>
                                <input
                                    id={"file4"}
                                    type='file'
                                    // accept="image/*"
                                    className=""
                                    onChange={e => handleFile(e, "passport2")}
                                />
                            </label>


                        </div>
                        <Button type={"submit"} className={"mt-4 w-24 text-white"}
                                disabled={loading}>{loading ? "Loading..." : "Submit"}</Button>
                    </form>
                </Form>
            </section>

        </main>

    </GeneralLayout>
}
