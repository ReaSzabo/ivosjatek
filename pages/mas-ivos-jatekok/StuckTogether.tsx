import OtherGame from '../../src/components/otherGame/OtherGame';

export default function StuckTogetherPage() {
    return (
        <OtherGame
            title="Összeragadva"
            subtitle="Ez a játék szó szerint közelebb hoz titeket."
            text={`Kettesével vagytok párban, és úgy kell végrehajtanotok bizonyos feladatokat, hogy egy-egy testrészetek össze van kötve. Ha ez nem sikerül, akkor bizony mindketten isztok.`}
        />
    );
}
