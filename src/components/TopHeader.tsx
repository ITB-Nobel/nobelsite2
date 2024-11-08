import React, { useState } from 'react'
import {GraduationCap, Newspaper, Trophy} from "lucide-react";
import Link from "next/link";
import { defaultMenu, MenuType, MobileNavbar, SubMenu, SubmenuWithHeader, useProdi } from './Navbar';
import FixedButton from './FixedButton';
//ipul
// 7 oktober 2024
const TopHeader = ({variant}: { variant: "white" | "primary" }) => {
    const [menu, setMenu] = useState<MenuType[]>(defaultMenu)
    const {jurusanArray, fakultasArray} = useProdi()
    const style = {
        list: `flex gap-2 items-center p-2 cursor-pointer ${variant === "white" ? "hover:bg-primary hover:text-white" : "hover:bg-white hover:text-primary"}`
    }
    return (<div
        className={`w-full flex justify-between px-4 md:px-8  items-center h-9 max-h-9 ${variant === 'white' ? "bg-white" : "bg-primary text-white"} `}>
        {/*<div className={`text-sm lg:text-md tracking-widest`}>*/}
        {/*    <div className={"font-semibold"}>EN | ID</div>*/}
        {/*</div>*/}
        <div id={variant} className={"!max-w-[100px] lg:max-w-full"}>
            <div id="google_translate_element"></div>
        </div>
        <div>
            {/* <ul className={"flex gap-6 text-sm"}> */}
            <div className={"hidden lg:block z-99"}>
                <ul style={{marginTop: "10px", fontSize: "14px"}} className={"text-md flex gap-4  z-99"}>
                    {
                        menu.map((props, index) => {
                            if (props.submenu.length === 0 && props.submenu_with_header.length === 0)
                                return <li key={index} className={"text-black pb-2 cursor-pointer hover:text-primary "}>
                                    <Link href={props.link}>{props.title}</Link>
                                    
                                </li>
                            if (props.submenu_with_header.length > 0)
                                return <SubmenuWithHeader fakultasArray={fakultasArray} acf={jurusanArray}
                                                        key={index} {...props} type={"home"}/>
                            return <SubMenu key={index} {...props} type={"home"}/>


                        })
                    }
                </ul>
            </div>

            <div className={"lg:hidden"}>
            <MobileNavbar/>

            <FixedButton/>
        </div>
                
{/* 
                <li>
                    <Link href={"/news"} className={style.list}>
                        <Newspaper strokeWidth={1} size={14}/>
                        <span className={"hidden lg:block"}>News</span>
                    </Link>
                </li> */}
                {/* <li>
                    <Link href={"/achievement"} className={style.list}>
                        <Trophy strokeWidth={1} size={14}/>
                        <span className={"hidden lg:block"}>Achievement</span>
                    </Link>
                </li> */}

{/* 
                <li>
                    <a href={"https://alumni.nobel.ac.id"} target={"_blank"} className={style.list}>
                        <GraduationCap strokeWidth={1} size={14}/>
                        <span className={"hidden lg:block"}>Alumni</span>
                    </a>
                </li> */}
                {/*<li>*/}
                {/*    <Link href={"/coming-soon"} className={style.list}>*/}
                {/*        <Contact strokeWidth={1} size={14}/>*/}
                {/*        <span className={"hidden lg:block"}>Contact Us</span>*/}
                {/*    </Link>*/}
                {/*</li>*/}
            {/* </ul> */}
        </div>
    </div>)
}
export default TopHeader;

// function useProdi(): { jurusanArray: any; fakultasArray: any; } {
//     throw new Error('Function not implemented.');
// }
// function useProdi(): { jurusanArray: any; fakultasArray: any; } {
//     throw new Error('Function not implemented.');
// }

