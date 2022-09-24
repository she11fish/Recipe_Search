import './ingredient.css'
import BackArrow from "../../../../../../assets/back_arrow"
import { CategoryType } from '../../../../../../interfaces/types'
import { Link } from 'react-router-dom'

interface Props {
    ingredients: CategoryType
    ingredientBoxRef: React.RefObject<HTMLDivElement>
    setIngredientClicked: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Ingredient({ ingredients, ingredientBoxRef, setIngredientClicked }: Props) {
    return (
        <>
            <div ref={ingredientBoxRef} className='filter-box scroll adjustment'> 
                <BackArrow setFilterClicked={ setIngredientClicked }/>
                <div className='container'>
                    { ingredients.map((ingredient, index) => <><Link key={index + 1} to={`./ingredient/${ingredient}`} className="ingredients sm-height">{ingredient}</Link></>) }
                </div>
            </div>
        </>
    )
}