import {BrowserRouter,Routes,Route,Link} from react-route-dom;
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>

    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Itemlist/>}>
    <Route path="/Itemdetails/:id" element={</Itemdetails}/>
  </Routes>
  </BrowserRouter>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
