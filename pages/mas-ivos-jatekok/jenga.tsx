
import SeoMeta from '../../src/components/custom-head/SeoMeta';
import OtherGame from '../../src/components/other-game/OtherGame';


export default function JengaPage() {
    return (
        <>
            <SeoMeta
                canonical="https://ivosjatek.hu/mas-ivos-jatekok/jenga"
                title="Jenga - Ivós játék, klasszikus ügyességi kihívás"
                description="A klasszikus Jenga ivós változata: minden kihúzott kockán feladat, aki ledönti a tornyot, iszik! Garantált nevetés és izgalom. Próbáld ki ezt az ügyességi ivós játékot, amely minden buliban izgalmas pillanatokat és sok nevetést hoz a társaságnak!"
            />
            <OtherGame
                title="Jenga"
                subtitle="Ami kell hozzá: italok és jenga"
                text={`A részeg Jenga olyan, mint a normál Jenga, de vicces kihívásokkal, amelyek a Jenga fakockákon szerepelnek. Miután felépítettétek a tornyot, húzzatok ki sorban egy-egy kockát, majd helyezzétek a tetejére, ezután pedig teljesítsétek az adott kockán lévő kihívást. Ha a torony összedől, a kihívást duplán kell teljesíteni. Írhattok a fadarabokra ti is, vagy vásároljatok ivós-jengát.\n\nPróbálj meg kihúzni egyet és reménykedj!\n\nA jenga elemekre kell az utasításokat felírni és értelemszerűen a kihúzott darabkán lévő szabály érvényesül. Na de mi van, ha ledöntöd az egész tornyot? Hát, reménykedj, hogy kevés italod maradt, mert mindet meg kell innod, mielőtt a következő kör elkezdődik`}
            />
        </>
    );
}
