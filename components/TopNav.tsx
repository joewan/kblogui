import React from 'react'
import '../styles/TopNav.scss'

class TopNav extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='logo'></div>
        <div className='nav'>
          <nav>
            <ul>
              <li>
                <button>成为房东</button>
              </li>
              <li>
                <button>帮助</button>
              </li>
              <li>
                <button>注册</button>
              </li>
              <li>
                <button>登录</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default TopNav
