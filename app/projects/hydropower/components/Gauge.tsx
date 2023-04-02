"use client"

import { useEffect, useState } from "react";

export default function Gauge() {

  const [needleRotation, setNeedleRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNeedleRotation(Math.random() > 0.5 ? needleRotation - 50 * Math.random() : needleRotation + 50 * Math.random());
    }, 500);
    return () => clearInterval(interval);
  }, [needleRotation]);


    return (
        <svg
          width="326"
          height="329"
          viewBox="0 0 326 329"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.223877"
            y="0.970947"
            width="325.348"
            height="327.082"
            rx="5"
            fill="#5A6C51"
          />
          <g filter="url(#filter0_i_9_149)">
            <rect
              x="6.19971"
              y="6.8141"
              width="313.396"
              height="315.396"
              rx="5"
              fill="#BFBFBF"
            />
            <circle cx="162.898" cy="164.512" r="146.698" fill="#EAEAEA" />
            <rect
              x="7.69971"
              y="8.3141"
              width="310.396"
              height="312.396"
              rx="3.5"
              stroke="black"
              stroke-width="3"
            />
          </g>
          <path //TODO: spin
            className="origin-center" style={{transform: `rotate(${needleRotation}deg)`, transition: "all 0.5s ease-out;"}}
            d="M53.0252 257.588C52.3808 256.742 52.4927 255.544 53.2825 254.832L204.752 118.324L210.551 125.933L55.9768 257.903C55.0848 258.665 53.7362 258.521 53.0252 257.588Z"
            fill="black"
          />
          <rect
            x="145.684"
            y="148.068"
            width="31.7913"
            height="32.8875"
            rx="10"
            fill="black"
          />
          <rect
            x="9.36206"
            y="10.9765"
            width="307.071"
            height="307.071"
            fill="url(#paint0_linear_9_149)"
            fill-opacity="0.5"
          />
          <defs>
            <filter
              id="filter0_i_9_149"
              x="6.19971"
              y="6.8141"
              width="313.396"
              height="319.396"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_9_149"
              />
            </filter>
            <linearGradient
              id="paint0_linear_9_149"
              x1="-45.119"
              y1="-47.1071"
              x2="364.55"
              y2="367.619"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F4F5B9" />
              <stop offset="1" stop-color="#F4F5B9" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
    )
}