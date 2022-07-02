import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCategory } from '../../../redux/actions/category.actions'
import { Modal, Form, Input, Select } from 'antd'
import { FromWrapper } from './category.styles'
const { Option } = Select

const CategoryModal = ({ modalOpen, modalCancel }) => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [status, setStatus] = useState(false)

  return (
    <div>
      <Modal
        title="Add Category"
        visible={modalOpen}
        onOk={
          ((e) => {
            e.preventDefault()
            dispatch(addCategory({ name, status, type }))
          },
          modalCancel)
        }
        onCancel={modalCancel}
        okText="Save"
        cancelText="Cancel"
      >
        <Form>
          <Form.Item>
            <Input
              placeholder="Category Name"
              type="text"
              size={'large'}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Item>

          <FromWrapper>
            <Form.Item
              wrapperCol={{ sm: 24 }}
              style={{ width: '40%', marginRight: 0 }}
            >
              <Select
                initialvalues={{
                  value: 'Active',
                }}
                size={'large'}
                onChange={(value) => setStatus(value)}
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
                initialvalues="Select Type"
                size={'large'}
                onChange={(value) => setType(value)}
              >
                <Option value="Project">Project</Option>
                <Option value="Task">Task</Option>
              </Select>
            </Form.Item>
          </FromWrapper>
        </Form>
      </Modal>
    </div>
  )
}

export default CategoryModal
