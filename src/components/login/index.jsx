import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Col, Row, Form, Input, Button, Alert } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import LoginImg from '../../assets/login-logo.png'
import { Containerfluid, Container, Logo, Header } from './login.styles'
import { logIn } from '../../redux/actions/login.actions'
import { terms } from '../../data/en-terms'

// @todo: do not hard code. always use terms to get data

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { error } = useSelector((state) => state.logIn)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handlelogInClick = (event) => {
    event.preventDefault()
    dispatch(logIn({ email, password }, navigate))
  }

  return (
    <div>
      <Header>
        <Row>
          <Col>
            <h2>Umax</h2>
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
              {error ? (
                <Alert message={error} type="error" showIcon closable />
              ) : null}
              <div>
                <h1>{terms.login.title}</h1>
                <p>{terms.login.description}</p>
              </div>

              <Form name="login" initialValues={{ email: '', password: '' }}>
                <Form.Item
                  size="large"
                  name="email"
                  type="text"
                  placeholder="Email"
                  rules={[
                    {
                      required: true,
                      message: terms.login['email-error'],
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined />}
                    placeholder="Email"
                    onChange={handleEmailChange}
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  size="large"
                  type="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Password!',
                    },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined />}
                    type="password"
                    placeholder="Password"
                    onChange={handlePasswordChange}
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    block
                    type="primary"
                    size="large"
                    htmlType="submit"
                    onClick={handlelogInClick}
                  >
                    Sign In
                  </Button>
                </Form.Item>

                <Form.Item>
                  <a href="/pasword"> Forget your password</a>
                </Form.Item>
              </Form>
            </Container>
          </Containerfluid>
        </Col>

        <Col xs={{ span: 22, order: 1 }} sm={20} md={12} xl={10}>
          <Logo>
            <img alt="Login Design " src={LoginImg} width="60%" />
          </Logo>
        </Col>
      </Row>
    </div>
  )
}

export default Login
