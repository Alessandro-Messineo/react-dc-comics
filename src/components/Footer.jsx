// array con gli elementi di dc comics
const dcComicsLinks = ["Characters", "Comics", "Movies", "TV", "Games", "Videos", "News"];
// creazione array che clicla gli elementi
const dcComicsLink = dcComicsLinks.map((link, index) => (
    <li key={"comics" + index}>
        <a href="">{link}</a>
    </li >
))

// array con gli elementi di shop
const shopLinks = ["Shop DC", "Shop DC Collectibles"];
// creazione array che clicla gli elementi
const shopLink = shopLinks.map((link, index) => (
    <li key={"shop" + index}>
        <a href="">{link}</a>
    </li >
))

// array con gli elementi dc
const dcLinks = ["Terms Of Use", "Privacy policy News", "Ad Choices", "Adversting", "Jobs", "Subscription", "Talent Workshops", "CPSC Certificates", "Ratings", "Shop Help", "Contact Us"];
// creazione array che clicla gli elementi
const dcLink = dcLinks.map((link, index) => (
    <li key={"dc" + index}>
        <a href="">{link}</a>
    </li >
))

// array con gli elementi di sites
const sitesLinks = ["DC", "MAD Magazine", "DC Kids", "DC Universe", "DC Power Visa"];
// creazione array che clicla gli elementi
const sitesLink = sitesLinks.map((link, index) => (
    <li key={"dc" + index}>
        <a href="">{link}</a>
    </li >
))

// funzione per ritornare codice html
const Footer = () => {
    return (
        <footer>
            <div class="bg-footer">
                <div class="container-links">
                    <div class="footer-column">
                        <h4>DC COMICS</h4>
                        <ul>
                           {dcComicsLink}
                        </ul>

                        <h4>SHOP</h4>
                        <ul>
                            {shopLink}
                        </ul>
                    </div>

                    <div class="footer-column">
                        <h4>DC</h4>
                        <ul>
                           {dcLink}
                        </ul>
                    </div>

                    <div class="footer-column">
                        <h4>SITES</h4>
                        <ul>
                           {sitesLink}
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
                                <img src="../../src/assets/img/footer-facebook.png" alt="facebook" />
                            </a>
                            <a href="">
                                <img src="../../src/assets/img/footer-twitter.png" alt="twitter" />
                            </a>
                            <a href="">
                                <img src="../../src/assets/img/footer-youtube.png" alt="youtube" />
                            </a>
                            <a href="">
                                <img src="../../src/assets/img/footer-pinterest.png" alt="pinterest" />
                            </a>
                            <a href="">
                                <img src="../../src/assets/img/footer-periscope.png" alt="periscope" />
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