import useSWR from "swr";
import {Category} from "@/lib/types";
import {fetcher} from "@/lib/api";
import React from "react";

type TagsType = {
    key: string
    ids: string[]
    className?: string
}
const Tags = ({key, ids, className}: TagsType) => {
    const idsString = ids?.toString()
    const {data} =
        useSWR<Category[]>(`${key}-${idsString}`, () => fetcher(`tags?include=${idsString}`))
    if (data)
        return <> {data.map((item, index) => <div className={`${className} hover:text-primary cursor-pointer`} key={index}>{item.name}</div>)} </>
}
export default Tags
