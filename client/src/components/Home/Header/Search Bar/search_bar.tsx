import { SyntheticEvent, useState, useEffect } from 'react'
import SearchIcon from "../../../../assets/search_icon"
import ArrowDown from "../../../../assets/arrow_down"
import ArrowRight from "../../../../assets/arrow_right"
import SearchList from "../DropDownMenus/SearchList/search_list"
import Filters from "../DropDownMenus/Filters/filters"
import "./search_bar.css"
import { getAllAreas, getAllCategories, getAllIngredients, getAllRecipeNames } from '../../../../utils/utils'
import AreaType from '../../../../interfaces/area'
import Event from "../../../../interfaces/event"
import { CategoryType } from '../../../../interfaces/category'

interface Props {
    setIsLoaded: React.Dispatch<React.SetStateAction<boolean>> 
}

export default function SearchBar({ setIsLoaded }: Props) {
    
    const [focus, setFocus] = useState(false)
    const [recipeClicked, setRecipeClicked] = useState(false) 
    const [recipes, setRecipes] = useState<string[]>([])
    const [filterClicked, setFilterClicked] = useState(false)
    const [areas, setAreas] = useState<AreaType[]>([])
    const [categories, setCategories] = useState<CategoryType>([])
    const [ingredients, setIngredients] = useState<CategoryType>([])
    
    useEffect(() => { 
        getAllRecipeNames(setRecipes) 
        getAllAreas(setAreas) 
        getAllCategories(setCategories)
        getAllIngredients(setIngredients) 
    }, [])

    function handle_event(event: any | Event | SyntheticEvent): void {
        if ("key" in event && event.key == "Enter") {}
        if (event.type === "click") {
            setRecipeClicked(!recipeClicked)
        }
            
    }

    function remove_placeholder(e: SyntheticEvent): void {
        const input: any = e.target 
        input.placeholder = ""
        setFocus(true)
    }

    function add_placeholder(e: SyntheticEvent): void {
        const input: any = e.target 
        input.placeholder = "Enter Recipe Name"
        setFocus(false)
    }

    return recipes.length && areas.length && categories.length && ingredients.length ?
        (
            <>
                <header>
                    <input 
                        id="search_text_box" type="text" 
                        placeholder='Enter Recipe Name' 
                        onClick={handle_event} 
                        onFocus={remove_placeholder} 
                        onBlur={add_placeholder} 
                    />
                    <div className='vertical-line'></div>
                    <button onClick={handle_event}>
                        <SearchIcon />
                    </button>
                    <div className='vertical-line'></div>
                    <button onClick={() => setFilterClicked(!filterClicked)}>
                        { filterClicked ? <ArrowDown /> : <ArrowRight /> }
                    </button>
                </header>  
                { recipeClicked ? <SearchList recipes={recipes} /> : null} 
                { filterClicked ? <Filters areas={areas} categories={categories} ingredients={ingredients}/>: null }
                { setIsLoaded(true) }
            </>
        )
        : (
            null
          )
}