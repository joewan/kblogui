

import './App.css'

import { BrowserRouter, Routes,Route, NavLink } from 'react-router-dom';
import WalletView from './views/WalletView';
import AboutView from './views/AboutView';
import HomeView from './views/HomeView';
import TestView from './views/TestView';



function App() {


  return (
    <>
    <BrowserRouter>
    <nav>
      <NavLink to="/home">Home</NavLink> |
      <NavLink to="/about">About</NavLink> |
      <NavLink to="/wallet">Wallet</NavLink> |
      <NavLink to="/test">Test</NavLink>
    </nav>
      <Routes>
        <Route path="/home" element={<HomeView></HomeView>}></Route>
        <Route path="/about" element={<AboutView></AboutView>}></Route>
        <Route path="/wallet" element={<WalletView></WalletView>}></Route>
        <Route path="/test" element={<TestView></TestView>}></Route>
      </Routes>
    </BrowserRouter>

    </>
  )
}


export default App
