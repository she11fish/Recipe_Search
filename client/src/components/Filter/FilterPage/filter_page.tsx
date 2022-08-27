import { useState } from "react"
import { Link } from "react-router-dom"
import ReturnArrow from "../../../assets/return_arrow"
import Recipe from "../../Home/Main/Recipe/recipe"
import "./filter_page.css"

interface Props {
    names: string[]
}

export default function FilterPage({ names }: Props) {
    const [buttonClicked, setButtonClicked] = useState(true)
    return (
        <>
            <Link className="arrow_link" to="/">
                <ReturnArrow buttonClicked={buttonClicked} setButtonClicked={setButtonClicked}/>
            </Link>
            { names.map(name => <Recipe currentName={name} random={false}/>)}
        </>
    )
}