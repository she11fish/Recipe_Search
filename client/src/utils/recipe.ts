import Data from "../interfaces/data" 

export default class Recipe {
    data: Data
    constructor(data: Data) {
        this.data = data
    }

    change_recipe_data(data: Data): void {
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

    getNames(): Array<string> | undefined  {
        const data = this.data
        const result = []
        if (!this.valid_data()) return
        if ("meals" in data && data.meals) {
                let i = 0
                while (i < data.meals.length && `strMeal` in data.meals[i] && data.meals[i][`strMeal`]) {
                    result.push(data.meals[i][`strMeal`])
                    i++
                }
                return result
            }
        return
    }

    getCategory(): string | undefined {
        const data = this.data
        if (!this.valid_data()) return
        if ("meals" in data && data.meals && "strCategory" in data.meals[0] && data.meals[0].strCategory) 
            return data.meals[0].strCategory
        return
    }
    
    getCategories(): Array<string> | undefined  {
        const data = this.data
        if (!this.valid_data()) return
        if ("meals" in data && data.meals) {
            const result: Array<string> = []
            for (let meal of data.meals) {
                if ("strCategory" in meal && meal.strCategory) result.push(meal.strCategory)
            }
            return result
        }
            
        return
    }

    getArea(): string | undefined {
        const data = this.data
        if (!this.valid_data()) return
        if ("meals" in data && data.meals && "strArea" in data.meals[0] && data.meals[0].strArea) 
            return data.meals[0].strArea
        return
    }

    getAreas(): Array<string> | undefined  {
        const data = this.data
        if (!this.valid_data()) return
        if ("meals" in data && data.meals) {
            const result: Array<string> = []
            for (let meal of data.meals) {
                if ("strArea" in meal && meal.strArea) result.push(meal.strArea)
            }
            return result
        }
            
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
                let k = 0
                while (k < data.meals.length && `strIngredient` in data.meals[k] && data.meals[k][`strIngredient`]) {
                    result.push(data.meals[k][`strIngredient`])
                    k++
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