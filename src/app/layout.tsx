import type {Metadata} from 'next'
import {Roboto, Roboto_Condensed} from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import Head from "next/head";


// const roboto = Roboto({weight: ["400", "500", "700"], subsets: ['latin']})
// const robotoCondensed = Roboto_Condensed({weight: ["400", "300", "700"], subsets: ['latin']})
// const localFont1 = localFont({ src: '../fonts/gt-america-standard-medium.woff' })

export const metadata: Metadata = {
    title: 'Nobel Indonesia Institute',
    description: 'Fakultas Teknologi dan Bisnis, Fakultas Pascasarjana : Start Here Go Anywhere',
    keywords: 'Fakultas Teknologi dan Bisnis : Manajemen, Akuntansi, Sistem dan Teknologi Informasi, Teknik Pertambangan, Teknologi Hasil Perikanan,Teknik Industri, Pendidikan Teknologi Informasi, Fakultas Pascasarjana : Magister Manajemen, Magister Keuangan Publik, Magister Manajemen dan Kewirausahaan',
    openGraph: {
        type: 'website',
        url: 'https://nobel.ac.id/',
        title: 'Nobel Indonesia Institute',
        
        description: 'Fakultas Teknologi dan Bisnis, Fakultas Pascasarjana : Start Here Go Anywhere',
        images: [
            {
                url: '/images/logo.png',
                width: 800,
                height: 600,
                alt: 'Nobel Indonesia Institute'
            }
        ],
        siteName: 'Nobel Indonesia Institute'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Nobel Indonesia Institute',
        description: 'Empowering Future Generations Through Quality Education and Innovation',
        images: ['/images/logo.png']
    }
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