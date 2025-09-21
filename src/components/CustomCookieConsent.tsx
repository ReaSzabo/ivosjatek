import { useEffect, useState } from 'react';

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
        <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            background: '#ecb603',
            color: '#02a4d1',
            padding: '16px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            fontFamily: 'Montserrat, sans-serif',
            fontVariant: 'all-small-caps',
            fontSize: '15px',
            boxShadow: '0 -2px 8px rgba(0,0,0,0.1)'
        }}>
            <span style={{ marginRight: 16 }}>
                Sütiket (cookie-kat) használunk a választott nyelv mentéséhez. Hozzájárulsz?
            </span>
            <button
                onClick={accept}
                style={{
                    background: '#fff1ff',
                    color: '#02a4d1',
                    borderRadius: '4px',
                    fontSize: '13px',
                    fontFamily: 'Montserrat, sans-serif',
                    fontVariant: 'all-small-caps',
                    border: 'none',
                    padding: '8px 18px',
                    cursor: 'pointer',
                    fontWeight: 600,
                    marginRight: '30px'
                }}
            >
                Hát persze!!
            </button>
        </div>
    );
}
