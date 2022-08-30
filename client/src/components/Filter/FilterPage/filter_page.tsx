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
    let names_clone = [...names]
    names_clone.shift()
    return (
        <>
            <Link className="arrow_link" to="/">
                <ReturnArrow buttonClicked={buttonClicked} setButtonClicked={setButtonClicked}/>
            </Link>
            { <Recipe style={{marginTop: 0}} currentName={names[0]} random={false}/> }
            { names_clone.map(name => <Recipe style={null}currentName={name} random={false}/> )}
        </>
    )
}