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
        <img
          className={styles["card__image-2d"]}
          src={this.props.image}
          alt={`${this.props.caption} kártya előlapja`}
          loading="lazy"
        />
        <img
          className={styles["card__image-3d"]}
          src={this.props.imageRemoved}
          alt={`${this.props.caption} kártya hátlapja`}
          loading="lazy"
        />
        <h1 className={styles["card__caption"]}>{this.props.caption}</h1>
      </div>
    );
  }
}

export default Card;
