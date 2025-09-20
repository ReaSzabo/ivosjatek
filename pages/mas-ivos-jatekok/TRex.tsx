import SeoMeta from '../../src/components/SeoMeta';
import OtherGame from '../../src/components/otherGame/OtherGame';

export default function TRexPage() {
    return (
        <>
            <SeoMeta canonical="https://ivosjatek.hu/mas-ivos-jatekok/TRex" />
            <OtherGame
                title="T-Rex"
                subtitle="Egy egész éjszakán át tartó, nagyon idegesítő játék"
                text={`Mindig amikor iszol, a könyöködet az oldaladhoz kell szorítanod, mint egy T-Rex, ha ezt elfelejted és nem tudod (vagy akarod) elsunnyogni, újra innod kell.`}
            />
        </>
    );
}
