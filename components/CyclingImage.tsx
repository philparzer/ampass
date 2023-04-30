'use client'

import z from 'zod'
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ImageArraySchema = z.array(z.object({
    src: z.string(),
    alt: z.string(),
}))

type ImageArray = z.infer<typeof ImageArraySchema>

interface Props {
    images: ImageArray;
    height: number;
    width: number;
}

export default function CyclingImage({ images, height, width }: Props) {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 200);

        return () => clearInterval(interval);
    }, [images]);
    return (
        <div className={`relative`} style={{height: height, width: width}}>
            {images.map((image, i) => <Image key={i}
                className={`absolute top-0 right-0 ${i === currentIndex ? 'opacity-100' : 'opacity-0'
                    }
          `} src={image.src} width={width} height={height} alt={image.alt} />)}
        </div>
    )
}