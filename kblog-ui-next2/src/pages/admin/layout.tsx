import React, { useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BookOutlined,
  UserOutlined,
  DashboardOutlined,
  GoldOutlined,
} from '@ant-design/icons'
import {
  Layout,
  Menu,
  Button,
  theme,
  Dropdown,
  message,
  Breadcrumb,
} from 'antd'
import logo from '../assets/bome.svg'
// import { useNavigate } from 'react-router-dom'

const { Header, Sider, Content } = Layout

const MyLayout1: React.FC<{ children: React.ReactNode }> = ({
  children,
}: any) => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  // const navigate = useNavigate()

  return (
    <Layout style={{ height: '100vh', width: '100vw' }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ backgroundColor: 'white' }}
      >
        <div className='demo-logo-vertical'>
          <img
            src={logo}
            alt='田园科技'
            style={{
              display: 'block',
              width: '50%',
              margin: '20px auto',
            }}
          />
        </div>
        <Menu
          theme='light'
          mode='inline'
          defaultSelectedKeys={['1']}
          onClick={({ key }) => {
            // navigate(key)
          }}
          items={[
            {
              key: '/admin/dashboard',
              icon: <DashboardOutlined />,
              label: '看板',
            },
            {
                key: '/admin/test',
                icon: <DashboardOutlined />,
                label: '测试',
              },
            {
              key: '/admin/medicines',
              icon: <BookOutlined />,
              label: '医药管理',
              children: [
                { label: '医药列表', key: '/admin/medicines/list' },
                { label: '医药分类', key: '/admin/medicines/categories' },
              ],
            },
            {
              key: '/admin/articles',
              icon: <BookOutlined />,
              label: '文章管理',
              children: [
                { label: '文章列表', key: '/admin/articles/list' },
                { label: '文章分类', key: '/admin/artilces/categories' },
              ],
            },
            {
              key: '/admin/books',
              icon: <BookOutlined />,
              label: '书籍管理',
              children: [
                { label: '书籍列表', key: '/admin/books/list' },
                { label: '书籍分类', key: '/admin/books/categories' },
              ],
            },
            {
              key: '/admin/users',
              icon: <UserOutlined />,
              label: '用户管理',
              children: [
                { label: '用户列表', key: '/admin/users/list' },
                { label: '用户分类', key: '/admin/users/categories' },
              ],
            },
            {
              key: '/admin/airdrops',
              icon: <GoldOutlined />,
              label: '空投信息',
              children: [
                { label: '空投列表', key: '/admin/airdrops/list' },
                { label: '空投分类', key: '/admin/airdrops/categories' },
              ],
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type='text'
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <span>
            <h1 className='tianyuan-admin-title'>田园科技</h1>
          </span>
          <Dropdown
            menu={{
              onClick: ({ key }) => {
                if (key == '/login') {
                  message.success('退出登录成功')
                  // navigate('/')
                } else if (key == '/admin/books/list') {
                  message.info('暂未开通')
                } else {
                  // navigate(key)
                }
              },
              items: [
                {
                  label: '个人中心',
                  key: '/admin/books/list',
                },
                {
                  label: '退出登录',
                  key: '/login',
                },
              ],
            }}
          >
            <img
              src={logo}
              style={{
                width: '30px',
                borderRadius: '50%',
                float: 'right',
                marginTop: '16px',
                marginRight: '20px',
              }}
            />
          </Dropdown>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {/* <Breadcrumb>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>医药管理</Breadcrumb.Item>
            <Breadcrumb.Item>医药分类</Breadcrumb.Item>
          </Breadcrumb> */}
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default MyLayout
