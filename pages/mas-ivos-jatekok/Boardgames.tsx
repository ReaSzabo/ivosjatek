
import SeoMeta from '../../src/components/SeoMeta';
import OtherGame from '../../src/components/otherGame/OtherGame';


export default function BoardgamesPage() {
    return (
        <>
            <SeoMeta canonical="https://ivosjatek.hu/mas-ivos-jatekok/Boardgames" />
            <OtherGame
                title="Társasjátékok"
                subtitle="Alkoholi és Részegedj Okosan!"
                text={`A két legismertebb ivós társasjáték, amelyeket meg is vásárolhatsz, de elkészítheted magad is. Ha jól megnézed a képet,\nminden magyarázat feleslegessé válik a játék brutalitását illetően.`}
            />
        </>
    );
}
