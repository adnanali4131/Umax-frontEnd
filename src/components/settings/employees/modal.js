import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEmployees } from '../../../redux/actions/employees.actions'
import { Modal, Form, Input, Select, DatePicker } from 'antd'
import { FromWrapper } from './employees.styles'
const { Option } = Select

const EmployeesModal = ({ modalOpen, modalCancel }) => {
  const dispatch = useDispatch()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [status, setStatus] = useState()
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [dob, setDob] = useState('')

  return (
    <div>
      <Modal
        title="Add Employees"
        visible={modalOpen}
        onOk={(e) => {
          e.preventDefault()
          dispatch(
            addEmployees({ firstName, lastName, status, email, role, dob }),
          )
        }}
        onCancel={modalCancel}
        okText="Save"
        cancelText="Cancel"
      >
        <Form>
          <FromWrapper>
            <Form.Item
              wrapperCol={{ sm: 24 }}
              style={{ width: '40%', marginRight: 0 }}
            >
              <Input
                placeholder="First Name"
                type="text"
                size={'large'}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Item>

            <Form.Item
              wrapperCol={{ sm: 24 }}
              style={{ width: '40%', marginRight: 0 }}
            >
              <Input
                placeholder="Last Name"
                type="text"
                size={'large'}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Item>
          </FromWrapper>

          <FromWrapper>
            <Form.Item wrapperCol={{ sm: 22 }}>
              <Input
                placeholder="Email"
                type="Email"
                size={'large'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Item>

            <Form.Item wrapperCol={{ sm: 24 }}>
              <DatePicker
                size="large"
                value={dob}
                onChange={(date, dateString) => {
                  setDob(date, dateString)
                }}
                showTime
                format="YYYY-MM-DD"
              />
            </Form.Item>
          </FromWrapper>

          <FromWrapper>
            <Form.Item
              wrapperCol={{ sm: 24 }}
              style={{ width: '40%', marginRight: 0 }}
            >
              <Select
                initialvalues="Active"
                size={'large'}
                placeholder="Status"
                value={status}
                onChange={(value) => setStatus(value)}
                onBlur={(value) => value}
              >
                <Option value={true}>Active</Option>
                <Option value={false}>Disabled</Option>
              </Select>
            </Form.Item>

            <Form.Item
              wrapperCol={{ sm: 24 }}
              style={{ width: '40%', marginRight: 0 }}
            >
              <Select
                size={'large'}
                placeholder="Role"
                value={role}
                onChange={(value) => setRole(value)}
              >
                <Option value="ADMIN">ADMIN</Option>
                <Option value="MANAGER">MANAGER</Option>
                <Option value="COLLABORATOR">COLLABORATOR</Option>
              </Select>
            </Form.Item>
          </FromWrapper>
        </Form>
      </Modal>
    </div>
  )
}

export default EmployeesModal
