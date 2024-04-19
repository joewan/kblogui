import 'antd/dist/reset.css'
import ReactDOM from 'react-dom/client'
import zhCN from 'antd/lib/locale/zh_CN'
import App from './App.tsx'
import './index.css'
import { ConfigProvider } from 'antd'
import { Fragment } from 'react/jsx-runtime'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/user/login'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Fragment>
    <Router>
      <ConfigProvider locale={zhCN}>
        <Routes>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/admin/*' element={<App></App>}></Route>
        </Routes>
      </ConfigProvider>
    </Router>
  </Fragment>,
)
