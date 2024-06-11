import React from 'react';
import '../styles/ContactSection.css';

const ContactSection = () => (

    <section className="contact">
        <div className="pattern-background"></div>
        <div className="stripe-container"></div>
        <h2>Kontakt</h2>
        <p>Skontaktuj się z nami, aby dowiedzieć się więcej o naszej fundacji i działaniach. Jesteśmy dostępni, aby odpowiedzieć na Twoje pytania.</p>
        <ul>
            <li>telefon</li>
            <li>mail</li>
            <li>adres</li>
            <li>NIP</li>
            <li>itp.</li>
        </ul>
    </section>
);

export default ContactSection;