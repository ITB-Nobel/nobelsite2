import React from "react";
import {NewsItem} from "@/app/components/NewsItem";
import {DetailNewsType} from "@/lib/types";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';

const NewsList = ({news}: { news?: DetailNewsType[] }) => {
    return (
        <section className={"container pb-12 md:pb-24 relative"}>
            <br></br><br></br>
            <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                spaceBetween={10}
                navigation={true}
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

