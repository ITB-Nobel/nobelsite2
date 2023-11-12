import React from "react";

import GeneralLayout from "@/components/layout/GeneralLayout";
import SearchNews from "@/app/news/components/SearchNews";
import NewsList from "@/app/news/components/NewsList";


const NewsPage = () => {
    return (<GeneralLayout
        withFeaturedImage={true}
        featuredTitle={"News Page"}
    >
        <main>
            <SearchNews/>
            <NewsList/>
        </main>
    </GeneralLayout>)
}

export default NewsPage;
