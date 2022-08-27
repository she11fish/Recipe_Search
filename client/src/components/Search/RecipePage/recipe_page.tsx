import { useState } from "react";
import { Link } from "react-router-dom";
import ReturnArrow from "../../../assets/return_arrow";
import NeededData from "../../../interfaces/needed_data";
import "./recipe_page.css"

interface Props {
    name: string | undefined
    recipeInfo: NeededData | undefined
}

export default function RecipePage({ name, recipeInfo}: Props) {
    const [buttonClicked, setButtonClicked] = useState(true)

    return (
        <>
            <div className="lg-background">
                <Link className="arrow_link" to="/">
                    <ReturnArrow buttonClicked={buttonClicked} setButtonClicked={setButtonClicked}/>
                </Link>
                <div className="xlg-container new-grid">
                    <div className="align-center name-image-container">
                        <div>
                            <div className="name-container">
                                <div className="name">{recipeInfo?.name}</div>
                            </div>
                            <img className="sm-img" src={recipeInfo?.img}/>
                        </div>
                    </div>
                    <div className="">
                        <div className="directions-container">
                            <div className="directions">
                                <div>Directions</div>
                            </div>
                        </div>
                        <div className="instructions-container">
                            <p className="instructions">
                                {recipeInfo?.directions}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}