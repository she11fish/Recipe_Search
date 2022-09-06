import { SyntheticEvent, useState, useEffect, useRef, useLayoutEffect } from 'react'
import SearchIcon from "../../../../assets/search_icon"
import ArrowDown from "../../../../assets/arrow_down"
import ArrowRight from "../../../../assets/arrow_right"
import SearchList from "../DropDownMenus/SearchList/search_list"
import Filters from "../DropDownMenus/Filters/filters"
import "./search_bar.css"
import { getAllAreas, getAllCategories, getAllIngredients, getAllRecipeNames } from '../../../../utils/utils'
import AreaType from '../../../../interfaces/area'
import { CategoryType } from '../../../../interfaces/category'
import { useNavigate } from 'react-router-dom'

interface Props {
    setIsLoaded: React.Dispatch<React.SetStateAction<boolean>> 
}

export default function SearchBar({ setIsLoaded }: Props) {
    
    const [focus, setFocus] = useState(false)
    const [recipes, setRecipes] = useState<string[]>([])
    const [filterFocus, setFilterFocus] = useState(false)
    const [areas, setAreas] = useState<AreaType[]>([])
    const [categories, setCategories] = useState<CategoryType>([])
    const [ingredients, setIngredients] = useState<CategoryType>([])
    const [validRecipes, setValidRecipes] = useState<string[]>([])

    const inputRef = useRef<HTMLInputElement>(null)
    const optionsBoxRef = useRef<HTMLDivElement>(null)

    const buttonRef = useRef<HTMLButtonElement>(null)
    const filterBoxRef = useRef<HTMLDivElement>(null)
    const areaBoxRef = useRef<HTMLDivElement>(null)
    const categoryBoxRef = useRef<HTMLDivElement>(null)
    const ingredientBoxRef = useRef<HTMLDivElement>(null)

    const navigate = useNavigate()
    
    function searchBarFocusEventCallback(event: MouseEvent) {
        const optionsBox: HTMLDivElement | null = optionsBoxRef.current
        const input: HTMLInputElement | null = inputRef.current
        const target = event.target as Node
        if ((optionsBox?.contains(target)) || (input?.contains(target))) {
            remove_placeholder()
            setFocus(true)
            return
        }
        add_placeholder()
        setFocus(false)
    }
    
    function filterFocusEventCallBack(event: MouseEvent) {
        const filterBox: HTMLDivElement | null = filterBoxRef.current
        const areaBox: HTMLDivElement | null = areaBoxRef.current
        const categoryBox: HTMLDivElement | null = categoryBoxRef.current
        const ingredientBox: HTMLDivElement | null = ingredientBoxRef.current
        const button: HTMLButtonElement | null = buttonRef.current
        const target = event.target as Node

        if (button?.isEqualNode(target) || 
            button?.childNodes[0].isEqualNode(target) || 
            button?.childNodes[0].childNodes[0].isEqualNode(target) 
            ) {
            setFilterFocus(!filterFocus)
            return
        }
        if (filterBox?.contains(target) || 
            areaBox?.contains(target) || 
            categoryBox?.contains(target) || 
            ingredientBox?.contains(target)
            ) {
            setFilterFocus(true)
            return
        }
        setFilterFocus(false)
    }

    useEffect(() => { 
        document.addEventListener("mousedown", searchBarFocusEventCallback)
        document.addEventListener("mousedown", filterFocusEventCallBack)
        getAllRecipeNames(setRecipes) 
        getAllAreas(setAreas) 
        getAllCategories(setCategories)
        getAllIngredients(setIngredients) 
    }, [])

    function remove_placeholder(): void {
        const input: HTMLInputElement | null = inputRef.current
        if (input)
            input.placeholder = ""
    }

    function add_placeholder(): void {
        const input: HTMLInputElement | null = inputRef.current
        if (input) 
            input.placeholder = "Enter Recipe Name"
    }

    function auto_complete(e: React.ChangeEvent<HTMLInputElement>): void {
        let result: string[] = []
        for (let recipe of recipes) {
            if (recipe.toLowerCase().includes(e.target.value.toLowerCase())) {
                result.push(recipe)
            } 
        }
        setValidRecipes(result)
    }

    function search(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
            navigate(`/search/${e.target.value}`)
        }
    }

    return recipes.length && areas.length && categories.length && ingredients.length ?
        (
            <>
                <header>
                    <input 
                        id="search_text_box" type="text" 
                        ref={inputRef}
                        placeholder='Enter Recipe Name' 
                        onChange={auto_complete}
                        onKeyDown={search}
                        autoComplete="off"
                    />
                    <div className='vertical-line'></div>
                    <button onClick={() => { const input: any = inputRef.current; if(input && input.value) navigate(`/search/${input.value}`)} }>
                        <SearchIcon />
                    </button>
                    <div className='vertical-line'></div>
                    <button ref={buttonRef}>
                        { filterFocus ? <ArrowDown /> : <ArrowRight /> }
                    </button>
                </header>  
                { focus && <SearchList recipes={ validRecipes.length ? validRecipes : recipes } optionsBoxRef={optionsBoxRef} />} 
                { filterFocus && <Filters areas={areas} areaBoxRef={areaBoxRef} categories={categories} categoryBoxRef={categoryBoxRef} ingredients={ingredients} ingredientBoxRef={ingredientBoxRef} filterBoxRef={filterBoxRef}/> }
                { setIsLoaded(true) }
            </>
        )
        : (
            null
          )
}