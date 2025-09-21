import SeoMeta from '../../src/components/SeoMeta';
import OtherGame from '../../src/components/otherGame/OtherGame';

export default function DeathCirclePage() {
    return (
        <>
            <SeoMeta
                canonical="https://ivosjatek.hu/mas-ivos-jatekok/death-circle"
                title="Halálkör - Ivós Játék"
                description="A Halálkör az egyik legegyszerűbb itatós kártyajáték. Bizonyos lapoknál bizonyos csoportok isznak, kilencesnél rímet kell mondani. Aki nem tud, iszik."
            />
            <OtherGame
                title="Halálkör"
                subtitle={`A Halálkör az egyik legegyszerűbb itatós kártyajáték. Ami kell hozzá: italok, franciakártyák`}
                text={`Bizonyos laptípusoknál bizonyos csoportok isznak (pl. pirosnál a lapot húzó, hetesnél a fiúk, nyolcasnál a lányok stb.). Kilencesnél egy szót kell bemondani, és mindenkinek kell rá mondani egy rímet. Aki nem tud, iszik`}
            />
        </>
    );
}
