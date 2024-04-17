import 'antd/dist/reset.css';
import ReactDOM from 'react-dom/client'
import zhCN from 'antd/lib/locale/zh_CN'
import App from './App.tsx'
import './index.css'
import { ConfigProvider } from 'antd'
import { Fragment } from 'react/jsx-runtime'
import { HashRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Fragment>
    <Router>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
    </Router>
  </Fragment>
)
