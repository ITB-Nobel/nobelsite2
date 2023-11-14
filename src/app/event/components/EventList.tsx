import React from "react";
import {EventItem} from "@/app/event/components/EventItem";
import {EventType} from "@/lib/types";


const EventList = (events: EventType[]) => {
    return <section className={"container pb-12 md:pb-24"}>
        <div className={"grid grid-cols-1 lg:grid-cols-2 gap-8"}>
            {events.map((event, index) => <EventItem key={index} {...event}/>)}
        </div>
    </section>
}

export default EventList;
