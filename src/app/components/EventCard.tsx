import {ChevronRight, MapPin, Timer} from "lucide-react";
import React from "react";

type EventCardType = {
    title: string
    place: string
    time: string
    categories: string[]
    date: string
    image: string
}
const EventCard = ({title, place, image, time, categories, date}: EventCardType) => {
    return <div className={"space-y-4 relative bg-white pb-4 rounded-xl card-shadow"}>
        {
            // <GatsbyImage
            //     image={image?.childImageSharp?.gatsbyImageData as IGatsbyImageData}
            //     alt={"Gambar Event"}
            //     className={"rounded-t-xl h-[270px] w-full brightness-75"}
            // />
        }
        <div className={"flex flex-col px-4 gap-12 justify-between min-h-[230px]"}>
            <div className={"text-left space-y-4"}>
                <h3 className={"text-md md:text-xl font-semibold mt-2"}>{title}</h3>
                <ul className={"space-y-2"}>
                    <li className={"flex gap-2 items-center"}>
                        <MapPin className={"w-5 h-5 capitalize"} strokeWidth={1}/>
                        {place}
                    </li>
                    <li className={"flex gap-2 items-center"}>
                        <Timer className={"w-5 h-5"} strokeWidth={1}/>
                        {time}
                    </li>
                </ul>

            </div>

            <div
                className={"text-center w-[200px]  mx-auto hover:bg-primary hover:text-white rounded-md py-2 cursor-pointer gap-1 font-semibold flex items-center justify-center"}>
                Details
                <ChevronRight/>
            </div>

        </div>
        <div className={"absolute top-4 left-4 flex gap-2 text-white text-sm"} style={{marginTop: "0px"}}>
            {
                categories?.map((category, index) => <div key={index}
                                                          className={"bg-primary rounded-md py-1 px-2"}>{category}</div>)
            }
        </div>
        <div
            className={"absolute bg-gradient-black   w-full h-[50px] top-[205px] shadow-[inset_-12px_-8px_40px_#46464620] text-left px-4 flex items-center text-white text-2xl font-semibold"}>
            <h2>{date}</h2>
        </div>
    </div>
}

export default EventCard