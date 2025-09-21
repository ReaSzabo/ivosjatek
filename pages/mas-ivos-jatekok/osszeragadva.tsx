import SeoMeta from '../../src/components/SeoMeta';
import OtherGame from '../../src/components/otherGame/OtherGame';

export default function StuckTogetherPage() {
    return (
        <>
            <SeoMeta
                canonical="https://ivosjatek.hu/mas-ivos-jatekok/osszeragadva"
                title="Összeragadva - Páros Ivós Játék, vicces feladatokkal"
                description="Páros ivós játék, ahol bizonyos testrészeket összekötve kell feladatokat végrehajtani. Ha nem sikerül, mindketten isztok! Ez a játék garantáltan közelebb hoz titeket, és rengeteg nevetést, valamint emlékezetes pillanatokat szerez a társaságnak. Próbáld ki barátaiddal!"
            />
            <OtherGame
                title="Összeragadva"
                subtitle="Ez a játék szó szerint közelebb hoz titeket."
                text={`Kettesével vagytok párban, és úgy kell végrehajtanotok bizonyos feladatokat, hogy egy-egy testrészetek össze van kötve. Ha ez nem sikerül, akkor bizony mindketten isztok.`}
            />
        </>
    );
}
