import React from "react";

const TableKurikulumJurusan = () => {
    return <table className="w-3/4 text-sm text-left text-gray-500 mx-auto my-4  ">
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
        {[1,1,1,1,1,1].map(() => <tr className="bg-white border-b">
            <th scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Apple MacBook Pro 17"
            </th>
            <td className="px-6 py-4">
                4
            </td>
        </tr>)}


        </tbody>
    </table>
}

export default TableKurikulumJurusan
