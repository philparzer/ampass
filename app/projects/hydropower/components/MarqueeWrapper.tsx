"use client"

import Marquee from "react-fast-marquee";
import Image from "next/image";

interface Props {
    content: string;
    multiplicator: number;
}

export default function MarqueeWrapper({ content, multiplicator }:Props) {
    
    return (
        <div className="fixed top-0 left-0 w-screen flex h-screen pointer-events-none">
        <div className="lg:w-[200%] lg:rotate-[71deg] overflow-hidden lg:-translate-x-[20%]">
            <Marquee gradient={false} speed={20} className="relative">
                <div className="flex gap-[20px] text-[65px] font-display font-var-heading text-[#FBFF28] relative z-10 uppercase pr-[60px]">
                    {Array(multiplicator).fill(content).map((content, index) => 
                    <div  key={index} className="flex gap-[20px]">
                        <p >{content}</p>
                        <div className="flex w-[100px] relative">
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