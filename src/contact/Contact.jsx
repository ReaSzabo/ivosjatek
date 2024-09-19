import { Component } from "react";
import "./Contact.scss";

class Contact extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://formspree.io/f/xjvnrgon", {
      method: "POST",
      body: new FormData(event.target),
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        alert("siker");
      })
      .catch((error) => {
        alert("nem sikerült");
      });
  };

  render() {
    return (
      <container className="contact">
        <div className="contact__shadow">
          <form class="contact__shadow-form" onSubmit={this.handleSubmit}>
            <h1>Í R J &nbsp; N E K Ü N K</h1>
            <p className="contact__shadow-form-paragraph"> Kérdésed vagy javaslatod van? Vedd fel velünk a kapcsolatot!</p>
            <box className="contact__shadow-form-box">
              <label htmlFor="name">Név</label>
            </box>
            <input
              className="contact__shadow-form-input"
              type="text"
              name="name"
              placeholder="ide írd a neved"
            />
            <br />
            <box className="contact__shadow-form-box">
              <label htmlFor="email">E-mail</label>
            </box>
            <input
              className="contact__shadow-form-input"
              type="email"
              name="email"
              placeholder="adj meg egy érvényes e-mail címet"
            />
            <br />
            <box className="contact__shadow-form-box">
              <label htmlFor="message">Üzenet</label>
            </box>
            <textarea
              className="contact__shadow-form-message"
              name="message"
              placeholder="ide jöhet az üzeneted" />
            <br />
            <holder className="contact__shadow-form-tos">
              <label className="contact__shadow-form-tos-checkbox">
                <input type="checkbox" />
                <span className="contact__shadow-form-tos-checkbox-checkmark"></span>
                <span className="contact__shadow-form-tos-checkbox-text">
                  &nbsp; Persze, elfogadom a felhasználási feltételeket !
                </span>
              </label>
            </holder>
            <br />
            <holder className="contact__shadow-form-button-holder">
              <button className="contact__shadow-form-button-holder-button" type="submit">
                <span className="contact__shadow-form-button-holder-button-text"> küldés </span>
                <span className="contact__shadow-form-button-holder-button-blob"></span>
                <span className="contact__shadow-form-button-holder-button-blob"></span>
                <span className="contact__shadow-form-button-holder-button-blob"></span>
                <span className="contact__shadow-form-button-holder-button-blob"></span>
              </button>
              <a href="#/">
                <button className="contact__shadow-form-button-holder-button" type="button">
                  <span className="contact__shadow-form-button-holder-button-text"> vissza </span>
                  <span className="contact__shadow-form-button-holder-button-blob"></span>
                  <span className="contact__shadow-form-button-holder-button-blob"></span>
                  <span className="contact__shadow-form-button-holder-button-blob"></span>
                  <span className="contact__shadow-form-button-holder-button-blob"></span>
                </button>
              </a>
            </holder>
          </form>
          <div className="contact__shadow-image"></div>
        </div>
      </container>
    );
  }
}

export default Contact;
