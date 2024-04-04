

import './App.css'

import { BrowserRouter, Routes,Route, NavLink } from 'react-router-dom';
import WalletView from './views/WalletView';
import AboutView from './views/AboutView';
import HomeView from './views/HomeView';
import TestView from './views/TestView';
import AdminView from './views/admin/AdminView';
import DashboardView from './views/admin/DashboardView';
import OrderView from './views/admin/OrderView';



function App() {


  return (
    <>


    <BrowserRouter>
    <nav>
      <NavLink to="/home">Home</NavLink> |
      <NavLink to="/about">About</NavLink> |
      <NavLink to="/wallet">Wallet</NavLink> |
      <NavLink to="/test/abc1">Test1</NavLink> |
      <NavLink to="/test/abc2">Test2</NavLink> |
      <NavLink to="/admin">Admin</NavLink>
    </nav>
      <Routes>
          <Route path="/home" element={<HomeView></HomeView>}></Route>
          <Route path="/about" element={<AboutView></AboutView>}></Route>
          <Route path="/wallet" element={<WalletView></WalletView>}></Route>
          <Route path="/test/:id" element={<TestView></TestView>}></Route>
          <Route path="/admin" element={<AdminView></AdminView>}>
            {/* 子路由 */}
            <Route path="" element={<DashboardView></DashboardView>}></Route>
            <Route path="dashboard" element={<DashboardView></DashboardView>}></Route>
            <Route path="order" element={<OrderView></OrderView>}></Route>
          </Route>
        </Routes>

    </BrowserRouter>
    </>
  )
}


export default App
