
import SeoMeta from '../../src/components/SeoMeta';
import OtherGame from '../../src/components/otherGame/OtherGame';


export default function BoardgamesPage() {
    return (
        <>
            <SeoMeta
                canonical="https://ivosjatek.hu/mas-ivos-jatekok/tarsas-jatekok"
                title="Ivós társasjátékok - Legjobb ivós játékok, szabályok, ötletek"
                description="A legjobb ivós társasjátékok: Alkoholi, Részegedj Okosan és még sok más! Szabályok, ötletek, tippek egy helyen, hogy a baráti összejövetelek még emlékezetesebbek legyenek. Fedezd fel, hogyan teheted izgalmasabbá az estét ezekkel a társas ivós játékokkal!"
            />
            <OtherGame
                title="Társasjátékok"
                subtitle="Alkoholi és Részegedj Okosan!"
                text={`A két legismertebb ivós társasjáték, amelyeket meg is vásárolhatsz, de elkészítheted magad is. Ha jól megnézed a képet,\nminden magyarázat feleslegessé válik a játék brutalitását illetően.`}
            />
        </>
    );
}
