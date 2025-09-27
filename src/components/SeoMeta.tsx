import Head from 'next/head';

type SeoMetaProps = {
    canonical?: string;
    description?: string;
    title?: string;
};

export default function SeoMeta({ canonical, description, title }: SeoMetaProps) {
    let canonicalUrl = canonical;
    if (!canonicalUrl) {
        if (typeof window !== 'undefined') {
            canonicalUrl = `https://ivosjatek.hu${window.location.pathname}`;
        } else {
            canonicalUrl = 'https://ivosjatek.hu';
        }
    }
    const metaDescription = description || 'A legjobb online Ivós Játék app és egyéb ivós játékok, kártyajátékok';
    const metaTitle = title || 'Ivós Játék';
    return (
        <Head>
            {/* Canonical */}
            <link rel="canonical" href={canonicalUrl} />
            {/* Favicon */}
            <link rel="icon" href="/favIcon.webp" />
            {/* Apple Touch Icon */}
            <link rel="apple-touch-icon" sizes="180x180" href="/favIcon.webp" />
            {/* Manifest */}
            <link rel="manifest" href="/manifest.json" />
            {/* Theme color */}
            <meta name="theme-color" content="#000000" />
            {/* Description */}
            <meta name="description" content={metaDescription} />
            {/* Title (fallback, override per page if needed) */}
            <title>{metaTitle}</title>
            {/* Fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Rokkitt:ital,wght@0,100..900;1,100..900&display=swap"
                rel="stylesheet"
            />
            {/* Google Analytics */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-BRZGPDQHJT"></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-BRZGPDQHJT');
                    `,
                }}
            />
            {/* Social Media Profiles */}
            <meta property="og:see_also" content="https://www.instagram.com/ivosjatek.hu" />
            <meta property="og:see_also" content="https://www.facebook.com/fb.ivosjatek" />
            <meta property="og:see_also" content="https://x.com/ivosjatek" />
            <meta property="og:see_also" content="https://www.linkedin.com/company/66930359/admin/dashboard" />
            {/* Twitter profile (X) */}
            <meta name="twitter:site" content="@ivosjatek" />
            {/* Facebook page */}
            <meta property="article:author" content="https://www.facebook.com/fb.ivosjatek" />
            {/* Instagram profile */}
            <meta property="article:author" content="https://www.instagram.com/ivosjatek.hu" />
            {/* LinkedIn profile */}
            <meta property="article:author" content="https://www.linkedin.com/company/66930359/admin/dashboard" />
        </Head>
    );
}
