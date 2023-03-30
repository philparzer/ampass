



// const Msg = ({ closeToast, toastProps }: ToastProps) => (
//     <div>
//       Lorem ipsum dolor {toastProps.position}
//       <button>Retry</button>
//       <button onClick={closeToast}>Close</button>
//     </div>
//   )

import ToastClient from "@/components/ToastClient"

export default function ProjectLayout({
    children,
  }: {
    children: React.ReactNode
  }) {


    return (
      <div className="relative">
        <ToastClient message={<>Zum 200. Jahrestag startete{" "}
            <span className="text-white underline">Hansjörg Steixner</span> die
            Kampagne <span className="text-lagoon-500">Tirol1809</span></>} />
        
        {children}
      </div>
    )
  }