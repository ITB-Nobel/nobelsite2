import React from "react"


const TabAktivitasJurusan = () => {
    return <>
        <section className={"py-12 text-left w-full flex flex-row gap-12"}>
            <div className={"basis-3/4 space-y-4"}>
                <h1 className={"text-primary"}>1ST PLACE OF NATIONAL COMPETITION OF BIOINFORMATICS - NATANIA ABIGAIL
                    CHRISTY</h1>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p>In this competition, Abigail brought 2 (two) specific topic, "Protein Study Bacillus subtilis dye
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    decolorizing peroxidase" and "Speed and Mutation Variation of SARS-CoV-2 Virus Analysis in Asia
                    Period
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    August-October".
                </p>
            </div>
            <div>
                {/*<StaticImage*/}
                {/*    src={"https://www.uph.edu/wp-content/uploads/2018/08/JUARA11-e1666337703695.jpg?x77749"}*/}
                {/*    alt={"Image"}*/}
                {/*/>*/}
            </div>
        </section>
        <section className={"grid grid-cols-3 gap-4"}>
            {/*{*/}
            {/*    [1, 2, 3].map(() => <AktivitasJurusanNews/>)*/}
            {/*}*/}
        </section>
    </>
}


const AktivitasJurusanNews = () => {
    return <div className={"relative group"}>
        {/*<StaticImage*/}
        {/*    src={"https://www.uph.edu/wp-content/uploads/2018/08/Peserta-Seleksi-Final-Kompetisi-Nasional-KNMIPA-PT-Bidang-Biologi-2021-e1666338009261-600x0-c-default.jpg"}*/}
        {/*    alt={"Aktivitas Jurusan News"}*/}
        {/*    className={"brightness-75 group-hover:brightness-90"}*/}
        {/*/>*/}
        <div className={"absolute bottom-0 !text-white text-left px-8 py-4"}>
            <h4 className={"text-xl"}>Finalists of the National Competition (KNMIPA-PT) for Biology 2021</h4>
            <p className={"text-sm"}>Caitlyn Christvania Sihombing, Jevon Aaron Lesmana & Samuel Emmanuel Soentoro</p>
        </div>

    </div>
}


export default TabAktivitasJurusan
