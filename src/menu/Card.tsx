import { Component } from "react";
import styles from "./Card.module.scss";
import 'animate.css';

interface IProps {
  image: any,
  imageRemoved: any,
  caption: string
}

class Card extends Component<IProps> {
  render() {
    return (
      <div className={styles.card}>
        <img className={styles["card__image-2d"]} src={this.props.image} alt="A kártya látsó lapján lévő kép" />
        <img className={styles["card__image-3d"]} src={this.props.imageRemoved} alt="A kártya hátsó lapján lévő mozgó, kiugró kép" />
        <div className={styles["card__caption"]}>{this.props.caption}</div>
      </div>
    );
  }
}

export default Card;
