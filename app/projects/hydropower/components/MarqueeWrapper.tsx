"use client"

import Marquee from "react-fast-marquee";

interface Props {
    content: string;
}

export default function MarqueeWrapper({ content }:Props) {
    return (
        <>
            <Marquee gradient={false} speed={20} style={{display: "flex", gap: 40}}>
                <div className="flex gap-[40px] text-[65px] font-display font-var-heading text-[#FBFF28]">
                <p>{content}</p>
                <p>{content}</p>
                <p>{content}</p>
                <p>{content}</p>
                <p>{content}</p>
                <p>{content}</p>
                <p>{content}</p>
                <p>{content}</p>
                <p>{content}</p>
                <p>{content}</p>
                <p>{content}</p>
                <p>{content}</p>
                <p>{content}</p>
                <p>{content}</p>
                <p>{content}</p>
                </div> 
            </Marquee>
        </>
    )
}