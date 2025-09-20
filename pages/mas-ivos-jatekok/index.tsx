import SeoMeta from '../../src/components/SeoMeta';
import OtherGames from '../../src/components/otherGames/OtherGames';

export default function MasIvosJatekokIndexPage() {
    return (
        <>
            <SeoMeta
                canonical="https://ivosjatek.hu/mas-ivos-jatekok"
                title="Még több ivós játék - Ivós Játék"
                description="Minden kártya kilistázva. A kártyák fel vannak forditva és a választott nyelven megjelennek a kérdések."
            />
            <OtherGames />
        </>
    );
}
