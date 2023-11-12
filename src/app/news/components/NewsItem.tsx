
import React from "react";
import Link from "next/link";

export const NewsItem = () => {
    return <Link href={"/news/123"} >
            <div className={"min-h-[150px] flex flex-col md:flex-row shadow-md rounded-md"}>
                <img src={"https://placehold.co/200x150"} className={"h-full w-full md:w-[250px]"} />
                <div className={"p-4"}>
                    <h3 className={"text-sm md:text-lg font-semibold"}>Bangga! 5 Anggota BEM Nobel Mendapatkan piala</h3>
                    <div className={"flex flex-row gap-2 mt-2 text-xs"}>
                        <button className={"bg-blue-800 p-2 rounded-md text-white"}>Science</button>
                        <button className={"bg-blue-800 p-2 rounded-md text-white"}>Education</button>
                        <button className={"bg-blue-800 p-2 rounded-md text-white"}>Lorem Ipsum</button>
                    </div>
                    <p className={"mt-2 text-xs"}>2 Days Ago</p>
                </div>
            </div>
        </Link>
}
