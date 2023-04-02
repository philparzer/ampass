import ToastProvider from "@/components/ToastProvider";
import localFont from "next/font/local";
import FluctuatingValue from "./components/FluctuatingValue";
import Gauge from "./components/Gauge";
import Switch from "./components/Switch";
import MarqueeWrapper from "./components/MarqueeWrapper";
import Sign from "./components/Sign";
import AttentionSign from "./components/AttentionSign";
import ButtonGrid from "./components/ButtonGrid";
import Image from "next/image";

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
        <p className="bg-white bg-opacity-50 px-1 py-0.5 rounded-md  z-20 border shadow-sm font-medium">
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
    <main className="min-h-screen bg-[#ADC2A0] relative overflow-x-hidden flex justify-center">
      <div
        className="w-full h-full bg-[#E48B8B] bg-opacity-20 absolute top-0 left-0 z-10"
        style={{ backdropFilter: "blur(4px)" }}
      />

      <div className="max-w-[1512px] relative">
        {/*
        FIXED ELEMENTS
      */}

        {/* <ToastProvider
        message={
          <>
            Seit ca. 1930 existiert in Ampass ein privates <span className="text-lagoon-500">Wasserkraftwerk</span> für die Gemeinde Ampass. Heute wird es von <span className="text-white underline">Hansjörg Steixner</span> betrieben.
          </>
        }
      /> */}

        <div className="h-20 relative z-40">
          <MarqueeWrapper content={"Saft für Ampass"} multiplicator={5} />
        </div>

        {/*
        ABSOLUTE ELEMENTS
      */}

        <div className="absolute right-0 rotate-[-25deg] z-30">
          <Image
            src="/images/hydropower/map-overview.webp"
            height={539}
            width={383}
            alt={"Karte, die Leitungen veranschaulicht"}
          />
        </div>
        <div className="absolute -left-[100px] bottom-[35vh] -rotate-[26deg] z-30">
          <Image
            src="/images/hydropower/map-supply.webp"
            height={639}
            width={808}
            alt={
              "Karte, auf der das Einflussgebiet des Kraftwerks und die Anbindung angegeben wird"
            }
          />
        </div>

        <div className="flex absolute right-0 bottom-[30vh] z-30 justify-end">
        <div className="flex translate-x-[20%]">
        <div>
        <Image
            className="rotate-[18deg] translate-x-[78%]"
              src="/images/hydropower/dam.webp"
              height={428}
              width={583}
              alt={"Winterliche Ansicht des Turbinenabflusses"}
            />
        
          </div>

          <div className="" >
          <Image
            className="rotate-[30deg]"
              src="/images/hydropower/machine.webp"
              height={410}
              width={547}
              alt={"Turbine des Wasserkraftwerks"}
            />
          </div>

          <div className="">
           
             <Image className="rotate-[45deg] translate-y-[60%] -translate-x-[80%]"
              src="/images/hydropower/wheel.webp"
              height={341}
              width={256}
              alt={"Schaufelrad"}
            />
          </div>
        </div>
        </div>

        {/*
          MAIN CONTENT GRID
        */}
        <div className="grid grid-cols-4">
          <div>
            <div className="z-20 relative">
              <Sign />
            </div>
            <div className="flex items-center w-full justify-between pr-5">
              <div>
                <Image
                  src="/project-assets/hydropower.webp"
                  height={160}
                  width={150}
                  alt={"Hydropower by Miller Logo"}
                />
              </div>

              <div>
                <Switch />
                <Switch />
              </div>
            </div>
          </div>
          <div>
            <Gauge />
          </div>
          <div className="flex col-span-2 row-span-2 ml-[100px]">
            <div>
            <div className="flex flex-col gap-3 bg-[#D4CFB9] px-[55px] py-[60px] pb-[130px] rounded-[50px] border-[3px] border-black">
              <SevenSegmentDisplay value={120} label={"HAUSHALTE"} fixed />
              <SevenSegmentDisplay value={120} label={"VOLT"} />
              <SevenSegmentDisplay value={120} label={"KWH"} />
              <SevenSegmentDisplay
                value={120}
                label={"WATT"}
                fluctuateBy={20}
              />
            </div>
            </div>
          </div>

          <div className="col-span-2 mt-[50px] w-full">
            <ButtonGrid />
          </div>
          <div className="col-span-4 mt-[40vh] flex justify-center pr-[10vw]">
            <AttentionSign />
          </div>
        </div>
      </div>
    </main>
  );
}
