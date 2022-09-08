import { Link } from "react-router-dom"
import ReturnArrow from "../../assets/return_arrow"
import Recipe from "../Home/Main/Recipe/recipe"
import "./filter.css"

interface Props {
    names: string[]
}

export default function FilterPage({ names }: Props) {
    return (
        <>
            <Link className="arrow_link" to="/">
                <ReturnArrow/>
            </Link>
            { names.map((name, i) => <Recipe key={i+1} currentName={name} random={false}/> )}
        </>
    )
}