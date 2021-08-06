import React from "react";
import "./contact.css";
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';

const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_vh58l3b', e.target, init("user_tqDfDJylTsShqQaDftroO"))
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
  return (
    <div>
      <iframe
        title="myFrame"
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
                <h5 className="contact-header">
                  <i className="fas fa-map-marked-alt"></i>Adres
                </h5>
                <span className="contact-text">
                  Caspian Plaza, Zivarbey Ahmadbeyov Street, Baku, Azerbaycan
                </span>
              </li>
              <hr />
              <li className="contact-menu-items">
                <h5 className="contact-header">
                  <i className="fas fa-phone"></i>Telefon
                </h5>
                <span className="contact-text">+994556505995</span>
              </li>
              <hr />
              <li className="contact-menu-items">
                <h5 className="contact-header">
                  <i className="far fa-envelope"></i>Email
                  
                </h5>
                <span className="contact-text">abishovazar@gmail.com</span>
              </li>
            </ul>
          </div>
          <div className="message">
            <form onSubmit={sendEmail}>
            <h3>Mesajızı daxil edin</h3>
            <label htmlFor="">Adınız</label>
            <input type="text" className="form-control" name="name" />
            <label htmlFor="">Alıcı yoxsa Satıcı</label>
            <select className="form-control" name="title" id="">
              <option value="satıcı">Satıcı</option>
              <option value="alıcı">Alıcı</option>
            </select>
            <label htmlFor="">Nömrəniz</label>
            <input type="text" className="form-control" name="phone_number" />
            <label htmlFor="">Mətni daxil edin</label>
            <textarea name="" id="" className="form-control" name="text"></textarea>
            <button type="submit" value="Send Message">Göndər</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
