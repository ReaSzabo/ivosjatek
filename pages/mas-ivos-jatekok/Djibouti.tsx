import SeoMeta from '../../src/components/SeoMeta';
import OtherGame from '../../src/components/otherGame/OtherGame';

export default function DjiboutiPage() {
    return (
        <>
            <SeoMeta
                canonical="https://ivosjatek.hu/mas-ivos-jatekok/Djibouti"
                title="Djibouti - Ivós Játék"
                description="Számolós ivós játék, ahol a hetes és annak többszörösei helyett 'Dzsibuti'-t kell mondani. Aki hibázik, iszik. Nagy társasággal ajánlott!"
            />
            <OtherGame
                title="Djibouti"
                subtitle="Nagy társasággal érdemes játszani ezt a számolós játékot."
                text={`A szabály a következő: minden játékos az óramutató járásával megegyező irányban elkezd felfele számolni: egy, kettő, három, négy... azonban a hetes szám helyett a 'Dzsibuti' szót kell mondani. A hetet tartalmazó és 7-tel osztható számok helyett mindig 'Dzsibutit' mondunk: 7.14,17,21,27,28,stb\n\nNa de! A hetesnél, azaz a dzsibutinál megfordul a kör, és az óramutató járásával ellentétesen kell folytatni tovább.\n\nNagyon egyszerű elrontani: hetest mondasz, túl sokáig gondolkozol, elfelejted, hogy megfordult a sorrend. Aki hibázik, annak le kell húznia egy pohár előre kitöltött italt, ami lehet rövid is...`}
            />
        </>
    );
}
