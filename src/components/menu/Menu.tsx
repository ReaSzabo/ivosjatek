import { Component } from "react";
import styles from "./Menu.module.scss";
import Card from "../menu-card/MenuCard";
import Link from 'next/link';

class Menu extends Component {
  render() {
    return (
      <div className={styles["menu-container"]}>
        <h1>Ivós Játék - Online Ivós Kártyajáték,</h1>
        <div className={styles["menu-container__elements"]}>

          <Link href="/mas-ivos-jatekok" >
            <Card
              image="/assets/images/menu/cat.webp"
              imageRemoved="/assets/images/menu/cat-removed.webp"
              caption="Más Ivós Játékok"
            />
          </Link>
          <Link href="/jatek" >
            <Card
              image="/assets/images/menu/lion.webp"
              imageRemoved="/assets/images/menu/lion-removed.webp"
              caption="Ivós Játék"
            />
          </Link>
          <Link href="/kapcsolat" >
            <Card
              image="/assets/images/menu/dog.webp"
              imageRemoved="/assets/images/menu/dog-removed.webp"
              caption="Kapcsolat"
            />
          </Link>
        </div>
      </div >
    );
  }
}

export default Menu;
