import { useEffect, useState } from "react"
import "./search_list.css"

interface Props {
    recipes: string[]
}

export default function SearchList({ recipes }: Props) {
    return (
        <>
            <div id="drop-down-menu">
                {recipes.length ? recipes?.map((recipe_name, index) => { 
                    return <p className="recipe" key={index+1}>{recipe_name}</p> 
                }) : null}
            </div>  
        </>
    )
}