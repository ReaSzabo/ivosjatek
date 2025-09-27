
import SeoMeta from '../../src/components/custom-head/SeoMeta';
import OtherGame from '../../src/components/other-game/OtherGame';


export default function FlipCupPage() {
    return (
        <>
            <SeoMeta
                canonical="https://ivosjatek.hu/mas-ivos-jatekok/pohar-fordito"
                title="Pohár fordító - Ivós Játék, csapatverseny bulikhoz"
                description="Két csapat versenyez, ki issza ki előbb a poharakat és fordítja fejre őket. Gyors, pörgős ivós játék nagyobb társaságnak, ahol a csapatmunka és a gyorsaság számít. Próbáld ki ezt a klasszikus ivós játékot, hogy feldobd a bulit és mindenki jól szórakozzon!"
            />
            <OtherGame
                title="Pohár fordító"
                subtitle="Ami kell hozzá: italok, fél literes műanyagpoharak"
                text={`A pohár fordító az egyik legjobb ivós játék kezdőknek. Két csapat versenyzik egymás ellen. A két csapat egymásnak ellentétes oldalon áll és a poharakat az italokkal az asztal szélén tartja. Amelyik csapat előbb issza ki a poharak tartalmát és pöccinti fejtetőre a poharakat, az nyer.`}
            />
        </>
    );
}
