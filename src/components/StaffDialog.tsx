import React from "react";
import Image from "next/image";
import {Dialog, DialogContentLeft, DialogDescription, DialogTrigger} from "@/components/Dialog";
import {ScrollArea} from "@/components/ScrollArea";
import {StaffACF} from "@/lib/types";
import {LucideMail} from "lucide-react";
import {DialogBody} from "next/dist/client/components/react-dev-overlay/internal/components/Dialog";


const StaffDialog = (props: StaffACF) => <Dialog>
    <DialogTrigger>
        <Staff {...props}/>
    </DialogTrigger>

    <DialogContentLeft className=" p-0 border-0">
        <DialogDescription>

            <div className={""}>
                <div className={"relative w-[450px] h-[650px] mx-auto"}>
                    <div className={"absolute inset-0 flex items-center justify-center"}>
                        <Image
                            alt={props.title}
                            className={""}
                            layout={"fill"}
                            src={props.image}
                            objectFit={"cover"}
                        />
                    </div>
                </div>
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

    <DialogContentLeft className="bg-white left-[45%] p-0 border-0 bg-none">
        <DialogDescription>

            <div className={"bg-white rounded-xl min-w-full space-y-6"}>
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
            </div>
        </DialogDescription>
        <DialogBody className={"bg-white rounded-xl min-w-full  p-12 space-y-6 w-[700px]"}>

            <ScrollArea className={"h-80"}>

                {/*HEADER*/}
                <div className={"space-y-2 mt-6 text-left"}>
                    <h1 className={"text-lg"}>{props.title}</h1>
                    <p className={"text-primary text-lg font-semibold"}>{props.position}</p>
                </div>

                {/*EMAILS*/}
                <div className={"flex gap-4 my-4"}>
                    <div className={"flex gap-2 items-center font-semibold"}>
                        <LucideMail className={"h-4 w-4"}/>
                        {props.email ?? "-"}
                    </div>
                    <div className={"flex gap-2 items-center font-semibold"}>
                        <LucideMail className={"h-4 w-4"}/>
                        NIDN : {props.nidn ?? "-"}
                    </div>
                    <div className={"flex gap-2 items-center font-semibold"}>
                        <LucideMail className={"h-4 w-4"}/>
                        SINTA ID : {props.nidn ?? "-"}
                    </div>

                </div>

                {/*GOOGLE SCHLARS*/}
                <div className={"flex gap-4 mb-4"}>
                    <a
                        href={[null, undefined, ''].includes(props?.google_scholar) ? props?.google_scholar as string : "#"}
                        target={"_blank"}
                    >
                        <div
                            className={"border-[1px] px-4 py-2 rounded-full hover:bg-slate-100 hover:cursor-pointer"}>
                            Google Scholar
                        </div>
                    </a>
                    <a
                        href={[null, undefined, ''].includes(props?.scoopus) ? props?.scoopus as string : "#"}
                        target={"_blank"}
                    >
                        <div
                            className={"border-[1px] px-4 py-2 rounded-full hover:bg-slate-100 hover:cursor-pointer"}>
                            Scoopus
                        </div>
                    </a>

                </div>

                {/*CONTENT*/}
                <article>
                    <div
                        dangerouslySetInnerHTML={{__html: props.description}}
                    />
                </article>


            </ScrollArea>
        </DialogBody>


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
