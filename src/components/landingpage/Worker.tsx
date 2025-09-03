import Image from "next/image";
import { ArrowRight } from "lucide-react";
import cloody from "../../../public/landingpage/worker/cloody.png"
import dockey from "../../../public/landingpage/worker/docker.png"
import house from "../../../public/landingpage/worker/housels.png"
import ai from "../../../public/landingpage/worker/intelegence.png"

export default function WorkerFiles() {
    return (
        <div className="max-w-full w-full bg-neutral-100 lg:px-20 lg:pt-27 lg:pb-30 px-8 pt-10 pb-14">
            <div className="w-full flex flex-col lg:gap-[-150px] gap-8">
                <h2 className="text-right text-neutral-800 lg:text-6xl text-3xl leading-[140%]">The work we do, <br /> and the people we help</h2>
                <div className="w-full flex lg:flex-row flex-col lg:gap-25">
                    <div className="w-full flex flex-col lg:gap-20 gap-10">
                        <div className="w-full flex flex-col gap-8">
                            <Image src={house} alt="cloudess-image-upper" />
                            <div className="flex flex-row justify-between">
                                <h4 className="text-neutral-800 lg:text-2xl text-xl font-size font-medium text-left">/ HOUSEL</h4>
                                <ArrowRight className="text-neutral-700 font-medium" />
                            </div>
                        </div>

                        <div className="w-full flex flex-col gap-8">
                            <Image src={ai} alt="cloudess-image-upper" />
                            <div className="flex flex-row justify-between">
                                <h4 className="text-neutral-800 lg:text-2xl text-xl font-size font-medium text-left">/ CONTEXT AI</h4>
                                <ArrowRight className="text-neutral-700 font-medium" />
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-col lg:pt-50 lg:gap-20 gap-10">
                        <div className="w-full flex flex-col gap-8">
                            <Image src={cloody} alt="cloudess-image-upper" />
                            <div className="flex flex-row justify-between">
                                <h4 className="text-neutral-800 lg:text-2xl text-xl font-size font-medium text-left">/ CLOODY</h4>
                                <ArrowRight className="text-neutral-700 font-medium" />
                            </div>
                        </div>

                        <div className="w-full flex flex-col gap-8">
                            <Image src={dockey} alt="cloudess-image-upper" />
                            <div className="flex flex-row justify-between">
                                <h4 className="text-neutral-800 lg:text-2xl text-xl font-size font-medium text-left">/ DOCKER</h4>
                                <ArrowRight className="text-neutral-700 font-medium" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}