import SeoMeta from '../../src/components/SeoMeta';
import Game from '../../src/drinkingGame/Game';

export default function JatekPage() {
    return (
        <>
            <SeoMeta
                canonical="https://ivosjatek.hu/jatek"
                title="Ivós Játék - Online Ivós Kártyajáték"
                description="Alapozd meg az estét vagy pörgesd fel a bulit a legjobb 18+ felnőtt ivós játekokkal. Az online app garantáltan szuper lehetőseg a közös szórakozasra. Elég, ha felnőtt vagy es van nálad egy telefon, magyar kártya, francia kártya vagy jenga."
            />
            <Game />
        </>
    );
}
