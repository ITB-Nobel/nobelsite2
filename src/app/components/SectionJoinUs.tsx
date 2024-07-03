'use client'
import React from "react";
import {Mail, Play, Send} from "lucide-react";
import {motion} from "framer-motion";

import {Dialog, DialogContent, DialogDescription, DialogTrigger} from "@/components/Dialog";

import FixedButton from '../../components/FixedButton';

type SectionJoinUsType = {
    title: string
    quotes: string;
    author: string;
    contact_button_title: string
    contact_button_link: string
    join_button_title: string
    join_button_link: string
}
const SectionJoinUs = ({
                           title,
                           quotes,
                           author,
                           contact_button_title,
                           contact_button_link,
                           join_button_title,
                           join_button_link,
                       }: SectionJoinUsType) => {
    return <section className={"py-12 lg:py-16 px-4 lg:px-12 bg-black text-white "}>
        <div data-aos={"zoom-in"}  className={"grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 container"}>
            <div>
                <blockquote className={"text-2xl lg:text-4xl"}>
                    {quotes}
                </blockquote>
                <p className={"text-lg lg:text-2xl mt-4"}>{author}</p>
                <br/><PlayButtonDialog/>
            </div>

            <div  className={"capitalize text-left lg:text-center items-center flex flex-col justify-center"}>
                <h1 className={"text-2xl lg:text-4xl mb-4 font-semibold"}>{title}</h1>
                <div className={"flex gap-2"}>
                    <a className={"flex items-center lg:min-w-[250px]  justify-center space-x-4 px-2 lg:px-4 py-3 lg:py-6 bg-primary text-white rounded-md mr-4"} target={"_blank"} //flex-1
                       href="https://api.whatsapp.com/send/?phone=%2B6281142566235&text=Please+feel+free+to+contact+us+if+you+have+any+questions&type=phone_number&app_absent=0">
                        <Mail className={"w-6 h-6"}/>
                        <span className={"text-lg lg:text-2xl"}>{contact_button_title}</span>
                    </a>
                    <a className={"flex items-center lg:min-w-[250px]  justify-center space-x-4 px-2 lg:px-4 py-3 lg:py-6 bg-white  text-black  rounded-md"} target={"_blank"} //flex-1
                       href={join_button_link}>
                        <Send className={"w-6 h-6"}/>
                        <span className={"text-lg lg:text-2xl"}>{join_button_title}</span>
                    </a>
                </div>
            </div>

        </div>
    </section>
}

export default SectionJoinUs;

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
                className={"rounded-lg w-[350px] h-[250px] md:w-[600px] lg:w-[850px] md:h-[400px] lg:h-[500px]"}
                src="https://www.youtube.com/embed/7z2TlZXvvEk?autoplay=1"
                title="How To Get Rich"
                allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen

            />
        </DialogDescription>


    </DialogContent>
</Dialog>

