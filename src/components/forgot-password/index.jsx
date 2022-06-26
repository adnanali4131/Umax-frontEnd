import React from 'react'
import { Col, Row, Form, Input, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import LoginImg from '../../assets/login-logo.png'

import {
  Containerfluid,
  Container,
  Logo,
  Header,
} from './forgotPassword.styles'

const ForgetPassword = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }
  return (
    <div>
      <Header>
        <Row>
          <Col>
            <h2> Umax</h2>
          </Col>
        </Row>
      </Header>

      <Row justify="center">
        <Col
          xs={{ span: 22, order: 2 }}
          sm={22}
          md={18}
          lg={{ span: 12, order: 1 }}
          xl={12}
        >
          <Containerfluid>
            <Container>
              <div>
                <h1>Forgot your password?</h1>
                <p>
                  Enter your email and you will receive link where you can reset
                  the password
                </p>
              </div>

              <Form
                name="forgot_password"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
              >
                <Form.Item
                  size="large"
                  name="email"
                  type="text"
                  placeholder="Email"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Email!',
                    },
                  ]}
                >
                  <Input prefix={<UserOutlined />} placeholder="Email" />
                </Form.Item>

                <Form.Item>
                  <Button block type="primary" size="large" htmlType="submit">
                    Reset
                  </Button>
                </Form.Item>
              </Form>
            </Container>
          </Containerfluid>
        </Col>

        <Col xs={{ span: 22, order: 1 }} sm={20} md={12} lg={12} xl={10}>
          <Logo>
            <img alt="Login Design " src={LoginImg} width="60%" />
          </Logo>
        </Col>
      </Row>
    </div>
  )
}

export default ForgetPassword
