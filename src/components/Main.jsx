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
                            <img src="../../src/assets/img/buy-comics-digital-comics.png" alt="Digital Comics" />
                            <a href="">DIGITAL COMICS</a>
                        </li>
                        <li>
                            <img src="../../src/assets/img/buy-comics-merchandise.png" alt="DC Merchandise" />
                            <a href="" >DC MERCHANDISE</a>
                        </li>
                        <li>
                            <img src="../../src/assets/img/buy-comics-subscriptions.png" alt="Subscription" />
                            <a href="">SUBSCRIPTION</a>
                        </li>
                        <li>
                            <img src="../../src/assets/img/buy-comics-shop-locator.png" alt="Comic Shop Locator" />
                            <a href="" >COMIC SHOP LOCATOR</a>
                        </li>
                        <li>
                            <img src="../../assets/assets/img/buy-dc-power-visa.svg" alt="DC Power Visa" />
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