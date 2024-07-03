import React from "react";
import Link from "next/link";
import {DetailNewsType} from "@/lib/types";
import Image from "next/image";
import {convertDate} from "@/lib/utils";
import Tags from "@/components/Tags";


const NewsNormalCard = ({slug, acf, id, tags}: DetailNewsType) => {
    const {title, date, author, description, photo} = acf
    return <Link
        href={`news/${slug}`}
        data-aos={"fade-up"}
        className={"max-h-fit card-shadow rounded-xl text-left row-span-1 relative pb-24"}>
        <div>
            <h1 className={"text-[20px] leading-normal  font-semibold mx-6 my-6"}>
                {title}
            </h1>
            <article>
                <div className={" mx-6 max-h-[220px] overflow-hidden text-ellipsis flex-nowrap"}
                     dangerouslySetInnerHTML={{__html: description?.split('<p>')[1] as string}}/>
                <p className={"!text-sm text-slate-400 !capitalize font-light mt-4 ml-6"}>{convertDate(date)}</p>
            </article>
        </div>
        <div className={"flex flex-row gap-2 items-center my-4 mx-6 absolute bottom-0"}>
            <Tags key={slug}
                  ids={tags?.slice(0, 2)}
                  className={"mt-12 lg:mt-0 bg-slate-50 text-primary !text-xs rounded-md px-4 py-2 max-w-fit "}
            />
        </div>
    </Link>
}

const NewsWiderCard = ({acf, id, slug, tags}: DetailNewsType) => {
    const {title, date, author, description, photo} = acf
    return <Link href={`news/${slug}`} className={"lg:col-span-2 mt-4 lg:row-span-1 "}>
        <div
            data-aos={"fade-up"}
            className={"card-shadow rounded-xl text-left flex flex-col lg:flex-row  "}>

            <div className={"hidden lg:block"}>
                <div className={"relative md:w-[320px] h-48 self-start rounded-tl-xl rounded-tr-xl lg:rounded-tr-none"}>
                    <Image
                        src={photo.url}
                        alt={slug}
                        layout={"fill"}
                    />
                </div>
            </div>

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
}

const NewsWidestCard = ({acf, id, slug, tags}: DetailNewsType) => {
    const {title, date, author, description, photo} = acf
    return <Link href={`news/${slug}`} className={"col-span-1 lg:col-span-3"}>
        <div
            data-aos={"fade-left"}
            className={"flex flex-col lg:flex-row  gap-8  card-shadow rounded-xl"}>
            <div className={"relative flex-1 rounded-tl-lg rounded-tr-lg lg:rounded-tr-none lg:rounded-bl-lg"}>
                <Image
                    src={photo.url}
                    alt={slug}
                    layout={"fill"}
                />
            </div>

            <div className={"flex-1 flex flex-col  text-left justify-between gap-8 my-12 mr-4 px-8 lg:px-0"}>
                <div className={""}>

                    <h1 className={"text-[20px] leading-normal font-semibold "}>
                        {title}
                    </h1>
                    <article>
                        <div
                            className={"mt-6 text-md lg:text-lg max-h-[200px] overflow-hidden text-ellipsis flex-nowrap"}
                            dangerouslySetInnerHTML={{__html: description?.split('<p>')[1] as string}}/>
                        <p className={"!text-sm text-slate-400 !capitalize font-light mt-4"}>{convertDate(date)}</p>
                    </article>
                </div>

                <div className={"flex flex-row gap-2 items-center"}>
                    <Tags key={slug}
                          ids={tags?.slice(0, 2)}
                          className={"mt-12 lg:mt-0 bg-slate-50 text-primary !text-xs rounded-md px-4 py-2 max-w-fit "}
                    />
                </div>


            </div>
        </div>
    </Link>
}

const NewsHigherCard = ({acf, slug, id, tags}: DetailNewsType) => {
    const {title, date, author, description, photo} = acf
    return <Link href={`news/${slug}`} className={"lg:row-span-2"}>
        <div
            data-aos={"fade-right"}
            className={"h-full  card-shadow rounded-xl text-left  flex flex-col justify-between "}>
            <div>

                <h1 className={"text-[20px] leading-normal  font-semibold mx-6 my-6"}>
                    {title}
                </h1>
                <div className={"relative w-full hidden lg:block min-h-[200px] flex-q"}>
                    <Image
                        src={photo.url}
                        alt={slug}
                        layout={"fill"}
                    />
                </div>
                <article>
                    <div className={"mt-6 mx-6 max-h-[380px] overflow-hidden text-ellipsis flex-nowrap "}
                         dangerouslySetInnerHTML={{__html: description?.split('<p>')[1] as string}}/>
                    <p className={"!text-sm text-slate-400 !capitalize font-light mt-4 ml-6"}>{convertDate(date)}</p>
                </article>
            </div>
            <div className={"flex flex-row gap-2 items-center mb-4 ml-6"}>
                <Tags key={slug}
                      ids={tags?.slice(0, 2)}
                      className={"mt-12 lg:mt-0 bg-slate-50 text-primary !text-xs rounded-md px-4 py-2 max-w-fit "}
                />
            </div>
        </div>
    </Link>
}

const NewsCard = ({acf, slug, id, tags}: DetailNewsType) => {
    const {title, date, author, description, photo} = acf
    return <Link href={`/news/${slug}`}>
        <div className={"space-y-4 w-[320px] min-h-[420px]  relative bg-white rounded-xl card-shadow"}>
            <div className={"relative h-[270px] w-full"}>
                {
                    <Image
                        src={photo.url}
                        alt={title}
                        layout={"fill"}
                        objectFit={"cover"}
                        className={"rounded-t-xl  brightness-75"}
                    />
                }
            </div>

            <div className={"absolute flex-col top-4 left-4 flex gap-2 text-white text-sm"}
                 style={{marginTop: "0px"}}>

                <Tags key={slug}
                      ids={tags?.slice(0, 1)}
                      className={"bg-primary rounded-md py-1 px-2"}
                />

            </div>
            <div
                className={"absolute bg-gradient-black   w-full h-[50px] top-[205px] shadow-[inset_-12px_-8px_40px_#46464620] text-left px-4 flex items-center text-white text-2xl font-semibold"}>
                <h2>{convertDate(date)}</h2>
            </div>

            <div className={"text-md md:text-xl font-semibold mt-2 px-4 w-full whitespace-pre-wrap text-left "}>
                {title}
            </div>
        </div>
    </Link>
}

export {NewsNormalCard, NewsWiderCard, NewsWidestCard, NewsHigherCard, NewsCard}
