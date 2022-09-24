import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReturnArrow from "../assets/return_arrow";
import Recipe from "../components/Home/Main/Recipe/recipe";
import { getAllRecipeInfo } from "../utils/utils";
import PageNotFound from "./PageNotFound";


export default function Search() {
    
    const { name } = useParams()
    const [validName, setValidName] = useState<boolean | null>(null)
    const navigate = useNavigate()
    function checkValidName() {
        getAllRecipeInfo(name)
            .then(data => {
                console.log(data)
                console.log(validName)
                //Checks if user input has invalid data
                if (!data?.name) { 
                    setValidName(false)
                    return 
                }
                setValidName(true)
            })
            .catch(err => {
                console.log(`An error occured while fetching`)
            })
    }
    useEffect(() => checkValidName(), [])
    return (
        <>
            { !validName && validName !== null && <PageNotFound />}
            { validName && 
                (
                    <>
                        <Link className="arrow_link" to="/">
                        <ReturnArrow/>
                        </Link>
                        <Recipe currentName={name ? name : ""} random={false} />
                    </>
                ) 
            }
        </>
    )
}