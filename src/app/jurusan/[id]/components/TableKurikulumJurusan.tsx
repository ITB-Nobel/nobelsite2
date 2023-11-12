'use client'
import React from "react";
import {SectionCurriculumStudyJurusanType} from "@/app/jurusan/[id]/components/SectionCurriculumStudyJurusan";

const TableKurikulumJurusan = ({items} : { items: SectionCurriculumStudyJurusanType[] }) => {
    return <table className="w-full text-sm text-left text-gray-500 mx-auto my-4  ">
        <thead
            className="text-xs text-white uppercase bg-black ">
        <tr>
            <th scope="col" className="px-6 py-3">
                Matakuliah
            </th>
            <th scope="col" className="px-6 py-3">
                SKS
            </th>
        </tr>
        </thead>
        <tbody>
        {/* eslint-disable-next-line react/jsx-key */}
        {
            items.map((item,index) => <tr key={index} className="bg-white border-b">
                <th scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    {item.acf.nama_matakuliah}
                </th>
                <td className="px-6 py-4">
                    {item.acf.semester}
                </td>
            </tr>)
        }



        </tbody>
    </table>
}

export default TableKurikulumJurusan
