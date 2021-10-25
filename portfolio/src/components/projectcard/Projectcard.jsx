import "./projectcard.scss"

export default function Projectcard(props) {
    return (
        <div className="project-card">
            <div className="card-body">
                <div className="card-image-title">
                    <img src={props.image} alt="" />
                    <h2>{props.title}</h2>
                </div>
                <div className="card-desc-tech">
                    <p>{props.description}</p>
                    <h3>{props.technology}</h3>
                </div>
            </div>
            {/* <button>Card Button</button> */}
        </div>
    )
}