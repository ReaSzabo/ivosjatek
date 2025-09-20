import OtherGame from '../../src/components/otherGame/OtherGame';

export default function BummPage() {
    return (
        <OtherGame
            title="Bumm"
            subtitle="Ami kell hozzá: italok"
            text={`Az egyik legegyszerűbb ivós játék. 
Minden játékos mond egy számot hangosan, sorban, 1-től kezdve, kivéve a 7-et, annak többszöröseit (pl. 14, 21) és amiben benne van a szám (pl. 17, 71, 77). Ebben az esetben azt mondja: bumm. Aki elhibázza, iszik. Ilyen egyszerű.`}
        />
    );
}
