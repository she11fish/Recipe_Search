import Recipe from "../src/utils/recipe"
import Search from "../src/utils/search"
import List from "../src/utils/list"
import Filter from "../src/utils/filter"

describe("Can get all required recipe data from api", () => {
    test("Gets name from data", async () => {
        const search = new Search()
        
        let response = await search.searchMealByName('Arrabiata')
        const recipe = new Recipe(response.data)
         expect(recipe.getName()).toStrictEqual('Spicy Arrabiata Penne')
        
        response = await search.searchMealByName('Seafood')
        recipe.change_recipe_data(response.data)
        expect(recipe.getName()).toStrictEqual('Seafood fideuà')
        
        response = await search.searchMealByName('sadfadsfa')
        recipe.change_recipe_data(response.data)
        expect(recipe.getName()).toStrictEqual(undefined)

        let res: any = null
        recipe.change_recipe_data(res)
        expect(recipe.getName()).toStrictEqual(undefined)

        res = 1
        recipe.change_recipe_data(res)
        expect(recipe.getName()).toStrictEqual(undefined)

        res = []
        recipe.change_recipe_data(res)
        expect(recipe.getName()).toStrictEqual(undefined)
    })


    test("Gets category from data", async () => {
        const search = new Search()
        
        let response = await search.searchMealByName('Arrabiata')
        const recipe = new Recipe(response.data)
         expect(recipe.getCategory()).toStrictEqual('Vegetarian')
        
        response = await search.searchMealByName('Seafood')
        recipe.change_recipe_data(response.data)
        expect(recipe.getCategory()).toStrictEqual('Seafood')
        
        response = await search.searchMealByName('sadfadsfa')
        recipe.change_recipe_data(response.data)
        expect(recipe.getCategory()).toStrictEqual(undefined)

        let res: any = null
        recipe.change_recipe_data(res)
        expect(recipe.getCategory()).toStrictEqual(undefined)

        res = 1
        recipe.change_recipe_data(res)
        expect(recipe.getCategory()).toStrictEqual(undefined)
        
        res = []
        recipe.change_recipe_data(res)
        expect(recipe.getCategory()).toStrictEqual(undefined)
    })

    test("Gets categories from data", async () => {
        const list = new List()
        
        let response = await list.listAllCategories()
        const recipe = new Recipe(response.data)
        expect(recipe.getCategories()).toStrictEqual(["Beef","Breakfast","Chicken","Dessert","Goat","Lamb","Miscellaneous","Pasta","Pork","Seafood","Side","Starter","Vegan","Vegetarian"])

        let res: any = null
        recipe.change_recipe_data(res)
        expect(recipe.getCategories()).toStrictEqual(undefined)

        res = 1
        recipe.change_recipe_data(res)
        expect(recipe.getCategories()).toStrictEqual(undefined)

        res = []
        recipe.change_recipe_data(res)
        expect(recipe.getCategories()).toStrictEqual(undefined)
    })

    test("Gets area from data", async () => {
        const search = new Search()
        
        let response = await search.searchMealByName('Arrabiata')
        const recipe = new Recipe(response.data)
         expect(recipe.getArea()).toStrictEqual('Italian')
        
        response = await search.searchMealByName('Seafood')
        recipe.change_recipe_data(response.data)
        expect(recipe.getArea()).toStrictEqual('Spanish')
        
        response = await search.searchMealByName('sadfadsfa')
        recipe.change_recipe_data(response.data)
        expect(recipe.getArea()).toStrictEqual(undefined)

        let res: any = null
        recipe.change_recipe_data(res)
        expect(recipe.getArea()).toStrictEqual(undefined)

        res = 1
        recipe.change_recipe_data(res)
        expect(recipe.getArea()).toStrictEqual(undefined)
        
        res = []
        recipe.change_recipe_data(res)
        expect(recipe.getArea()).toStrictEqual(undefined)
    })

    test("Gets areas from data", async () => {
        const list = new List()
        
        let response = await list.listAllAreas()
        const recipe = new Recipe(response.data)
        expect(recipe.getAreas()).toStrictEqual(["American","British","Canadian","Chinese","Croatian","Dutch","Egyptian","French","Greek","Indian","Irish","Italian","Jamaican","Japanese","Kenyan","Malaysian","Mexican","Moroccan","Polish","Portuguese","Russian","Spanish","Thai","Tunisian","Turkish","Unknown","Vietnamese"])

        let res: any = null
        recipe.change_recipe_data(res)
        expect(recipe.getAreas()).toStrictEqual(undefined)

        res = 1
        recipe.change_recipe_data(res)
        expect(recipe.getAreas()).toStrictEqual(undefined)

        res = []
        recipe.change_recipe_data(res)
        expect(recipe.getAreas()).toStrictEqual(undefined)
    })

    test("Gets ingredients from data", async () => {
        const search = new Search()
        
        let response = await search.searchMealByName('Arrabiata')
        const recipe = new Recipe(response.data)
         expect(recipe.getIngredients()).toStrictEqual(["penne rigate", "olive oil", "garlic", "chopped tomatoes", "red chile flakes", "italian seasoning", "basil", "Parmigiano-Reggiano"])
        
        response = await search.searchMealByName('Seafood')
        recipe.change_recipe_data(response.data)
        expect(recipe.getIngredients()).toStrictEqual(["Mussels","Prawns","Saffron","Vermicelli","Olive Oil","Onions","Garlic","Paprika","Monkfish","Baby Squid","Fish Stock","Tomatoes","Lemon","Parsley"])
        
        response = await search.searchMealByName('sadfadsfa')
        recipe.change_recipe_data(response.data)
        expect(recipe.getIngredients()).toStrictEqual(undefined)

        let res: any = null
        recipe.change_recipe_data(res)
        expect(recipe.getIngredients()).toStrictEqual(undefined)

        res = 1
        recipe.change_recipe_data(res)
        expect(recipe.getIngredients()).toStrictEqual(undefined)
        
        res = []
        recipe.change_recipe_data(res)
        expect(recipe.getIngredients()).toStrictEqual(undefined)
    })

    test("Gets directions from data", async () => {
        const search = new Search()
        
        let response = await search.searchMealByName('Arrabiata')
        const recipe = new Recipe(response.data)
        expect(recipe.getDirections()).toStrictEqual(["1 pound","1\/4 cup","3 cloves","1 tin ","1\/2 teaspoon","1\/2 teaspoon","6 leaves","spinkling"])
        
        response = await search.searchMealByName('Seafood')
        recipe.change_recipe_data(response.data)
        expect(recipe.getDirections()).toStrictEqual(["400g","8","2 pinches","350g","5 tblsp ","1 large","3 cloves","2 tbs","1 tail","4","650ml","2 large","Juice of 1","Topping"])
        
        response = await search.searchMealByName('sadfadsfa')
        recipe.change_recipe_data(response.data)
        expect(recipe.getDirections()).toStrictEqual(undefined)

        let res: any = null
        recipe.change_recipe_data(res)
        expect(recipe.getDirections()).toStrictEqual(undefined)

        res = 1
        recipe.change_recipe_data(res)
        expect(recipe.getDirections()).toStrictEqual(undefined)
        
        res = []
        recipe.change_recipe_data(res)
        expect(recipe.getDirections()).toStrictEqual(undefined)
    })

    test("Gets image link from data", async () => {
        const search = new Search()
        
        let response = await search.searchMealByName('Arrabiata')
        const recipe = new Recipe(response.data)
         expect(recipe.getImage()).toStrictEqual("https:\/\/www.themealdb.com\/images\/media\/meals\/ustsqw1468250014.jpg")
        
        response = await search.searchMealByName('Seafood')
        recipe.change_recipe_data(response.data)
        expect(recipe.getImage()).toStrictEqual("https:\/\/www.themealdb.com\/images\/media\/meals\/wqqvyq1511179730.jpg")
        
        response = await search.searchMealByName('sadfadsfa')
        recipe.change_recipe_data(response.data)
        expect(recipe.getImage()).toStrictEqual(undefined)

        let res: any = null
        recipe.change_recipe_data(res)
        expect(recipe.getImage()).toStrictEqual(undefined)

        res = 1
        recipe.change_recipe_data(res)
        expect(recipe.getImage()).toStrictEqual(undefined)
        
        res = []
        recipe.change_recipe_data(res)
        expect(recipe.getImage()).toStrictEqual(undefined)
    })

    test("Gets source link from data", async () => {
        const search = new Search()
        
        let response = await search.searchMealByName('Arrabiata')
        const recipe = new Recipe(response.data)
         expect(recipe.getSource()).toStrictEqual(undefined)
        
        response = await search.searchMealByName('Seafood')
        recipe.change_recipe_data(response.data)
        expect(recipe.getSource()).toStrictEqual("https:\/\/www.bbcgoodfood.com\/recipes\/seafood-fideua-paella")
        
        response = await search.searchMealByName('sadfadsfa')
        recipe.change_recipe_data(response.data)
        expect(recipe.getSource()).toStrictEqual(undefined)

        let res: any = null
        recipe.change_recipe_data(res)
        expect(recipe.getSource()).toStrictEqual(undefined)

        res = 1
        recipe.change_recipe_data(res)
        expect(recipe.getSource()).toStrictEqual(undefined)
        
        res = []
        recipe.change_recipe_data(res)
        expect(recipe.getSource()).toStrictEqual(undefined)
    })

    test("Gets tutorial link from data", async () => {
        const search = new Search()
        
        let response = await search.searchMealByName('Arrabiata')
        const recipe = new Recipe(response.data)
         expect(recipe.getTutorial()).toStrictEqual("https:\/\/www.youtube.com\/watch?v=1IszT_guI08")
        
        response = await search.searchMealByName('Seafood')
        recipe.change_recipe_data(response.data)
        expect(recipe.getTutorial()).toStrictEqual("https:\/\/www.youtube.com\/watch?v=itsFEc8W468")
        
        response = await search.searchMealByName('sadfadsfa')
        recipe.change_recipe_data(response.data)
        expect(recipe.getTutorial()).toStrictEqual(undefined)

        let res: any = null
        recipe.change_recipe_data(res)
        expect(recipe.getTutorial()).toStrictEqual(undefined)

        res = 1
        recipe.change_recipe_data(res)
        expect(recipe.getTutorial()).toStrictEqual(undefined)
        
        res = []
        recipe.change_recipe_data(res)
        expect(recipe.getTutorial()).toStrictEqual(undefined)
    })
    
})