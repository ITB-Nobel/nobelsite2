import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay,Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import TopHeader from "@/components/TopHeader";
import SliderContent from "@/app/components/SliderContent";
import Footer from "@/components/Footer";
import {HomeNavbar} from "@/components/Navbar";

const HomeLayout = ({children}: { children: React.ReactNode }) => {
    return <>
        <TopHeader variant={"white"}/>
        <main>
            <div className={"relative"}>
                <HomeNavbar/>
                {/*<Swiper*/}
                {/*    spaceBetween={30}*/}
                {/*    centeredSlides={true}*/}
                {/*    autoplay={{*/}
                {/*        delay: 4000,*/}
                {/*        disableOnInteraction: false,*/}
                {/*    }}*/}
                {/*    pagination={{*/}
                {/*        clickable: true,*/}
                {/*    }}*/}
                {/*    navigation={true}*/}
                {/*    modules={[Autoplay, Navigation]}*/}
                {/*    className="mySwiper text-white bg-black lg:min-h-screen"*/}
                {/*>*/}
                {/*    <SwiperSlide><>*/}
                {/*        <StaticImage*/}
                {/*            src={"../../images/slidex.jpg"}*/}
                {/*            alt={"Slider Image"}*/}
                {/*            className={"w-full max-h-[450px] lg:max-h-[650px]  xl:max-h-[800px] bg-black h-auto brightness-75"}*/}
                {/*        />*/}
                {/*        <SliderContent/>*/}
                {/*    </></SwiperSlide>*/}
                {/*    <SwiperSlide><>*/}
                {/*        <StaticImage*/}
                {/*            src={"../images/slidex.jpg"}*/}
                {/*            alt={"Slider Image"}*/}
                {/*            className={"w-full max-h-[450px] lg:max-h-[650px]  xl:max-h-[800px] bg-black h-auto brightness-75"}*/}
                {/*        />*/}
                {/*        <SliderContent/>*/}
                {/*    </></SwiperSlide>*/}
                {/*    <SwiperSlide><TestComponent/></SwiperSlide>*/}
                {/*</Swiper>*/}

            </div>
            {children}
        </main>
        <Footer/>
    </>
}

const TestComponent = () => <>
    {/*<StaticImage*/}
    {/*    src={"../images/slidex.jpg"}*/}
    {/*    alt={"Slider Image"}*/}
    {/*    className={"w-full max-h-[450px] lg:max-h-[650px]  xl:max-h-[800px] bg-black h-auto brightness-75 "}*/}
    {/*/>*/}
    <SliderContent/>
</>


export default HomeLayout;
