import './globals.css'
import { Roboto_Flex as Display} from 'next/font/google'
import { Roboto_Mono as Body} from 'next/font/google'

const display = Display({
  subsets: ['latin'],
  variable: '--font-display',
  axes: ['GRAD', 'slnt', 'XTRA', 'YOPQ', 'YTLC', 'YTUC', 'YTAS', 'YTDE', 'YTFI', 'opsz']
})

const body = Body({
  subsets: ['latin'],
  variable: '--font-body',
})


export const metadata = {
  title: 'Ampass',
  description: 'Da, wo digitale Künstler*innen ihr Geschäft verrichten.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  themeColor: 'black',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} font-sans selection:bg-lagoon`}>
      <body className="bg-black relative">
        <div className="top-0 left-[5vw] fixed bg-[#FBFF28] p-1 px-2 font-body text-xs tracking-tighter z-10">under construction</div>
        {children}
      </body>
    </html>
  )
}
