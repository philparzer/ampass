import PlaguePillar from "@/components/PlaguePillar";

export default function Home() {

  return (
    <main className=" bg-black flex w-full flex-col overflow-x-hidden">
      <div className="min-h-[100vh] flex relative">
      <PlaguePillar />
      </div>
      <div className="h-[200px] bg-red-200">hi</div>
    </main>
  )
}
