
import '../src/styles/globals.scss';
import type { AppProps } from 'next/app';
import CookieConsent from 'react-cookie-consent';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
            <CookieConsent
                location="bottom"
                buttonText="Hát persze!!"
                cookieName="myAwesomeCookieName2"
                style={{ background: "#ecb603" }}
                buttonStyle={{ background: "#fff1ff", color: "#02a4d1", borderRadius: "4px", fontSize: "13px", fontFamily: "Montserrat, sans-serif", fontVariant: "all-small-caps" }}
                expires={150}
            >
                Sütiket (cookie-kat) használunk a választott nyelv mentéséhez. Hozzájárulsz?
            </CookieConsent>
        </>
    );
}
