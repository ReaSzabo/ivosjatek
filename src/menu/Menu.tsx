import { Component } from "react";
import styles from "./Menu.module.scss";
import Card from "./Card";
import Link from 'next/link';

class Menu extends Component {
  render() {
    return (
      <div className={styles["menu-container"]}>
        <div className={styles["menu-container__elements"]}>

          <Link href="/mas-ivos-jatekok" >
            <Card
              image="/assets/images/menu/cat.webp"
              imageRemoved="/assets/images/menu/catRemoved.webp"
              caption="Más Ivós Játékok"
            />
          </Link>
          <Link href="/jatek" >
            <Card
              image="/assets/images/menu/lion.webp"
              imageRemoved="/assets/images/menu/lionRemoved.webp"
              caption="Ivós Játék"
            />
          </Link>
          <Link href="/kapcsolat" >
            <Card
              image="/assets/images/menu/dog.webp"
              imageRemoved="/assets/images/menu/dogRemoved.webp"
              caption="Kapcsolat"
            />
          </Link>
        </div>
      </div >
    );
  }
}

export default Menu;
