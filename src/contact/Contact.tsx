import { Component } from "react";
import "./Contact.scss";

class Contact extends Component {

  handleSubmit = (event: any) => {

    event.preventDefault();

    if (new FormData(event.target).get("message") === "") {
      alert("Az üzenet mező érdemi kitöltése szükséges a sikeres kapcsolatfelvételhez. Ha szeretnél nekünk üzenni, kérjük, pótold ezt a hiányosságot! :) ");
      return;
    }

    fetch("https://formspree.io/f/xjvnrgon111", {
      method: "POST",
      body: new FormData(event.target),
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        alert("Az üzenetet sikeresen elküldted. Köszönjük! Igyekszünk a lehető leghamarabb reagálni rá. :)");
      })
      .catch((error) => {
        alert("nem sikerült");
      });
  };

  render() {
    return (
      <div className="contact">
        <div className="contact__shadow">
          <form className="contact__shadow-form" onSubmit={this.handleSubmit}>
            <h1>Í R J &nbsp; N E K Ü N K</h1>
            <p className="contact__shadow-form-paragraph"> Kérdésed vagy javaslatod van? Vedd fel velünk a kapcsolatot!</p>
            <div className="contact__shadow-form-box">
              <label htmlFor="name">Név</label>
            </div>
            <input
              className="contact__shadow-form-input"
              type="text"
              name="name"
              placeholder="ide írd a neved"
            />
            <br />
            <div className="contact__shadow-form-box">
              <label htmlFor="email">E-mail</label>
            </div>
            <input
              className="contact__shadow-form-input"
              type="email"
              name="email"
              placeholder="adj meg egy érvényes e-mail címet"
            />
            <br />
            <div className="contact__shadow-form-box">
              <label htmlFor="message">Üzenet</label>
            </div>
            <textarea
              className="contact__shadow-form-message"
              name="message"
              placeholder="ide jöhet az üzeneted" />
            <br />
            <div className="contact__shadow-form-tos">
              <label className="contact__shadow-form-tos-checkbox">
                <input type="checkbox" />
                <span className="contact__shadow-form-tos-checkbox-checkmark"></span>
                <span className="contact__shadow-form-tos-checkbox-text">
                  Persze, elfogadom a felhasználási feltételeket !
                </span>
              </label>
            </div>
            <br />
            <div className="contact__shadow-form-button-holder">
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
            </div>
          </form>
          <div className="contact__shadow-image"></div>
        </div>
      </div>
    );
  }
}

export default Contact;
