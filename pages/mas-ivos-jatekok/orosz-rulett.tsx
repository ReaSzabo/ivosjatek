import SeoMeta from '../../src/components/SeoMeta';
import OtherGame from '../../src/components/otherGame/OtherGame';

export default function RussianRoulettePage() {
    return (
        <>
            <SeoMeta
                canonical="https://ivosjatek.hu/mas-ivos-jatekok/orosz-rulett"
                title="Orosz rulett - Felespoharas ivós játék, izgalmas kihívás"
                description="Felespoharas ivós játék, ahol csak egy pohárban van rövidital, a többi víz. Vajon ki húzza a rövidet? Ez a játék izgalmas kihívást jelent minden társaságnak, és garantáltan sok nevetést hoz a baráti összejövetelekre!"
            />
            <OtherGame
                title="Orosz rulett"
                subtitle="Kell hozzá: felespoharak, ital"
                text={`Ahányan vagytok, annyi feleses pohárra és valamilyen átlátszó röviditalra (eredetileg vodkára, de lehet gin, fehér rum vagy pálinka) lesz szükségetek. Minden poharat megtöltötök vízzel, kivéve egyet, amibe az említett röviditalt töltitek. A poharakat összekeveritek, majd mindenki lehúz egyet, és nézitek, vajon ki kapta a golyót.`}
            />
        </>
    );
}
