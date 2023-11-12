import React from "react";

const SearchNews = () => {
    return     <section className={"container py-12 pt-12 md:py-24"}>
        <div className={"grid grid-cols-1 md:grid-cols-4 gap-3 text-left items-center"}>
            <div >
                <label className={"block mb-2 font-semibold"}>Topic:</label>
                <select className={"min-w-[240px] w-full border-b-2 p-2"}>
                    <option>Job & Career</option>
                </select>
            </div>
            <div >
                <label className={"block mb-2 font-semibold"}>Month:</label>
                <select className={"min-w-[240px] w-full border-b-2 p-2"}>
                    <option value={"1"}>Januari</option>
                    <option value={"2"}>Februari</option>
                    <option value={"3"}>Maret</option>
                    <option value={"4"}>April</option>
                    <option value={"5"}>Mei</option>
                    <option value={"6"}>Juni</option>
                    <option value={"7"}>Juli</option>
                    <option value={"8"}>Agustus</option>
                    <option value={"9"}>September</option>
                    <option value={"10"}>Oktober</option>
                    <option value={"11"}>November</option>
                    <option value={"12"}>Desember</option>
                </select>
            </div>
            <div >
                <label className={"block mb-2 font-semibold"}>Year:</label>
                <select className={"min-w-[240px] w-full border-b-2 p-2"}>
                    <option>2022</option>
                    <option>2023</option>
                </select>
            </div>
            <div>
                <button className={"bg-primary text-white rounded-md w-full p-4"}>Search</button>
            </div>

        </div>
    </section>
}

export default SearchNews;
