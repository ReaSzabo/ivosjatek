
import SeoMeta from '../../src/components/SeoMeta';
import OtherGame from '../../src/components/otherGame/OtherGame';


export default function FlipCupPage() {
    return (
        <>
            <SeoMeta
                canonical="https://ivosjatek.hu/mas-ivos-jatekok/flip-cup"
                title="Pohár fordító - Ivós Játék"
                description="Két csapat versenyez, ki issza ki előbb a poharakat és fordítja fejre őket. Gyors, pörgős ivós játék nagyobb társaságnak."
            />
            <OtherGame
                title="Pohár fordító"
                subtitle="Ami kell hozzá: italok, fél literes műanyagpoharak"
                text={`A pohár fordító az egyik legjobb ivós játék kezdőknek. Két csapat versenyzik egymás ellen. A két csapat egymásnak ellentétes oldalon áll és a poharakat az italokkal az asztal szélén tartja. Amelyik csapat előbb issza ki a poharak tartalmát és pöccinti fejtetőre a poharakat, az nyer.`}
            />
        </>
    );
}
