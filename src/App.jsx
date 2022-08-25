import Home from "./Pages/Home";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Products from "./components/Products";
import Login from "./Pages/Login";
import { useSelector } from "react-redux";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element= {<Login />}></Route>
        {/* <Route path="/products" element= {<Products />}></Route> */}
      </Routes>
    </Router>
  );
};
export default App;
 