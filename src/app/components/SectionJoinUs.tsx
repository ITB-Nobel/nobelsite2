'use client'
import React from "react";
import {Mail, Send} from "lucide-react";
import {motion} from "framer-motion";


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
        <div className={"grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 container"}>
            <div>
                <blockquote className={"text-2xl lg:text-4xl"}>
                    {quotes}
                </blockquote>
                <p className={"text-lg lg:text-2xl mt-4"}>{author}</p>
            </div>
            <div className={"capitalize text-left lg:text-center"}>
                <h1 className={"text-2xl lg:text-4xl mb-4 font-semibold"}>{title}</h1>
                <div className={"flex flex-row mt-12 gap-2 text-black w-full text-xl lg:text-2xl"}>
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
