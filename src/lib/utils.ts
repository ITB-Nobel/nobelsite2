import { twMerge } from "tailwind-merge"
import { clsx, type ClassValue } from "clsx"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function uniqueArray<T>(array: T[]): T[] {
    // @ts-ignore
    return [...new Set(array)];
}
