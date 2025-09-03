"use client"

import Image from "next/image";
import Chitato from "../../../public/landingpage/body/chipschapa.png"
import Studio from "../../../public/landingpage/body/shooting.png"
import Bin from "../../../public/landingpage/body/binary.png"
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { useSlideFromLeft, useSlideFromRight, useFadeIn } from "@/library/animations";
import { useRef } from "react";

export default function Featurest() {

    const fredoRef = useRef<HTMLHeadingElement>(null);
    const sedoRef = useRef<HTMLHeadingElement>(null);
    const tredeRef = useRef<HTMLHeadingElement>(null);
    const fordoRef = useRef<HTMLHeadingElement>(null);
    const mageRef = useRef<HTMLDivElement>(null);

    useSlideFromLeft(fredoRef, 0.3);
    useSlideFromRight(sedoRef, 0.3);
    useSlideFromLeft(tredeRef, 0.3);
    useSlideFromRight(fordoRef, 0.3);
    useFadeIn(mageRef, 0.3);

    return (
        <div className="max-w-full w-full bg-neutral-900 lg:px-20 lg:pt-20 lg:pb-40 px-8 py-14">
            <div className="w-full flex flex-col">
                <div className="w-full flex flex-col gap-10">
                    <h2 className="font-sans font-medium text-left lext-white lg:text-4xl text-3xl leading-[150%]">
                        Transforming Digital <br />
                        Innovations for Visionary Brands
                    </h2>

                    <div className="w-full flex flex-col lg:pl-130 lg:gap-10 gap-5">
                        <p className="text-white font-normal font-sans lg:text-xl text-base leading-[170%]">
                            We are passionate about uncovering the best digital innovations for forward —
                            thinking brands looking to push boundaries and drive significant impact.
                        </p>

                        <div className="lg:ml-140">
                            <Button className="justify-center gap-[9px] ml-[-10px] border-b-2 border-black">
                                <p className="text-white text-lg font-medium">Explore All Experise</p>
                                <ArrowRight height={22} width={22} className="mt-[2px] text-white" />
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col lg:gap-30 gap-15">
                    <div className="w-full flex flex-col gap-14">
                        <h3 ref={fredoRef} className="lg:w-[32%] lg:pb-2 pb-4 text-4xl text-neutral-100 font-medium font-sans border-b-2 border-neutral-500">01/ DIGITAL STRATEGY.</h3>
                        <div ref={mageRef} className="flex lg:flex-row lg:justify-between flex-col justify-left gap-4">
                            <Image
                                src={Chitato}
                                alt="snack packaging design"
                                className="w-full lg:w-1/3 lg:relative lg:top-15"
                            />
                            <Image
                                src={Bin}
                                alt="binary data illustration"
                                className="w-full lg:w-1/3 lg:scale-[70%]"
                            />
                            <Image
                                src={Studio}
                                alt="studio photography"
                                className="w-full lg:w-1/3 lg:relative lg:top-15"
                            />
                        </div>
                    </div>

                    <div className="w-full flex flex-col lg:gap-9 gap-10">
                        <div className="lg:pl-230"><h3 ref={sedoRef} className="text-4xl text-neutral-100 font-medium font-sans">02/ BRANDING.</h3></div>
                        <h3 ref={tredeRef} className="text-4xl text-neutral-100 font-medium font-sans">03/ WEB DEVELOPMENT.</h3>
                        <div className="lg:pl-200"><h3 ref={fordoRef} className="text-4xl text-neutral-100 font-medium font-sans">04/ APP DEVELOPMENT.</h3></div>
                    </div>
                </div>
            </div>
        </div>
    )
}