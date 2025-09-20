
import "../src/styles/globals.scss";

import CustomCookieConsent from '../src/components/CustomCookieConsent';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
            <CustomCookieConsent />
        </>
    );
}
