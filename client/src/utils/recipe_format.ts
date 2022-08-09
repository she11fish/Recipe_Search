interface meals {
    [index: string]: any
}
interface data {
    meals: Array<meals> | null
}

export default class Recipe {
    data: data
    constructor(data: data) {
        this.data = data
    }

    change_recipe_data(data: data): void {
        this.data = data
    }

    valid_data(): Boolean {
        const data = this.data
        const isObject = typeof data === 'object' && !Array.isArray(data) && data !== null
        return !(!isObject || !Object.keys(data).length) 
    }
    getName(): string | undefined  {
        const data = this.data
        if (!this.valid_data()) return
        if ("meals" in data && data.meals && "strMeal" in data.meals[0] && data.meals[0].strMeal) 
            return data.meals[0].strMeal
        return
    }

    getCategory(): string | undefined {
        const data = this.data
        if (!this.valid_data()) return
        if ("meals" in data && data.meals && "strCategory" in data.meals[0] && data.meals[0].strCategory) 
            return data.meals[0].strCategory
        return
    }

    getArea(): string | undefined {
        const data = this.data
        if (!this.valid_data()) return
        if ("meals" in data && data.meals && "strArea" in data.meals[0] && data.meals[0].strArea) 
            return data.meals[0].strArea
        return
    }

    getIngredients(): Array<string> | undefined {
        const data = this.data
        const result = []
        if (!this.valid_data()) return
        if ("meals" in data && data.meals) {
                let i = 0 
                while (`strIngredient${i+1}` in data.meals[0] && data.meals[0][`strIngredient${i+1}`]) {
                    result.push(data.meals[0][`strIngredient${i+1}`])
                    i++
                }
                return result
            }
        return
    }

    getDirections(): Array<string> | undefined {
        const data = this.data
        const result = []
        if (!this.valid_data()) return
        if ("meals" in data && data.meals) {
                let i = 0 
                while (`strMeasure${i+1}` in data.meals[0] && data.meals[0][`strMeasure${i+1}`]) {
                    result.push(data.meals[0][`strMeasure${i+1}`])
                    i++
                }
                return result
            }
        return
    }

    getImage(): string | undefined {
        const data = this.data
        if (!this.valid_data()) return
        if ("meals" in data && data.meals && "strMealThumb" in data.meals[0] && data.meals[0].strMealThumb) 
            return data.meals[0].strMealThumb
        return
    }

    getSource(): string | undefined {
        const data = this.data
        if (!this.valid_data()) return
        if ("meals" in data && data.meals && "strSource" in data.meals[0] && data.meals[0].strSource) 
            return data.meals[0].strSource
        return
    }
    
    getTutorial(): string | undefined {
        const data = this.data
        if (!this.valid_data()) return
        if ("meals" in data && data.meals && "strYoutube" in data.meals[0] && data.meals[0].strYoutube) 
            return data.meals[0].strYoutube
        return
    }
}