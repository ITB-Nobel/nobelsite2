import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/Form";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/Select";
import {Control} from "react-hook-form";

type FormSelectType = {
    control: Control<any>,
    required?: boolean,
    description?: string,
    placeholder?: string,
    label: string,
    name: string,
    type?: "text" | "number" | "email" | "date" | "file",
    items: { text: string, value: string }[]
}
export default function FormSelect({
                                       control,
                                       name,
                                       label,
                                       required,
                                       placeholder,
                                       description,
                                       items
                                   }: FormSelectType) {
    return <FormField
        control={control}
        name={name}
        render={({field}) => (
            <FormItem>
                <FormLabel>{label} {required &&
                    <span className={"ml-0.2 font-medium text-red-700"}>*</span>} </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder={placeholder}/>
                        </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                        {
                            items.map((item, index) => <SelectItem key={index}
                                                                   value={item.value}>{item.text}</SelectItem>)
                        }
                    </SelectContent>
                </Select>
                {description && <FormDescription>{description}</FormDescription>}
                <FormMessage/>
            </FormItem>
        )}
    />
}
