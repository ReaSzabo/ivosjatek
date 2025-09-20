import OtherGame from '../../src/components/otherGame/OtherGame';

export default function RussianRoulettePage() {
    return (
        <OtherGame
            title="Orosz rulett"
            subtitle="Kell hozzá: felespoharak, ital"
            text={`Ahányan vagytok, annyi feleses pohárra és valamilyen átlátszó röviditalra (eredetileg vodkára, de lehet gin, fehér rum vagy pálinka) lesz szükségetek. Minden poharat megtöltötök vízzel, kivéve egyet, amibe az említett röviditalt töltitek. A poharakat összekeveritek, majd mindenki lehúz egyet, és nézitek, vajon ki kapta a golyót.`}
        />
    );
}
