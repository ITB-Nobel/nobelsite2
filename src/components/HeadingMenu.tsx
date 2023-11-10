
import React from "react";
import Image from "next/image";

const HeadingMenu = ({title}: {title:string}) =>  <div className={"relative"}>
    {/*<Image className={"max-h-[240px] w-full"} src={"../../images/layer-banner.jpg"}  alt={"Banner"}></Image>*/}
    <div className={"absolute bg-black opacity-30 w-full max-h-[240px] top-0"}></div>
    <h1 className={"absolute text-white text-4xl font-semibold tracking-widest top-12 lg:top-24 left-12"}>{title}</h1>
</div>

export default HeadingMenu