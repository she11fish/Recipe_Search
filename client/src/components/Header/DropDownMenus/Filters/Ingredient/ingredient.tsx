import './ingredient.css'
import BackArrow from "../../../../../assets/back_arrow"
import { CategoryType } from '../../../../../interfaces/category'

interface Props {
    ingredients: CategoryType
    setIngredientClicked: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Ingredient({ ingredients, setIngredientClicked }: Props) {
    return (
        <>
            <div className='filter_box scroll adjustment'> 
                <BackArrow setFilterClicked={ setIngredientClicked }/>
                { ingredients.map((ingredient, index) => <><div key={index + 1} className="ingredients sm-height">{ingredient}</div></>) }
            </div>
        </>
    )
}