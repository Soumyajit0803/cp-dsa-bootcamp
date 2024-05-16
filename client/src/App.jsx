import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "../src/pages/Home/Home.jsx"
import Contest from "../src/pages/Contest"
import Leaderboard from "../src/pages/Leaderboard"
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/contest-rankings" element = {<Contest />} />
        <Route path="/Leaderboard" element = {<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
