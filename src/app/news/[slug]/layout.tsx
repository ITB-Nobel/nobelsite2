import type {Metadata} from 'next'
import {Roboto, Roboto_Condensed} from 'next/font/google'
import localFont from 'next/font/local'
import Head from "next/head";


// const roboto = Roboto({weight: ["400", "500", "700"], subsets: ['latin']})
// const robotoCondensed = Roboto_Condensed({weight: ["400", "300", "700"], subsets: ['latin']})
// const localFont1 = localFont({ src: '../fonts/gt-america-standard-medium.woff' })

export const metadata: Metadata = {
    title: 'Nobel Indonesia Institute',
    description: 'Start Here Go Anywhere',
    openGraph: {
        
        images: [
            {
                url: '/images/logo.png',
                width: 800,
                height: 600,
                alt: 'Nobel Indonesia Institute'
            }
        ]
    },
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {

    return (
        <html lang="en">
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
        </Head>
        <body >{children}</body>
        </html>
    )
}
