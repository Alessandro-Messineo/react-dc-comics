import ComicsArray from "./ComicsArray"
import Card from "./Card";

const ComicsCard = () => {
    return (
        <div className="container-card">
           { ComicsArray.map(comic => (
                <Card
                     key={comic.id}
                    thumb={comic.thumb}
                    aserieslt={comic.series}
                    title={comic.title}
                />
            ))}
          <button className="btn"> LOAD MORE</button>
        </div>
    )
}

export default ComicsCard;