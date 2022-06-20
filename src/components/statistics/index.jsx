import React from 'react'
import { Area } from '@ant-design/plots'
import HeaderComponent from '../header'
import Filters from '../time-sheets/filters'
import { Table, Tag } from 'antd'

import {
  FilterWrapper,
  Containerfluid,
  GraphContainer,
  Graph,
  Wrapper,
  Container,
  TableWrapper,
} from './statistics.styles'

const Statistics = () => {
  const data = [
    { year: '1991', value: 0 },
    { year: '1992', value: 3 },
    { year: '1993', value: 0 },
    { year: '1994', value: 0 },
    { year: '1995', value: 0 },
    { year: '1996', value: 0 },
    { year: '1997', value: 0 },
    { year: '1998', value: 0 },
    { year: '1999', value: 0 },
  ]
  const config = {
    data,
    height: 400,
    xField: 'year',
    yField: 'value',
    point: {
      size: 2,
      shape: 'diamond | circule',
    },
  }

  const employeesData = [
    {
      key: '1',
      Name: 'name 1',
      Projects: 'Projects',
      WorkingHours: '',
      Action: 'action',
    },
  ]
  const employeesColumns = [
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'key',
    },

    {
      title: 'Projects',
      dataIndex: 'Projects',
      key: 'key',
      render: () => {
        return <Tag color="geekblue">JITSI-DEMO</Tag>
      },
    },
    {
      title: 'WorkingHours',
      dataIndex: 'WorkingHours',
      key: 'key',
    },
    {
      title: 'Action',
      dataIndex: 'Action',
      key: 'key',
      render: () => {
        return <a href="http://">Details</a>
      },
    },
  ]
  return (
    <div>
      <HeaderComponent />
      <FilterWrapper>
        <Filters />
      </FilterWrapper>

      <Containerfluid>
        <GraphContainer>
          <div>
            <h2> All projects</h2>
            <p>01 Jun - 30 Jun 2022</p>
          </div>
          <Graph>
            <Area {...config} />
          </Graph>
        </GraphContainer>

        <Wrapper>
          <Container>
            <p>Total Time</p>
            <h2>02:45h</h2>
          </Container>
          <Container>
            <p>Approved</p>
            <h2>02:45h</h2>
          </Container>
          <Container>
            <p>Unapproved</p>
            <h2>0h</h2>
          </Container>
          <Container>
            <p>Average hours per employee</p>
            <h2>0h</h2>
          </Container>
          <Container>
            <p>Top project</p>
            <h2>Project 1</h2>
          </Container>
        </Wrapper>
      </Containerfluid>

      <TableWrapper>
        <h2>Breakdown by employees</h2>
        <Table
          dataSource={employeesData}
          columns={employeesColumns}
          pagination={false}
        />
      </TableWrapper>
    </div>
  )
}

export default Statistics
