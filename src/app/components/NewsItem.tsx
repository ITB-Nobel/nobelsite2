'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import BlurImage from "@/components/BlurImage";
import {DetailNewsType} from "@/lib/types";
import {convertDate} from "@/lib/utils";
import Tags from "@/components/Tags";

export const NewsItem = ({acf, tags, id,slug}: DetailNewsType) => {

    const {title, date, author, description, photo} = acf
    return <Link href={`news/${slug}`} className={"lg:col-span-2 mt-4 lg:row-span-1 "}>
        <div
            data-aos={"fade-up"}
            className={"card-shadow rounded-xl text-left flex flex-col lg:flex-row  "}>

         <div>
                 <BlurImage alt={acf.photo.alt} image={acf.photo.url} className={"h-full w-full md:w-[300px]"}/>
             </div>

            {/* <div className={"hidden lg:block"}>
                <div className={"relative md:w-[320px] h-48 self-start rounded-tl-xl rounded-tr-xl lg:rounded-tr-none"}>
                    <Image
                        src={photo.url}
                        alt={slug}
                        layout={"fill"}
                        objectFit={"cover"}
                        className={"rounded-tl-xl rounded-tr-xl lg:rounded-tr-none"}
                    />
                </div>
            </div> */}

            <div>
                <h1 className={"text-[20px] leading-normal font-semibold mx-6 mt-8"}>
                    {title}
                </h1>
                <article>
                    <div className={"mt-6 mx-6 max-h-[180px] overflow-hidden text-ellipsis flex-nowrap"}
                         dangerouslySetInnerHTML={{__html: description?.split('<p>')[1] as string}}/>
                    <p className={"!text-sm text-slate-400 !capitalize font-light mt-4 ml-6"}>{convertDate(date)}</p>
                </article>
                <div className={"flex flex-row gap-2 items-center mt-8 mb-4 mx-6"}>
                    <Tags key={slug}
                          ids={tags?.slice(0, 2)}
                          className={"mt-12 lg:mt-0 bg-slate-50 text-primary !text-xs rounded-md px-4 py-2 max-w-fit "}
                    />
                </div>
            </div>
        </div>
    </Link>


    // return <Link href={`/news/${slug}`}>
    //     <div className={"min-h-[200px] flex flex-col md:flex-row shadow-md rounded-md"}>
    //         <div>
    //             <BlurImage alt={acf.photo.alt} image={acf.photo.url} className={"h-full w-full md:w-[300px]"}/>
    //         </div>

    //         <div className={"p-4 text-left"}>
    //             <h3 className={"text-sm md:text-lg font-semibold"}> {acf.title}</h3>
    //             <br></br>
    //             <article>
    //             <div className={" mx-6 max-h-[220px] overflow-hidden text-ellipsis flex-nowrap"}
    //                  dangerouslySetInnerHTML={{__html: acf.description?.split('<p>')[1] as string}}/>
    //             {/* <p className={"!text-sm text-slate-400 !capitalize font-light mt-4 ml-6"}>{convertDate(date)}</p> */}
    //         </article>
                
    //             <p className={"mt-2 text-xs"}>{convertDate(acf.date)}</p>

    //             {
    //                 tags.length > 0 &&
    //                 <div className={"flex flex-row gap-2 mt-2 text-xs flex-wrap absolute bottom-5 left-25"}>
    //                     <Tags key={"tags"} className={"bg-primary text-white rounded-full px-2 py-1"}
    //                           ids={tags}/>
    //                 </div>}
    //         </div>
    //     </div>
    // </Link>
}
