import React from "react";

type SectionPodcastType = {
    iframeUrl: string
    title: string;
    color_title: string;
    title2: string
    subtitle: string
    button_title: string;
    button_link: string
}
const SectionPodcast = ({
                            iframeUrl,
                            title2,
                            title,
                            color_title,
                            subtitle,
                            button_title,
                            button_link
                        }: SectionPodcastType) => {
    return (<section className={"py-12  bg-black text-white relative "}>

        <div data-aos={"zoom-out"}  className={"flex flex-col-reverse sm:flex-row justify-between gap-12 lg:gap-24  container items-center "}>
            <iframe
                src={iframeUrl}
                title="How to improve our English speaking skills NIOUS episode #2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className={"rounded-xl w-full h-[250px]  border-gray-500  md:w-[950px] md:h-[300px]"}
            />
            <div className={"space-y-12"}>
                <h1 className={"font-semibold text-2xl md:text-4xl"}>
                    {title} <span className={"text-primary"}>{color_title}</span> {title2}
                </h1>
                <p>
                    {subtitle}
                </p>
                <div>
                    <a href={button_link} target={"_blank"}>
                        <button className={"border-2 p-4 border-white hover:bg-white hover:text-black"}>
                            {button_title} <span className={"ml-2"}>&#8594;</span>
                        </button>
                    </a>
                </div>

            </div>
        </div>


    </section>);
};

export default SectionPodcast;
