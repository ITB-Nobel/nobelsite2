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


const HomeLayout = ({children}: { children: React.ReactNode }) => {
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
                    className="mySwiper text-white bg-black lg:min-h-screen"
                >
                    <SwiperSlide><>
                        {/**/}
                        <div className={"relative w-full h-screen max-h-[450px] lg:max-h-[650px]  xl:max-h-[800px] "}>
                            <BlurImage2 image={"/images/slidex.jpg"} alt={"Default Nobel Image"}
                                        className={"brightness-50"}/>
                        </div>
                        <SliderContent/>
                    </>
                    </SwiperSlide>
                    {/*<SwiperSlide><>*/}
                    {/*    <StaticImage*/}
                    {/*        src={"../images/slidex.jpg"}*/}
                    {/*        alt={"Slider Image"}*/}
                    {/*        className={"w-full max-h-[450px] lg:max-h-[650px]  xl:max-h-[800px] bg-black h-auto brightness-75"}*/}
                    {/*    />*/}
                    {/*    <SliderContent/>*/}
                    {/*</></SwiperSlide>*/}
                    {/*<SwiperSlide><TestComponent/></SwiperSlide>*/}
                </Swiper>

            </div>
            {children}
        </main>
        <Footer/>
    </>
}


export default HomeLayout;
