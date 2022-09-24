import { Recipe, Search, List, Filter } from "../src/utils/tools"

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
        expect(recipe.getDirecitons()).toStrictEqual("Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.")
        
        response = await search.searchMealByName('Seafood')
        recipe.change_recipe_data(response.data)
        expect(recipe.getDirecitons()).toStrictEqual("Boil the kettle. Empty the mussels into a colander and run under cold water. Throw away any with broken shells. Pick through the shells, tapping each one on the side of the sink \u2013 they should be closed or should slowly close when tapped \u2013 if they stay open, throw them away. If any of the shells still have barnacles or stringy beards attached, pull them off with a cutlery knife and rinse the shells well. Keep in the colander, covered with a cold, damp cloth, until you\u2019re ready to cook. Peel the prawn shells on the body section only \u2013 leave the heads and tails intact. Score down the backs and pull out any gritty entrails. Chill until you\u2019re ready to cook.\r\nPut the saffron in a small cup, cover with 50ml kettle-hot water and set aside for 10 mins. If using vermicelli, put in a bowl and crush to little pieces (about 1cm long) with your hands.\r\nHeat the oil in a large frying pan with at least a 3cm lip, or a 40cm paella pan. Add the onion and stir around the pan for 5 mins until soft. Add the garlic and cook for 1 min more, then tip in the vermicelli and cook for 5 mins, stirring from time to time, until the vermicelli is toasted brown. Stir in the paprika.\r\nKeeping the heat moderate, stir through the monkfish, squid and saffron with its water, seasoning well. Spread the ingredients out in an even layer, then pour over the hot stock and scatter the tomatoes on top. Bring to a simmer, then cover the whole dish with a tight-fitting lid (or foil). Turn the heat to medium and cook for 6 mins.\r\nUncover and stir to incorporate the dry top layer of pasta. Push the mussels into the pasta so the hinges are buried in the bottom of the dish, and they stand straight up. Arrange the prawns on top, cover tightly and cook for another 6 mins or until the mussels are open, the prawns are pink and the pasta is cooked through. Leave to simmer for another 2-3 mins to cook off most of the remaining liquid (leave a little in the pan to prevent the pasta from sticking together). Allow to sit for 2-3 mins, then squeeze over the lemon juice and arrange the wedges on top. Scatter with parsley before serving.")
        
        response = await search.searchMealByName('sadfadsfa')
        recipe.change_recipe_data(response.data)
        expect(recipe.getDirecitons()).toStrictEqual(undefined)

        let res: any = null
        recipe.change_recipe_data(res)
        expect(recipe.getDirecitons()).toStrictEqual(undefined)

        res = 1
        recipe.change_recipe_data(res)
        expect(recipe.getDirecitons()).toStrictEqual(undefined)
        
        res = []
        recipe.change_recipe_data(res)
        expect(recipe.getDirecitons()).toStrictEqual(undefined)
    })

    test("Gets measurements from data", async () => {
        const search = new Search()
        
        let response = await search.searchMealByName('Arrabiata')
        const recipe = new Recipe(response.data)
        expect(recipe.getMesurments()).toStrictEqual(["1 pound","1\/4 cup","3 cloves","1 tin ","1\/2 teaspoon","1\/2 teaspoon","6 leaves","spinkling"])
        
        response = await search.searchMealByName('Seafood')
        recipe.change_recipe_data(response.data)
        expect(recipe.getMesurments()).toStrictEqual(["400g","8","2 pinches","350g","5 tblsp ","1 large","3 cloves","2 tbs","1 tail","4","650ml","2 large","Juice of 1","Topping"])
        
        response = await search.searchMealByName('sadfadsfa')
        recipe.change_recipe_data(response.data)
        expect(recipe.getMesurments()).toStrictEqual(undefined)

        let res: any = null
        recipe.change_recipe_data(res)
        expect(recipe.getMesurments()).toStrictEqual(undefined)

        res = 1
        recipe.change_recipe_data(res)
        expect(recipe.getMesurments()).toStrictEqual(undefined)
        
        res = []
        recipe.change_recipe_data(res)
        expect(recipe.getMesurments()).toStrictEqual(undefined)
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