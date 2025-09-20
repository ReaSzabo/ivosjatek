import SeoMeta from '../../src/components/SeoMeta';
import OtherGame from '../../src/components/otherGame/OtherGame';

export default function OneTrueOneFalsePage() {
    return (
        <>
            <SeoMeta canonical="https://ivosjatek.hu/mas-ivos-jatekok/OneTrueOneFalse" />
            <OtherGame
                title="Egy igaz, egy hamis"
                subtitle="Nagy társasággal érdemes játszani ezt a számolós játékot."
                text={`Ezt a régi, jól bevált játékot olyan társaságoknak ajánljuk, akik még kevéssé ismerik egymást – tehát lehet egy randi is. A játék menete nagyon egyszerű: valaki elmesél két történetet. Ezek közül az egyik igaz, a másik pedig hamis. Miután meghallgattátok a két történetet, tippelnetek kell, vajon melyik igaz, és melyik kamu. A rosszul tippelőknek le kell húzniuk, ami előttük van (lehet sör, bor, tömény is). Ha azonban mindenki rájött az igazságra, akkor a bénán kamuzó mesélőnek kell a pohara fenekére néznie.`}
            />
        </>
    );
}
