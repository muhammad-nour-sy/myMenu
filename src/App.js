import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";

function App() {
 
    return (
        <Router>
            <Routes>
                <Route path="/menus/:menuId" element={<Menu />} />
            </Routes>
        </Router>
    );
}

export default App;
