import React from "react";
import "fontsource-roboto";
import "./App.css";
import MiniDrawer from "./components/MiniDrawer.jsx";
import StartPage from "./pages/StartPage.jsx";

function App() {
    return (
        <div className="App">
            <MiniDrawer></MiniDrawer>
            <StartPage></StartPage>
        </div>
    );
}

export default App;
