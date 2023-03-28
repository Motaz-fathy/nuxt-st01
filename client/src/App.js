import { Login } from "./pages/Login";
import {  BrowserRouter as Router,  Routes,  Route } from 'react-router-dom';

import { Dashbord } from "./pages/Dashbord";
import { Products } from "./pages/Products";
function App() {
  return (
    <div>
      
     <Router>
      <Routes>
        <Route path="/" exact element={<Login />}/>
        <Route path="/dashbord" exact element={<Dashbord />}/>
        <Route path="/todos" exact element={<Products />}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
