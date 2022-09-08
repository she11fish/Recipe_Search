import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Filter from "../components/Filter/filter";
import NotFound from "../components/NotFound/not_found";
import { getAllNamesFromFilter } from "../utils/utils";

export default function Filters() {
    const { area, category, ingredient } = useParams()
    const [names, setNames] = useState<string[] | null>(null)
    useEffect(() => {
        if (area) { 
            getAllNamesFromFilter(area, "area")
                .then(names => {
                    if (names?.length) setNames(names)
                })
                .catch(err => {
                    console.log(`An error occured while fetching`)
                })
        }
        if (category) {
            getAllNamesFromFilter(category, "category")
                .then(names => {
                    if (names?.length) setNames(names)
                })
                .catch(err => {
                    console.log(`An error occured while fetching`)
                })
        }

        if (ingredient) {
            getAllNamesFromFilter(ingredient, "ingredient")
                .then(names => {
                    if (names?.length) setNames(names)
                })
                .catch(err => {
                    console.log(`An error occured while fetching`)
                })
        }
    }, [])
    return (
        <>
            { names !== null && names.length && <Filter names={names} />}
            {names !== null && !names.length && <NotFound />}
        </>
    )
}