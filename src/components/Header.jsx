// importo l'immagine
import logo from '../assets/img/dc-logo.png';

// funzione per ritornare codice html
const Header = () => {
    return (
        <header>
            <div class='container-header'>
                <img src={logo} alt="dc-logo" class='logo' />
                <nav class='navbar-header'>
                    <ul >
                        <li>
                            <a href="">CHARACTERS</a>
                        </li>
                        <li>
                            <a href="">COMICS</a>
                        </li>
                        <li>
                            <a href="">MOVIES</a>
                        </li>
                        <li>
                            <a href="">TV</a>
                        </li>
                        <li>
                            <a href="">GAMES</a>
                        </li>
                        <li>
                            <a href="">COLLECTIBLES</a>
                        </li>
                        <li>
                            <a href="">VIDEOS</a>
                        </li>
                        <li>
                            <a href="">FANS</a>
                        </li>
                        <li>
                            <a href="">NEWS</a>
                        </li>
                        <li>
                            <a href="">SHOP</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
// esporto il file
export default Header