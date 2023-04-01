import ToastProvider from "@/components/ToastProvider";
import localFont from "next/font/local";
import FluctuatingValue from "./components/FluctuatingValue";
import Gauge from "./components/Gauge";
import Switch from "./components/Switch";
import Marquee from "react-fast-marquee";
import MarqueeWrapper from "./components/MarqueeWrapper";

const myFont = localFont({
  src: "./DSEG14Classic-Bold.woff2",
  display: "swap",
  weight: "900",
});

interface SevenSegmentDisplayProps {
  value: number;
  label: string;
  fixed?: boolean;
  fluctuateBy?: number;
}

function SevenSegmentDisplay({
  value,
  label,
  fixed,
  fluctuateBy,
}: SevenSegmentDisplayProps) {
  return (
    <div className="flex font-body ">
      <div className="flex flex-col gap-2 items-center">
        <p className="bg-white bg-opacity-50 px-1 py-0.5 rounded-md  z-20 border shadow-sm">
          {label}
        </p>
        <div className="p-[15px] bg-[#A9A9A9] rounded-sm flex flex-row gap-4 items-center">
          <div
            className={`${myFont.className} text-red-700 bg-black flex rounded-sm px-2 py-0.5 w-[130px] justify-end`}
          >
            <p
              className="drop-shadow-xl text-[36px]  z-20"
              style={{
                textShadow:
                  "0 0 1px rgba(255, 0, 0, 0.4), 0 0 2px rgba(255, 0, 0, 0.3), 0 0 2px rgba(255, 0, 0, 0.3), 0 0 5px rgba(255, 0, 0, 0.2)",
              }}
            >
              {fixed ? (
                <span>{value}</span>
              ) : (
                <FluctuatingValue
                  value={value}
                  fluctuateBy={fluctuateBy ? fluctuateBy : 3}
                />
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hydropower() {
  return (
    <main className="min-h-screen bg-[#ADC2A0] relative">
      {/* <ToastProvider
        message={
          <>
            Seit ca. 1930 existiert in Ampass ein privates <span className="text-lagoon-500">Wasserkraftwerk</span> für die Gemeinde Ampass. Heute wird es von <span className="text-white underline">Hansjörg Steixner</span> betrieben.
          </>
        }
      /> */}
 <div className="h-20 bg-red-200 relative z-30">
        <MarqueeWrapper content={"Saft für Ampass"}/>
      </div>
      <div className="flex">
        <div className="flex flex-col gap-3 bg-[#F1ECD4] px-[55px] py-[41px] pb-[150px] rounded-[50px] border-[3px] border-black">
          <SevenSegmentDisplay value={120} label={"HAUSHALTE"} fixed />
          <SevenSegmentDisplay value={120} label={"VOLT"} />
          <SevenSegmentDisplay value={120} label={"KWH"} />
          <SevenSegmentDisplay value={120} label={"WATT"} fluctuateBy={20} />
        </div>
      </div>
      <div
        className="w-full h-full bg-[#E48B8B] bg-opacity-20 absolute top-0 left-0 z-10"
        style={{ backdropFilter: "blur(4px)" }}
      />
      <div>
        <Gauge />
      </div>
      <div>
        <Switch />
      </div>
      <div>
        {/*Attention Sign*/}
        <svg
          width="243"
          height="255"
          viewBox="0 0 243 255"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.124512"
            y="0.379272"
            width="242.446"
            height="357.271"
            rx="5"
            fill="white"
          />
          <rect
            x="15.2395"
            y="204.274"
            width="211.774"
            height="141.812"
            fill="#FBFF28"
          />
          <path
            d="M121.127 33.069L206.74 181.355H35.5137L121.127 33.069Z"
            fill="#FBFF28"
            stroke="black"
            stroke-width="10"
            stroke-linejoin="round"
          />
        </svg>
       
      </div>
      
    </main>
  );
}
