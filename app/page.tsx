import PlaguePillar from "@/components/PlaguePillar";
import Footer from "@/components/Footer";
import ApplyForm from "@/components/ApplyForm";
import CircularText from "@/components/CircularText";

export default function Home() {

  return (
    <main className=" bg-black flex w-full relative flex-col overflow-x-hidden font-body">
      <div className="min-h-[100vh] flex relative">
        <PlaguePillar />
        <div className="absolute w-full h-full flex justify-center items-center -translate-x-[3vw] md:translate-x-0 -translate-y-[7vh] md:translate-y-0">
          <h1 className="font-display font-var-heading tracking-tight text-[70px] leading-[50px] md:[leading-[110px]] md:text-[110px] rotate-[67deg] translate-y-10 pb-[220px] md:pb-[250px] text-slate-200 select-none">
            am pass
          </h1>
        </div>
      </div>
      <div className="min-h-[90vh] relative flex flex-col">
        <section className="flex justify-center grow items-center px-[5vw]">
          <ApplyForm />
        </section>
      </div>
      <section className="flex justify-center grow items-center px-[5vw]">
        <CircularText />
      </section>
      <section className="mt-40"><Footer /></section>
    </main>
  )
}
