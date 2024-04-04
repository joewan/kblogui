import "./App.css";

import { BrowserRouter} from "react-router-dom";

import { Fragment } from "react/jsx-runtime";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainView from "./components/MainView";
import GlobalInit from "./utils/GlobalInit";

function App() {
    GlobalInit();
    return (
        <Fragment>
            <BrowserRouter>
                <Header></Header>
                <MainView></MainView>
                <Footer></Footer>
            </BrowserRouter>
        </Fragment>
    );
}

export default App;
