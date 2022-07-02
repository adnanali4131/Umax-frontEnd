//Add Modal here
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProject } from '../../../redux/actions/project.actions'
import { Modal, Form, Input, Select } from 'antd'

import { FromWrapper } from './projects.styles'
const { Option } = Select

const ProjectModal = ({ modalOpen, modalCancel }) => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [status, setStatus] = useState(false)

  return (
    <div>
      <Modal
        title="Add Project"
        visible={modalOpen}
        onOk={(e) => {
          e.preventDefault()
          dispatch(addProject({ name, status }))
        }}
        onCancel={modalCancel}
        okText="Save"
        cancelText="Cancel"
      >
        <Form>
          <Form.Item>
            <Input
              name="project"
              placeholder="Project Name"
              type="text"
              value={name}
              size={'large'}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Item>

          <FromWrapper>
            <Form.Item
              name="status"
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
              name="category"
              wrapperCol={{ sm: 24 }}
              style={{ width: '40%', marginRight: 0 }}
            >
              <Select initialvalues="jitsi-demo " size={'large'}>
                <Option value="jitsi-demo">jitsi-demo</Option>
              </Select>
            </Form.Item>
          </FromWrapper>
        </Form>
      </Modal>
    </div>
  )
}

export default ProjectModal
