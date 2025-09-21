
import SeoMeta from '../../src/components/SeoMeta';
import OtherGame from '../../src/components/otherGame/OtherGame';


export default function INeverHaveEverPage() {
    return (
        <>
            <SeoMeta
                canonical="https://ivosjatek.hu/mas-ivos-jatekok/en-meg-soha"
                title="Én még soha - Ismerkedős ivós játék, titkokkal és nevetéssel"
                description="A klasszikus 'Én még soha' játék, ahol titkok derülnek ki, és aki már megtette, iszik. Tökéletes ismerkedős ivós játék, amely segít jobban megismerni a barátaidat, és garantáltan sok nevetést hoz minden társaságba!"
            />
            <OtherGame
                title="Én még soha..."
                subtitle="Ami kell hozzá: italok"
                text={`Az 'Én még soha' játék nagyszerű lehetőség arra, hogy megismerhesd a barátaid titkait. Ossz meg valamit a többiekkel, amit még soha nem tettél meg. Ha valaki megtette a jelen lévők közül, neki innia kell. Például, ha azt mondod: 'engem még soha nem igazoltattak', akkor mindazok, akiket már igen, isznak. A legfontosabb, hogy a barátaid elismerjék a ciki sztorikat is, így gondold meg, mit mondasz.`}
            />
        </>
    );
}
