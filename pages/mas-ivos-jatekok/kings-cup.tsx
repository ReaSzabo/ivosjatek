import SeoMeta from '../../src/components/SeoMeta';
import OtherGame from '../../src/components/otherGame/OtherGame';

export default function KingsCupPage() {
    return (
        <>
            <SeoMeta
                canonical="https://ivosjatek.hu/mas-ivos-jatekok/kings-cup"
                title="Kings Cup - Ivós Játék"
                description="Kártyás ivós játék, ahol minden laphoz egy szabály tartozik. Húzz egy kártyát, kövesd a szabályt, és igyál!"
            />
            <OtherGame
                title="Kings Cup"
                subtitle="Ami kell hozzá: italok, franciakártyák"
                text={`A Kings Cupot bármennyien játszhatjátok. A lényeg, hogy készítetek egy listát, hogy milyen kártyához milyen ivós feladatot rendeltek, majd húztok a kártyapakliból. Minden alkalommal azt kell tenned, ami a listán az adott kártya mellett szerepel. Minél jobban belebonyolódtok a játékba, annál izgalmasabb. Léteznek Kings Cup nevű, angol nyelvű applikációk is. Ezekben a kártyák felett megjelennek a szabályok is, így nem kell neked kitalálnod őket.`}
            />
        </>
    );
}
