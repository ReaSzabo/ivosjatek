import SeoMeta from '../../src/components/custom-head/SeoMeta';
import Contact from '../../src/components/contact-page/Contact';

export default function KapcsolatPage() {
    return (
        <>
            <SeoMeta
                canonical="https://ivosjatek.hu/kapcsolat"
                title="Kapcsolat - Ivós Játék, elérhetőségek és üzenetküldés"
                description="Az oldal elérhetőségeit tartalmazza. Az Instagram a készítő fő kommunikációs csatornája, de ezen az oldalon keresztül is felveheted a kapcsolatot, kérdezhetsz vagy visszajelzést küldhetsz. Írj bátran, ha kérdésed van az ivós játékokkal vagy az oldallal kapcsolatban!"
            />
            <Contact />
        </>
    );
}
