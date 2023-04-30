import CyclingImage from './CyclingImage';

const hansjörgImages = [
    {src: "/images/hans.png", alt:"Foto von Hansjörg Steixner vor einem Anwesen, er trägt eine Mütze"},
    {src: "/images/hans2.png", alt:"Aufnahme von Hansjörg Steixner während einem Public Speakng Event"},
    {src: "/images/hans3.png", alt:"Foto von Hansjörg Steixner aufgenommen im Rahmen seiner Arbeit am WIFI Tirol"},
]

const philippImages = [
    {src: "/images/p.png",  alt:"Aufnahme von Philipp Parzer kurz vor dem Graffiti sprayen"},
    {src: "/images/p2.png", alt:"Unerlaubte Aufnahme von Philipp Parzer und Polina Matviyenko im Europapark Rust"},
    {src: "/images/p3.jpeg", alt:"Foto von Philipp Parzer grinsend mit Adlerlagune Cap auf der Alm"},
]

const About = () => {
    return (
        <div className="text-white flex-col lg:flex-row flex items-center gap-20">
            <div>
                <h2 className="text-[40px] lg:text-[60px] font-display font-var-heading tracking-tight max-w-[200px] leading-[1em]">wer machtn sowas</h2>
                <p className="max-w-[240px] pt-4 ml-4">zwei Tiroler mit zu viel Freizeit, auf der Suche nach Gleichgesinnten {"(Leuten mit dummen Ideen)"} </p>
            </div>
            <div className="flex flex-col gap-8">
                <div className="relative">
                    <div className="absolute -top-7 lg:-left-32 flex flex-col z-10">
                        <h3 className="text-2xl lg:text-4xl lg:whitespace-nowrap">Hansjörg Steixner</h3>
                        <p className="max-w-[120px] pl-4">Initiator, Ampasser, cooler Typ</p>
                    </div>
                    <CyclingImage images={hansjörgImages} height={310} width={310}/>
                    
                </div>
                <div className="relative">
                    <div className="absolute -top-7 lg:top-8 lg:-left-10 z-10">
                        <h3 className="text-2xl lg:text-4xl ">Philipp Parzer</h3>
                        <p className="pl-4 max-w-[240px] lg:max-w-none">Web-Baumeister, Dampfplauderer</p>
                    </div>
                    <CyclingImage images={philippImages} height={288} width={288}/>
                </div>
            </div>
        </div>
    )
}

export default About;