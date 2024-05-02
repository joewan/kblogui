import 'antd/dist/reset.css'
import ReactDOM from 'react-dom/client'
import zhCN from 'antd/lib/locale/zh_CN'
import App from './App.tsx'
import './index.css'
import { ConfigProvider } from 'antd'
import { Fragment } from 'react/jsx-runtime'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/user/login'
import PokemonHome from './pages/pokemon/PokemonHome.tsx'
import PokemonDetail from './pages/pokemon/PokemonDetail.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Fragment>
    <Router>
      <ConfigProvider locale={zhCN}>
        <Routes>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/admin/*' element={<App></App>}></Route>
          <Route path='/pokemon/home' element={<PokemonHome></PokemonHome>}></Route>
          <Route path='/pokemon/detail' element={<PokemonDetail></PokemonDetail>}></Route>
        </Routes>
      </ConfigProvider>
    </Router>
  </Fragment>,
)
