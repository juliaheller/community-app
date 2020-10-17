import React from "react";
import "fontsource-roboto";
import "./App.css";
import MiniDrawer from "./components/MiniDrawer.jsx";
import StartPage from "./pages/StartPage.jsx";
import UserPage from "./pages/UserPage.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EventsPage from "./pages/EventsPage";

function App() {
    return (
        <div className="App">
            <Router>
                <MiniDrawer></MiniDrawer>
                <Switch>
                    <Route exact path="/" component={StartPage}></Route>
                    <Route path="/schwestern" component={UserPage}></Route>
                    <Route path="/events" component={EventsPage}></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
