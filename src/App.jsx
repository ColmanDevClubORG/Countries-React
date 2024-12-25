import "../src/assets/css/common.css";
import "../src/assets/css/details.css";
import "../src/assets/css/main.css";
import "../src/assets/scss/common.scss";
import Home from "./Home.jsx";
import {useState} from "react";


function App() {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme) {
            document.body.classList.toggle("dark-theme", savedTheme === "dark");
            return savedTheme;
        }

        return "light";
    });

    const toggleTheme = () => {
        const isDark = theme === "dark";
        const newTheme = isDark ? "light" : "dark";
        setTheme(newTheme);

        document.body.classList.toggle("dark-theme", newTheme === "dark");
        localStorage.setItem("theme", newTheme);
    };

    return (
        <div>
            <Home theme={theme} toggleTheme={toggleTheme}/>
        </div>
    );
}

export default App;
