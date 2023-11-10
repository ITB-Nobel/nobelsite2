import React from "react";

import {Facebook, Instagram, Linkedin, Twitter, Youtube} from "lucide-react";

import TiktokIcon from "@/components/icons/TiktokIcon";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return <footer className={" pt-12 bg-black text-white "}>
        <div className={"container items-start grid grid-cols-1 lg:grid-cols-6 gap-8 "}>
            <div className={" mx-auto col-span-1 "}>
                {/*<Image src={"../../images/logo_putih.png"} width={250} alt={"Logo"} className={"h-auto"}/>*/}
            </div>
            <div className={"uppercase text-sm col-span-2 lg:col-span-1"}>
                <h2 className={"text-md font-semibold mb-4 text-slate-400"}>
                    Service
                </h2>

                <ul className={"space-y-2 capitalize"}>
                    <li>Sistem Informasi Akademik</li>
                    <li>E-Learning</li>
                    <li>E-Journal</li>
                    <li>Sister</li>
                    <li>Repository</li>
                    <li>Library</li>
                </ul>
            </div>
            <div className={"uppercase text-sm col-span-2"}>
                <h2 className={"text-md font-semibold mb-4 text-slate-400"}>
                    Our Organization
                </h2>
                <ul className={"space-y-2 capitalize"}>
                    <li>Nobel Entrepreneurship Center (NEC)</li>
                    <li>Nobel Language Center (NLC)</li>
                    <li>Career Center And Industry Relation Specialist</li>
                    <li>Nobel Indonesia Digital Creative (NIDC)</li>
                    <li>Nobel Development Career (NDC)</li>
                    <li>Mubyl Handaling Center For Entrepreneurship & Economic Studies</li>

                </ul>
            </div>
            <div className={"space-y-2 col-span-2 text-sm"}>
                <h2 className={"text-md font-semibold mb-4 text-slate-400 uppercase"}>
                    Our Contacts
                </h2>
                <p className={""}>Jl. Sultan Alauddin No.212, Makassar, Sulawesi Selatan, 90245</p>
                <p>Telepon: +62411 448-485</p>
                <p>Whatsapp: +62411 448-485</p>
                <div className={""}>
                    <ul className={"flex gap-4 justify-center md:justify-start py-2"}>
                        <li>
                            <Link
                                href={"https://www.instagram.com/nobelinstitute.id/"}
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
                                href={"https://www.facebook.com/nobelindonesiainstitute"}
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
                                href={"https://www.youtube.com/@nobelindonesiainstitute"}
                                className={"group"}
                            >
                                <div
                                    className={"bg-white group-hover:bg-primary text-primary w-12 h-12 cursor-pointer rounded-full flex items-center"}>
                                    <Youtube className={"mx-auto group-hover:text-white"} strokeWidth={1}/>
                                </div>
                            </Link>
                        </li>

                        <li>
                            <Link href={"https://www.tiktok.com/@nobelinstitute.id?lang=id"} className={"group"}>
                                <div
                                    className={"bg-white group-hover:bg-primary text-primary w-12 h-12 cursor-pointer rounded-full flex items-center"}>
                                    <TiktokIcon className={"mx-auto group-hover:text-white"} strokeWidth={1}/>
                                </div>
                            </Link>
                        </li>

                        {/*<li>*/}
                        {/*    <div className={"hover:bg-white w-12 h-12 cursor-pointer rounded-full flex items-center"}>*/}
                        {/*        <Twitter className={"mx-auto text-primary"} strokeWidth={2}/>*/}
                        {/*    </div>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </div>


        </div>
        <hr className={"mt-8 border-[0.5px] border-gray-400"}/>
        <p className={"text-center py-4 text-xs"}>Copyright © 2023 NOBEL INDONESIA. All Rights Reserved. Terms Of Use.
            Privacy Statement.</p>
    </footer>
}

export default Footer;
