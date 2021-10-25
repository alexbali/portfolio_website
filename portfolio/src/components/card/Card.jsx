import "./card.scss"

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-body">
                {/* <img className="card-image"src={props.image} alt="" /> */}
                <div className="card-image">
                    <img src={props.image} alt="" />
                </div>
                <div className="card-attributes">
                    <h2 className="card-title">{props.title}</h2>
                    <p className="card-description">
                    {props.description}
                </p>
                </div>
            </div>
            {/* <button>Card Button</button> */}
        </div>
    )
}