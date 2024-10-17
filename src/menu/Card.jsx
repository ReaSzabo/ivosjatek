import { Component } from "react";
import "./Card.scss";
import 'animate.css';


class Card extends Component {
  render() {
    return (
      <div className="card">
        <img className="card__image-2d" src={this.props.image} />
        <img className="card__image-3d" src={this.props.imageRemoved} />
        <div className="card__caption">{this.props.caption}</div>
      </div>
    );
  }
}

export default Card;
