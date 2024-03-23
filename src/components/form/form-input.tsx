"use client"

import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/Form";
import {Input} from "@/components/input";
import {Control} from "react-hook-form";


type FormInputType = {
    control: Control<any>,
    required?: boolean,
    description?: string,
    placeholder?: string,
    label: string,
    name: string,
    type?: "text" | "number" | "email" | "date" | "file"
}
export default function FormInput({
                                      required = false,
                                      control,
                                      description,
                                      placeholder,
                                      label,
                                      name,
                                      type = 'text'
                                  }: FormInputType) {
    return <FormField
        control={control}
        name={name}
        render={({field}) => (
            <FormItem>
                <FormLabel>{label} {required &&
                    <span className={"ml-0.2 font-medium text-red-700"}>*</span>} </FormLabel>
                <FormControl>
                    <Input placeholder={placeholder} {...field} type={type}/>
                </FormControl>
                {description && <FormDescription>{description}</FormDescription>}
                <FormMessage/>
            </FormItem>
        )}
    />
}
