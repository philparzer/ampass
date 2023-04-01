import ToastProvider from "@/components/ToastProvider";
import localFont from 'next/font/local'
import FluctuatingValue from "./components/FluctuatingValue";

const myFont = localFont({
  src: './DSEG14Classic-Bold.woff2',
  display: 'swap',
  weight: '900',
});


interface SevenSegmentDisplayProps {
  value: number;
  label: string;
  fixed?: boolean;
  fluctuateBy?: number;
}

function SevenSegmentDisplay({value, label, fixed, fluctuateBy}: SevenSegmentDisplayProps) {
  return (
    <div className="flex font-body ">
      <div className="flex flex-col gap-2 items-center">
      <p className="bg-white bg-opacity-50 px-1 py-0.5 rounded-md  z-20 border shadow-sm">{label}</p>
      <div className="p-[15px] bg-[#A9A9A9] rounded-sm flex flex-row gap-4 items-center">
        
        <div className={`${myFont.className} text-red-700 bg-black flex rounded-sm px-2 py-0.5 w-[130px] justify-end`}>
        <p className="drop-shadow-xl text-[36px]  z-20" style={{textShadow: "0 0 1px rgba(255, 0, 0, 0.4), 0 0 2px rgba(255, 0, 0, 0.3), 0 0 2px rgba(255, 0, 0, 0.3), 0 0 5px rgba(255, 0, 0, 0.2)"}}>
          {fixed ? <span>{value}</span> : <FluctuatingValue value={value} fluctuateBy={fluctuateBy ? fluctuateBy : 3}/>}
        </p>
      </div>
      </div>
      </div>
    </div> 
  )
}

export default function Hydropower () {
  return <main className="min-h-screen bg-[#ADC2A0] relative">
    {/* <ToastProvider
        message={
          <>
            Seit ca. 1930 existiert in Ampass ein privates <span className="text-lagoon-500">Wasserkraftwerk</span> für die Gemeinde Ampass. Heute wird es von <span className="text-white underline">Hansjörg Steixner</span> betrieben.
          </>
        }
      /> */}


      <div className="flex">
      <div className="flex flex-col gap-3 bg-[#F1ECD4] px-[55px] py-[41px] pb-[150px] rounded-[50px] border-[3px] border-black">
        <SevenSegmentDisplay value={120} label={"HAUSHALTE"} fixed/>
        <SevenSegmentDisplay value={120} label={"VOLT"}/>
        <SevenSegmentDisplay value={120} label={"KWH"}/>
        <SevenSegmentDisplay value={120} label={"WATT"} fluctuateBy={20}/>
      </div>
      </div>
      <div className="w-full h-full bg-[#E48B8B] bg-opacity-20 absolute top-0 left-0 z-10" style={{backdropFilter: "blur(4px)"}}/>
  </main>
}
