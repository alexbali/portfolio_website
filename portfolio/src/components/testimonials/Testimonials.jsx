import "./testimonials.scss"

export default function Testimonials() {

    const data = [
       {
           id: "1",
           name: "Alex",
           title: "Developer",
           img: "assets/grey.png",
           icon: "assets/linkedin.png",
           desc: "Quick learner",
           featured: false
       },
       {
        id: "2",
        name: "Joel",
        title: "Minot State Football",
        img: "assets/joal.jpg",
        icon: "assets/linkedin.png",
        desc: "If or when you work with Alex, you are working with someone who is confident in what he does because he's excellent at what he does.",
        featured: true,
        profileLink: "https://www.linkedin.com/in/joel-ramnath-1517aa20a/"
    },
    {
        id: "3",
        name: "Micheal",
        title: "Developer",
        img: "assets/grey.png",
        icon: "assets/linkedin.png",
        desc: "Can bench a plate",
        featured: false
    },
    ]
    return (
        <div className="testimonials" id="testimonials">
            <h1>References</h1>
            <div className="container">
                {data.map((d) =>
                    <div className={d.featured ? "card featured" : "card"}>
                        <div className="top">
                            <img src="assets/right-arrow.png" className="left" alt="" />
                            <img src={d.img} className="user" alt="" />
                            <a href={d.profileLink} target="_blank">
                                <img src={d.icon} className="right" alt="" />
                            </a>
                            
                        </div>
                        <div className="center">
                            {d.desc}
                        </div>
                        <div className="bottom">
                            <h3>{d.name}</h3>
                            <h4>{d.title}</h4>
                        </div>
                </div>
                )}
            </div>
        </div>
    )
}
