import { Component } from "react";
import "./Card.css"

class Card extends Component {

    render() {
        return (
            <div className="Card">
                <img className="image2d" src={this.props.image} />
                <img className="image3d" src={this.props.imageRemoved} />
                <div className="caption">{this.props.caption}</div>
            </div>
        )
    }
}

export default Card;