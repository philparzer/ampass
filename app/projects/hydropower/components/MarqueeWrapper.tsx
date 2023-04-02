"use client"

import Marquee from "react-fast-marquee";
import Image from "next/image";

interface Props {
    content: string;
    multiplicator: number;
}

export default function MarqueeWrapper({ content, multiplicator }:Props) {
    
    return (
        <div className="fixed lg:fixed top-0 xl:w-[200%] left-0 w-screen flex h-screen pointer-events-none">
        <div className=" xl:rotate-[71deg] overflow-hidden xl:-translate-x-[35%]">
            <Marquee gradient={false} speed={20} className="relative">
                <div className="flex lg:gap-[20px] text-[30px] lg:text-[65px] font-display font-var-heading text-[#FBFF28] relative z-10 uppercase">
                    {Array(multiplicator).fill(content).map((content, index) => 
                    <div  key={index} className="flex">
                        <p >{content}</p>
                        <div className="flex w-[30px] lg:w-[100px] justify-center relative ml-[5px] lg:ml-[15px]">
                        <Image src="/images/hydropower/drop.webp" fill alt={"water drop emoji"} className="object-scale-down"/>
                        </div>
                    </div>
                )}
                </div>
                <div className="absolute bg-black w-full h-[20%]"></div>
            </Marquee>
        </div>
        </div>
    )
}