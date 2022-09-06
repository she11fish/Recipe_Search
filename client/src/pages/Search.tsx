import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReturnArrow from "../assets/return_arrow";
import Recipe from "../components/Home/Main/Recipe/recipe";
import NeededData from "../interfaces/needed_data";
import { getAllRecipeInfo } from "../utils/utils";


export default function Search() {
    
    const { name } = useParams()
    const [validName, setValidName] = useState(false)
    const [recipeInfo, setRecipeInfo] = useState<NeededData | undefined>()
    const [buttonClicked, setButtonClicked] = useState(true)
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
            <Link className="arrow_link" to="/">
                <ReturnArrow buttonClicked={buttonClicked} setButtonClicked={setButtonClicked}/>
            </Link>
            { validName && <Recipe style={{marginTop: 0}} currentName={name ? name : ""} random={false} /> }
        </>
    )
}