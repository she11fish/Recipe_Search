import { useEffect, useLayoutEffect, useRef, useState } from "react";
import NeededData from "../../../../interfaces/needed_data";
import { getAllRecipeInfo, getAllRelevantData } from "../../../../utils/utils";
import "./recipe.css"

interface Style {
    marginTop: number
}

interface Props {
    style: Style | null
    currentName: React.MutableRefObject<string> | string
    random: boolean
}

export default function Recipe({ style, currentName, random}: Props) {
    const tabletSize = 744
    const mobileSize = 428
    const [isTabletSize, setIsTabletSize] = useState(window.innerWidth <= tabletSize && window.innerWidth > mobileSize)
    const [relevantData, setRelevantData] = useState<NeededData>();
    if (relevantData?.name && typeof currentName !== "string") {
        currentName.current = relevantData.name 
    }
    useEffect(() => { 
        (async () => {
            if (random) {
                const result = await getAllRelevantData()
                if (result) {
                    setRelevantData(result)
                }
                return
            } 
            if (typeof currentName === "string") { 
                const data = await getAllRecipeInfo(currentName)
                if (data) setRelevantData(data)
            }
            
        })()
    }, []);

    function currentWidth() {
        setIsTabletSize(window.innerWidth <= tabletSize && window.innerWidth > mobileSize)
    }

    useLayoutEffect(() => {
        window.addEventListener("resize", currentWidth)
    }, [])

    const tutorial = (
            <div className="tutorial">
            <div className="head-titles">
                Tutorial
            </div>
            <div className="white sm-container sm-font scroll">
                <a className="link" href={relevantData?.tutorial}>{relevantData?.tutorial}</a>
            </div>
        </div>
    )

    return (
        <>
            <div style={style ? style : undefined} className="grid-container">
                <div className="column">
                    <div>
                        <div className="head-titles">
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
                        <div className="white lg-container scroll">
                            <ul>
                                {relevantData?.ingredients?.map(ingredient => <li>{ingredient}</li>)}
                            </ul>                            

                        </div>
                    </div>
                    <div className="source">
                        <div className="head-titles">
                            Source
                        </div>
                        <div className="white sm-container sm-font scroll">
                            <a className="link" href={relevantData?.source}>{relevantData?.source}</a>
                        </div>
                    </div>
                    { isTabletSize && tutorial}
                </div>
                <div className="column">
                    <div className="head-titles">
                        Directions
                    </div>
                    <div>
                        <div className="white lg-container scroll">
                            <p className="sm-font paragraph">{relevantData?.directions}</p>
                        </div>
                    </div>
                    { !isTabletSize && tutorial}
                </div>
            </div>
        </>
    )
}