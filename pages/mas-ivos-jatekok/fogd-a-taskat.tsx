import SeoMeta from '../../src/components/custom-head/SeoMeta';
import OtherGame from '../../src/components/other-game/OtherGame';
export default function TakeTheBagPage() {

    return (
        <>
            <SeoMeta
                canonical="https://ivosjatek.hu/mas-ivos-jatekok/fogd-a-taskat"
                title="Fogd a táskát - Ivós Játék, ügyességi kihívás"
                description="Szórakoztató ivós játék, ahol egy papírtáskát csak a szátokkal emelhettek fel. Akinek nem sikerül, iszik! Ez az ügyességi ivós játék garantáltan megnevetteti a társaságot, és minden körben új kihívást jelent. Próbáld ki, hogy ki a legügyesebb a baráti körödben!"
            />
            <OtherGame
                title="Fogd a táskát"
                subtitle="Ami kell hozzá: italok, papírtáska"
                text={`Ez egy nagyon szórakoztató játék, akár már ezen a hétvégén kipróbálhatjátok. Tegyetek egy papírtáskát a földre, majd próbáljátok felvenni. Na de hol a csavar? Csak a szátokat használhatjátok hozzá, semmi mást. Akinek nem sikerül felvenni a táskát, iszik.`}
            />
        </>
    );
}
