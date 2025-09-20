
import "../src/styles/globals.scss";

import CustomCookieConsent from '../src/components/CustomCookieConsent';
import SeoMeta from '../src/components/SeoMeta';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <SeoMeta />
            <Component {...pageProps} />
            <CustomCookieConsent />
        </>
    );
}
