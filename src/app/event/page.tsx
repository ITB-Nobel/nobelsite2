import React from "react";

import GeneralLayout from "@/components/layout/GeneralLayout";
import EventSearch from "@/app/event/components/SearchNews";
import EventList from "@/app/event/components/EventList";


const EventPage = () => {
    return (<GeneralLayout
        withFeaturedImage={true}
        featuredTitle={"Event Page"}
    >
        <main>
            <EventSearch/>
            <EventList/>
        </main>
    </GeneralLayout>)
}

export default EventPage;
