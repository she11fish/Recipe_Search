import axios from "axios"
import ServerResponse from "../interfaces/server_response"

export default class Search {
    searchMealByName(name: string): Promise<ServerResponse> {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    }

    searchMealsByCategory(): Promise<ServerResponse> {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    }

    searchMealsByFirstLetter(letter: string): Promise<ServerResponse> {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
    }
    
    searchMealById(id: number): Promise<ServerResponse> {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    }

    searchMealRandomly(): Promise<ServerResponse> {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
    }
}