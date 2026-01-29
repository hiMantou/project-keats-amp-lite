
import styleGlobals from '../styles/globals.css';
import styleComponent from '../styles/component.css';
import styleNav from '../styles/nav.css';
import styleHome from '../styles/home.css';
import { IconProvider, DEFAULT_ICON_CONFIGS } from '@icon-park/react';
import Head from 'next/head';
import { NavBar, Footer } from '@/components/layout'

const IconConfig = { ...DEFAULT_ICON_CONFIGS, prefix: 'keats', strokeWidth: 3 }
function MyApp({ Component, pageProps }) {
    return (
        <IconProvider value={IconConfig}>
            <style jsx global>
                {styleGlobals}
            </style>
            <style jsx global>
                {styleComponent}
            </style>
            <style jsx global>
                {styleNav}
            </style>
            <style jsx global>
                {styleHome}
            </style>
            <Head>
                <title>Learn Chinese in China | Keats School</title>
                <meta name="description" content="Learn Chinese in China in a fun and effective way. Discover Mandarin Chinese and the exciting Chinese culture with Keats School in Kunming, Yunnan, China." />
                <link rel="icon" href="favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Lora:wght@700&family=Roboto:wght@500..700&display=swap" rel="stylesheet"/>
            </Head>
            <NavBar/>
            <div className="pageContainer">
                <Component {...pageProps} />
            </div>
            <Footer />
        </IconProvider>
    )
}

export default MyApp
