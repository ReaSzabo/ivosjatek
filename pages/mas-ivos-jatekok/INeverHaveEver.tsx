
import SeoMeta from '../../src/components/SeoMeta';
import OtherGame from '../../src/components/otherGame/OtherGame';


export default function INeverHaveEverPage() {
    return (
        <>
            <SeoMeta canonical="https://ivosjatek.hu/mas-ivos-jatekok/INeverHaveEver" />
            <OtherGame
                title="Én még soha..."
                subtitle="Ami kell hozzá: italok"
                text={`Az 'Én még soha' játék nagyszerű lehetőség arra, hogy megismerhesd a barátaid titkait. Ossz meg valamit a többiekkel, amit még soha nem tettél meg. Ha valaki megtette a jelen lévők közül, neki innia kell. Például, ha azt mondod: 'engem még soha nem igazoltattak', akkor mindazok, akiket már igen, isznak. A legfontosabb, hogy a barátaid elismerjék a ciki sztorikat is, így gondold meg, mit mondasz.`}
            />
        </>
    );
}
