"use client";

export default function ApplyForm() {
    return (
        <div className="text-white flex flex-col gap-2">
            <h2 className="font-bold text-xl">Wir bringen deine Side-Projects unter die Leute</h2>
            <p className="opacity-50">Hast was, das dazupasst? Gib E-Mail.</p>
            <form className="flex flex-col gap-8 relative w-full mt-4">
                <div className="relative z-10">
                    <input onChange={(e) => console.log(e.target)} className="w-full max-w-[300px] md:max-w-none md:w-[400px] h-[50px] appearance-none transition-all bg-white bg-opacity-20 backdrop-blur-sm !font-body border border-white rounded-[10px] p-4 text-lg focus:outline-lagoon-500"></input>
                </div>
                <div className="">
                    <button className="font-display font-var-heading p-1.5 px-2 bg-scorch-500 rounded-[5px]" onClick={(() => console.log("submit"))}>ANMELDEN</button>
                </div>
                <div className="absolute hidden md:flex left-[40%] md:left-[55%] w-full z-0">
                    <h3 className="font-display text-[30px] md:text-[60px] font-var-heading">
                        willst rein?
                    </h3>
                </div>
            </form>
        </div>
    )
}