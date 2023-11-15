import React, {Dispatch} from "react";
import {DatePicker, useDatePicker} from "@/components/Datepicker";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/Select";
import {MagnifyingGlassIcon} from "@radix-ui/react-icons";

const SearchNews =  ({rangeDate, setRangeDate}: {
    rangeDate: any,
    setRangeDate: Dispatch<{ start_date: Date, end_date: Date }>
}) => {
    const {date, DatePickerComponent} = useDatePicker()
    const {date: date2, DatePickerComponent: DatePickerComponent2} = useDatePicker()

    return <section className={"container py-12 pt-12  "}>
        <div className={"flex flex-row  items-end justify-end gap-4"}>
            <div>
                <label className={"block mb-2 font-semibold"}>Start Date:</label>
                <DatePickerComponent/>
            </div>
            <div>
                <label className={"block mb-2 font-semibold"}>End Date:</label>
                <DatePickerComponent2/>
            </div>


            <button onClick={() => setRangeDate({
                start_date: date,
                end_date: date2
            })} className={"bg-primary text-white rounded-md  py-2 px-3"}>
                <MagnifyingGlassIcon className={"w-6 h-6"}/>
            </button>


        </div>
    </section>
}
export default SearchNews;
