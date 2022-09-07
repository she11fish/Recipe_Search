import AreaType from "../interfaces/area"
import Area from "../interfaces/area"
import { CategoryType } from "../interfaces/category"
import Data from "../interfaces/data"
import { DirectionType } from "../interfaces/direction"
import { IngredientType } from "../interfaces/ingredient"
import NeededData from "../interfaces/needed_data"
import { Filter, List, Recipe, Search} from "./tools"


export async function getAllRecipeNames(setRecipes: React.Dispatch<React.SetStateAction<string[]>>): Promise<void> {
    const list = new List()
    const responses = await list.listAllMeals()
    console.log('Done')
    let data: Data 
    let recipe: Recipe
    let names: string[] = []
    let names_by_same_letter: string[] | undefined
    for (const response of responses) {
        data = response.data
        recipe = new Recipe(data)
        names_by_same_letter = recipe.getNames()
        if (names_by_same_letter) 
            names = names.length ? [...names, ...names_by_same_letter] : names_by_same_letter
            
    }
    setRecipes(names)
}

export async function getAllAreas(setAreas: React.Dispatch<React.SetStateAction<Area[]>>) {
    let availableAreas: Area[] = []
    const list = new List()
        const response = await list.listAllAreas()
        if (!response) {
            console.log('An Error Occured while fetching data')
            return
        }  
        const data = response.data
        const recipe = new Recipe(data)
        const areas = recipe.getAreas()
        if (areas) {
            let i = 0
            for (const area of areas) { 
                availableAreas.push({ id: i+1, name: area })
                i++
            }
        }
        setAreas(availableAreas)
}

export async function getAllCategories(setCategories: React.Dispatch<React.SetStateAction<CategoryType>>) {
    const list = new List()
    const response = await list.listAllCategories()
    if (!response) {
        console.log('An Error Occured while fetching data')
        return
    }  
    const data = response.data
    const recipe = new Recipe(data)
    const categories = recipe.getCategories()
    if (!categories)
        throw Error
    setCategories(categories)
}

export async function getAllIngredients(setCategories: React.Dispatch<React.SetStateAction<CategoryType>>) {
    const list = new List()
    const response = await list.listAllIngredients()
    if (!response) {
        console.log('An Error Occured while fetching data')
        return
    }  
    const data = response.data
    const recipe = new Recipe(data)
    const categories = recipe.getIngredients()
    if (!categories)
        throw Error
    setCategories(categories)
}

export async function getAllRelevantData(): Promise<NeededData | void> {
    const search = new Search()
    const response = await search.searchMealRandomly()
    const data = response.data
    const recipe = new Recipe(data)
    let result: NeededData
    result = {name: recipe.getName(), source: recipe.getSource(), tutorial: recipe.getTutorial(), img: recipe.getImage(), category: recipe.getCategory(), area: recipe.getArea(), ingredients: recipe.getIngredients(), directions: recipe.getDirecitons()}
    return result
}

export async function getAllRecipeInfo(name: string | undefined): Promise<NeededData | undefined> {
    if (!name) return
    const search = new Search()
    const response = await search.searchMealByName(name)
    const data = response.data
    const recipe = new Recipe(data)
    let result: NeededData
    result = {name: recipe.getName(), source: recipe.getSource(), tutorial: recipe.getTutorial(), img: recipe.getImage(), category: recipe.getCategory(), area: recipe.getArea(), ingredients: recipe.getIngredients(), directions: recipe.getDirecitons()}
    return result
}

export async function getAllNamesFromFilter(data: string, type: string): Promise<string[] | undefined>  {
    switch(type) {
        case "area": {
            const filter = new Filter()
            const response = await filter.filterByArea(data)
            const recipe = new Recipe(response.data) 
            return recipe.getNames()
            }
        
        case "category": {
            const filter = new Filter()
            const response = await filter.filterByCategory(data)
            const recipe = new Recipe(response.data) 
            return recipe.getNames()
        }

        case "ingredient": {
            const filter = new Filter()
            const response = await filter.filterByMainIngredient(data)
            const recipe = new Recipe(response.data) 
            return recipe.getNames()
        }

        default: {
            return
        }
    }  
}