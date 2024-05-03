// import { Footer } from '@/components';
// import { login } from '@/services/ant-design-pro/api';
// import { getFakeCaptcha } from '@/services/ant-design-pro/login';
import {
  AlipayCircleOutlined,
  LockOutlined,
  MobileOutlined,
  TaobaoCircleOutlined,
  UserOutlined,
} from '@ant-design/icons'
import {
  LoginForm,
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
} from '@ant-design/pro-components'
// import { FormattedMessage, Helmet, SelectLang, useIntl, useModel } from '@umijs/max';
import { Alert, message, Tabs } from 'antd'
import { createStyles } from 'antd-style'
import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

const useStyles = createStyles(({ token }) => {
  return {
    action: {
      marginLeft: '8px',
      color: 'rgba(0, 0, 0, 0.2)',
      fontSize: '24px',
      verticalAlign: 'middle',
      cursor: 'pointer',
      transition: 'color 0.3s',
      '&:hover': {
        color: token.colorPrimaryActive,
      },
    },
    // lang: {
    //   width: 42,
    //   height: 42,
    //   lineHeight: '42px',
    //   position: 'fixed',
    //   right: 16,
    //   borderRadius: token.borderRadius,
    //   ':hover': {
    //     backgroundColor: token.colorBgTextHover,
    //   },
    // },
    container1: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      width: '100vw',
      overflow: 'auto',
      backgroundImage:
        "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
      backgroundSize: '100% 100%',
    },
  }
})

// const ActionIcons = () => {
//   const { styles } = useStyles()

//   return (
//     <>
//       <AlipayCircleOutlined
//         key='AlipayCircleOutlined'
//         className={styles.action}
//       />
//       <TaobaoCircleOutlined
//         key='TaobaoCircleOutlined'
//         className={styles.action}
//       />
//       <WeiboCircleOutlined
//         key='WeiboCircleOutlined'
//         className={styles.action}
//       />
//     </>
//   )
// }

// const Lang = () => {
//   const { styles } = useStyles();

//   return (
//     <div className={styles.lang} data-lang>
//       {SelectLang && <SelectLang />}
//     </div>
//   );
// };

const LoginMessage: React.FC<{
  content: string
}> = ({ content }) => {
  return (
    <Alert
      style={{
        marginBottom: 24,
      }}
      message={content}
      type='error'
      showIcon
    />
  )
}

const Login: React.FC = () => {
  const { styles } = useStyles()
  const [type, setType] = useState<string>('account')
  // const navigate = useNavigate()
  const status = null;

  const loginType = 'account'
  return (
    <div className={styles.container1}>
      <div
        style={{
          flex: '1',
          padding: '32px 0',
        }}
      >
        <LoginForm
          contentStyle={{
            minWidth: 280,
            maxWidth: '75vw',
          }}
          logo={<img alt='logo' src='/logo.svg' />}
          title='田园科技'
          subTitle='聚焦支付'
          initialValues={{
            autoLogin: true,
          }}
          // actions={['其他登录方式 :', <ActionIcons key='icons' />]}
          onFinish={async (values) => {
            navigate('/admin')
            message.success('登录成功！')
          }}
        >
          {/* <Tabs
            activeKey={type}
            onChange={setType}
            centered
            items={[
              {
                key: 'account',
                label: '账户密码登录',
              },
              {
                key: 'mobile',
                label: '手机号登录',
              },
            ]}
          /> */}

          {status === 'error' && loginType === 'account' && (
            <LoginMessage content='账户或密码错误(admin/ant.design)' />
          )}
          {type === 'account' && (
            <>
              <ProFormText
                name='username'
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined />,
                }}
                placeholder='用户名: admin or user'
                rules={[
                  {
                    required: true,
                    message: '请输入用户名!',
                  },
                ]}
              />
              <ProFormText.Password
                name='password'
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined />,
                }}
                placeholder='密码：123456'
                rules={[
                  {
                    required: true,
                    message: '请输入密码！',
                  },
                ]}
              />
            </>
          )}

          {status === 'error' && loginType === 'mobile' && (
            <LoginMessage content='验证码错误' />
          )}
          {type === 'mobile' && (
            <>
              <ProFormText
                fieldProps={{
                  size: 'large',
                  prefix: <MobileOutlined />,
                }}
                name='mobile'
                placeholder='手机号'
                rules={[
                  {
                    required: true,
                    message: '请输入手机号！',
                  },
                  {
                    pattern: /^1\d{10}$/,
                    message: '手机号格式错误！',
                  },
                ]}
              />
              <ProFormCaptcha
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined />,
                }}
                captchaProps={{
                  size: 'large',
                }}
                placeholder='请输入验证码'
                captchaTextRender={(timing, count) => {
                  if (timing) {
                    return `'获取验证码'` + count
                  }
                  return '获取验证码'
                }}
                name='captcha'
                rules={[
                  {
                    required: true,
                    message: '请输入验证码！',
                  },
                ]}
                onGetCaptcha={async (phone) => {
                  message.success('获取验证码成功！验证码为：1234')
                }}
              />
            </>
          )}
          <div
            style={{
              marginBottom: 24,
            }}
          >
            <ProFormCheckbox noStyle name='autoLogin'>
              自动登录
            </ProFormCheckbox>
            <a
              style={{
                float: 'right',
              }}
            >
              忘记密码 ?
            </a>
          </div>
        </LoginForm>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Login
