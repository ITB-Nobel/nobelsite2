import React from "react";
import {DatePicker} from "@/components/Datepicker";
import {MagnifyingGlassIcon} from "@radix-ui/react-icons";

const EventSearch = () => {
    return    <section className={"container py-12 pt-12  "}>
        <div className={"flex flex-row  items-end justify-end gap-4"}>
            <div>
                <label className={"block mb-2 font-semibold"}>Start Date:</label>
                <DatePicker />
            </div>
            <div>
                <label className={"block mb-2 font-semibold"}>End Date:</label>
                <DatePicker/>
            </div>

            <div className={""}>
                <button className={"bg-primary text-white rounded-md  py-2 px-3"}>
                    <MagnifyingGlassIcon className={"w-6 h-6"} />
                </button>
            </div>

        </div>
    </section>
}

export default EventSearch;
