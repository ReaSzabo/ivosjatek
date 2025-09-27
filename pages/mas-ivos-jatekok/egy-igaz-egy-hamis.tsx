import SeoMeta from '../../src/components/custom-head/SeoMeta';
import OtherGame from '../../src/components/other-game/OtherGame';

export default function OneTrueOneFalsePage() {
    return (
        <>
            <SeoMeta
                canonical="https://ivosjatek.hu/mas-ivos-jatekok/egy-igaz-egy-hamis"
                title="Egy igaz, egy hamis - Ismerkedős, szórakoztató ivós játék"
                description="Két történet, az egyik igaz, a másik hamis. Találd ki, melyik a kamu, a rosszul tippelők isznak! Ismerkedős, szórakoztató ivós játék, amely garantáltan feldobja a hangulatot, és segít jobban megismerni a barátaidat egy vidám este során!"
            />
            <OtherGame
                title="Egy igaz, egy hamis"
                subtitle="Nagy társasággal érdemes játszani ezt a számolós játékot."
                text={`Ezt a régi, jól bevált játékot olyan társaságoknak ajánljuk, akik még kevéssé ismerik egymást - tehát lehet egy randi is. A játék menete nagyon egyszerű: valaki elmesél két történetet. Ezek közül az egyik igaz, a másik pedig hamis. Miután meghallgattátok a két történetet, tippelnetek kell, vajon melyik igaz, és melyik kamu. A rosszul tippelőknek le kell húzniuk, ami előttük van (lehet sör, bor, tömény is). Ha azonban mindenki rájött az igazságra, akkor a bénán kamuzó mesélőnek kell a pohara fenekére néznie.`}
            />
        </>
    );
}
