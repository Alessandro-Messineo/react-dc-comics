// importo le immagini
import facebook from '../assets/img/footer-facebook.png'
import twitter from '../assets/img/footer-twitter.png'
import youtube from '../assets/img/footer-youtube.png'
import pinterest from '../assets/img/footer-pinterest.png'
import periscope from '../assets/img/footer-periscope.png'

// funzione per ritornare codice html
const Footer = () => {
    return (
        <footer>
            <div class="bg-footer">
                <div class="container-links">
                    <div class="footer-column">
                        <h4>DC COMICS</h4>
                        <ul>
                            <li>
                                <a href="">Characters</a>
                            </li>
                            <li>
                                <a href="">Comics</a>
                            </li>
                            <li>
                                <a href="">Movies</a>
                            </li>
                            <li>
                                <a href="">TV</a>
                            </li>
                            <li>
                                <a href="">Games</a>
                            </li>
                            <li>
                                <a href="">Videos</a>
                            </li>
                            <li>
                                <a href="">News</a>
                            </li>
                        </ul>

                        <h4>SHOP</h4>
                        <ul>
                            <li>
                                <a href="">Shop DC</a>
                            </li>
                            <li>
                                <a href="">Shop DC Collectibles</a>
                            </li>
                        </ul>
                    </div>

                    <div class="footer-column">
                        <h4>DC</h4>
                        <ul>
                            <li>
                                <a href="">Terms Of Use</a>
                            </li>
                            <li>
                                <a href="">Privacy policy (New)</a>
                            </li>
                            <li>
                                <a href="">Ad Choices</a>
                            </li>
                            <li>
                                <a href="">Advertising</a>
                            </li>
                            <li>
                                <a href="">Jobs</a>
                            </li>
                            <li>
                                <a href="">Subscriptions</a>
                            </li>
                            <li>
                                <a href="">Talent Workshops</a>
                            </li>
                            <li>
                                <a href="">CPSC Certificates</a>
                            </li>
                            <li>
                                <a href="">Ratings</a>
                            </li>
                            <li>
                                <a href="">Shop Help</a>
                            </li>
                            <li>
                                <a href="">Contact Us</a>
                            </li>
                        </ul>
                    </div>

                    <div class="footer-column">
                        <h4>SITES</h4>
                        <ul>
                            <li>
                                <a href="">DC</a>
                            </li>
                            <li>
                                <a href="">MAD Magazine</a>
                            </li>
                            <li>
                                <a href="">DC Kids</a>
                            </li>
                            <li>
                                <a href="">DC Universe</a>
                            </li>
                            <li>
                                <a href="">DC Power Visa</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="bg-registration-social">
                <div class="container-registration-social">
                    <div class="registration-btn">
                        <button>SIGN-UP NOW!</button>
                    </div>
                    <div class="social">
                        <span class="follow-us">FOLLOW US</span>
                        <div class="icons">
                            <a href="">
                                <img src={facebook} alt="facebook" />
                            </a>
                            <a href="">
                                <img src={twitter} alt="twitter" />
                            </a>
                            <a href="">
                                <img src={youtube} alt="youtube" />
                            </a>
                            <a href="">
                                <img src={pinterest} alt="pinterest" />
                            </a>
                            <a href="">
                                <img src={periscope} alt="periscope" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

// esporto il file
export default Footer