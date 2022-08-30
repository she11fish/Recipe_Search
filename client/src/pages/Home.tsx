import { useState } from 'react';
import SearchBar from '../components/Home/Header/Search Bar/search_bar'
import Main from '../components/Home/Main/main';

export default function Home() {
    const [isLoaded, setIsLoaded] = useState(false)
    return (
        <>
            { !isLoaded && <h1 style={{color: "#725752"}}>Loading...</h1>}
            <SearchBar setIsLoaded={setIsLoaded}/> 
            { isLoaded && <Main />}
        </>
    )
}