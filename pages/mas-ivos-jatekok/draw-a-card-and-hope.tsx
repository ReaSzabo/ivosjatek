
import SeoMeta from '../../src/components/SeoMeta';
import OtherGame from '../../src/components/otherGame/OtherGame';


export default function DrawACardAndHopePage() {
    return (
        <>
            <SeoMeta
                canonical="https://ivosjatek.hu/mas-ivos-jatekok/draw-a-card-and-hope"
                title="Húzz és reménykedj - Ivós Játék"
                description="Pakli kártyával játszható ivós játék, ahol minden laphoz egy feladat tartozik. Húzz egy lapot, teljesítsd a feladatot, és igyál!"
            />
            <OtherGame
                title="Húzz és reménykedj"
                subtitle="Ami kell hozzá: italok, franciakártyák"
                text={`Ehhez a játékhoz nem kell más, csak egy pakli kártya, haverok és pia. Keverjétek meg a paklit alaposan, és már kezdődhet is a játék. Minden körben sorban húztok egy-egy lapot, és a lapnak tulajdonított feladat érvényesül: (A játékban szereplő lapok: 7, 8, 9, 10, J, Q, K, A)\n\n7: Csak te iszol\n8: Csak a fiúk isznak\n9: Csak a lányok isznak\n10: Mindenki iszik\nJ: Akik melletted ülnek, isznak\nQ: Kijelölhetsz valakit, aki igyon\nK: Ez a legizgalmasabb lap. Kijelölhetsz valakit, hogy minden alkalommal, amikor neked innod kell, ő is igyon. Ez az áldás (vagy átok) addig tart, amíg a pakli összes lapját el nem használjátok.\nA: Válassz egyet a lapok funkciói közül (kivéve: K)`}
            />
        </>
    );
}
