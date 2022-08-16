import { useState, useEffect } from 'react'
import List from "../../../utils/list"
import Recipe from "../../../utils/recipe"
import AreaMenu from "./area_menu"
import ArrowRight from "../../../assets/arrow_right"
import ArrowDown  from "../../../assets/arrow_down"
import './area.css'
import ServerResponse from "../../../interfaces/server_response"

interface Area {
    id: number,
    name: string
}

let availableAreas: Array<Area> = []

export const Area: React.FC = () => {

    const [buttonClicked, setButtonClicked] = useState(false)
    const [areaClicked, setAreaClicked] = useState(false)

    useEffect(() => {   
        (async () => {
            const list = new List()
            const response = await list.listAllAreas()
            if (!response) {
                console.log('An Error Occured while fetching data')
                return
            }  
            const data = response.data
            const recipe = new Recipe(data)
            const areas = recipe.getAreas()
            if (areas) {
                let i = 0
                for (const area of areas) { 
                    availableAreas.push({ id: i+1, name: area })
                    i++
                }
            }
        })()     
    }, [])

    function handle_event() {
        setAreaClicked(!areaClicked)
    }

    return (
        <>
            <button className="filter lg-box animation clear-margin" onClick={() => { setButtonClicked(!buttonClicked); setAreaClicked(false)}}>Filter 
            { buttonClicked ? <ArrowDown /> : <ArrowRight /> }
            </button>
            { buttonClicked && <AreaMenu right = {<ArrowRight />} event_handler = {handle_event}/>}
            { areaClicked && availableAreas.map(area => <button key={area.id} className='filter border-bottom dropdown-tranformation lg-box clear-margin' onClick={() => setButtonClicked(!buttonClicked)}>{area.name}</button>) }
        </>
    )
}