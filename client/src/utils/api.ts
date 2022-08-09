import axios from "axios"

export class Search {
    searchMealByName(name: string): Promise<any> {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    }

    searchMealsByCategory(): Promise<any> {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)

    }

    searchMealsByFirstLetter(letter: string): Promise<any> {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
    }
    
    searchMealById(id: number): Promise<any> {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    }

    searchMealRandomly(): Promise<any> {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
    }
}   

export class List {
    listAllCategories(): Promise<any> {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`)
    }

    listAllAreas(): Promise<any> {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    }

    listAllIngredients(): Promise<any> {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    }
}

export class Filter {
    filterByCategory(category: string) {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    }

    filterByArea(area: string) {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    }

    filterByMainIngredient(ingredient: string) {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    }
}