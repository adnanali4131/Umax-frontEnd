import React, { useState } from 'react'
import { Table, Button, Badge } from 'antd'
import { CloudDownloadOutlined } from '@ant-design/icons'
import HeaderComponent from '../header'
import Filters from './filters'
import {
  Containerfluid,
  Container,
  Wrapper,
  FilterContainer,
} from './salaries.styles'

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows,
    )
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    name: record.name,
  }),
}

const Salaries = () => {
  const [selectionType] = useState('checkbox')
  const projectData = [
    {
      key: '1',
      Name: 'name 1',
      Status: 'status',
      WorkingHours: '2:05',
    },
  ]
  const projectColumns = [
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'key',
    },
    {
      title: 'Status',
      dataIndex: 'Status',
      key: 'status',
      render: (status) => (
        <Badge
          status={status ? 'success' : 'error'}
          text={status ? 'Active' : 'Disabled'}
        />
      ),
    },
    {
      title: 'WorkingHours',
      dataIndex: 'WorkingHours',
      key: 'key',
    },
  ]
  return (
    <div>
      <HeaderComponent />
      <FilterContainer>
        <Filters />
      </FilterContainer>

      <Containerfluid>
        <Container>
          <h2> All projects </h2>
          <Button type="primary">
            <CloudDownloadOutlined /> Export selected as Excel File
          </Button>
        </Container>

        <Wrapper>
          <Table
            rowSelection={{
              type: selectionType,
              ...rowSelection,
            }}
            dataSource={projectData}
            columns={projectColumns}
            pagination={false}
          />
        </Wrapper>
      </Containerfluid>
    </div>
  )
}

export default Salaries
