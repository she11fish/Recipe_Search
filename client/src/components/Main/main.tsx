import { useEffect, useState } from "react";
import NeededData from "../../interfaces/needed_data";
import { getAllRelevantData } from "../../utils/utils";
import "./main.css"

export default function Main() {
    const [relevantData, setRelevantData] = useState<NeededData>();
    useEffect(() => { 
        (async() => {
            const result = await getAllRelevantData()
            if (result && result) setRelevantData(result)
        })()
    }, []);
    return (
        <div id="grid-container">
            <div className="column">
                <div>
                    <div className="name head-titles">
                        {relevantData?.name}
                    </div>
                    <img src={relevantData?.img}/>
                </div>
                <div className="info_container ">
                    <div className="head-titles">
                        Category: {relevantData?.category}
                    </div>
                    <div className="head-titles">
                        Origin: {relevantData?.area}
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="head-titles">
                    Ingredients
                </div>
                <div>
                    <div className="white lg-container">
                        <ul>
                            {relevantData?.ingredients?.map(ingredient => <li>{ingredient}</li>)}
                        </ul>                            

                    </div>
                </div>
                <div className="source">
                    <div className="head-titles">
                        Source
                    </div>
                    <div className="white sm-container sm-font">
                        <p>{relevantData?.source}</p>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="head-titles">Directions</div>
                <div>
                    <div className="white lg-container">
                        <a className="link paragraph">{relevantData?.directions}</a>
                    </div>
                </div>
                <div className="tutorial ">
                    <div className="head-titles">Tutorial</div>
                    <div className="white sm-container sm-font">
                        <a className="link">{relevantData?.tutorial}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}