import FooterLogo from './img/second pilar.png'




function Footer() {

    return (
        <footer className="footer">
            <div className="footer-column">
                <h6>Open Library</h6>
                <ul>
                    <li>Volunteer</li>
                    <li>Donate</li>
                    <li>About</li>
                    <li>Blog</li>
                </ul>
            </div>

            <div className="footer-column">
                <h6>Discover</h6>
                <ul>
                    <li>Docs</li>
                    <li>API</li>
                    <li>Community</li>
                    <li>Support</li>
                </ul>
            </div>

            <div className="footer-column">
                <h6>Develop</h6>
                <ul>
                    <li>Careers</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className="footer-column">
                <h6>Help</h6>
                <ul>
                    <li>Vision</li>
                    <li>Volunteer</li>
                    <li>Partner With Us</li>
                    <li>Careers</li>
                    <li>Blog</li>
                    <li>Terms of Service</li>
                    <li>Donate </li>

                </ul>
            </div>


            <div className="footer-column">
                <h6>Change Website Language</h6>
                <ul>
                    <li>ة (ar)</li>
                    <li>Čeština (cs)</li>
                    <li>Deutsch (de)</li>
                    <li>English (en)</li>
                    <li>Español (es)</li>
                    <li>Français (fr)</li>
                    <li>हिंदी (hi)</li>
                    <li>Hrvatski (hr)</li>
                    <li>Italiano (it)</li>
                    <li>Português (pt)</li>
                    <li>Română (ro)</li>
                    <li>Sardu (sc)</li>
                    <li>తెలుగు (te)</li>
                    <li>Українська (uk)</li>
                    <li>中文 (zh)</li>
                </ul>
            </div>


               <div className="footer-bottom">
      
             <div className="footer-bottom-content">
             <img src={FooterLogo} alt="Logo" className="footer-logo" />
             <p>Open Library is an initiative of the Internet Archive, a 501(c)(3) non-profit, building a digital library of Internet sites and other <br /> cultural artifacts in digital form.Other projects include the Wayback Machine, archive.org and archive-it.org</p>
         
        </div>
      </div>


        </footer>
    );

}

export default Footer