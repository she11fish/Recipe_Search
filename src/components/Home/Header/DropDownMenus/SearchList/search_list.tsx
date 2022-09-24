import { Link } from "react-router-dom"
import "./search_list.css"

interface Props {
    recipes: string[]
    optionsBoxRef: React.MutableRefObject<HTMLDivElement | null>
}

export default function SearchList({ recipes, optionsBoxRef }: Props) {
    return (
        <>
            <div ref={optionsBoxRef} id="drop-down-menu">
                {recipes.length ? recipes?.map((recipe_name, index) => { 
                    return <Link key={index+1}  className="recipe" to={`./search/${recipe_name}`} >{recipe_name}</Link> 
                }) : null}
            </div>  
        </>
    )
}