import React from "react";
import Link from "next/link";
import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/HoverCard";
import Image from "next/image";

export const Navbar = () => {
    return (<div
        className={"w-full lg:flex border-b-[1px] hidden justify-between px-8 py-8 items-center bg-white text-black"}>
        <div className={"relative w-48 h-24"}>
            <Image src={"/images/logo.png"} alt={"logo"} layout={"fill"} objectFit={"cover"}/>
        </div>
        <div>
            <ul className={"text-md flex gap-14 text-black font-semibold text-md uppercase"}>
                <li className={" pb-2 cursor-pointer hover:text-primary"}>
                    <Link href={"/"}>Home</Link>
                </li>
                <li className={" pb-2 cursor-pointer hover:text-primary"}>
                    <Link href={"/content/about"}>About Us</Link>
                </li>
                <li className={" pb-2 cursor-pointer hover:text-primary"}>
                    <Link href={"/content/study"}>Study</Link>
                </li>
                <li className={" pb-2 cursor-pointer hover:text-primary"}>
                    <Link href={"/content/research"}>Research</Link>
                </li>
                <li className={" pb-2 cursor-pointer hover:text-primary"}>
                    <Link href={"/content/international"}>International Program</Link>
                </li>
            </ul>
        </div>
        <div>
            <a href={"https://join.nobel.ac.id"} target={"_blank"}>
                <button
                    className={"border-2 font-roboto p-2 px-8 rounded-md border-black hover:bg-black hover:text-white font-semibold"}>
                    Apply To Study
                </button>
            </a>

        </div>
    </div>);
}

export function HomeNavbar() {
    return <nav className={"justify-between w-full  flex absolute top-12 px-4 md:px-12 z-50"}>
        <div className={"-mt-4"}>
            <div className={"relative w-[170px] lg:w-[250px] h-20"}>
                <Image src={"/images/logo_putih.png"} alt={"logo"} layout={"fill"} objectFit={"cover"}/>
            </div>
        </div>
        <div className={"hidden lg:block"}>
            <ul className={"text-md flex gap-14"}>
                <li className={"text-white pb-2 cursor-pointer hover:border-primary hover:border-b-2 "}>
                    <Link href={"/"}>Home</Link>
                </li>
                <AboutMenu/>
                <li className={"text-white pb-2 cursor-pointer hover:border-primary hover:border-b-2 "}>
                    <Link href={"/content/study"}>Study With Us</Link>
                </li>
                <li className={"text-white pb-2 cursor-pointer hover:border-primary hover:border-b-2 "}>
                    <Link href={"/content/research"}>Research</Link>
                </li>
                <li className={"text-white pb-2 cursor-pointer hover:border-primary hover:border-b-2 "}>
                    <Link href={"/content/international"}>International Program</Link>
                </li>
            </ul>
        </div>
    </nav>
}

export function AboutMenu() {
    const styles = {
        menu: `hover:text-primary   cursor-pointer text-sm`
    }
    return (<HoverCard>
        <HoverCardTrigger asChild>
            <button className={"text-white pb-2 cursor-pointer hover:border-primary hover:border-b-2"}>About Us
            </button>
        </HoverCardTrigger>
        <HoverCardContent
            className="before:absolute before:bg-blue-500 w-auto ml-64 min-w-[320px] px-6 bg-white rounded-xl card-shadow">
            <div className={"flex flex-col"}>
                <ul className="space-y-2">
                    <li className={styles.menu}>Sejarah</li>
                    <li className={styles.menu}>Visi Dan Misi</li>
                    <li className={styles.menu}>N.O.B.E.L Value</li>
                </ul>
            </div>

        </HoverCardContent>
    </HoverCard>)
}
