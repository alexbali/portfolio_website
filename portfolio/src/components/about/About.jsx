import "./about.scss"
import Card from "../card/Card"

export default function About() {
    return (
        <div className="about" id="about">
            <div className="top">
                <h1>About</h1>
                <div className="about-paragraph">
                    <p>What can I tell you about myself? I'm a pretty chill guy that loves coming up with creative solutions and helping others. I am also very 
                        passionate about learning and teaching myself new skills! 
                        I am a recent graduate
                        from the University of Alberta where I completed my Bachelors of Science with specialization in Computer Science. I have many skills that I will
                        list below. 
                    </p>
                </div>
            </div>
            <div className="bottom">
                <Card image="assets/qa1.png" title="Quality Assurance" description="I have experience with Test Driven Development, Unit Testing, Integration Testing & A/B Testing, Acceptance Testing using frameworks like JUnit, Mockito & Selenium"></Card>
                <Card image="assets/dev.png" title="Development" description="I have developed full stack applications using frameworks such as Django, Flask, ASP.NET, Blazor & React."></Card>
                <Card image="assets/db.jpg" title="Databases" description="I am well versed in both SQL and NoSQL databases. I can write complex queries, triggers, and stored procedures"></Card>
                <Card image="assets/an.png" title="Analytics" description="I have analyzed large datasets, extracted and transformed data with an emphasis on KPI's. I have created user-friendly dashboards using BI tools such as Tableau or GDS."></Card>
            </div>
        </div>
    )
}