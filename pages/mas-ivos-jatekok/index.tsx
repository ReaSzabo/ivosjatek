import SeoMeta from '../../src/components/custom-head/SeoMeta';
import OtherGames from '../../src/components/other-games-container/OtherGames';

export default function MasIvosJatekokIndexPage() {
    return (
        <>
            <SeoMeta
                canonical="https://ivosjatek.hu/mas-ivos-jatekok"
                title="Még több ivós játék - Különleges és klasszikus ivós játékok gyűjteménye"
                description="Fedezd fel a legjobb ivós játékokat egy helyen! Minden kártya kilistázva, a kártyák fel vannak fordítva, és a választott nyelven jelennek meg a kérdések. Próbálj ki új és klasszikus ivós játékokat, hogy a baráti összejövetelek még emlékezetesebbek legyenek!"
            />
            <OtherGames />
        </>
    );
}
