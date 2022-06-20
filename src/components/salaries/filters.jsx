import React from 'react'
import { Button, Form, DatePicker, Select } from 'antd'
// import { DownOutlined } from '@ant-design/icons'

import { FilterWrapper } from './salaries.styles'
const { RangePicker } = DatePicker
const { Option } = Select

const handleChange = (value) => {
  console.log(`selected ${value}`)
}
const Filters = () => {
  return (
    <Form>
      <FilterWrapper>
        <Form.Item>
          <Select
            defaultValue="Choose Project"
            onChange={handleChange}
            size="large"
          >
            <Option value="one">1</Option>
            <Option value="two">2</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <RangePicker size="large" style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item>
          <Button block size="large" type="primary">
            Apply filters
          </Button>
        </Form.Item>
      </FilterWrapper>
    </Form>
  )
}

export default Filters
