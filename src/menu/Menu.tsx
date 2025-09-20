import { Component } from "react";
import styles from "./Menu.module.scss";
import Card from "./Card";
import Link from 'next/link';
import CookieConsent from "react-cookie-consent";

class Menu extends Component {
  render() {
    return (
      <div className={styles["menu-container"]}>
        <div className={styles["menu-container__elements"]}>

          <Link href="/mas-ivos-jatekok" legacyBehavior>
            <a>
              <Card
                image="/assets/images/menu/cat.webp"
                imageRemoved="/assets/images/menu/catRemoved.webp"
                caption="Más Ivós Játékok"
              />
            </a>
          </Link>
          <Link href="/jatek" legacyBehavior>
            <a>
              <Card
                image="/assets/images/menu/lion.webp"
                imageRemoved="/assets/images/menu/lionRemoved.webp"
                caption="Ivós Játék"
              />
            </a>
          </Link>
          <Link href="/kapcsolat" legacyBehavior>
            <a>
              <Card
                image="/assets/images/menu/dog.webp"
                imageRemoved="/assets/images/menu/dogRemoved.webp"
                caption="Kapcsolat"
              />
            </a>
          </Link>
          <CookieConsent
            location="bottom"
            buttonText="Hát persze!!"
            cookieName="myAwesomeCookieName2"
            style={{ background: "#ecb603" }}
            buttonStyle={{ background: "#fff1ff", color: "#02a4d1", borderRadius: "4px", fontSize: "13px", fontFamily: "Montserrat, sans-serif", fontVariant: "all-small-caps" }}
            expires={150}
          >
            Sütiket (cookie-kat) használunk a választott nyelv mentéséhez. Hozzájárulsz?
          </CookieConsent>
        </div>
      </div >
    );
  }
}

export default Menu;
