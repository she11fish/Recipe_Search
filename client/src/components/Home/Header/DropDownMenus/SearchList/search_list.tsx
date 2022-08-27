import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./search_list.css"

interface Props {
    recipes: string[]
}

export default function SearchList({ recipes }: Props) {
    return (
        <>
            <div id="drop-down-menu">
                {recipes.length ? recipes?.map((recipe_name, index) => { 
                    return <Link key={index+1} to={`./search/${recipe_name}`} className="recipe" >{recipe_name}</Link> 
                }) : null}
            </div>  
        </>
    )
}