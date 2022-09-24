import { useState } from "react"
import { AreaType } from "../../../../../interfaces/types"
import { CategoryType } from "../../../../../interfaces/types"
import { IngredientType } from "../../../../../interfaces/types"
import Area from "./Area/area"
import Category from "./Category/category"
import "./filters.css"
import Ingredient from "./Ingredient/ingredient"

interface Props {
    areas: AreaType[]
    areaBoxRef: React.RefObject<HTMLDivElement>
    categories: CategoryType
    categoryBoxRef: React.RefObject<HTMLDivElement>
    ingredients: IngredientType
    ingredientBoxRef: React.RefObject<HTMLDivElement>
    filterBoxRef: React.MutableRefObject<HTMLDivElement | null> 
}

export default function Filters({ areas, areaBoxRef, categories, categoryBoxRef, ingredients, ingredientBoxRef, filterBoxRef }: Props) {
    const [areaClicked, setAreaClicked] = useState(false)
    const [categoryClicked, setCategoryClicked] = useState(false)
    const [ingredientClicked, setIngredientClicked] = useState(false)
    return (!(areaClicked || categoryClicked || ingredientClicked)) ? (
        <>
            <div ref={filterBoxRef} className="filter-box box-animation">
                    <div className="filter" onClick={() => setAreaClicked(!areaClicked)}>Area</div>
                    <div className="horizontal-line"></div>
                    <div className="filter" onClick={() => setCategoryClicked(!categoryClicked)}>Category</div>
                    <div className="horizontal-line"></div>
                    <div className="filter" onClick={() => setIngredientClicked(!ingredientClicked)}>Ingredient</div>
                    <div className="horizontal-line"></div>
            </div>
        </>
        
    ) : areaClicked ? (
            <Area areas={areas} areaBoxRef={areaBoxRef} setAreaClicked={setAreaClicked} />
        ) : categoryClicked ? (
            <Category categories={categories} categoryBoxRef={categoryBoxRef} setCategoryClicked={setCategoryClicked}/>
            ) : ingredientClicked ? (
                <Ingredient ingredients={ingredients} ingredientBoxRef={ingredientBoxRef} setIngredientClicked={setIngredientClicked}/>
                ) : (
                    null
                )

}