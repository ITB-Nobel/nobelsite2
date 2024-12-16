import React from "react";
import {NewsItem} from "@/app/components/NewsItem";
import {DetailNewsType} from "@/lib/types";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';

const NewsList = ({news}: { news?: DetailNewsType[] }) => {
    return (
        <section className={"container pt-24 pb-12 md:pb-24 relative"}>

             <h1 className={"text-2xl md:text-4xl font-semibold text-center mb-20"}>News</h1>

                <p className={"text-slate-500 text-md md:text-lg mt-2"}></p>

            <br></br>
            <div className="flex justify-between">
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
            <style>
                {
                    `.swiper-button-next, .swiper-button-prev {
                        position: absolute;
                        top: 200px;
                        background-color: #EF233C;
                        
                    }`
                }
            </style>
            <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                spaceBetween={10}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                }}
            >
                {
                    news && news.map((props, index) => (
                        <SwiperSlide key={index}>
                            <NewsItem
                                {...props}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    );
}

export default NewsList;

