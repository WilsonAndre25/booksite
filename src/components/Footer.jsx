import FooterLogo from './img/second pilar.png'
import { Container } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'


function Footer() {

    return (
        <div className="footer">
            <div className="footer-content">

                <div className="footer-column">
                    <h6>Open Library</h6>
                    <ul>
                        <a href="#"><li>Volunteer</li></a>
                        <a href="#"><li>Donate</li></a>
                        <a href="#"><li>About</li></a>
                        <a href="#"><li>Blog</li></a>
                    </ul>
                </div>
                <div className="footer-column">
                    <h6>Discover</h6>
                    <ul>
                        <a href="#"><li>Docs</li></a>
                        <a href="#"><li>API</li></a>
                        <a href="#"><li>Community</li></a>
                        <a href="#"><li>Support</li></a>
                    </ul>
                </div>
                <div className="footer-column">
                    <h6>Develop</h6>
                    <ul>
                        <a href=""><li>Careers</li></a>
                        <a href=""><li>Privacy</li></a>
                        <a href=""><li>Terms</li></a>
                        <a href=""><li>Contact</li></a>
                    </ul>
                </div>
                <div className="footer-column">
                    <h6>Help</h6>
                    <ul>
                        <a href=""><li>Vision</li></a>
                        <a href=" #"><li>Volunteer</li></a>
                        <a href="#"><li>Partner With Us</li></a>
                        <a href="#"><li>Careers</li></a>
                        <a href="#"><li>Blog</li></a>
                        <a href="#"><li>Terms of Service</li></a>
                        <a href="#"><li>Donate </li></a>
                    </ul>
                </div>

                <div className="footer-column">
                    <h6>Change Website Language</h6>
                    <ul>
                        <a href='#'><li>ة (ar)</li></a>
                        <a><li>Čeština (cs)</li></a>
                        <a href='#'> <li>Deutsch (de)</li></a>
                        <a href='#'><li>English (en)</li></a>
                        <a href='#'> <li>Español (es)</li></a>
                        <a href='#'> <li>Français (fr)</li></a>
                        <a href='#'><li>हिंदी (hi)</li></a>
                        <a href='#'><li>Hrvatski (hr)</li></a>
                        <a href='#'><li>Italiano (it)</li></a>
                        <a href='#'><li>Português (pt)</li></a>
                        <a href='#'><li>Română (ro)</li></a>
                        <a href='#'><li>Sardu (sc)</li></a>
                        <a href='#'><li>తెలుగు (te)</li></a>
                        <a href='#'><li>Українська (uk)</li></a>
                        <a href='#'><li>中文 (zh)</li></a>
                    </ul>
                </div>

            </div>

            <div className='IconsFooter'>

                <a href='#'><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href='#'><FontAwesomeIcon icon={faInstagram} /> </a>
                <a href='#'><FontAwesomeIcon icon={faYoutube} /></a>
                <a href='#'><FontAwesomeIcon icon={faTwitter} /></a>

            </div>





            <div className="footer-bottomLine">

                <div className="footer-bottom-content">
                    <img src={FooterLogo} alt="Logo" className="footer-logo" />
                    <p>Open Library is an initiative of the Internet Archive, a 501(c)(3) non-profit, building a digital library of Internet sites and other <br /> cultural artifacts in digital form.Other projects include the Wayback Machine, archive.org and archive-it.org</p>

                </div>

            </div>




        </div>


    );

}

export default Footer