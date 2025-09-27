
import SeoMeta from '../../src/components/custom-head/SeoMeta';
import OtherGame from '../../src/components/other-game/OtherGame';


export default function BummPage() {
    return (
        <>
            <SeoMeta
                canonical="https://ivosjatek.hu/mas-ivos-jatekok/bumm"
                title="Bumm - Egyszerű ivós játék, számolós kihívás barátoknak"
                description="Az egyik legegyszerűbb ivós játék, ahol a számokat sorban mondjátok, de a 7-et és annak többszöröseit, illetve amiben 7 szerepel, bumm-mal helyettesítitek. Aki hibázik, iszik. Ez a játék garantáltan megnevetteti a társaságot, és gyorsan feldobja a hangulatot minden buliban!"
            />
            <OtherGame
                title="Bumm"
                subtitle="Ami kell hozzá: italok"
                text={`Az egyik legegyszerűbb ivós játék. 
Minden játékos mond egy számot hangosan, sorban, 1-től kezdve, kivéve a 7-et, annak többszöröseit (pl. 14, 21) és amiben benne van a szám (pl. 17, 71, 77). Ebben az esetben azt mondja: bumm. Aki elhibázza, iszik. Ilyen egyszerű.`}
            />
        </>
    );
}
