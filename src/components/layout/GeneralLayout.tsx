import React from "react";
import TopHeader from "@/components/TopHeader";
import {Navbar} from "@/components/Navbar";
import Footer from "@/components/Footer";


type GeneralLayoutType = {
    children: React.ReactNode
    withFeaturedImage?: boolean
    featuredTitle?: string
    featuredImage?: string
}

export default function GeneralLayout({
                                          children,
                                          withFeaturedImage = false,
                                          featuredTitle = "Nobel Page",
                                          featuredImage = "../../images/layer-banner.jpg"
                                      }: GeneralLayoutType) {
    return (
        <>
            <TopHeader variant={"primary"}/>
            <Navbar/>
            {withFeaturedImage && <div className={"relative"}>
                {/*<StaticImage className={"max-h-[240px] min-h-[240px] w-full"} src={"../../images/layer-banner.jpg"}*/}
                {/*             alt={featuredTitle}></StaticImage>*/}
                <div className={"absolute bg-black opacity-30 w-full h-[240px] top-0"}></div>
                <h1 className={"absolute px-28 text-white text-4xl font-semibold tracking-widest top-24 left-12"}>{featuredTitle}</h1>
            </div>}
            {children}
            <Footer/>
        </>
    );
}

