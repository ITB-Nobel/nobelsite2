import React from 'react'
import {GraduationCap, Newspaper, Trophy} from "lucide-react";
import Link from "next/link";


const TopHeader = ({variant}: { variant: "white" | "primary" }) => {
    const style = {
        list: `flex gap-2 items-center p-2 cursor-pointer ${variant === "white" ? "hover:bg-primary hover:text-white" : "hover:bg-white hover:text-primary"}`
    }
    return (<div
        className={`w-full flex justify-between px-4 md:px-8  items-center h-9 max-h-9 ${variant === 'white' ? "bg-white" : "bg-primary text-white"} `}>
        {/*<div className={`text-sm lg:text-md tracking-widest`}>*/}
        {/*    <div className={"font-semibold"}>EN | ID</div>*/}
        {/*</div>*/}
        <div id={variant}>
            <div id="google_translate_element"></div>
        </div>
        <div>
            <ul className={"flex gap-6 text-sm"}>

                <li>
                    <Link href={"/news"} className={style.list}>
                        <Newspaper strokeWidth={1} size={14}/>
                        <span className={"hidden lg:block"}>News</span>
                    </Link>
                </li>
                <li>
                    <Link href={"/achievement"} className={style.list}>
                        <Trophy strokeWidth={1} size={14}/>
                        <span className={"hidden lg:block"}>Achievement</span>
                    </Link>
                </li>


                <li>
                    <a href={"https://tracerstudy.nobel.ac.id"} target={"_blank"} className={style.list}>
                        <GraduationCap strokeWidth={1} size={14}/>
                        <span className={"hidden lg:block"}>Alumni</span>
                    </a>
                </li>
                {/*<li>*/}
                {/*    <Link href={"/coming-soon"} className={style.list}>*/}
                {/*        <Contact strokeWidth={1} size={14}/>*/}
                {/*        <span className={"hidden lg:block"}>Contact Us</span>*/}
                {/*    </Link>*/}
                {/*</li>*/}
            </ul>
        </div>
    </div>)
}
export default TopHeader;
