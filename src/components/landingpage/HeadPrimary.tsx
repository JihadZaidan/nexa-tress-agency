import Image from "next/image"
import team from "../../../public/landingpage/teams.png"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"

export default function Resprime() {
    return (
        <div className="max-w-full w-full lg:px-20 lg:py-16 px-5 pt-7 pb-14 bg-neutral-100">
            <div className="w-full flex flex-col justify-between lg:gap-30 gap-8">
                <div className="w-full flex flex-col justify-right lg:gap-15 gap-8">
                    <h1 className="w-full text-neutral-800 font-sans font-medium lg:text-8xl text-5xl lg:text-center text-left leading-[130%]">NEXA DIGITAL AGENCY</h1>
                    <div className="lg:ml-130 lg:w-[50%] flex lg:flex-row flex-col lg:gap-5 gap-3 justify-left items-left">
                        <Image
                            src={team}
                            alt="photos"
                            className="ml-[-45px] lg:scale-[75%] scale-[75%] lg:ml-0"
                        />
                        <p className="lg:text-2xl text-base font-medium text-black leading-[140%]">You&apos;ll collaborate with our experts.</p>
                    </div>
                </div>

                <div className="w-full flex lg:flex-row items-left justify-left">
                    <div className="flex flex-col gap-8">
                        <p className="font-sans font-medium lg:text-2xl text-base text-neutral-800 leading-[150%] text-left">
                            — An digital agency focused on digital <br />
                            experiences. With every single one of <br />
                            our clients, we bring forth a deep <br />
                            passion for creative problem solving.
                        </p>

                        <Button className="w-fit justify-start gap-[9px] border-b-2 border-black">
                            <p className="text-black text-xl lg:text-2xl font-medium text-left">
                                Let&apos;s talk
                            </p>
                            <ArrowRight height={22} width={22} className="mt-[2px] text-black" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}