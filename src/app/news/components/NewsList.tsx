import React from "react";
import {NewsItem} from "@/app/news/components/NewsItem";
import {DetailNewsType} from "@/lib/types";


const NewsList = ({news}: { news?: DetailNewsType[] }) => {
    return <section className={"container pb-12 md:pb-24"}>
        <div className={"grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4"}>
            {
                news && news.map((props, index) => <NewsItem
                    key={"index"}
                    {...props}
                />)
            }

        </div>
    </section>
}

export default NewsList;
