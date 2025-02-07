'use client'
import React from "react";
import GeneralLayout from "@/components/layout/GeneralLayout";
import useSWR from "swr";
import {Dosen} from "@/lib/types";
import {fetcherAcf} from "@/lib/api";
import {MoveRight, SearchIcon} from "lucide-react";

export default function KutipanPage() {
    const {data} = useSWR<{ acf: Dosen }[]>(`dosenx`, () => fetcherAcf<{
        acf: Dosen
    }[]>('dosen?per_page=500'))
    return <GeneralLayout
        featuredTitle={"Kutipan"}
        // featuredTitle={tempData?.title?.rendered}
        featuredImage={"/images/header_news.jpg"}
    >
        <main className={"min-h-screen px-[32px] py-[64px] space-y-[32px] "}>
            <div className={"flex justify-between items-center w-full"}>
                <h1>Publication</h1>
                <p>Panduan Sitasi (Manajemen Referensi)</p>
            </div>
            <div className={"w-full flex justify-end"}>
                <div className="flex">
                    <input type="text" id="website-admin"
                           className="rounded-none rounded-l-lg  border border-gray-300  block flex-1 min-w-0 w-full text-sm p-2.5  "
                           placeholder="Search"/>
                    <span
                        className="inline-flex items-center bg-primary text-white px-3 text-sm border border-e-0 border-gray-300 rounded-r-md">
                        <SearchIcon/>
                    </span>
                </div>
            </div>


            <div className={'w-full max-h-[500px] overflow-y-auto '}>

                <table
                    className="rounded-xl w-full text-sm text-left text-gray-500 mx-auto my-4 border border-gray-200">
                    <thead className="text-xs uppercase bg-slate-200 sticky top-0 ">
                    <tr>
                        <th scope="col" className="px-6 py-3">Dosen</th>
                        <th scope="col" className="px-6 py-3">Program Studi</th>
                        <th scope="col" className="px-6 py-3 w-[200px]">Google Scholar</th>
                        <th scope="col" className="px-6 py-3 w-[200px]">Scopus</th>
                    </tr>
                    </thead>
                    <tbody className="">
                    {data &&
                        data.map((item, index) => (
                            <tr key={index} className="odd:bg-white even:bg-slate-50">
                                <td className="px-6 py-2">{item.acf.name}</td>
                                <td className="px-6 py-2">{item.acf.name}</td>
                                <td className="px-6 py-2">
                                    <a
                                        href={![null, undefined, ''].includes(item.acf.google_scholar) ? item.acf?.google_scholar as string : "#"}
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <div className={"px-4 py-2 bg-green-300 text-white w-fit rounded-full "}>
                                            <MoveRight/>
                                        </div>
                                    </a>
                                </td>
                                <td className="px-6 py-2">
                                    <a
                                        href={![null, undefined, ''].includes(item.acf.scoopus) ? item.acf?.scoopus as string : "#"}
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <div className={"px-4 py-2 bg-green-300 text-white w-fit rounded-full "}>
                                            <MoveRight/>
                                        </div>
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </main>
    </GeneralLayout>
}