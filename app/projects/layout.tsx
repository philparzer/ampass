// const Msg = ({ closeToast, toastProps }: ToastProps) => (
//     <div>
//       Lorem ipsum dolor {toastProps.position}
//       <button>Retry</button>
//       <button onClick={closeToast}>Close</button>
//     </div>
//   )



export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">     
      {children}
    </div>
  );
}
