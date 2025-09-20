import SeoMeta from '../../src/components/SeoMeta';
import OtherGame from '../../src/components/otherGame/OtherGame';

export default function MostLikelyPage() {
    return (
        <>
            <SeoMeta canonical="https://ivosjatek.hu/mas-ivos-jatekok/MostLikely" />
            <OtherGame
                title="Legvalószínűbb"
                subtitle="Ami kell hozzá: italok"
                text={`A játékosok körben ülnek és feltesznek egy 'legvalószínűbb' kérdést. Például: 'Kinél a legvalószínűbb, hogy dugította már el a WC-t?' Ezután háromra mindenki arra a személyre mutat, aki szerinte a legvalószínűbb. Akire a legtöbben mutatnak, az iszik és annyit, ahányan mutattak rá.`}
            />
        </>
    );
}
