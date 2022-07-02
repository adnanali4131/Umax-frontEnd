import React from 'react'
import { Col, Row, Anchor } from 'antd'

import HeaderComponent from '../header'
import Projects from './projects'
import Category from './category'
import Employees from './employees'
import Types from './types'

import { Containerfluid, Container, Wrapper } from './settings.styles'

const { Link } = Anchor

const Settings = () => {
  return (
    <div>
      <HeaderComponent />

      <Containerfluid>
        <Row justify="space-between">
          <Col lg={4}>
            <Wrapper>
              <Anchor offsetTop={65}>
                <Link href="#projects" title="Projects" />
                <Link href="#employees" title="Employees" />
                <Link href="#categories" title="Categories" />
                <Link href="#types" title="Types" />
              </Anchor>
            </Wrapper>
          </Col>

          <Col xs={24} lg={20}>
            <div id="projects">
              <Projects />
            </div>

            <Container id="employees">
              <Employees />
            </Container>

            <Container id="categories">
              <Category />
            </Container>

            <Container id="types">
              <Types />
            </Container>
          </Col>
        </Row>
      </Containerfluid>
    </div>
  )
}

export default Settings
