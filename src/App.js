import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "fontsource-roboto";
import "./App.css";

// Components
import MiniDrawer from "./components/MiniDrawer.jsx";

// Pages
import Home from "./pages/Home.jsx";
import Events from "./pages/Events";
import BookOfShadows from "./pages/BookOfShadows";
import Messages from "./pages/Messages";
import Photos from "./pages/Photos";
import Forum from "./pages/Forum";
import Login from "./pages/Login";
import Witches from "./pages/Witches.jsx";

function App() {
    return (
        <div className="App">
            <Router>
                <MiniDrawer></MiniDrawer>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/witches" component={Witches}></Route>
                    <Route path="/events" component={Events}></Route>
                    <Route path="/messages" component={Messages}></Route>
                    <Route path="/photos" component={Photos}></Route>
                    <Route
                        path="/bookofshadows"
                        component={BookOfShadows}></Route>
                    <Route path="/forum" component={Forum}></Route>
                    <Route path="/login" component={Login}></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
