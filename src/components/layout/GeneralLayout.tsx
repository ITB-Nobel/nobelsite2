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
                    pageLanguage: "en",
                    autoDisplay: false,
                    includedLanguages: 'id,en,us,es,th,ar,zh-CN,zh-TW,de'
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

            <div className={"relative lg:max-h-[240px] lg:min-h-[400px] w-full "}>
                <Navbar/>
{featuredImage && <BlurImage2 image={featuredImage}
                                              alt={featuredTitle}
                                              className={"brightness-75 aspect-w-5 aspect-h-2 lg:aspect-h-1 md:w-full md:h-[300px] lg:h-[400px]  sm:h-[100px]  h-[150px]"}
                />}

                <h1 className={"absolute top-1/2 left-5 -translate-y-1/2 lg:px-24 text-white text-2xl lg:text-5xl font-semibold tracking-widest mt-3.5"}
                    dangerouslySetInnerHTML={{__html: featuredTitle}}/>

                {/*LOGO*/}
                <Link href={"/"}>
                    <div
                        className={"absolute w-[150px] h-[50px] lg:h-[100px] lg:w-[300px] top-8 z-50 left-4 lg:left-12"}>
                        <Image src={"/images/logo_putih.png"}
                               alt={"logo"}
                               objectFit={"cover"}
                               fill={true}
                               className={""}/>
                    </div>
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


