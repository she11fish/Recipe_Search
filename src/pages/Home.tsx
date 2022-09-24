import { useState } from 'react';
import SearchBar from '../components/Home/Header/Search Bar/search_bar'
import Main from '../components/Home/Main/main';
import Loading from '../components/Loading/loading';

export default function Home() {
    const [isLoaded, setIsLoaded] = useState(false)
    return (
        <>
            { !isLoaded && <Loading />}
            <SearchBar setIsLoaded={setIsLoaded}/> 
            { isLoaded && <Main />}
        </>
    )
}