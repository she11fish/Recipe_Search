import { useState } from "react"
import AreaType from "../../../../interfaces/area"
import { CategoryType } from "../../../../interfaces/category"
import { IngredientType } from "../../../../interfaces/ingredient"
import Area from "./Area/area"
import Category from "./Category/category"
import "./filters.css"
import Ingredient from "./Ingredient/ingredient"
import { motion } from 'framer-motion'

interface Props {
    areas: AreaType[]
    categories: CategoryType
    ingredients: IngredientType
}

export default function Filters({ areas, categories, ingredients }: Props) {
    const [areaClicked, setAreaClicked] = useState(false)
    const [categoryClicked, setCategoryClicked] = useState(false)
    const [ingredientClicked, setIngredientClicked] = useState(false)
    console.log("rendered", areaClicked, categoryClicked, ingredientClicked)
    return (!(areaClicked || categoryClicked || ingredientClicked)) ? (
        <>
            <div className="filter_box">
                    <div className="filter" onClick={() => setAreaClicked(!areaClicked)}>Area</div>
                    <div className="horizontal-line"></div>
                    <div className="filter" onClick={() => setCategoryClicked(!categoryClicked)}>Category</div>
                    <div className="horizontal-line"></div>
                    <div className="filter" onClick={() => setIngredientClicked(!ingredientClicked)}>Ingredient</div>
                    <div className="horizontal-line"></div>
            </div>
            {/* <Area /> */}
            {/* <Category />
            <Ingredient /> */}
        </>
        
    ) : areaClicked ? (
            <Area areas={areas} setAreaClicked={setAreaClicked} />
        ) : categoryClicked ? (
            <Category categories={categories} setCategoryClicked={setCategoryClicked}/>
            ) : ingredientClicked ? (
                <Ingredient ingredients={ingredients} setIngredientClicked={setIngredientClicked}/>
                ) : (
                    null
                )

}