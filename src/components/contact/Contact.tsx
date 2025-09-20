import { Component } from "react";
import styles from "./Contact.module.scss";

class Contact extends Component {

  handleSubmit = (event: any) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();
    const termsAccepted = form.querySelector('input[type="checkbox"]')?.checked;

    if (!name) {
      alert("A név mező kitöltése kötelező.");
      return;
    }
    if (!email) {
      alert("Az e-mail mező kitöltése kötelező.");
      return;
    }
    if (!message) {
      alert("Az üzenet mező érdemi kitöltése szükséges a sikeres kapcsolatfelvételhez. Ha szeretnél nekünk üzenni, kérjük, pótold ezt a hiányosságot! :)");
      return;
    }
    if (!termsAccepted) {
      alert("A felhasználási feltételek elfogadása kötelező.");
      return;
    }

    fetch("https://formspree.io/f/xjvnrgon", {
      method: "POST",
      body: formData,
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
      <div className={styles.contact}>
        <div className={styles["contact__shadow"]}>
          <form className={styles["contact__shadow-form"]} onSubmit={this.handleSubmit}>
            <h1>Í R J &nbsp; N E K Ü N K</h1>
            <p className={styles["contact__shadow-form-paragraph"]}> Kérdésed vagy javaslatod van? Vedd fel velünk a kapcsolatot!</p>
            <div className={styles["contact__shadow-form-box"]}>
              <label htmlFor="name">Név</label>
            </div>
            <input
              className={styles["contact__shadow-form-input"]}
              type="text"
              name="name"
              placeholder="ide írd a neved"
            />
            <br />
            <div className={styles["contact__shadow-form-box"]}>
              <label htmlFor="email">E-mail</label>
            </div>
            <input
              className={styles["contact__shadow-form-input"]}
              type="email"
              name="email"
              placeholder="adj meg egy érvényes e-mail címet"
            />
            <br />
            <div className={styles["contact__shadow-form-box"]}>
              <label htmlFor="message">Üzenet</label>
            </div>
            <textarea
              className={styles["contact__shadow-form-message"]}
              name="message"
              placeholder="ide jöhet az üzeneted" />
            <br />
            <div className={styles["contact__shadow-form-tos"]}>
              <label className={styles["contact__shadow-form-tos-checkbox"]}>
                <input type="checkbox" />
                <span className={styles["contact__shadow-form-tos-checkbox-checkmark"]}></span>
                <span className={styles["contact__shadow-form-tos-checkbox-text"]}>
                  Persze, elfogadom a felhasználási feltételeket !
                </span>
              </label>
            </div>
            <br />
            <div className={styles["contact__shadow-form-button-holder"]}>
              <a href="/">
                <button className={styles["contact__shadow-form-button-holder-button"]} type="button">
                  <span className={styles["contact__shadow-form-button-holder-button-text"]}> vissza </span>
                  <span className={styles["contact__shadow-form-button-holder-button-blob"]}></span>
                  <span className={styles["contact__shadow-form-button-holder-button-blob"]}></span>
                  <span className={styles["contact__shadow-form-button-holder-button-blob"]}></span>
                  <span className={styles["contact__shadow-form-button-holder-button-blob"]}></span>
                </button>
              </a>
              <button className={styles["contact__shadow-form-button-holder-button"]} type="submit">
                <span className={styles["contact__shadow-form-button-holder-button-text"]}> küldés </span>
                <span className={styles["contact__shadow-form-button-holder-button-blob"]}></span>
                <span className={styles["contact__shadow-form-button-holder-button-blob"]}></span>
                <span className={styles["contact__shadow-form-button-holder-button-blob"]}></span>
                <span className={styles["contact__shadow-form-button-holder-button-blob"]}></span>
              </button>
            </div>
          </form>
          <div className={styles["contact__shadow-image"]}></div>
        </div>
      </div>
    );
  }
}

export default Contact;
