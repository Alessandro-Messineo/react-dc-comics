// importo Services
import Services from "./sub-components/Services"

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
            {/* richiamo Services */}
            <Services />
        </main>
    )
}

// esporto il file
export default Main