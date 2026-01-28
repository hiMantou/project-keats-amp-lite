
import styleColor from '../styles/color.css';
import styleGlobals from '../styles/globals.css';

import { IconProvider, DEFAULT_ICON_CONFIGS } from '@icon-park/react';
import Head from 'next/head';

const IconConfig = { ...DEFAULT_ICON_CONFIGS, prefix: 'keats', strokeWidth: 3 }
function MyApp({ Component, pageProps }) {
    return (
        <IconProvider value={IconConfig}>
            <style jsx global>
                {styleColor}
            </style>
            <style jsx global>
                {styleGlobals}
            </style>
            <Head>
                <link rel="preload" href="images/theme.png" as="image" />
                <title>Learn Chinese in China | Keats School</title>
                <meta name="description" content="Learn Chinese in China in a fun and effective way. Discover Mandarin Chinese and the exciting Chinese culture with Keats School in Kunming, Yunnan, China." />
                <link rel="stylesheet" href="./css/_app.css" />
                <link rel="icon" href="favicon.ico" />
            </Head>
            {/* <Nav /> */}
            <div className="pageContainer">
                <Component {...pageProps} />
            </div>
        </IconProvider>
    )
}

export default MyApp
