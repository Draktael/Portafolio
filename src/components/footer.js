import React from "react";
import { Button } from "primereact/button";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Footer.css";

const Footer = () => (
    <footer id="contact" className="footer">
        <p>¿Interesado en trabajar juntos?</p>
        <Button
            className="p-button-rounded p-button-outlined btn-mail"
            onClick={() => window.location.href = "mailto:alexander@tu-dominio.com"}
        >
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: 10 }} />
            Envíame un correo
        </Button>
        <p className="footer-copy">© 2025 Alexander Caamaño</p>
    </footer>
);

export default Footer;