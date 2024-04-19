import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const AdminView: React.FC = () => {
  return (
    <div>
      {/* Add your admin view content here */}
      <h1>AdminView</h1>
      <nav>
        <Link to='dashboard'>Dashboard</Link> |<Link to='order'>Order</Link>
      </nav>
      <Outlet></Outlet>
    </div>
  )
}

export default AdminView
