'use client'
import React, {useState} from "react";
import GeneralLayout from "@/components/layout/GeneralLayout";
import useSWR from "swr";
import {Dosen} from "@/lib/types";
import {fetcherAcf} from "@/lib/api";
import {MoveRight, SearchIcon} from "lucide-react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/Select";

export default function KutipanPage() {
    const [search, setSearch] = useState("")
    const [prodi, setProdi] = useState("")
    const {data} = useSWR<{ acf: Dosen }[]>(`dosenx`, () => fetcherAcf<{
        acf: Dosen
    }[]>('dosen?per_page=1000'))

    function formatDepartmentName(input: string): string {
        return input.replace(/^\d+/, "") // Hapus angka di awal
            .replace(/-/g, " ") // Ganti "-" dengan spasi
            .replace(/\b\w/g, c => c.toUpperCase()); // Kapitalisasi setiap kata
    }
    const filteredData = data?.filter((item) => {
        const nameMatches = item.acf.name.toLowerCase().includes(search.toLowerCase());

        const selectedProdi = item?.acf?.prodi?.find(
            (prod) => prod.post_title?.toLowerCase() === formatDepartmentName(prodi)?.toLowerCase()
        );

        // Jika `prodi` dipilih dan bukan string kosong, filter berdasarkan prodi
        if (prodi && prodi.trim() !== "") {
            return selectedProdi && nameMatches;
        }

        // Jika hanya cari berdasarkan nama
        return nameMatches;
    });

    return <GeneralLayout
        featuredTitle={""}
        // featuredTitle={tempData?.title?.rendered}
        featuredImage={"/images/header_news.jpg"}
    >
        <main className={"min-h-screen px-[32px] py-[64px] space-y-[32px] "}>
            <div className={"flex justify-between items-center w-full"}>
                <h1>Publikasi</h1>
                <p>Panduan Sitasi (Manajemen Referensi)</p>
            </div>
            <div className={"w-full flex gap-2 justify-end"}>
                <Select onValueChange={(value)=> {
                    setProdi(value)
                }}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Pilih prodi" />
                    </SelectTrigger>
                    <SelectContent >
                        <SelectGroup >
                            {/*<SelectLabel>Pilih Prodi</SelectLabel>*/}
                            <SelectItem value=" ">All</SelectItem>
                            <SelectItem value="akuntansi">Akuntansi</SelectItem>
                            <SelectItem value="manajemen">Manajemen</SelectItem>
                            <SelectItem value="sistem dan teknologi informasi">Sistem dan Teknologi Informasi</SelectItem>
                            <SelectItem value="teknik pertambangan">Teknik Pertambangan</SelectItem>
                            <SelectItem value="teknologi hasil perikanan">Teknologi Hasil Perikanan</SelectItem>
                            <SelectItem value="teknologi industri">Teknologi Industri</SelectItem>
                            <SelectItem value="pendidikan teknologi informasi">Pendidikan Teknologi Informasi</SelectItem>
                            <SelectItem value="magister manajemen">Magister Manajemen</SelectItem>
                            <SelectItem value="magister keuangan publik">Magister Keuangan Publik</SelectItem>
                            <SelectItem value="magister manajemen dan kewirausahaan">Magister Manajemen dan Kewirausahaan</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <div className="flex">
                    <input type="text" id="website-admin"
                           className="rounded-none rounded-l-lg  border border-gray-300  block flex-1 min-w-0 w-full text-sm p-2.5  "
                           placeholder="Search"
                           onChange={(e) => setSearch(e.target.value)}
                    />
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
                    {filteredData &&
                        filteredData.map((item, index) => (
                            <tr key={index} className="odd:bg-white even:bg-slate-50">
                                <td className="px-6 py-2">{item.acf.name}</td>
                                <td className="px-6 py-2">{item.acf.prodi.map((item) => formatDepartmentName(item.post_name))}</td>
                                <td className="px-6 py-2">
                                    <button
                                        className={"px-4 py-2 bg-green-300 text-white w-fit rounded-full disabled:bg-slate-300"}
                                        disabled={[null, undefined, ''].includes(item.acf.google_scholar)}
                                        onClick={() => {
                                            if (![null, undefined, ''].includes(item.acf.google_scholar))
                                                window.open(item.acf?.google_scholar as string, '_blank', 'noopener,noreferrer')
                                        }}
                                    >
                                        <div className={""}>
                                            <MoveRight/>
                                        </div>
                                    </button>
                                </td>
                                <td className="px-6 py-2">
                                    <button
                                        className={"px-4 py-2 bg-green-300 text-white w-fit rounded-full disabled:bg-slate-300"}
                                        disabled={[null, undefined, ''].includes(item.acf.scoopus)}
                                        onClick={() => {
                                            if (![null, undefined, ''].includes(item.acf.scoopus))
                                                window.open(item.acf?.scoopus as string, '_blank', 'noopener,noreferrer')
                                        }}
                                    >
                                        <div className={" "}>
                                            <MoveRight/>
                                        </div>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </main>
    </GeneralLayout>
}