import Menu from '../src/components/menu/Menu';
import SeoMeta from '../src/components/custom-head/SeoMeta';

export default function Home() {
    return (
        <>
            <SeoMeta canonical="https://ivosjatek.hu/"
                title="Ivós Játék - Online Ivós Kártyajáték, Bulikhoz és Baráti Estékhez"
                description="Alapozd meg az estét vagy pörgesd fel a bulit a legjobb 18+ felnőtt ivós játékokkal! Az online app garantáltan szuper lehetőség a közös szórakozásra és, hogy az este emlékezetes legyen!"
            />
            <Menu />
        </>
    );
}
