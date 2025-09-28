import { Component } from "react";
import { toast, Toaster } from "sonner"

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
      toast(<div className={styles["toaster"]} > A név mező kitöltése kötelező.</ div>)
      return;
    }
    if (!email) {
      toast(<div className={styles["toaster"]} > A e-mail mező kitöltése kötelező.</ div>)
      return;
    }
    if (!message) {
      toast(<div className={styles["toaster"]} > Az üzenet mező érdemi kitöltése szükséges a sikeres kapcsolatfelvételhez. Ha szeretnél nekünk üzenni, kérjük, pótold ezt a hiányosságot! :) </ div>)
      return;
    }
    if (!termsAccepted) {
      toast(<div className={styles["toaster"]} > A felhasználási feltételek elfogadása kötelező. </ div>)
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
        toast(<div className={styles["toaster"]} >Az üzenetet sikeresen elküldted. Köszönjük! Igyekszünk a lehető leghamarabb reagálni rá. :)</ div>)
        form.reset();
      })
      .catch((error) => {
        toast(<div className={styles["toaster"]} >Az üzenet elküldése nem sikerült :(</ div>)
      });
  };

  render() {
    return (<>
      <div className={styles["container"]}>
        <div className={styles["contact"]}>
          <form className={styles["contact__form"]} onSubmit={this.handleSubmit}>
            <h1 className={styles["contact__form-title"]}>
              ÍRJ NEKÜNK
            </h1>
            <h2 className={styles["contact__form-subtitle"]}>
              Kérdésed vagy javaslatod van ? <br /> Vedd fel velünk a kapcsolatot !
            </h2>
            <div className={styles["contact__form-label"]}>
              <label htmlFor="name">Név</label>
            </div>
            <input
              className={styles["contact__form-input"]}
              type="text"
              name="name"
              placeholder="ide írd a neved"
            />
            <br />
            <div className={styles["contact__form-label"]}>
              <label htmlFor="email">E-mail</label>
            </div>
            <input
              className={styles["contact__form-input"]}
              type="email"
              name="email"
              placeholder="adj meg egy érvényes e-mail címet"
            />
            <br />
            <div className={styles["contact__form-label"]}>
              <label htmlFor="message">Üzenet</label>
            </div>
            <textarea
              className={styles["contact__form-message"]}
              name="message"
              placeholder="ide jöhet az üzeneted" />
            <br />
            <div className={styles["contact__form-tos"]}>
              <label className={styles["contact__form-tos-checkbox"]}>
                <input type="checkbox" />
                <span className={styles["contact__form-tos-checkbox-checkmark"]}></span>
                <span className={styles["contact__form-tos-checkbox-text"]}>
                  Persze, elfogadom a felhasználási feltételeket !
                </span>
              </label>
            </div>
            <br />
            <div className={styles["contact__form-button-holder"]}>
              <button className={styles["contact__form-button-holder-button"]} type="submit">
                <span className={styles["contact__form-button-holder-button-text"]}> küldés </span>
                <span className={styles["contact__form-button-holder-button-blob"]}></span>
                <span className={styles["contact__form-button-holder-button-blob"]}></span>
                <span className={styles["contact__form-button-holder-button-blob"]}></span>
                <span className={styles["contact__form-button-holder-button-blob"]}></span>
              </button>
              <a href="/">
                <button className={styles["contact__form-button-holder-button"]} type="button">
                  <span className={styles["contact__form-button-holder-button-text"]}> vissza </span>
                  <span className={styles["contact__form-button-holder-button-blob"]}></span>
                  <span className={styles["contact__form-button-holder-button-blob"]}></span>
                  <span className={styles["contact__form-button-holder-button-blob"]}></span>
                  <span className={styles["contact__form-button-holder-button-blob"]}></span>
                </button>
              </a>
            </div>
          </form>
          <img src="/assets/images/contact/rabbits.webp" className={styles["contact__image"]}></img>
        </div>
      </div>
      <Toaster />
    </>
    );
  }
}

export default Contact;
