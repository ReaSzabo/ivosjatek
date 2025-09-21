import SeoMeta from '../../src/components/SeoMeta';
import OtherGame from '../../src/components/otherGame/OtherGame';
export default function TakeTheBagPage() {

    return (
        <>
            <SeoMeta
                canonical="https://ivosjatek.hu/mas-ivos-jatekok/take-the-bag"
                title="Fogd a táskát - Ivós Játék"
                description="Szórakoztató ivós játék, ahol egy papírtáskát csak a szátokkal emelhettek fel. Akinek nem sikerül, iszik!"
            />
            <OtherGame
                title="Fogd a táskát"
                subtitle="Ami kell hozzá: italok, papírtáska"
                text={`Ez egy nagyon szórakoztató játék, akár már ezen a hétvégén kipróbálhatjátok. Tegyetek egy papírtáskát a földre, majd próbáljátok felvenni. Na de hol a csavar? Csak a szátokat használhatjátok hozzá, semmi mást. Akinek nem sikerül felvenni a táskát, iszik.`}
            />
        </>
    );
}
