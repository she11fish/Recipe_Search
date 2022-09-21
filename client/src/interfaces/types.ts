export interface AreaType {
    id: number,
    name: string
}

export type CategoryType = string[]; 

interface Meals {
    [index: string]: any
}

export interface Data {
    meals: Array<Meals> | null;
}

export type DirectionType = string[] 

export interface Event {
    key: string,
    type: string
}

export type IngredientType = string[]

export interface NeededData {
    name: string | undefined
    source: string | undefined
    tutorial: string | undefined
    img: string | undefined
    category: string | undefined
    area: string | undefined
    ingredients: string[] | undefined
    directions: string | undefined
}

export interface ServerResponse {
    data: Data
}