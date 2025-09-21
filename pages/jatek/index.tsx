import SeoMeta from '../../src/components/SeoMeta';
import Game from '../../src/drinkingGame/Game';

export default function JatekPage() {
    return (
        <>
            <SeoMeta
                canonical="https://ivosjatek.hu/jatek"
                title="Ivós Játék - Online Ivós Kártyajáték, Bulikhoz és Baráti Estékhez"
                description="Alapozd meg az estét vagy pörgesd fel a bulit a legjobb 18+ felnőtt ivós játékokkal! Az online app garantáltan szuper lehetőség a közös szórakozásra, akár magyar vagy francia kártyával, jengával, vagy csak egy telefonnal. Fedezd fel a legjobb ivós játékokat, hogy minden este emlékezetes legyen!"
            />
            <Game />
        </>
    );
}
