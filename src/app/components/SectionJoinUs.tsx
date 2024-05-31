'use client'
import React from "react";
import {Mail, Send} from "lucide-react";
import {motion} from "framer-motion";
import {Play} from "lucide-react";
import {Dialog, DialogContent, DialogDescription, DialogTrigger} from "@/components/Dialog";


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
    return <section className={"py-12 lg:py-24 lg:px-12 bg-white lg:bg-black lg:text-white "}>
        <div data-aos={"zoom-in"}  className={"grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 container"}>
            <div>
                <blockquote className={"text-2xl lg:text-4xl"}>
                    {quotes}
                </blockquote>
                <p className={"text-lg lg:text-2xl mt-4"}>{author}</p>
                <PlayButtonDialog/>
            </div>
            <div  className={"capitalize text-left lg:text-center"}>
                <h1 className={"text-2xl lg:text-4xl mb-4 font-semibold"}>{title}</h1>
                <div  className={"flex flex-row mt-12 gap-2 text-black w-full text-xl lg:text-2xl"}>
                    <a className={"flex-1"} target={"_blank"}
                       href={contact_button_link}>
                        <motion.div
                            whileHover={{
                                opacity: 0.95,
                                boxShadow: "white",
                                borderRadius: "0px",
                            }}
                            className={"flex items-center gap-4 justify-center space-x-4 px-2 lg:px-4 py-3 lg:py-6 bg-primary text-white rounded-md"}>
                            <Mail className={"w-6 h-6"}/>{contact_button_title}
                        </motion.div>
                    </a>
                    <a className={"flex-1"} href={join_button_link} target={"_blank"} rel={"noreferrer"}>
                        <motion.div
                            whileHover={{
                                opacity: 0.95,
                                boxShadow: "white",
                                borderRadius: "0px"
                            }}
                            className={"flex items-center gap-4 justify-center space-x-4 px-2 lg:px-4 py-3 lg:py-6 bg-black lg:bg-white text-white lg:text-black rounded-xl"}>
                            <Send className={"w-6 h-6"}/>
                            {join_button_title}
                        </motion.div>
                    </a>
                </div>
            </div>
        </div>
    </section>
}

export default SectionJoinUs;


const PlayButtonDialog = () => <Dialog>
    <DialogTrigger className={"lg:w-auto"}>
<br/>
        <div
            className={"flex items-center font-semibold gap-4 bg-white hover:bg-blue text-black hover:text-black p-4 rounded-md"}>
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
