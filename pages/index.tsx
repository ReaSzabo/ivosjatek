import Menu from '../src/menu/Menu';
import SeoMeta from '../src/components/SeoMeta';

export default function Home() {
    return (
        <>
            <SeoMeta canonical="https://ivosjatek.hu/" />
            <Menu />
        </>
    );
}
