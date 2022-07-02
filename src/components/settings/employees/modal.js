//Add Modal here
import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { addProject } from '../../../redux/actions/project.actions'
import { Modal, Form, Input, Select, DatePicker } from 'antd'
import { FromWrapper } from './employees.styles'
const { Option } = Select

const EmployeesModal = ({ modalOpen, modalCancel }) => {
  return (
    <div>
      <Modal
        title="Add Employees"
        visible={modalOpen}
        onCancel={modalCancel}
        okText="Save"
        cancelText="Cancel"
      >
        <Form>
          <FromWrapper>
            <Form.Item
              wrapperCol={{ sm: 24 }}
              style={{ width: '40%', marginRight: 0 }}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="First Name" type="text" size={'large'} />
            </Form.Item>

            <Form.Item
              wrapperCol={{ sm: 24 }}
              style={{ width: '40%', marginRight: 0 }}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Last Name" type="text" size={'large'} />
            </Form.Item>
          </FromWrapper>

          <FromWrapper>
            <Form.Item
              wrapperCol={{ sm: 22 }}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Email" type="Email" size={'large'} />
            </Form.Item>

            <Form.Item
              wrapperCol={{ sm: 24 }}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <DatePicker size="large" />
            </Form.Item>
          </FromWrapper>

          <FromWrapper>
            <Form.Item
              wrapperCol={{ sm: 24 }}
              style={{ width: '40%', marginRight: 0 }}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select initialvalues="Active" size={'large'}>
                <Option value="Active">Active</Option>
                <Option value="disable">Disabled</Option>
              </Select>
            </Form.Item>

            <Form.Item
              wrapperCol={{ sm: 24 }}
              style={{ width: '40%', marginRight: 0 }}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select initialvalues="Select Role" size={'large'}>
                <Option value="admin">ADMIN</Option>
                <Option value="manager">MANAGER</Option>
                <Option value="collaborator">COLLABORATOR</Option>
              </Select>
            </Form.Item>
          </FromWrapper>
        </Form>
      </Modal>
    </div>
  )
}

export default EmployeesModal
