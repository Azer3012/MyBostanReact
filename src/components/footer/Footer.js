import React from 'react'
import './footer.css'
const Footer = () => {
    return ( 
        <div className="footer mt-5 container-fluid" >
            
            <ul className="footer-menu">
                <li className="footer-item">
                    <h3>bizi izləyin</h3>
                    <div className="social">
                        <a href="https://www.facebook.com/codersaz/" target="_blank"><i className="fab fa-facebook"></i></a>
                        <a href="https://www.instagram.com/codersazerbaijan/?hl=tr" target="_blank"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/company/coders-azerbaijan/" target="_blank"><i className="fab fa-linkedin"></i></a>
                    </div>

                </li>
                <li className="footer-item">
                    <h3>əlaqə</h3>

                    <div className="contact">
                        <p className="adress">
                            <img src="contact/map.svg" alt=""/>
                            <span>Adres:<br></br>
                            Caspian Plaza, Zivarbey Ahmadbeyov Street, Baku, Azerbaycan
                                </span>
                            </p>
                        <p className="phone">
                            <img src="contact/phone.svg" alt=""/>
                            <span>Telefon:<br></br>
                            +994702752015</span>
                            </p>
                        <p className="email">
                            <img src="contact/email.svg" alt=""/>
                            <span>Email:<br></br>
                                        Coders@gmail.com</span>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
     );
}
 
export default Footer;