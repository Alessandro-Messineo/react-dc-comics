// importo i file utili
import Services from "./sub-components/Services"
import ComicsCard from "./sub-components/ComicsCard"

// funzione per ritornare codice html
const Main = () => {
    return (
        <main>
            <div class="jumbotron">
                <img src="../../src/assets/img/jumbotron.jpg" alt="teen titans" />
            </div>
            <div class="container-main">
                    <ComicsCard />
            </div>
            {/* richiamo Services */}
            <Services />
        </main>
    )
}

// esporto il file
export default Main