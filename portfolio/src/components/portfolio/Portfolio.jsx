import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import React, { useEffect, useState } from "react";
import {featuredPortfolio, webAPP, mobileApp, otherApp, webApp} from "../../data";
import {Person, Mail, AcUnit, GitHub,LinkedIn, FileDownload as FDI } from "@material-ui/icons"

export default function Portfolio() {

    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);

    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "other app",
            title: "Other Applications"
        },
    ]

    useEffect(()=>{

        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;

            case "web app":
                setData(webApp);
                break;

            case "mobile app":
                setData(mobileApp);
                break;

            case "other app":
                setData(otherApp);
                break;
            
            default:
                setData(featuredPortfolio);
            }

    },[selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Projects</h1>
            <ul>
                {list.map(item=>(
                    <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}> </PortfolioList>
                ))}
            </ul>
            <div className="container">
                {data.map((k) => (
                    <div className="item">
                        <img src={k.img} alt="" />
                        <h3>{k.title}</h3>
                        <p>
                            {k.description}
                            <br />
                            <br />
                            <a class="git" href={k.link}>
                                {k.flag ? <GitHub></GitHub> : "COE Internal Tool"}
                            </a>
                        </p>
                        {/* <a href="">GitHub</a> */}
                    </div>
                ))}
            </div>
        </div>
    )
}
