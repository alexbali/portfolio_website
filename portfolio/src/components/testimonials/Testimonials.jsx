import "./testimonials.scss"

export default function Testimonials() {

    const data = [
       {
        id: "1",
        name: "Joel",
        title: "Minot State Football",
        img: "assets/joal.jpg",
        icon: "assets/linkedin.png",
        desc: "If or when you work with Alex, you are working with someone who is confident in what he does because he's excellent at what he does.",
        featured: false,
        profileLink: "https://www.linkedin.com/in/joel-ramnath-1517aa20a/"
       },
       {
        id: "2",
        name: "Scott",
        title: "Supervisor of BI & Analytics",
        img: "assets/sh.jpg",
        icon: "assets/linkedin.png",
        desc: "Alex is a detailed-oriented professional who has a real passion for quality work and will stop at nothing short of excellence. He's happy to roll up his sleeves to help wherever he can.",
        featured: true,
        profileLink: "https://www.linkedin.com/in/scott-hardy-4863b11/"
    },
    {
        id: "3",
        name: "Muhammad",
        title: "Software Engineer",
        img: "assets/m.jpg",
        icon: "assets/linkedin.png",
        desc: "Alex is the ideal teammate. He's an excellent comunicator and sets the projects standards high early on. It's always a pleasure to work with him.",
        featured: false,
        profileLink: "https://www.linkedin.com/in/m26/"
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
