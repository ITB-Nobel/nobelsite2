import React from "react";

const SectionPodcast = () => {
    return (<section className={"py-12  bg-black text-white relative "}>

        <div className={"flex flex-col-reverse sm:flex-row justify-between gap-12 lg:gap-24  container items-center "}>
            <iframe
                src="https://www.youtube.com/embed/N_7H5r_iqM4"
                title="How to improve our English speaking skills NIOUS episode #2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className={"rounded-xl w-full h-[250px]  border-gray-500  md:w-[950px] md:h-[300px]"}
            />
            <div className={"space-y-12"}>
                <h1 className={"font-semibold text-2xl md:text-4xl"}>
                    Listen to <span className={"text-primary"}>our podcast</span> and you know things
                </h1>
                <p>
                    Let our podcasts on education, business, and ideas inspire you to live better. Hearing conversations
                    that provoke thought and challenge your perspective
                </p>
                <div>
                    <a href={"https://www.youtube.com/@nobelindonesiainstitute"} target={"_blank"}>
                        <button className={"border-2 p-4 border-white hover:bg-white hover:text-black"}>
                            Watch More <span className={"ml-2"}>&#8594;</span>
                        </button>
                    </a>
                </div>

            </div>
        </div>


    </section>);
};

export default SectionPodcast;
