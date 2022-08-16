import { SyntheticEvent } from 'react'
import Search from '../../utils/search'
import SearchIcon from "../../assets/search_icon"
import "./search_bar.css"

interface event {
    key: string,
    type: string
}

export const SearchBar : React.FC =  () => {
    function handle_event(event: event | SyntheticEvent): void {
        if ("key" in event && event.key == "Enter") {}
        if (event.type === "click") {}
            
    }

    return (
        <>
            <div id="search_bar">
                <input id="search_text_box" type="text" placeholder='Enter the recipe name' onKeyPress={handle_event}/>
                <button id="search_button" onClick={handle_event}>
                    <SearchIcon />
                </button>
            </div>
            
        </>
    )
}