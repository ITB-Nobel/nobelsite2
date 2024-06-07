'use client'

import React, {useEffect} from "react";
import TopHeader from "@/components/TopHeader";
import {Navbar} from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import AOS from "aos";
import {BlurImage2} from "@/components/BlurImage";
import Link from "next/link";
import {Dialog, DialogContent, DialogDescription, DialogTrigger} from "@/components/Dialog";
import {Play} from "lucide-react";


type GeneralLayoutType = {
    children: React.ReactNode
    featuredTitle?: string
    featuredImage?: string
}



export default function GeneralLayout({
                                          children,
                                          featuredTitle = "Nobel Page",
                                          featuredImage = "/images/banner.jpeg"
                                      }: GeneralLayoutType) {
    const googleTranslateElementInit = () => {
        if (typeof window !== 'undefined') {
            // @ts-ignore
            new window.google.translate.TranslateElement(
                {
                    pageLanguage: "id",
                    autoDisplay: false,
                    includedLanguages : 'id,en,us,es,th,ar,zh-CN,zh-TW,de'
                },
                "google_translate_element"
            );
        }
    };
    useEffect(() => {
        AOS.init();
        var addScript = document.createElement("script");
        addScript.setAttribute(
            "src",
            "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        );
        document.body.appendChild(addScript);
        if (typeof window !== 'undefined') {
            // @ts-ignore
            window.googleTranslateElementInit = googleTranslateElementInit;
        }
    }, [])
    return (
        <>
            <TopHeader variant={"primary"}/>

            <div className={"relative max-h-[240px] min-h-[400px] w-full "}>
                <Navbar/>
                {featuredImage && <BlurImage2 image={featuredImage}
                                              alt={featuredTitle}
                                              className={" brightness-75 aspect-w-4 aspect-h-1 w-full h-[400px]"}
                />}

                <h1 className={"absolute  lg:px-24 text-white text-4xl lg:text-5xl font-semibold tracking-widest top-52 left-12"}
                    dangerouslySetInnerHTML={{__html: featuredTitle}}/>
                <Link href={"/"}>
                    <Image src={"/images/logo_putih.png"} alt={"logo"} width={300} height={100} objectFit={"cover"}
                           className={"absolute top-8 z-50 left-12"}/>
                </Link>

            </div>

            {/*{withFeaturedImage && <div className={"relative max-h-[240px] min-h-[240px] w-full"}>*/}
            {/*    <Image className={""}*/}
            {/*           layout={"fill"}*/}
            {/*           src={featuredImage}*/}
            {/*           alt={featuredTitle}*/}
            {/*    />*/}
            {/*    <div className={"absolute bg-black opacity-30 w-full h-[240px] top-0"}></div>*/}
            {/*    <h1 className={"absolute px-28 text-white text-4xl font-semibold tracking-widest top-24 left-12"}>{featuredTitle}</h1>*/}
            {/*</div>}*/}
            {children}
            <Footer/>
        </>
    );
}


const PlayButtonDialog = () => <Dialog>
    <DialogTrigger className={"lg:w-auto"}>

        <div
            className={"flex items-center font-semibold gap-4 bg-white hover:bg-black text-black hover:text-white p-4 rounded-md"}>
            <Play className={"w-6 h-6"}/>
            Play Video
        </div>
    </DialogTrigger>
    <DialogContent className="max-w-fit p-0 border-0 bg-none">
        <DialogDescription>
            <iframe
                className={"rounded-lg w-[350px] h-[250px] md:w-[600px] lg:w-[850px] md:h-[400px] lg:h-[500px]"}
                src="https://www.youtube.com/embed/7z2TlZXvvEk?autoplay=1"
                title="How To Get Rich"
                allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen

            />
        </DialogDescription>


    </DialogContent>
</Dialog>


