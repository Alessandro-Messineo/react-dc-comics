// array con elementi della navbar
const navLinks = ["CHARACTERS", "COMICS", "MOVIES", "TV", "GAMES", "COLLECTIBLES", "VIDEOS", "FANS", "NEWS", "SHOP"];

// creazione array che clicla gli elementi
const arrayLink = navLinks.map((link, index) => (
    <li key={index}>
        <a href="">{link}</a>
    </li>
));

// funzione per ritornare codice html
const Header = () => {
    return (
        <header>
            <div class='container-header'>
                <img src="../../src/assets/img/dc-logo.png" alt="dc-logo" class='logo' />
                <nav class='navbar-header'>
                    <ul >
                        {arrayLink}
                    </ul>
                </nav>
            </div>
        </header>
    )
}
// esporto il file
export default Header