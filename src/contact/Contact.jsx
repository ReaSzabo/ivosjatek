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
      <container className="contact-container">
        <div className="shadow-box">
          <form onSubmit={this.handleSubmit}>
            <h1>C O N T A C T &nbsp; U S</h1>
            <p> Any question or remarks? Just write us a message! </p>
            <box className="box">
              <label htmlFor="name">Name</label>
            </box>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
            />
            <br />
            <box className="box">
              <label htmlFor="email">E-mail</label>
            </box>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter a valid e-mail address"
            />
            <br />
            <box className="box">
              <label htmlFor="message">Message</label>
            </box>
            <textarea id="message" name="message" />
            <br />
            <holder id="tosHolder">
              <label class="checkboxContainer">
                <input type="checkbox" />
                <span class="checkmark"></span>
                <span class="tosText">
                  &nbsp; I accept the Terms of Service
                </span>
              </label>
            </holder>
            <br />
            <button type="submit">
              <span class="text"> send </span>
              <span class="blob"></span>
              <span class="blob"></span>
              <span class="blob"></span>
              <span class="blob"></span>
            </button>
          </form>
          <div className="sectionFirst"></div>
        </div>
      </container>
    );
  }
}

export default Contact;
