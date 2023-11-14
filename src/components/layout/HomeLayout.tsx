import React, {useEffect} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import TopHeader from "@/components/TopHeader";
import SliderContent from "@/app/components/SliderContent";
import Footer from "@/components/Footer";
import {HomeNavbar} from "@/components/Navbar";
import Image from "next/image";
import BlurImage from "@/components/BlurImage";
import AOS from "aos";


const HomeLayout = ({children}: { children: React.ReactNode }) => {
    useEffect(() => {
        AOS.init();
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
                        <div className={"relative w-full h-screen max-h-[450px] lg:max-h-[650px]  xl:max-h-[800px] "}>
                            <BlurImage image={"/images/slidex.jpg"} alt={"Test"}/>
                            {/*<Image*/}
                            {/*    src={"/images/slidex.jpg"}*/}
                            {/*    alt={"Slider Image"}*/}
                            {/*    layout={"fill"}*/}
                            {/*    className={"bg-black brightness-75 "}*/}
                            {/*    placeholder={"blur"}*/}
                            {/*    blurDataURL={"/images/slidex.jpg"}*/}
                            {/*/>*/}
                        </div>
                        {/*<SliderContent/>*/}
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

const TestComponent = () => <>
    <div className={"relative w-full max-h-[450px] lg:max-h-[650px]  xl:max-h-[800px] "}>
        <Image
            src={"/images/slidex.jpg"}
            alt={"Slider Image"}
            layout={"fill"}
            className={"bg-black h-auto brightness-75 "}
        />
    </div>
    <SliderContent/>
</>


export default HomeLayout;
