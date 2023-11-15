'use client'

import GeneralLayout from "@/components/layout/GeneralLayout";
import React from "react";
import {ClockIcon} from "lucide-react";
import Image from "next/image";
import useSWR from "swr";
import {DetailNewsType} from "@/lib/types";
import {fetcher} from "@/lib/api";
import {usePathname} from "next/navigation";
import {NewsCard} from "@/app/components/NewsCard";
import Link from "next/link";
import Categories from "@/components/Categories";
import {Skeleton} from "@/components/Skeleton";
import {convertDate} from "@/lib/utils";
import {PersonIcon} from "@radix-ui/react-icons";
import Tags from "@/components/Tags";

const DetailNewsPage = () => {
    const pathname = usePathname()
    const idNews = pathname.split('/')[2]
    const {data} =
        useSWR<DetailNewsType>(`news-${idNews}`, () => fetcher(`news/${idNews}`))
    return <GeneralLayout>
        <main className={"pt-12"}>
            {data ? <>
                    <DetailNewsContent {...data}/>
                    <NewsCardList exceptID={idNews}/>
                </>
                : <Skeleton className={"w-full rounded-xl h-screen"}/>}
        </main>
    </GeneralLayout>
}

const DetailNewsContent = ({acf, tags}: DetailNewsType) =>
    <section data-aos={"fade-in"} className={"container"}>
        <div className={""}>
            <h1 className={"text-5xl font-semibold "}>{acf.title}</h1>
            <div className={"flex gap-4 items-center text-slate-500"}>
                <p className={"mt-4 flex gap-2 items-center "}>
                    <ClockIcon className={"w-4 h-4"}/>
                    {convertDate(acf.date)}
                </p>
                <p className={"mt-4 flex gap-2 items-center capitalize"}>
                    <PersonIcon className={"w-4 h-4"}/>
                    {acf.author.display_name}
                </p>

            </div>

            <div className={"my-12"}>
                <div className={"relative w-full h-96"}>
                    <Image
                        src={acf.photo.url}
                        alt={acf.deskripsi_gambar}
                        layout={"fill"}
                        objectFit={"cover"}
                    />
                </div>
                <p className={"text-sm my-2 text-center"}>{acf.deskripsi_gambar}</p>
            </div>

            <div className={"space-y-4 text-justify"} dangerouslySetInnerHTML={{__html: acf.description}}/>
            {
                tags.length > 0 &&
                <>
                    <hr className={"my-4"}/>
                    <div className={"flex gap-2 items-center"}>
                        Tags :
                        <div className={"flex gap-4 items-center"}>
                            {
                                <Tags  key={`categories-detail-news`} ids={tags}/>
                            }
                        </div>
                    </div>
                    <hr className={"mt-4"}/>
                </>
            }


        </div>
    </section>

const NewsCardList = ({exceptID}: { exceptID: string }) => {
    const {data} =
        useSWR<DetailNewsType[]>
        (`latest-news`, () => fetcher(`news?_embed&orderby=date&order=desc&_fields=id,acf,slug,title,categories&per_page=55&exclude=${exceptID}`))
    return <section className={"py-24 text-center"}>
        <h1 className={"text-4xl font-semibold"}>Berita <span className={"text-primary"}>Lainnya</span></h1>
        <div className={"overflow-x-scroll snap-x whitespace-nowrap space-x-8 mt-6 px-36 py-6 items-center flex "}>
            {data && data.map((item, index) =>
                <div className={"inline-block"} key={index}>
                    <NewsCard {...item}/>
                </div>)}
        </div>
        <Link href={"/news"}>
            <button className={"border-2 px-4 py-2 border-black hover:bg-black hover:text-white mt-12 md:mt-24"}>
                Lihat Semua Berita <span className={"ml-2"}>&#8594;</span>
            </button>
        </Link>

    </section>
}


export default DetailNewsPage;
