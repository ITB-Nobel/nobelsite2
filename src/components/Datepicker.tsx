"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon} from "lucide-react"
import { id } from 'date-fns/locale';
import { cn } from "@/lib/utils"
import {Popover, PopoverContent, PopoverTrigger} from "@/components/Popover";
import {Button} from "@/components/Button";
import {Calendar} from "@/components/Callendar";


export function DatePicker() {
    const [date, setDate] = React.useState<Date| undefined>(new Date())


    // @ts-ignore
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-[280px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "d MMMM Y") : <span>Pick a date</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus

                    locale={id}
                />
            </PopoverContent>
        </Popover>
    )
}
