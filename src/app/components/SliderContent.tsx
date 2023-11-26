import {Play} from "lucide-react";
import React from "react";
import {Dialog, DialogContent, DialogDescription, DialogTrigger} from "@/components/Dialog";

export default function SliderContent() {
    return <div
        className={"relative lg:absolute  px-4 lg:px-24 py-12 lg:py-6 bg-black lg:bg-transparent top-0 w-full text-left"}>

        <div className={" lg:mt-[15%] lg:ml-12 lg:w-1/2 text-white"}>
            <h1
                className={" font-semibold text-white "}
                style={{
                    fontSize: "clamp(30px, 4.75vw, 68px)", lineHeight: "clamp(35px, 4.5vw, 60px)",
                }}
            >
                IS THIS THE ENDANGERED GENERATION?
            </h1>
            <p className={"mt-4 mb-12 text-md"}>
                It’s time for us to act. It’s time to change it. Because if we
                don’t do something now, there’s no telling what our future
                generations will face.
            </p>
            {/*<p className={"text-lg my-8"}>JOIN US TO CHANGE IT</p>*/}
            <PlayButtonDialog/>
        </div>
    </div>
}


const PlayButtonDialog = () => <Dialog>
    <DialogTrigger className={"lg:w-auto"}>

        <div
            className={"flex items-center font-semibold gap-4 bg-white hover:bg-black text-black hover:text-white p-4 rounded-md"}>
            <Play className={"w-6 h-6"}/>
            Play Video
        </div>
    </DialogTrigger>
    <DialogContent className="max-w-fit p-0 border-0 bg-none">
        <DialogDescription>
            <iframe
                className={"rounded-lg w-[350px] h-[250px] md:w-[600px] lg:w-[900px] md:h-[400px] lg:h-[500px]"}
                src="https://www.youtube.com/embed/l_gj2GHCkY8?autoplay=1"
                title="How To Get Rich" frameBorder="0"
                allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen

            />
        </DialogDescription>


    </DialogContent>
</Dialog>
