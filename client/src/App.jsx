import React from "react";
import Header from "./components/header/Header";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./Routes";
import './App.css'


const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <AllRoutes />
        </BrowserRouter>
    );
};

export default App;
