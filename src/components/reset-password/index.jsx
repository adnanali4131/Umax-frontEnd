import React from 'react'
import { Col, Row, Form, Input, Button } from 'antd'
import { LockOutlined } from '@ant-design/icons'
import LoginImg from '../../assets/login-logo.png'
import { terms } from '../../data/en-terms'

import './resetPassword.styles'
import { Containerfluid, Container, Logo, Header } from './resetPassword.styles'

const ResetPassword = () => {
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
                <h1>{terms.resetPassword.title}</h1>
                <p>{terms.resetPassword.description}</p>
              </div>

              <Form
                name="set_password"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
              >
                <Form.Item
                  name="password"
                  size="large"
                  type="password"
                  rules={[
                    {
                      required: true,
                      message: terms.resetPassword['password-error'],
                    },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>

                <Form.Item
                  name="confirm-password"
                  size="large"
                  type="password"
                  rules={[
                    {
                      required: true,
                      message: terms.resetPassword['password-placeholder'],
                    },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined />}
                    type="password"
                    placeholder="Confirm Password"
                  />
                </Form.Item>

                <Form.Item>
                  <Button block type="primary" size="large" htmlType="submit">
                    {terms.resetPassword.submit}
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

export default ResetPassword
