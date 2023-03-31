import Footer from "@/components/Footer"

interface Props {
  children: React.ReactNode | null
}

export default function UtilityPageWrapper ({children}: Props) {
  return <main className="flex w-full px-[5vw] relative items-center py-[20vh] flex-col text-white overflow-x-hidden font-body min-h-screen">
     {children}
     <Footer hasHomeButton/>
  </main>
}