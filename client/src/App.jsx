import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./Routes";
import './App.css'


const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <AllRoutes />
            {/* <Footer /> */}
        </BrowserRouter>
    );
};

export default App;
