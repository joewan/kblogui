import { useEffect } from 'react'

function GlobalInit() {
  useEffect(() => {
    // 在这里进行全局的初始化操作
    console.log('GlobalInit')
  }, []) // 注意这个空数组，它表示这个useEffect只会在第一次渲染后执行
}

export default GlobalInit
