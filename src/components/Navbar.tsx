import React from "react";
import Link from "next/link";
import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/HoverCard";
import Image from "next/image";
import {
    NavigationMenu, NavigationMenuContent,
    NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/NavigationMenu";
import {cn} from "@/lib/utils";

type MenuType = {
    title: string;
    link: string;
    submenu: {
        title: string;
        link: string
    }[]
}

const menu: MenuType[] = [
    {
        title: 'Home',
        link: '/',
        submenu: []
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
                title: "Visi-Misi",
                link: "/visi"
            },
            {
                title: "NobelValue",
                link: "/nobel-value"
            },
            {
                title: "Staff",
                link: "/staff"
            },
        ]
    },
    {
        title: 'Study',
        link: '/study',
        submenu: []
    },
    {
        title: 'Research',
        link: '/research',
        submenu: []
    },
    {
        title: 'International Program',
        link: '/international',
        submenu: []
    }
]


export const Navbar = () => {
    return (<div
        className={"w-full lg:flex border-b-[1px] hidden justify-between px-8 py-8 items-center bg-white text-black"}>
        <div className={"relative w-48 h-24"}>
            <Image src={"/images/logo.png"} alt={"logo"} layout={"fill"} objectFit={"cover"}/>
        </div>
        <div>
            <ul className={"text-md flex gap-14 text-black font-semibold text-md uppercase"}>


                {
                    menu.map((props, index) => {
                        if (props.submenu.length === 0)
                            return <li key={index} className={" pb-2 cursor-pointer hover:text-primary"}>
                                <Link href={props.link}>{props.title}</Link>
                            </li>
                        return <SubMenu key={index} {...props} type={"general"}/>
                    })
                }

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
                {
                    menu.map((props, index) => {
                        if (props.submenu.length === 0)
                            return <li key={index} className={"text-white pb-2 cursor-pointer hover:text-primary "}>
                                <Link href={props.link}>{props.title}</Link>
                            </li>
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
                            className={`text-white  text-md py-0 pb-4 cursor-pointer hover:text-primary`}>
                            About Us
                        </NavigationMenuTrigger> :
                        <NavigationMenuTrigger
                            className={`text-black font-semibold text-md py-0 pb-4 cursor-pointer hover:text-primary`}>
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
                    <div className="text-sm font-medium leading-none hover:text-primary">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
