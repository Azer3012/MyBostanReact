import React from "react";
import './contact.css'
const Contact = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12156.301974397587!2d49.8295944!3d40.3850194!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4796092b41a864b4!2sCaspian%20Plaza!5e0!3m2!1str!2s!4v1600773304096!5m2!1str!2s"
        width="100%"
        height="300"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
      <div className="container">
        <div className="contact-form">
            <div className="contact-us">
                <h3>Bizimlə Əlaqə</h3>
                <ul className="contact-menu">
                    <li className="contact-menu-items">
                        <h5 className="contact-header"><i className="fas fa-map-marked-alt"></i>Adres</h5>
                        <span className="contact-text">Caspian Plaza, Zivarbey Ahmadbeyov Street, Baku, Azerbaycan</span>
                    </li>
                    <hr/>
                    <li className="contact-menu-items">
                        <h5 className="contact-header"><i className="fas fa-phone"></i>Telefon</h5>
                        <span className="contact-text">+994702752015</span>
                    </li>
                    <hr/>
                    <li className="contact-menu-items">
                        <h5 className="contact-header"><i className="far fa-envelope"></i>Email</h5>
                        <span className="contact-text">Coders@gmail.com</span>
                    </li>
                </ul>
            </div>
            <div className="message">
                <h3>Mesajızı daxil edin</h3>
                <label htmlFor="">Adınız</label>
                <input type="text" className="form-control"/>
                <label htmlFor="">Emailiniz</label>
                <input type="text" className="form-control"/>
                <label htmlFor="">Mətni daxil edin</label>
                <textarea name="" id=""  className="form-control"></textarea>
                <button >Göndər</button>

            </div>
        </div>
        </div>
      
    </div>
  );
};

export default Contact;
