import React, {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {
    NavigationMenu, NavigationMenuContent,
    NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/NavigationMenu";
import {cn} from "@/lib/utils";
import useSWR from "swr";
import {ProdiACF, ProdiType} from "@/lib/types";
import {fetcher} from "@/lib/api";

type MenuType = {
    title: string;
    link: string;
    submenu: {
        title: string;
        link: string
    }[],
    submenu_with_header: {
        header: string;
        items: {
            title: string;
            link: string
        }[]
    }[]
}

const defaultMenu: MenuType[] = [
    {
        title: 'Home',
        link: '/',
        submenu: [],
        submenu_with_header: []
    },
    {
        title: 'About',
        link: '/about',
        submenu: [
            {
                title: "Sejarah",
                link: "/sejarah"
            },
            {
                title: "Visi Misi",
                link: "/visi"
            },
            {
                title: "Nobel Value",
                link: "/nobel-value"
            },
            {
                title: "Staff",
                link: "/staff"
            },
        ],
        submenu_with_header: []
    },
    {
        title: 'Study',
        link: '/study',
        submenu: [],
        submenu_with_header: [
            {
                header: "Fakultas Teknologi dan Bisnis",
                items: []
            },
            {
                header: "Fakultas Pascasarjana",
                items: []
            }
        ]
    },
    {
        title: 'Research',
        link: '/research',
        submenu: [],
        submenu_with_header: []
    },
    {
        title: 'International Program',
        link: '/international',
        submenu: [],
        submenu_with_header: []
    }
]

const useProdi = () => {
    const [fakultasArray, setFakultasArray] = useState<string[]>([])
    const [jurusanArray, setJurusanArray] = useState<ProdiType[]>([])
    const {data} = useSWR<ProdiType[]>('prodi', () => fetcher('prodi?orderby=slug&order=asc&_fields=acf,slug,id'))
    useEffect(() => {
        if (data) {
            let items = data.map(item => item.acf.fakultas)
            items = Array.from(new Set(items))
            setFakultasArray(items)
            setJurusanArray(data)
        }
    }, [data]);
    return {
        fakultasArray,
        setFakultasArray,
        jurusanArray,
        setJurusanArray
    }
}

export const Navbar = () => {
    const [menu, setMenu] = useState<MenuType[]>(defaultMenu)
    const {fakultasArray, jurusanArray} = useProdi()
    return (<div
        className={"absolute top-0 right-12 z-50  w-full lg:flex  hidden justify-end px-8 py-8 items-center bg-transparent"}>
        {/*<div className={"relative w-48 h-24"}>*/}
        {/*    <Image src={"/images/logo.png"} alt={"logo"} layout={"fill"} objectFit={"cover"}/>*/}
        {/*</div>*/}

        <ul className={"text-md flex gap-14 font-semibold text-md uppercase "}>
            {
                menu.map((props, index) => {
                    if (props.submenu.length === 0 && props.submenu_with_header.length === 0)
                        return <li key={index} className={" pb-2 cursor-pointer hover:text-primary !text-white"}>
                            <Link href={props.link}>{props.title}</Link>
                        </li>
                    if (props.submenu_with_header.length > 0)
                        return <SubmenuWithHeader key={index} acf={jurusanArray}
                                                  fakultasArray={fakultasArray} {...props} type={"general"}/>

                    return <SubMenu key={index} {...props} type={"general"}/>
                })
            }

        </ul>

        {/*<div>*/}
        {/*    <a href={"https://join.nobel.ac.id"} target={"_blank"}>*/}
        {/*        <button*/}
        {/*            className={"border-2 font-roboto p-2 px-8 rounded-md border-black hover:bg-black hover:text-white font-semibold"}>*/}
        {/*            Apply To Study*/}
        {/*        </button>*/}
        {/*    </a>*/}

        {/*</div>*/}
    </div>);
}

export function HomeNavbar() {
    const [menu, setMenu] = useState<MenuType[]>(defaultMenu)
    const {jurusanArray, fakultasArray} = useProdi()
    return <nav className={"justify-between w-full  flex absolute top-12 px-4 md:px-12 z-50"}>
        <div className={"-mt-4"}>
            <div className={"relative w-[170px] lg:w-[250px] h-20"}>
                <Image src={"/images/logo_putih.png"} alt={"logo"} layout={"fill"} objectFit={"cover"}/>
            </div>
        </div>
        <div className={"hidden lg:block"}>
            <ul className={"text-md flex gap-14"}>
                {
                    menu.map((props, index) => {
                        if (props.submenu.length === 0 && props.submenu_with_header.length === 0)
                            return <li key={index} className={"text-white pb-2 cursor-pointer hover:text-primary "}>
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
    </nav>
}

export function SubMenu({submenu, type}: MenuType & { type: 'home' | 'general' }) {
    const styles = {
        menu: `hover:text-primary   cursor-pointer text-sm`
    }
    return <NavigationMenu>
        <NavigationMenuList>

            <NavigationMenuItem>
                {
                    type === 'home' ?
                        <NavigationMenuTrigger
                            className={`text-white font-medium font-condensed text-md py-0 pb-4 cursor-pointer hover:text-primary`}>
                            About Us
                        </NavigationMenuTrigger> :
                        <NavigationMenuTrigger
                            className={`text-white font-semibold text-md py-0 pb-4 cursor-pointer hover:text-primary`}>
                            ABOUT US
                        </NavigationMenuTrigger>
                }


                <NavigationMenuContent>
                    <div className={"bg-white  py-2 "}>
                        <ul className="grid w-[300px] gap-3 p-4 md:grid-cols-1 ">
                            {submenu.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.link}
                                >
                                    {/*{component.title}*/}
                                </ListItem>
                            ))}
                        </ul>

                    </div>
                </NavigationMenuContent>
            </NavigationMenuItem>

        </NavigationMenuList>
    </NavigationMenu>
}


const SubmenuWithHeader = ({submenu_with_header, type, acf, fakultasArray}: MenuType & {
    type: 'home' | 'general',
    acf: ProdiType[],
    fakultasArray: string[]
}) => {
    if (submenu_with_header.length > 0)
        return <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    {
                        type === 'home' ?
                            <NavigationMenuTrigger
                                className={`text-white font-medium font-condensed text-md py-0 pb-4 cursor-pointer hover:text-primary`}>
                                Study
                            </NavigationMenuTrigger> :
                            <NavigationMenuTrigger
                                className={`text-white font-semibold text-md py-0 pb-4 cursor-pointer hover:text-primary`}>
                                STUDY
                            </NavigationMenuTrigger>
                    }


                    <NavigationMenuContent>
                        <div className={"bg-white  py-2 "}>
                            <ul className="grid w-[300px] gap-3 p-4 md:grid-cols-1">
                                {fakultasArray.map((component, index) => (
                                    <>
                                    <h4 className={"font-semibold capitalize"}>{component}</h4>
                                    <div key={index} className={"space-y-2"}>
                                        {
                                            acf.filter((item) => item.acf.fakultas === component)
                                                .map((item, index) =>
                                                <ListItem
                                                    key={index}
                                                    title={item.acf.overview.jurusan}
                                                    href={`jurusan/${item.id}`}
                                                />
                                            )
                                        }
                                    </div>
                                    </>
                                ))}
                            </ul>

                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({className, title, children, ...props}, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-1  leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm capitalize font-medium leading-none hover:text-primary">{title}</div>
                    {/*<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">*/}
                    {/*    {children}*/}
                    {/*</p>*/}
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
