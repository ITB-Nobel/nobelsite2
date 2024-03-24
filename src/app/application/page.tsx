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
import FormSelect from "@/components/form/form-select";


// const MAX_FILE_SIZE = 2000000;
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
    transcript: zod.any(),
    medical_certificate: zod.any(),
    passport1: zod.any(),
    passport2: zod.any(),
})
// export type FormSchema = zod.infer<typeof formSchema>

interface FormData{
    name: string
    birthday: string
    country_origin: string
    identity_card: string
    identity_number: string
    expired_date: string
    faculty_objectives: string
    study_program: string
    phone: string
    transcript: any
    medical_certificate: any
    passport1: any
    passport2: any
}
export default function ApplicationPage() {
    const [loading, setLoading] = useState(false)
    const form = useForm({
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
            transcript: null,
            medical_certificate: null,
            passport1: null,
            passport2: null,
        }
    })
    const faculty_objectives = form.watch('faculty_objectives')

    const handleFormSubmit = async (data: FormData) => {
        const formDataToSend = new FormData();
        formDataToSend.append('transcript', data.transcript[0]);
        formDataToSend.append('passport1', data.passport1[0]);
        formDataToSend.append('passport2', data.passport2[0]);
        formDataToSend.append('medical_certificate', data.medical_certificate[0]);
        formDataToSend.append('name', data.name);
        formDataToSend.append('birthday', data.birthday);
        formDataToSend.append('country_origin', data.country_origin);
        formDataToSend.append('identity_card', data.identity_card);
        formDataToSend.append('identity_number', data.identity_number);
        formDataToSend.append('expired_date', data.expired_date);
        formDataToSend.append('faculty_objectives', data.faculty_objectives);
        formDataToSend.append('study_program', data.study_program);
        formDataToSend.append('phone', data.phone);

        setLoading(true)
        await fetch("https://join1.nobel.ac.id/api/v1/foreign", {
            method: 'POST',
            // headers: {
            //     'Content-Type': 'application/json',
            // },
            body: formDataToSend,
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

    // async function handleFile(e: any,
    //                           fieldName: "transcript" | "medical_certificate" | "passport1" | "passport2") {
    //     const image = e.target.files[0];
    //     const imageBase64 = await convertToBase64(image);
    //     if (imageBase64)
    //         form.setValue(fieldName, imageBase64 as string)
    // }

    // const convertToBase64 = (file: any) => {
    //     return new Promise((resolve, reject) => {
    //         const fileReader = new FileReader();
    //         fileReader.readAsDataURL(file);
    //         fileReader.onload = () => {
    //             resolve(fileReader.result);
    //         };
    //         fileReader.onerror = (error) => {
    //             reject(error);
    //         };
    //     });
    // };

    function filterProdi(){
        if(faculty_objectives === "Faculty of Technology and Business")
        return [
            {
                text: "Management Department",
                value: "Management Department"
            },
            {
                text: "Sistem Information and Technology Department",
                value: "Sistem Information and Technology Department"
            },
        ]
        else
            return [
                {
                    text: "Magister of Management",
                    value: "Magister of Management"
                },
                {
                    text: "Magister of Public Financial",
                    value: "Magister of Public Financial"
                },
                {
                    text: "Magister of Entrepreneurial and Business Management",
                    value: "Magister of Entrepreneurial and Business Management"
                },
            ]
    }
    // @ts-ignore
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
                                type={"text"}
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



                            <FormSelect
                                control={form.control}
                                label={"FACULTY OBJECTIVES"}
                                name={"faculty_objectives"}
                                required={true}
                                items={[
                                    {
                                        text: "Faculty of Technology and Business",
                                        value: "Faculty of Technology and Business"
                                    },
                                    {
                                        text: "Faculty of Post Graduate",
                                        value: "Faculty of Post Graduate"
                                    },
                                ]}
                            />

                            <FormSelect
                                control={form.control}
                                label={"STUDY PROGRAM"}
                                name={"study_program"}
                                required={true}
                                items={filterProdi()}
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
                                    id={"transcript"}
                                    type='file'
                                    {...form.register("transcript")}
                                    // accept="image/*"
                                    className=""
                                    // onChange={e => handleFile(e, "transcript")}
                                />
                            </label>

                            <label className={"text-md space-y-3  flex flex-col"}>
                                <span>Medical certificate</span>
                                <input
                                    id={"medical_certificate"}
                                    type='file'
                                    {...form.register("medical_certificate")}
                                    // accept="image/*"
                                    className=""
                                    // onChange={e => handleFile(e, "medical_certificate")}
                                />
                            </label>

                            <label className={"text-md space-y-3  flex flex-col"}>
                                <span>Passport (min. 30 months after entering college)</span>
                                <input
                                    id={"passport1"}
                                    type='file'
                                    {...form.register("passport1")}
                                    // accept="image/*"
                                    className=""
                                    // onChange={e => handleFile(e, "passport1")}
                                />
                            </label>

                            <label className={"text-md space-y-3  flex flex-col"}>
                                <span>Passport-sized photo</span>
                                <input
                                    id={"passport2"}
                                    type='file'
                                    // accept="image/*"
                                    {...form.register("passport2")}
                                    className=""
                                    // onChange={e => handleFile(e, "passport2")}
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
