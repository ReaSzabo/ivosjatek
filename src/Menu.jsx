import { Component } from "react";
import "./Menu.css";
import Card from "./Card.jsx";
import cat from './cat.png';
import catRemoved from './catRemoved.png';
import lion from './lion.png';
import lionRemoved from './lionRemoved.png';
import dog from './dog.png';
import dogRemoved from './dogRemoved.png';

class Menu extends Component {

    render() {
        return (
            <div className="MenuContainer">
                <div className="Menu">
                    <a href="/OtherGames"><Card image={cat} imageRemoved={catRemoved} caption="Other Drinking Games"></Card></a>
                    <a href="Game"><Card image={lion} imageRemoved={lionRemoved} caption="Our Drinking Game"></Card></a>
                    <a href="Contact"><Card image={dog} imageRemoved={dogRemoved} caption="Contact Us"></Card></a>
                </div >
            </div>
        )
    }
}

export default Menu;