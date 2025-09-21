
import SeoMeta from '../../src/components/SeoMeta';
import OtherGame from '../../src/components/otherGame/OtherGame';


export default function BeerPongPage() {
    return (
        <>
            <SeoMeta
                canonical="https://ivosjatek.hu/mas-ivos-jatekok/sorpong"
                title="Sörpong - Ivós Játék, szabályok, tippek és variációk barátoknak"
                description="A klasszikus sörpong szabályai, tippek és variációk egy helyen! Játssz barátaiddal, dobd a labdát, és igyatok együtt! Fedezd fel, hogyan teheted még izgalmasabbá a bulit ezzel a népszerű ivós játékkal, és ismerd meg a legjobb sörpong stratégiákat, hogy mindenki jól szórakozzon!"
            />
            <OtherGame
                title="Sörpong"
                subtitle="Egyszerűek a szabályok és a játék is"
                text={`Két csapat játszik egymás ellen. 
                A lényeg, hogy az ellenfél poharába beledobj egy pingponglabdát, és ha ez sikerült, meg kell inniuk a pohár tartalmát. Ha a labda visszapattan a ti térfeletekre, 
                újra dobhattok, viszont arra ügyeljetek, 
                hogy mindig legyen a közelben egy pohár víz, 
                amit a labda öblítésére használhattok. 
                A játék játszható különböző tartalmú poharakkal is (pl. sör és fröccs). 
                A poharak elrendezése ugyanaz, mint a sörpongnál, 
                viszont a fröccs és a sör aránya csakis rajtatok áll.`}
            />
        </>
    );
}
