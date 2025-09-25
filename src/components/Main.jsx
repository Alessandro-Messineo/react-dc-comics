// importo le immagini
import digitalComics from '../assets/img/buy-comics-digital-comics.png'
import merchandise from '../assets/img/buy-comics-merchandise.png'
import subscription from '../assets/img/buy-comics-subscriptions.png'
import shopLocator from '../assets/img/buy-comics-shop-locator.png'
import visa from '../assets/img/buy-dc-power-visa.svg'

// funzione per ritornare codice html
const Main = () => {
    return (
        <main>
            <div class="jumbotron">
                <img src="../../src/assets/img/jumbotron.jpg" alt="teen titans" />
            </div>
            <div class="container-main">
                <div>
                    <h1>--&#62; Content goes here &#60;--</h1></div>
            </div>
            <div class="service-links">
                <nav class="list-services">
                    <ul >
                        <li>
                            <img src={digitalComics} alt="Digital Comics" />
                            <a href="">DIGITAL COMICS</a>
                        </li>
                        <li>
                            <img src={merchandise} alt="DC Merchandise" />
                            <a href="" >DC MERCHANDISE</a>
                        </li>
                        <li>
                            <img src={subscription} alt="Subscription" />
                            <a href="">SUBSCRIPTION</a>
                        </li>
                        <li>
                            <img src={shopLocator} alt="Comic Shop Locator" />
                            <a href="" >COMIC SHOP LOCATOR</a>
                        </li>
                        <li>
                            <img src={visa} alt="DC Power Visa" />
                            <a href="" >DC POWER VISA</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </main>
    )
}

// esporto il file
export default Main