const Card = (props) => {

    return (

        <div className="card" key={props.key}>
            <img src={props.thumb} alt={props.series} />
            <h2>{props.title}</h2>
        </div>

    )
}

export default Card