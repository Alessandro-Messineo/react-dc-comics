import ComicsArray from "./ComicsArray"

const ComicsCard = () => {
    return (
        <div className="container-card">
            {ComicsArray.map((comic) => (
                <div className="card">
                    <img src={comic.thumb} alt={comic.series} />
                    <h2>{comic.title}</h2>
                </div>
            ))}
            <button className="btn"> LOAD MORE</button>
        </div>

    )
}

export default ComicsCard;