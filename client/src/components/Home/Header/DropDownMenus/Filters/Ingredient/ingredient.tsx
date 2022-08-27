import './ingredient.css'
import BackArrow from "../../../../../../assets/back_arrow"
import { CategoryType } from '../../../../../../interfaces/category'
import { Link } from 'react-router-dom'

interface Props {
    ingredients: CategoryType
    setIngredientClicked: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Ingredient({ ingredients, setIngredientClicked }: Props) {
    return (
        <>
            <div className='filter_box scroll adjustment'> 
                <BackArrow setFilterClicked={ setIngredientClicked }/>
                { ingredients.map((ingredient, index) => <><Link key={index + 1} to={`./ingredient/${ingredient}`} className="ingredients sm-height">{ingredient}</Link></>) }
            </div>
        </>
    )
}