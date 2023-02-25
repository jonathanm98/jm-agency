import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import ContactForm from "../components/ContactForm";
import Buttons from "../components/Buttons";

const Contact = () => {
  return (
    <main>
      <Mouse />
      <div className="contact">
        <Navigation />
        <Logo />
        <ContactForm />
        <Buttons left="/projet-4" right={null} />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>Adresse</h4>
              <p>12 rue Delarue</p>
              <p>26000 - Valence</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>Telephone</h4>
              <CopyToClipboard text="0123456789" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Telephone copié !")}
                >
                  01 23 45 67 89
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>Email</h4>
              <CopyToClipboard text="jmagency@email.fr" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Email copié !")}
                >
                  jmagency@email.fr
                </p>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
