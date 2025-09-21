import SeoMeta from '../../src/components/SeoMeta';
import OtherGame from '../../src/components/otherGame/OtherGame';

export default function UnflinchingFacePage() {
    return (
        <>
            <SeoMeta
                canonical="https://ivosjatek.hu/mas-ivos-jatekok/unflinching-face"
                title="Rezzenéstelen arc - Ivós Játék"
                description="Ivós játék, ahol vicces mondatokat kell rezzenéstelen arccal kibírni. Aki elneveti magát vagy reagál, iszik!"
            />
            <OtherGame
                title="Rezzenéstelen arc"
                subtitle="Ami kell hozzá: italok, papír, toll"
                text={`Amikor isztok, nehéz rezzenéstelen arccal ülni, így ez a játék remek kihívás. Egyikőtök vicces vagy figyelemfelkeltő mondatokat ír papírcetlikre, miközben mindenki rezzenéstelen arccal ül. Ezután minden játékos felvesz egy papírt és megpróbálja megőrizni rezzenéstelen arckifejezését. Akinek nem sikerül vagy bármilyen reakciót mutat, innia kell.`}
            />
        </>
    );
}
