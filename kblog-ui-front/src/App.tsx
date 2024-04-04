import "./App.css";

import { BrowserRouter, NavLink } from "react-router-dom";

import RouterConfig from "./routers/RouterConfig";
import { Fragment } from "react/jsx-runtime";

function App() {
    return (
        <Fragment>
            <BrowserRouter>
                <nav>
                    <NavLink to="/home">Home</NavLink> |
                    <NavLink to="/about">About</NavLink> |
                    <NavLink to={{pathname:"/about", hash:"#256", search:"a=18&n=b"}} state={{'g':'n'}}>About-Object</NavLink> |
                    <NavLink to="/wallet">Wallet</NavLink> |
                    <NavLink to="/test1">Test1</NavLink> |
                    <NavLink to="/test/abc2">Test2</NavLink> |
                    <NavLink to="/admin">Admin</NavLink>
                </nav>
                <RouterConfig></RouterConfig>
            </BrowserRouter>
        </Fragment>
    );
}

export default App;
