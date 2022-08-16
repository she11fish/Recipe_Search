interface Meals {
    [index: string]: any
}
export default interface Data {
    meals: Array<Meals> | null;
}