import React from "react";
import Image from "next/image";
import {Dialog, DialogDescription, DialogTrigger, DialogContentLeft} from "@/components/Dialog";
import {ScrollArea} from "@/components/ScrollArea";
import {StaffACF} from "@/lib/types";


const StaffDialog = (props: StaffACF) => <Dialog>
    <DialogTrigger>
        <Staff {...props}/>
    </DialogTrigger>

    <DialogContentLeft className="bg-white   p-0 border-0 bg-none">
        <DialogDescription>

            <div className={"bg-white rounded-xl min-w-full  p-12 space-y-6"}>
                {/*<div className={"absolute -top-[80px] -right-[20px] z-50 "}>*/}
                {/*    <div className={"relative w-[200px] h-[200px]"}>*/}
                {/*        <Image*/}
                {/*            alt={props.title}*/}
                {/*            className={"shadow-white shadow-2xl rounded-full "}*/}
                {/*            layout={"fill"}*/}
                {/*            src={props.image}*/}
                {/*            objectFit={"cover"}*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*</div>*/}
                <ScrollArea className={""}>
                    <div className={"relative w-[250px] h-[250px] mx-auto"}>
                        <Image
                            alt={props.title}
                            className={"shadow-white shadow-2xl rounded-full "}
                            layout={"fill"}
                            src={props.image}
                            objectFit={"cover"}
                        />
                    </div>
                    {/*HEADER*/}
                    <div className={"space-y-2 mt-8 text-left"}>
                        <h1 className={"text-2xl"}>{props.title}</h1>
                        <p className={"text-primary text-lg font-semibold"}>{props.position}</p>
                    </div>
                    {/*CONTENT*/}
                    {/*<article>*/}
                    {/*    <div contentEditable*/}
                    {/*         dangerouslySetInnerHTML={{__html: props.description}}*/}
                    {/*    />*/}
                    {/*</article>*/}
                </ScrollArea>
            </div>
        </DialogDescription>
    </DialogContentLeft>
</Dialog>


const Staff = ({title, position, image, description}: StaffACF) => <div>
    <div
        className={"text-center px-2 py-4 hover:rounded-xl"}>
        <div
            className={"hover:scale-110 max-w-fit max-h-fit mx-auto px-[20px] "}>
            <div className={"relative w-[250px] h-[310px]"}>
                <Image
                    className={""}
                    alt={"Foto Staff"}
                    src={image}
                    layout={"fill"}
                    // objectFit={"contain"}
                />
            </div>
        </div>

        <div className={"mt-4 h-[100px]"}>
            <h1 className={" text-xl  font-medium max-w-xs mx-auto text-center"}>
                {title}
            </h1>
            <h2 className={"text-lg text-primary font-semibold"}>{position}</h2>
        </div>
    </div>
</div>


export const StaffDialog2 = (props: StaffACF) => <Dialog>
    <DialogTrigger>
        <Staff2 {...props}/>
    </DialogTrigger>

    <DialogContentLeft className="bg-white h-1/2 p-0 border-0 bg-none">
        <DialogDescription>

            <div className={"bg-white rounded-xl min-w-full  p-12 space-y-6"}>
                <div className={"absolute -top-[80px] right-[10px] z-50 "}>
                    <div className={"relative w-[150px] h-[150px]"}>
                        <Image
                            alt={props.title}
                            className={"shadow-white shadow-2xl object-top rounded-full "}
                            layout={"fill"}
                            src={props.image}
                            objectFit={"cover"}
                        />
                    </div>
                </div>
                <ScrollArea className={"h-60"}>

                    {/*HEADER*/}
                    <div className={"space-y-2 text-left"}>
                        <h1 className={"text-2xl"}>{props.title}</h1>
                        <p className={"text-primary text-lg font-semibold"}>{props.position}</p>
                    </div>

                    {/*CONTENT*/}
                    <article>
                        <div contentEditable
                             dangerouslySetInnerHTML={{__html: props.description}}
                        />
                    </article>


                </ScrollArea>
            </div>


        </DialogDescription>


    </DialogContentLeft>

</Dialog>


export const Staff2 = ({title, position, image, description}: StaffACF) => <div>
    <div
        className={"text-center px-2 py-4 hover:rounded-xl"}>
        <div
            className={" bg-center bg-cover bg-opacity-80 hover:scale-110 max-w-fit max-h-fit mx-auto px-[20px] "}>
            <div className={"relative w-[210px] h-[310px]"}>
                <Image
                    className={" bg-center"}
                    alt={"Foto Staff"}
                    src={image}
                    layout={"fill"}
                    objectFit={"cover"}
                />
            </div>
        </div>

        {/*<div className={"mt-12 h-[100px]"}>*/}
        {/*    <h1 className={" text-xl  font-medium max-w-xs mx-auto text-center"}>*/}
        {/*        {title}*/}
        {/*    </h1>*/}
        {/*    <h2 className={"text-lg text-primary font-semibold"}>{position}</h2>*/}
        {/*</div>*/}
    </div>
</div>


export default StaffDialog;
