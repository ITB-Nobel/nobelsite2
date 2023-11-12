import type {Metadata} from 'next'
import {Roboto, Roboto_Condensed} from 'next/font/google'
import './globals.css'


const roboto = Roboto({weight: ["400", "500", "700"], subsets: ['latin']})
const robotoCondensed = Roboto_Condensed({weight: ["400", "300", "700"], subsets: ['latin']})
export const metadata: Metadata = {
    title: 'Nobel Institut',
    description: 'Start Here Go Anywhere',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {

    return (
        <html lang="en">
        <body className={`${roboto.className} ${robotoCondensed.className}`}>{children}</body>
        </html>
    )
}
