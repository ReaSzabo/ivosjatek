
import { useEffect, useState } from 'react';
import styles from './CustomCookieConsent.module.scss';

const COOKIE_NAME = 'customCookieConsent';

export default function CustomCookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const consent = localStorage.getItem(COOKIE_NAME);
            if (!consent) setVisible(true);
        }
    }, []);

    const accept = () => {
        localStorage.setItem(COOKIE_NAME, 'accepted');
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className={styles.cookieConsent}>
            <span className={styles.cookieConsentText}>
                Sütiket (cookie-kat) használunk a választott nyelv mentéséhez. Hozzájárulsz?
            </span>
            <button
                onClick={accept}
                className={styles.cookieConsentButton}
            >
                Hát persze!!
            </button>
        </div>
    );
}
