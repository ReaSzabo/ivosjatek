
import SeoMeta from '../../src/components/custom-head/SeoMeta';
import OtherGame from '../../src/components/other-game/OtherGame';


export default function ThumperPage() {
    return (
        <>
            <SeoMeta
                canonical="https://ivosjatek.hu/mas-ivos-jatekok/thumper"
                title="Thumper - Gyors, ritmusos ivós játék, bulikhoz és barátoknak"
                description="Gyors, ritmusos ivós játék, ahol tapsolni és jeleket mutatni kell. Aki elrontja, iszik! Garantáltan felpörgeti a bulit, és mindenki jól szórakozik. Próbáld ki ezt a pörgős ivós játékot, hogy a társaságod ne unatkozzon egy percig sem!"
            />
            <OtherGame
                title="Thumper"
                subtitle="Ez egy gyors és egyszerű, hangos és csapkodós játék"
                text={`Körbeültök egy asztalt, ezután pedig mindenki elkezd lassan tapsolni: kettőt az asztalra csaptok, kettőt tapsoltok. Az asztalra csapásokat és a tapsolást is hanggal nyomatékosítjátok. Ezután mindenki mutat egy egyéni jelet, mondjuk meghúzza a fülét vagy betakarja a szemét. Miközben mindenki tapsol a ritmus szerint, az első játékos mutatja a saját jelét, majd egy másikét. Ezt a másiknak észre kell vennie, majd ugyanúgy mutatnia a saját, majd egy harmadik játékos jelét, és így tovább. Aki nem reagál gyorsan és helyesen, annak meg kell innia a pohara teljes tartalmát.`}
            />
        </>
    );
}
