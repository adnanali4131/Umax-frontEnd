import React from 'react'
import { Button, DatePicker, Row, Col, Select } from 'antd'
import { FilterWrapper } from './timesheet.styles'

const { RangePicker } = DatePicker
const { Option } = Select

const handleChange = (value) => {
  console.log(`selected ${value}`)
}

const Filters = () => {
  return (
    <FilterWrapper>
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={5}>
          <Select
            defaultValue="Choose Project"
            onChange={handleChange}
            size="large"
            style={{ width: '100%' }}
          >
            <Option value="one">1</Option>
            <Option value="two">2</Option>
          </Select>
        </Col>

        <Col xs={24} lg={4}>
          <RangePicker size="large" style={{ width: '100%' }} />
        </Col>

        <Col xs={24} lg={5}>
          <Select
            defaultValue="Choose Employee"
            onChange={handleChange}
            size="large"
            style={{ width: '100%' }}
          >
            <Option value="one">1</Option>
            <Option value="two">2</Option>
          </Select>
        </Col>

        <Col xs={24} lg={5}>
          <Select
            defaultValue="Choose Category"
            onChange={handleChange}
            size="large"
            style={{ width: '100%' }}
          >
            <Option value="one">1</Option>
            <Option value="two">2</Option>
          </Select>
        </Col>

        <Col xs={24} lg={5}>
          <Button block type="primary" size="large">
            Apply filters
          </Button>
        </Col>
      </Row>
    </FilterWrapper>
  )
}

export default Filters
// <Col xs={24} lg={4}>
//           <Button block type="primary" size="large">
//             Download PDF
//           </Button>
//         </Col>

// <Form>
//       <FilterWrapper>
//         <Form.Item>
//           <Dropdown overlay={chooseProjectsDropdown} trigger={['click']}>
//             <Button size="large">
//               Choose Projects <DownOutlined />
//             </Button>
//           </Dropdown>
//         </Form.Item>

//         <Form.Item>
//           <RangePicker size="large" />
//         </Form.Item>

//         <Form.Item>
//           <Dropdown overlay={chooseProjectsDropdown} trigger={['click']}>
//             <Button size="large">
//               Choose Employee <DownOutlined />
//             </Button>
//           </Dropdown>
//         </Form.Item>

//         <Form.Item>
//           <Dropdown overlay={chooseProjectsDropdown} trigger={['click']}>
//             <Button size="large">
//               Choose Category <DownOutlined />
//             </Button>
//           </Dropdown>
//         </Form.Item>

//         <Form.Item>
//           <Button type="primary" size="large">
//             Apply filters
//           </Button>
//         </Form.Item>

//         <Form.Item>
//           <Button type="primary" size="large">
//             Download PDF
//           </Button>
//         </Form.Item>
//       </FilterWrapper>
//     </Form>
