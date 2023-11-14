import {twMerge} from "tailwind-merge"
import {type ClassValue, clsx} from "clsx"
import moment from "moment/moment";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function uniqueArray<T>(array: T[]): T[] {
    // @ts-ignore
    return [...new Set(array)];
}

export function convertDate(date: string) {
    return moment(date, "DD/MM/YYYY hh:mm a").format('DD MMMM Y')
}

export function convertDateTime(datetime: string){
    return moment(datetime, "DD/MM/YYYY hh:mm a").format('DD MMMM Y HH:mm')
}
