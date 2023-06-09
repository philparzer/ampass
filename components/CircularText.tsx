const CircularText = () => {
    return (
        <div className="text-white translate-x-[25%] sm:translate-x-0">
            <div className=" w-[504px] h-[504px] relative">
                <svg className="w-full absolute top-0 right-0" viewBox="0 0 504 504" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="252.331" cy="252.411" r="251.5" fill="white" />
                    <circle cx="252.331" cy="252.411" r="251.5" fill="url(#paint0_radial_148_10)" />
                    <defs>
                        <radialGradient id="paint0_radial_148_10" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.3313 395.911) rotate(-39.1836) scale(495.404)">
                            <stop stopColor="#4200FF" />
                            <stop offset="0.567708" stopColor="#00A3FF" />
                            <stop offset="1" stopColor="#8F8F8F" stopOpacity="0.1" />
                        </radialGradient>
                    </defs>
                </svg>

                <div className="absolute top-20 right-5 rounded-full w-20 h-20 opacity-50 backdrop-blur-xl fall-anim-3"/>
                <div className="absolute bottom-40 z-20 left-40 rounded-full w-10 h-10 opacity-80 backdrop-blur-xl fall-anim-2"/>
                

                <div className="px-[20%] pt-[20%] relative z-10">
                    <div className="absolute top-[45%] rounded-full w-5 h-5 blur-xl opacity-80 backdrop-blur-sm fall-anim"/>
                    <h2 className="text-[60px] font-display font-var-heading tracking-tight ">HÄ?</h2>
                    <div className="flex flex-col gap-4 max-w-[60%]">
                    <p>
                        Ampass.at ist eine Kunstplattform.
                    </p>
                    <p>
                        Anmelden kann sich jeder.
                    </p>
                    <p>
                        Mit der <a href="https://www.ampass.tirol.gv.at/" target="_blank" rel="noopener noreferrer" className="underline hover:text-lagoon-300"> Gemeinde Ampass</a>  hats tatsächlich nichts zu tun
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CircularText;