import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FilterPage from "../components/Filter/FilterPage/filter_page";
import { getAllNamesFromFilter } from "../utils/utils";

export default function Filters() {
    const { area, category, ingredient } = useParams()
    const [names, setNames] = useState<string[]>([])
    useEffect(() => {
        (async () => {
            if (area) { 
                const names = await getAllNamesFromFilter(area, "area")
                if (names?.length) setNames(names)
            }
            if (category) {
                const names = await getAllNamesFromFilter(category, "category")
                if (names?.length) setNames(names)
                
            }

            if (ingredient) {
                const names = await getAllNamesFromFilter(ingredient, "ingredient")
                if (names?.length) setNames(names)
            }
        })()

    }, [])
    return (
        <>
            { names.length && <FilterPage names={names} /> }
        </>
    )
}