import "./about.scss"
import Card from "../card/Card"

export default function About() {
    return (
        <div className="about" id="about">
            <div className="top">
                <h1>About</h1>
                <div className="about-paragraph">
                    <p>Driven professional with a passion for optimizing applications and creating elegant solutions. I am young, energetic and a recent graduate from the 
                        University of Alberta where I finished my Bachelor of Science degree with specialization in Computer Science. I have strong foundations in algorithms,
analytics, databases, and software development. 
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