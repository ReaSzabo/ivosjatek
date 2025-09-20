import SeoMeta from '../../src/components/SeoMeta';
import Contact from '../../src/components/contact/Contact';

export default function KapcsolatPage() {
    return (
        <>
            <SeoMeta
                canonical="https://ivosjatek.hu/kapcsolat"
                title="Kapcsolat - Ivós Játék"
                description="Az oldal elérhetősegeit tartalmazza. Az Instagram a keszitő fő kommunikacios csatornája."
            />
            <Contact />
        </>
    );
}
