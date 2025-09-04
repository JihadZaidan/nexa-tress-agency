"use client"
import Image from "next/image";
import brando from "../../../public/landingpage/story/brando.png"
import creator from "../../../public/landingpage/story/creator.png"
import designer from "../../../public/landingpage/story/designer.png"
import elevato from "../../../public/landingpage/story/elevato.png"
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { useSlideFromLeft, useSlideFromRight, useZoom } from "@/library/animations"

export default function Story() {
    const headRef = useRef<HTMLHeadingElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const oneRef = useRef<HTMLDivElement>(null);
    const twoRef = useRef<HTMLDivElement>(null);

    useSlideFromLeft(headRef, 0.3);
    useSlideFromRight(buttonRef, 0.3);
    useZoom(oneRef, 0.3);
    useZoom(twoRef, 0.3);

    return (
        <div className="max-w-full w-full bg-[#F2F2F2]">
            <div className="w-full flex flex-col justify-left items-left lg:gap-30 gap-20">
                <div className="w-full flex lg:flex-row flex-col lg:justify-between justify-left items-left gap-8 lg:px-20 lg:pt-20 px-10 pt-10">
                    <h3 ref={headRef} className="lg:w-[45%] w-full text-left lg:text-5xl text-3xl font-medium font-sans text-black leading-[140%]">
                        Latest insights, stories,
                        and news from Nexa.
                    </h3>

                    <div ref={buttonRef} className="relative lg:mt-20">
                        <Button className="flex flex-row justify-center gap-3 ml-[-10px]">
                            <p className="text-black text-lg font-medium">Explore the Insight</p>
                            <ArrowRight height={22} width={22} className="mt-[2px] text-black lg:h-[22px] lg:w-[22px] h-[25px] w-[25px]" />
                        </Button>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div ref={oneRef} className="flex lg:flex-row flex-col">
                        <div><Image src={creator} alt="Secrets to Compelling Content Creation" /></div>
                        <div><Image src={designer} alt="UI + UX: Two Different but Complimenting Practices" /></div>
                    </div>
                    <div ref={twoRef} className="flex lg:flex-row flex-col">
                        <div><Image src={brando} alt="Your Guide to Branding and Why it Matters" /></div>
                        <div><Image src={elevato} alt="Elevate your brand with effective tactics." /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}