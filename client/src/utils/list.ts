import axios from "axios"
import ServerResponse from "../interfaces/server_response"
import Search from "./search"

export default class List {
    listAllCategories(): Promise<ServerResponse> {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`)
    }

    listAllAreas(): Promise<ServerResponse> {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    }

    listAllIngredients(): Promise<ServerResponse> {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    }

    async listAllMeals(): Promise<ServerResponse[]> {
        const alphabet = "abcdefghijklmnopqrstuvwxyz"
        const search = new Search();
        let names: ServerResponse[] = [];
        for (let letter of alphabet) {
            let response = await search.searchMealsByFirstLetter(letter)
            names.push(response)
        }
        return names
    }
}