import React from "react";
import {NewsItem} from "@/app/news/components/NewsItem";


const EventList = () => {
    return <section className={"container pb-12 md:pb-24"}>
        <div className={"grid grid-cols-1 lg:grid-cols-2 gap-8"}>
           <NewsItem />
        </div>
    </section>
}

export default EventList;
