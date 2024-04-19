import { Navigate } from 'react-router-dom'

function TestView1() {
  // 获取参数
  return <Navigate to='/about' state='test' />
}

export default TestView1
