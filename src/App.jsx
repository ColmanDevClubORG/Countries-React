import "../src/assets/css/common.css";
import "../src/assets/css/details.css";
import "../src/assets/css/main.css";
import "../src/assets/scss/common.scss";
import Home from "./pages/Home";
import CardDetails from "./pages/cardDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
          <Routes>
            {/* Define the homepage route */}
            <Route path="/" element={<Home />} />
    
            {/* Define the route for page.jsx */}
            <Route path="/details/:countryName" element={<CardDetails />} />
          </Routes>
        </Router>
      );
}

export default App;
