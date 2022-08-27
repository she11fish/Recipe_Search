import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RecipePage from "../components/Search/RecipePage/recipe_page";
import NeededData from "../interfaces/needed_data";
import { getAllRecipeInfo } from "../utils/utils";


export default function Search() {
    
    const { name } = useParams()
    const [validName, setValidName] = useState(false)
    const [recipeInfo, setRecipeInfo] = useState<NeededData | undefined>()
    const navigate = useNavigate()

    useEffect(() => {
        
        (async () => {
            const data = await getAllRecipeInfo(name)
            console.log(data)
            if (!data?.name) { 
                navigate("/")
                return 
            }
            setValidName(true)
            setRecipeInfo(data)
        })()

    }, [])
    console.log(validName)
    return (
        <>
            { validName && <RecipePage name={name} recipeInfo={recipeInfo} /> }
        </>
    )
}