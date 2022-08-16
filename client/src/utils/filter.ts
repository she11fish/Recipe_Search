import axios from "axios"

export default class Filter {
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