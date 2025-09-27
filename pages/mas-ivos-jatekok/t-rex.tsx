import SeoMeta from '../../src/components/custom-head/SeoMeta';
import OtherGame from '../../src/components/other-game/OtherGame';

export default function TRexPage() {
    return (
        <>
            <SeoMeta
                canonical="https://ivosjatek.hu/mas-ivos-jatekok/t-rex"
                title="T-Rex - Ivós játék, vicces szabályokkal és kihívásokkal"
                description="Ivós játék, ahol minden ivásnál a könyöködet az oldaladhoz kell szorítani, mint egy T-Rex. Ha elfelejted, újra innod kell! Ez a játék garantáltan megnevetteti a társaságot, és vicces pillanatokat hoz minden buliba!"
            />
            <OtherGame
                title="T-Rex"
                subtitle="Egy egész éjszakán át tartó, nagyon idegesítő játék"
                text={`Mindig amikor iszol, a könyöködet az oldaladhoz kell szorítanod, mint egy T-Rex, ha ezt elfelejted és nem tudod (vagy akarod) elsunnyogni, újra innod kell.`}
            />
        </>
    );
}
