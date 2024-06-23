'use client'
import React, {useEffect} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import TopHeader from "@/components/TopHeader";
import SliderContent from "@/app/components/SliderContent";
import Footer from "@/components/Footer";
import {HomeNavbar} from "@/components/Navbar";
import {BlurImage2} from "@/components/BlurImage";
import AOS from "aos";


const HomeLayout = ({children, data}: { children: React.ReactNode, data: any }) => {
    const googleTranslateElementInit = () => {
        if (typeof window !== 'undefined') {
            // @ts-ignore
            new window.google.translate.TranslateElement(
                {
                    pageLanguage: "id",
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

    return <>
        <TopHeader variant={"white"}/>

        <main className={"overflow-x-hidden"}>
            <div className={"relative"}>
                <HomeNavbar/>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="text-white bg-black lg:min-h-screen"
                >
                    <SwiperSlide className={"text-red-500"}><>
                        <div
                            className={"relative  w-full h-screen max-h-[200px] lg:max-h-[650px]  xl:max-h-[800px] "}>
                            {
                                <BlurImage2
                                    image={`${data[0]?.acf?.image}`}
                                    alt={"Default Nobel Image"}
                                    className={"brightness-50"}
                                />
                            }
                        </div>
                    </>
                    </SwiperSlide>
                </Swiper>

            </div>
            {children}
        </main>
        <Footer/>
    </>
}


export default HomeLayout;
