import SeoMeta from '../../src/components/SeoMeta';
import OtherGame from '../../src/components/otherGame/OtherGame';

export default function DeathCirclePage() {
    return (
        <>
            <SeoMeta
                canonical="https://ivosjatek.hu/mas-ivos-jatekok/halalkor"
                title="Halálkör - Ivós kártyajáték, egyszerű szabályokkal"
                description="A Halálkör az egyik legegyszerűbb itatós kártyajáték. Bizonyos lapoknál bizonyos csoportok isznak, kilencesnél rímet kell mondani. Aki nem tud, iszik. Próbáld ki ezt a klasszikus ivós játékot, amely garantáltan feldobja a társaságot és izgalmas pillanatokat hoz minden buliba!"
            />
            <OtherGame
                title="Halálkör"
                subtitle={`A Halálkör az egyik legegyszerűbb itatós kártyajáték. Ami kell hozzá: italok, franciakártyák`}
                text={`Bizonyos laptípusoknál bizonyos csoportok isznak (pl. pirosnál a lapot húzó, hetesnél a fiúk, nyolcasnál a lányok stb.). Kilencesnél egy szót kell bemondani, és mindenkinek kell rá mondani egy rímet. Aki nem tud, iszik`}
            />
        </>
    );
}
