import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BookOutlined,
  UserOutlined,
  DashboardOutlined,
  GoldOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import doctor from '../assets/react.svg';
import { useNavigate } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const MyLayout: React.FC = ({children}: any) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();

  return (
    <Layout style={{height: '100vh', width:'100vw'}}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='demo-logo-vertical'>
            <img src={doctor} alt="田园科技" style={{
                display:'block',
                width:'50%',
                margin: '20px auto'
                }}/>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick={({ key }) => {
            navigate(key);
          }}
          items={[
            {
              key: '/admin/dashboard',
              icon: <DashboardOutlined />,
              label: '看板',
            },
            {
              key: '/admin/medicines',
              icon: <BookOutlined />,
              label: '医药管理',
              children: [
                {label: '医药列表', key: 'a-1'},
                {label: '医药分类', key: 'a-2'},
              ]
            },
            {
              key: '/admin/books',
              icon: <BookOutlined />,
              label: '书籍管理',
              children: [
                {label: '书籍列表', key: '2-1'},
                {label: '书籍分类', key: '2-2'},
              ]
            },
            {
              key: '/admin/users',
              icon: <UserOutlined />,
              label: '用户管理',
              children: [
                {label: '用户列表', key: '3-1'},
                {label: '用户分类', key: '3-2'},
              ]
            },
            {
                key: '/admin/airdrops',
                icon: <GoldOutlined />,
                label: '空投信息',
                children: [
                  {label: '空投列表', key: '4-1'},
                  {label: '空投分类', key: '4-2'},
                ]
              },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
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
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MyLayout;