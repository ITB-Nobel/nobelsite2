import React, {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/NavigationMenu";
import {cn} from "@/lib/utils";
import useSWR from "swr";
import {ProdiType} from "@/lib/types";
import {fetcher} from "@/lib/api";
import {Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger} from "@/components/Drawer";
import {HamburgerMenuIcon} from "@radix-ui/react-icons";
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import {ScrollArea} from "@/components/ScrollArea";
import FixedButton from '@/components/FixedButton';

export type MenuType = {
    title: string;
    link: string;
    submenu: {
        title: string;
        link: string,
        target?: React.HTMLAttributeAnchorTarget
    }[],
    submenu_with_header: {
        header: string;
        items: {
            title: string;
            link: string
        }[]
    }[]
}
 
export const defaultMenu: MenuType[] = [
    {
        title: 'Home',
        link: '/',
        submenu: [],
        submenu_with_header: []
    },
    {
        title: 'About',
        link: '#',
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
    },{
        title: 'News',
        link: '/news',
        submenu: [],
        submenu_with_header: []
    },
    {
        title: 'Study',
        link: '#',
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
    },{
        title: 'Alumni',
        link: 'https://alumni.nobel.ac.id/',
        submenu: [],
        submenu_with_header: []

    },
    {
        title: 'Academic Support',
        link: '#',
        submenu: [
            {
                title: "LPMI",
                link: "https://lpmi.nobel.ac.id",
                target: "_blank"
            },
            {
                title: "LP3M",
                link: "https://lp3m.nobel.ac.id/",
                target: "_blank"
            }],
        submenu_with_header: []
    },
    {
        title: 'International Program',
        link: '/international',
        submenu: [],
        submenu_with_header: []
    },  {
        title: 'Repository',
        link: 'https://repository.nobel.ac.id/',
        submenu: [],
        submenu_with_header: []
    },
    {
        title: 'SIAKAD',
        link: 'https://siakad.nobel.ac.id/',
        submenu: [],
        submenu_with_header: []
    }
]

export const useProdi = () => {
    const [fakultasArray, setFakultasArray] = useState<string[]>([])
    const [jurusanArray, setJurusanArray] = useState<ProdiType[]>([])
    const {data} = useSWR<ProdiType[]>('prodi', () => fetcher<ProdiType[]>('prodi?orderby=slug&order=asc&_fields=acf,slug,id'))
    useEffect(() => {
        if (data) {
            let items = data?.map(item => item.acf.fakultas)
            items = Array.from(new Set(items)).reverse()
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
    return (
        <>
            <div
                className={"absolute top-0 right-12 z-50  w-full lg:flex  hidden justify-end px-8 py-8 items-center bg-transparent"}>
                {/*<div className={"relative w-48 h-24"}>*/}
                {/*    <Image src={"/images/logo.png"} alt={"logo"} layout={"fill"} objectFit={"cover"}/>*/}
                {/*</div>*/}


                <ul className={"text-md flex gap-7 font-semibold text-md uppercase "}>
                    {
                        menu.map((props, index) => {
                            if (props.submenu.length === 0 && props.submenu_with_header.length === 0)
                                return <li key={index}
                                           className={" pb-2 cursor-pointer hover:text-primary !text-white capitalize"}>
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
            </div>
            <div className={"lg:hidden absolute right-0 top-12 z-50"}>
                <MobileNavbar/>
                
            <FixedButton/>
            </div>
        </>
    );
}

export function HomeNavbar() {
    const [menu, setMenu] = useState<MenuType[]>(defaultMenu)
    const {jurusanArray, fakultasArray} = useProdi()
    return <nav className={"justify-between w-full  flex absolute top-8 px-4 md:px-12 z-50"}>
        <Link href={"/"}>
            <div className={"-mt-4"}>
                <div className={"relative w-[190px] h-12 lg:w-[320px] lg:h-20"}>
                    <Image src={"/images/logo_merah.png"} alt={"logo"} layout={"fill"} objectFit={"cover"}/>
                </div>
            </div>
        </Link>
        {/* <div className={"hidden lg:block"}>
            <ul className={"text-md flex gap-8"}>
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
        <div className={"lg:hidden"}>
            <MobileNavbar/>

            <FixedButton/>
        </div> */}
    </nav>
}
// ipul
export function MobileNavbar() {
    const [menu, setMenu] = useState<MenuType[]>(defaultMenu)
    const {jurusanArray, fakultasArray} = useProdi()
    return <Drawer>
        <DrawerTrigger className={"absolute right-6 top-1"}>
            <HamburgerMenuIcon color={"black"} width={"24px"} height={"24px"}/>
        </DrawerTrigger>
        <DrawerContent className={"bg-white min-h-screen"}>

            <DrawerHeader className={"text-left"}>
                <DrawerTitle className={"text-3xl"}>Menu</DrawerTitle>
                {/*<DrawerDescription>This action cannot be undone.</DrawerDescription>*/}
            </DrawerHeader>
            <ScrollArea className={"min-h-[80vh] w-full h-80 overflow-y-scroll border border-gray-300 p-4"}>
                <div className={"py-6"}>
                    <div className={"text-md px-4 space-y-4 font-semibold text-md uppercase "}>
                        {
                            menu.map((props, index) => {
                                return <div key={index}>
                                    <Link href={`${props.link}`}>
                                        <h4 className={"bg-slate-100 py-1 px-2 rounded-md w-full"}>
                                            {props.title}
                                        </h4>
                                    </Link>
                                    <div>
                                        <ul className={"space-y-1 list-disc px-8 my-2"}>
                                            {props.submenu.map((item, index) => {
                                                return <li key={index} className={"text-xs font-light"}>
                                                    <Link href={`${item.link}`}>
                                                        {item.title}
                                                    </Link>
                                                </li>
                                            })}
                                        </ul>
                                        {props.submenu_with_header.map((item, index) => {
                                            return <div key={index} className={"px-6"}>
                                                {fakultasArray.map((component, index) => {
                                                        if (component?.toLowerCase() === item.header.toLowerCase())
                                                            return (<>
                                                                <h4 className={"font-semibold capitalize text-sm py-2"}>{component}</h4>
                                                                <div key={index} className={"space-y-2"}>
                                                                    <ul className={"space-y-1 list-disc px-8"}>
                                                                        {
                                                                            jurusanArray.filter((item) => item.acf.fakultas === component)
                                                                                .map((item, index) =>
                                                                                    <li key={index}
                                                                                        className={"text-xs font-light"}>
                                                                                        <Link href={`/jurusan/${item.id}`}>
                                                                                            {item.acf.overview.jurusan}
                                                                                        </Link>
                                                                                    </li>
                                                                                )
                                                                        }
                                                                    </ul>
                                                                </div>
                                                            </>)
                                                    }
                                                )}

                                            </div>
                                        })}
                                    </div>
                                </div>
                            })
                        }

                    </div>
                </div>
            </ScrollArea>

            <DrawerClose className={"absolute top-4 right-4"}>
                <CloseIcon/>
            </DrawerClose>
        </DrawerContent>
        
    </Drawer>
}

export function SubMenu({submenu, type, title, target}: MenuType & {
    type: 'home' | 'general',
    target?: React.HTMLAttributeAnchorTarget
}) {
    const styles = {
        menu: `hover:text-primary   cursor-pointer text-sm`
    }
    return <NavigationMenu>
        <NavigationMenuList>

            <NavigationMenuItem>
                {
                    type === 'home' ?
                        <NavigationMenuTrigger
                            className={`text-black font-medium font-condensed text-md py-0 pb-4 cursor-pointer hover:text-primary`}>
                            {title}
                        </NavigationMenuTrigger> :
                        <NavigationMenuTrigger
                            className={`text-black font-semibold text-md py-0 pb-4 cursor-pointer hover:text-primary`}>
                            {title}
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
                                    target={target}
                                />
                            ))}
                        </ul>

                    </div>
                </NavigationMenuContent>
            </NavigationMenuItem>

        </NavigationMenuList>
    </NavigationMenu>
}


export const SubmenuWithHeader = ({submenu_with_header, type, acf, fakultasArray}: MenuType & {
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
                                className={`text-black font-medium font-condensed text-md py-0 pb-4 cursor-pointer hover:text-primary !capitalize`}>
                                Study
                            </NavigationMenuTrigger> :
                            <NavigationMenuTrigger
                                className={`text-black font-semibold text-md py-0 pb-4 cursor-pointer hover:text-primary !capitalize`}>
                                Study
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
                                                            href={`/jurusan/${item.id}`}
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
