import { useEffect, useRef, useState } from "react";
import Recipe from "./Recipe/recipe";

export default function Main() {
    const current_recipes: JSX.Element[] = []
    const [recipes, setRecipes] = useState<JSX.Element[]>([]) 
    const names: Set<string> = new Set()
    const currentName = useRef<string>("")
    const observer = new IntersectionObserver(() => {
        console.log(names)
        let i = 0;
        while(i < 3) {
            const current_recipe = <Recipe currentName={currentName} random={true}/>

            // If the recipe is not a duplicate, then it's rendered and added to the set
            // eslint-disable-next-line react-hooks/rules-of-hooks
            if (!names.has(currentName.current)) {
                current_recipes.push(current_recipe)
                names.add(currentName.current)
            } else {
                i++;
            }
        } 
        setRecipes([...recipes, ...current_recipes])
    })

    const endRef = useRef(null)
    
    useEffect(() => {
        if (endRef.current) 
            observer.observe(endRef.current)
    }, [])

    return (
        <>
            { recipes.map(recipe => recipe) }
            <div ref={endRef} className="end-page" style={{width: 20, height: 20, position: "absolute"}}></div>
        </>
    )
}