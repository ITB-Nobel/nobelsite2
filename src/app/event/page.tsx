import React from "react";

import GeneralLayout from "@/components/layout/GeneralLayout";
import SearchEvent from "@/app/event/components/SearchEvent";


const EventPage = () => {
    return (<GeneralLayout
        withFeaturedImage={true}
        featuredTitle={"Event Page"}
    >
        <main>
            <SearchEvent/>
            {/*<EventList/>*/}
        </main>
    </GeneralLayout>)
}

export default EventPage;
