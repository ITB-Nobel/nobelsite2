import React from "react";
import EventCard from "@/app/components/EventCard";


const SectionEvent = ({data}:{data:any[]}) => {



    return <section className={" text-center bg-slate-100 "}>
        <div className={"container py-12 md:py-24"}>
            <h1 className={"text-2xl md:text-4xl font-semibold"}>Recent <span className={"text-primary"}>Events</span>
            </h1>
            <p className={"text-slate-500 text-md nd:text-lg mt-2"}>Explore opportunities to engage with people, ideas,
                and education across campus.</p>
            <div className={"w-full grid grid-cols-1 lg:grid-cols-3 gap-8  mt-12 md:mt-24 "}>
                {
                    //@ts-ignore
                    data.nodes.map(({frontmatter}) => <EventCard {...frontmatter?.event}/>)
                }
            </div>
            {/*<button className={"border-2 px-4 py-2 border-black hover:bg-black hover:text-white mt-12 md:mt-24"}>*/}
            {/*    Show More <span className={"ml-2"}>&#8594;</span>*/}
            {/*</button>*/}
        </div>
    </section>
}


export default SectionEvent;