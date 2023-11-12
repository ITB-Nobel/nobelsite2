import useSWR from "swr";
import {Category} from "@/lib/types";
import {fetcher} from "@/lib/api";
import React from "react";

type CategoriesType = {
    key: string
    ids: string[]
    className?: string
}
const Categories = ({key, ids, className}: CategoriesType) => {
    const idsString = ids?.toString()
    const {data} =
        useSWR<Category[]>(`${key}-${idsString}`, () => fetcher(`categories?include=${idsString}`))
    if (data)
        return <> {data.map((item, index) => <div className={className} key={index}>{item.name}</div>)} </>
}


export default Categories
