import PlaguePillar from "@/components/PlaguePillar";
import Footer from "@/components/Footer";
import ApplyForm from "@/components/ApplyForm";

export default function Home() {

  return (
    <main className=" bg-black flex w-full relative flex-col overflow-x-hidden font-body">
      <div className="min-h-[100vh] flex relative">
        
          <PlaguePillar />
        
      </div>
      <div className="min-h-[100vh] relative flex flex-col">
        <section className="flex justify-center grow items-center mb-40 px-[5vw]">
          <ApplyForm />
        </section>
        <Footer />
      </div>
      
    </main>
  )
}
