import React, { useState } from 'react'
import { Card, Button, Input, Table, Space, Modal, message } from 'antd'
import { PlusOutlined, SearchOutlined } from '@ant-design/icons'
import { Form } from 'antd'
import MyUpload from '../../../components/MyUpload'

const MedicineCategories: React.FC = () => {
  const [isShow, setIsShow] = useState(false)

  return (
    <div>
      <Card
        title='药品分类'
        extra={
          <>
            <Button
              type='primary'
              icon={<PlusOutlined />}
              onClick={() => {
                setIsShow(true)
              }}
            ></Button>
          </>
        }
      >
        <Space direction='vertical' style={{ width: '100%' }}>
          <Form
            layout='inline'
            onFinish={(v) => {
              console.log(v)
              message.success('搜索成功')
            }}
          >
            <Form.Item label='名字' name='name'>
              <Input placeholder='请输入分类名字' />
            </Form.Item>
            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                icon={<SearchOutlined />}
              ></Button>
            </Form.Item>
          </Form>
          <Table
            columns={[
              {
                title: '序号',
                width: 80,
                align: 'center',
              },
              {
                title: '名字',
              },
              {
                title: '图片',
                width: 120,
              },
              {
                title: '序号',
                width: 80,
              },
            ]}
          ></Table>
        </Space>
      </Card>
      <Modal
        title='编辑'
        open={isShow}
        onCancel={() => setIsShow(false)}
        maskClosable={false}
        destroyOnClose={true}
        onOk={() => {
          message.success('编辑成功')
        }}
      >
        <Form preserve={false}>
          <Form.Item label='名字'>
            <Input placeholder='请输入名字'></Input>
          </Form.Item>
          <Form.Item label='图片'>
            <MyUpload></MyUpload>
          </Form.Item>
          <Form.Item label='简介'>
            <Input.TextArea placeholder='请输入简介'></Input.TextArea>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default MedicineCategories
