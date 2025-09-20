import SeoMeta from '../../src/components/SeoMeta';
import Game from '../../src/drinkingGame/Game';

export default function JatekPage() {
    return (
        <>
            <SeoMeta canonical="https://ivosjatek.hu/jatek" />
            <Game />
        </>
    );
}
