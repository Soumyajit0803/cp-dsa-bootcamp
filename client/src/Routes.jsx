import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/home/Home";
import Leaderboard from "./pages/leaderboard/Leaderboard";
import Contest from "./pages/contest/Contest";
import Resources from "./pages/resources/Resources";

const AllRoutes = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/leaderboard" element={<Leaderboard />} />
            <Route exact path="/contest" element={<Contest />} />
            <Route exact path="/resources" element={<Resources />} />
        </Routes>
    );
};

export default AllRoutes;
