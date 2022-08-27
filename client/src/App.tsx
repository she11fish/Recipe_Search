import { BrowserRouter, Routes, Route } from "react-router-dom";
import Filter from './pages/Filter';
import Home from './pages/Home';
import Search from './pages/Search';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:name" element={<Search />} />  
          <Route path="/area/:area" element={<Filter />} />
          <Route path="/category/:category" element={<Filter />} />
          <Route path="/ingredient/:ingredient" element={<Filter />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
