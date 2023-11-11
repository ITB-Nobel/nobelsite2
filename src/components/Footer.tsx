'use client'
import React from "react";

import {Facebook, Instagram, Youtube} from "lucide-react";

import TiktokIcon from "@/components/icons/TiktokIcon";
import Image from "next/image";
import Link from "next/link";
import {fetcher} from "@/lib/api";
import useSWR from 'swr'
import {Logo} from "@/lib/types";


export type Acf = {
    logo: Logo;
    facebook: string;
    instagram: string;
    tiktok: string;
    youtube: string;
    group1: Group;
    group2: Group;
    group3: Group3;
}

export type Group = {
    group_name: string;
    label: string;
    link1: string;
    label2: string;
    link2: string;
    label3: string;
    link3: string;
    label4: string;
    link4: string;
    label5: string;
    link5: string;
    label6: string;
    link6: string;
}

export type Group3 = {
    group_name: string;
    alamat: string;
    telepon: string;
    whatsapp: string;
}

const Footer = () => {
    const {data} = useSWR<{ acf: Acf }[]>('footer', () => fetcher('footer?_fields=acf'))
    return <footer className={" pt-12 bg-black text-white "}>
        {
            data && data.length > 0 &&
            <div className={"container items-start grid grid-cols-1 lg:grid-cols-6 gap-8 "}>
                <div className={"mx-auto col-span-1 relative h-24 lg:h-20 w-1/2 lg:w-full"}>
                    <Image src={data[0].acf.logo.url}
                           layout={"fill"}
                           alt={"Logo"}
                           className={"h-auto"}
                    />
                </div>
                {/*GROUP FOOTER 1*/}
                <div className={"uppercase text-sm col-span-2 lg:col-span-1"}>
                    <h2 className={"text-md font-semibold mb-4 text-slate-400"}>
                        {data[0].acf.group1.group_name}
                    </h2>

                    <ul className={"space-y-2 capitalize"}>

                        <li>
                            <Link href={data[0].acf.group1.link1}>
                                {data[0].acf.group1.label}
                            </Link>
                        </li>
                        <li>
                            <Link href={data[0].acf.group1.link2}>
                                {data[0].acf.group1.label2}
                            </Link>
                        </li>
                        <li>
                            <Link href={data[0].acf.group1.link3}>
                                {data[0].acf.group1.label3}
                            </Link>
                        </li>
                        <li>
                            <Link href={data[0].acf.group1.link4}>
                                {data[0].acf.group1.label4}
                            </Link>
                        </li>
                        <li>
                            <Link href={data[0].acf.group1.link5}>
                                {data[0].acf.group1.label5}
                            </Link>
                        </li>
                        <li>
                            <Link href={data[0].acf.group1.link6}>
                                {data[0].acf.group1.label6}
                            </Link>
                        </li>

                    </ul>
                </div>

                {/*GROUP FOOTER 2*/}
                <div className={"uppercase text-sm col-span-2"}>
                    <h2 className={"text-md font-semibold mb-4 text-slate-400"}>
                        {data[0].acf.group2.group_name}
                    </h2>
                    <ul className={"space-y-2 capitalize"}>
                        <li>
                            <Link href={data[0].acf.group2.link1}>
                                {data[0].acf.group2.label}
                            </Link>
                        </li>
                        <li>
                            <Link href={data[0].acf.group2.link2}>
                                {data[0].acf.group2.label2}
                            </Link>
                        </li>
                        <li>
                            <Link href={data[0].acf.group2.link3}>
                                {data[0].acf.group2.label3}
                            </Link>
                        </li>
                        <li>
                            <Link href={data[0].acf.group2.link4}>
                                {data[0].acf.group2.label4}
                            </Link>
                        </li>
                        <li>
                            <Link href={data[0].acf.group2.link5}>
                                {data[0].acf.group2.label5}
                            </Link>
                        </li>
                        <li>
                            <Link href={data[0].acf.group2.link6}>
                                {data[0].acf.group2.label6}
                            </Link>
                        </li>

                    </ul>
                </div>
                {/*GROUP FOOTER 3*/}
                <div className={"space-y-2 col-span-2 text-sm"}>
                    <h2 className={"text-md font-semibold mb-4 text-slate-400 uppercase"}>
                        {data[0].acf.group3.group_name}
                    </h2>
                    <p className={""}>{data[0].acf.group3.alamat}</p>
                    <p>Telepon: {data[0].acf.group3.telepon}</p>
                    <p>Whatsapp: {data[0].acf.group3.whatsapp}</p>
                    <div className={""}>
                        <ul className={"flex gap-4 justify-center md:justify-start py-2"}>
                            <li>
                                <Link
                                    href={data[0].acf.instagram}
                                    className={"group"}
                                >
                                    <div
                                        className={"bg-white group-hover:bg-primary text-primary w-12 h-12 cursor-pointer rounded-full flex items-center"}>
                                        <Instagram className={"mx-auto group-hover:text-white"} strokeWidth={1}/>
                                    </div>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href={data[0].acf.facebook}
                                    className={"group"}
                                >
                                    <div
                                        className={"bg-white group-hover:bg-primary text-primary w-12 h-12 cursor-pointer rounded-full flex items-center"}>
                                        <Facebook className={"mx-auto group-hover:text-white"} strokeWidth={1}/>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={data[0].acf.youtube}
                                    className={"group"}
                                >
                                    <div
                                        className={"bg-white group-hover:bg-primary text-primary w-12 h-12 cursor-pointer rounded-full flex items-center"}>
                                        <Youtube className={"mx-auto group-hover:text-white"} strokeWidth={1}/>
                                    </div>
                                </Link>
                            </li>

                            <li>
                                <Link href={data[0].acf.tiktok} className={"group"}>
                                    <div
                                        className={"bg-white group-hover:bg-primary text-primary w-12 h-12 cursor-pointer rounded-full flex items-center"}>
                                        <TiktokIcon className={"mx-auto group-hover:text-white"} strokeWidth={1}/>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>}

        <hr className={"mt-8 border-[0.5px] border-gray-400"}/>
        <p className={"text-center py-4 text-xs"}>Copyright © 2023 NOBEL INDONESIA. All Rights Reserved. Terms Of Use.
            Privacy Statement.</p>
    </footer>
}

export default Footer;
