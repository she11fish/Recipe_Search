import { useEffect, useRef, useState } from "react";
import Recipe from "./Recipe/recipe";

export default function Main() {
    const current_recipes: JSX.Element[] = []
    const [recipes, setRecipes] = useState<JSX.Element[]>([]) 
    const names: Set<string> = new Set()
    const currentName = useRef<string>("")
    const config = { threshold: 1 }
    const observer = new IntersectionObserver(() => {
        console.log(names)
        for (let i = 0; i < 3; i++) {
            const current_recipe = <Recipe style={null} currentName={currentName} random={true}/>
            // eslint-disable-next-line react-hooks/rules-of-hooks
            if (!names.has(currentName.current)) {
                current_recipes.push(current_recipe)
                names.add(currentName.current)
            }
        } 
        setRecipes([...recipes, ...current_recipes])
    }, config)

    const endRef = useRef(null)
    useEffect(() => {
        if (endRef.current) 
            observer.observe(endRef.current)
    }, [])

    return (
        <>
            { recipes.map(recipe => recipe) }
            <div ref={endRef} className="end-page" style={{width: 1, height: 1}}></div>
        </>
    )
}