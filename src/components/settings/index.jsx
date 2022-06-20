import React, { useState } from 'react'
import {
  Col,
  Row,
  Table,
  Anchor,
  Button,
  Badge,
  Tag,
  Modal,
  Form,
  Input,
  Select,
  DatePicker,
} from 'antd'
import HeaderComponent from '../header'

import {
  Containerfluid,
  Container,
  Discription,
  Wrapper,
  FromWrapper,
} from './settings.styles'
import { PlusOutlined, EditOutlined } from '@ant-design/icons'

const { Link } = Anchor
const { Option } = Select

const Settings = () => {
  // project
  const projectData = [
    {
      key: '1',
      Name: 'name 1',
      Categorie: 'categories',
      Action: 'action',
      Status: 'status',
    },
  ]
  const projectColumns = [
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'key',
      width: '30%',
    },
    {
      title: 'Status',
      dataIndex: 'Status',
      key: 'status',
      width: '30%',
      render: (status) => (
        <Badge
          status={status ? 'success' : 'error'}
          text={status ? 'Active' : 'Disabled'}
        />
      ),
    },
    {
      responsive: ['xl'],
      title: 'Categorie',
      dataIndex: 'Categorie',
      width: '30%',
      key: 'key',
      render: () => {
        return <Tag color="geekblue">JITSI-DEMO</Tag>
      },
    },
    {
      title: 'Action',
      dataIndex: 'Action',
      width: '30%',
      key: 'key',
      render: () => {
        return (
          <Button onClick={showModalProject}>
            <EditOutlined type="primary" />
          </Button>
        )
      },
    },
  ]
  // employees
  const employeesData = [
    {
      key: '1',
      Name: 'name 1',
      Status: 'status 1',
      Email: '12@gmail.com',
      DOB: '123',
      Role: '  MANAGER',
      Action: 'action',
    },
  ]
  const employeesColumns = [
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'key',
      width: '25%',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      width: '20%',
      key: 'key',
      render: (status) => (
        <Badge
          status={status ? 'success' : 'error'}
          text={status ? 'Active' : 'Disabled'}
        />
      ),
    },
    {
      responsive: ['xl'],
      title: 'Email',
      dataIndex: 'Email',
      key: 'key',
      width: '20%',
    },
    {
      responsive: ['xl'],
      title: 'Date Of Birth',
      dataIndex: 'DOB',
      key: 'key',
      width: '15%',
    },
    {
      responsive: ['xl'],
      title: 'Role',
      dataIndex: 'Role',
      key: 'key',
      width: '10%',
    },
    {
      title: 'Action',
      dataIndex: 'Action',
      width: '25%',
      key: 'key',
      render: () => {
        return (
          <Button onClick={showModalEmployees}>
            <EditOutlined type="primary" />
          </Button>
        )
      },
    },
  ]
  // categories
  const categoriesData = [
    {
      key: '1',
      Name: 'name 1',
      Status: '',
      Type: 'Project',
      Action: 'action',
    },
  ]
  const categoryColumns = [
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'key',
      width: '30%',
    },
    {
      title: 'Status',
      dataIndex: 'Status',
      width: '30%',
      key: 'key',
      render: (status) => (
        <Badge
          status={status ? 'success' : 'error'}
          text={status ? 'Active' : 'Disabled'}
        />
      ),
    },
    {
      responsive: ['xl'],
      title: 'Type',
      dataIndex: 'Type',
      width: '30%',
      key: 'key',
    },
    {
      title: 'Action',
      dataIndex: 'Action',
      width: '30%',
      key: 'key',
      render: () => {
        return (
          <Button onClick={showModalCategories}>
            <EditOutlined type="primary" />
          </Button>
        )
      },
    },
  ]
  // Types
  const typesData = [
    {
      key: '1',
      Name: 'name 1',
      Status: 'status 1',
    },
  ]
  const typesColumn = [
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'key',
    },
    {
      title: 'Status',
      dataIndex: 'Status',
      key: 'key',
      render: (status) => (
        <Badge
          status={status ? 'success' : 'error'}
          text={status ? 'Active' : 'Disabled'}
        />
      ),
    },
  ]
  // modal work
  const [isProjectModalVisible, setIsProjectModalVisible] = useState(false)
  const [isCategoriesModalVisible, setIsCategoriesModalVisible] = useState(
    false,
  )
  const [isEmployeesModalVisible, setIsEmployesModalVisible] = useState(false)

  const showModalProject = () => {
    setIsProjectModalVisible(true)
  }
  const showModalEmployees = () => {
    setIsEmployesModalVisible(true)
  }
  const showModalCategories = () => {
    setIsCategoriesModalVisible(true)
  }

  const handleOk = () => {
    setIsProjectModalVisible(false)
  }
  const handleEmplyeesOk = () => {
    setIsEmployesModalVisible(false)
  }
  const handleCategoriesOk = () => {
    setIsCategoriesModalVisible(false)
  }

  const handleCancel = () => {
    setIsProjectModalVisible(false)
  }
  const handleEmployeesCancel = () => {
    setIsEmployesModalVisible(false)
  }
  const handleCategoriesCancel = () => {
    setIsCategoriesModalVisible(false)
  }

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
            <Discription id="projects">
              <h2>Projects</h2>
              <Button type="primary" onClick={showModalProject}>
                <span>
                  <PlusOutlined /> Add new
                </span>
              </Button>

              <Modal
                title="Add Project"
                visible={isProjectModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                okButtonProps={{
                  children: 'Custom OK',
                }}
                cancelButtonProps={{
                  children: 'Custom cancel',
                }}
                okText="Save"
                cancelText="Cancel"
              >
                <Form>
                  <Form.Item>
                    <Input
                      placeholder="Project Name"
                      type="text"
                      size={'large'}
                    />
                  </Form.Item>

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
                      <Select defaultValue="Active" size={'large'}>
                        <Option value="active">Active</Option>
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
                      <Select defaultValue="jitsi-demo " size={'large'}>
                        <Option value="selectCatego" disabled>
                          Select Categorie
                        </Option>
                        <Option value="jitsi-demo">jitsi-demo</Option>
                      </Select>
                    </Form.Item>
                  </FromWrapper>
                </Form>
              </Modal>
            </Discription>

            <Table
              dataSource={projectData}
              columns={projectColumns}
              pagination={false}
            ></Table>

            <Container id="employees">
              <Discription>
                <h2>Employees</h2>
                <Button type="primary" onClick={showModalEmployees}>
                  <span>
                    <PlusOutlined /> Add new
                  </span>
                </Button>
                <Modal
                  title="Add Employees"
                  visible={isEmployeesModalVisible}
                  onOk={handleEmplyeesOk}
                  onCancel={handleEmployeesCancel}
                  okButtonProps={{
                    children: 'Custom OK',
                  }}
                  cancelButtonProps={{
                    children: 'Custom cancel',
                  }}
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
                        <Input
                          placeholder="First Name"
                          type="text"
                          size={'large'}
                        />
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
                        <Input
                          placeholder="Last Name"
                          type="text"
                          size={'large'}
                        />
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
                        <Input
                          placeholder="Email"
                          type="Email"
                          size={'large'}
                        />
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
                        <Select defaultValue="Active" size={'large'}>
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
                        <Select defaultValue="Select Role" size={'large'}>
                          <Option value="admin">ADMIN</Option>
                          <Option value="manager">MANAGER</Option>
                          <Option value="collaborator">COLLABORATOR</Option>
                        </Select>
                      </Form.Item>
                    </FromWrapper>
                  </Form>
                </Modal>
              </Discription>

              <Table
                dataSource={employeesData}
                columns={employeesColumns}
                pagination={false}
              ></Table>
            </Container>

            <Container id="categories">
              <Discription>
                <h2>Categories</h2>
                <Button type="primary" onClick={showModalCategories}>
                  <span>
                    <PlusOutlined /> Add new
                  </span>
                </Button>

                <Modal
                  title="Add Category"
                  visible={isCategoriesModalVisible}
                  onOk={handleCategoriesOk}
                  onCancel={handleCategoriesCancel}
                  okButtonProps={{
                    children: 'Custom OK',
                  }}
                  cancelButtonProps={{
                    children: 'Custom cancel',
                  }}
                  okText="Save"
                  cancelText="Cancel"
                >
                  <Form>
                    <Form.Item>
                      <Input
                        placeholder="Category Name"
                        type="text"
                        size={'large'}
                      />
                    </Form.Item>

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
                        <Select defaultValue="Active" size={'large'}>
                          <Option value="active">Active</Option>
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
                        <Select defaultValue="Select Type" size={'large'}>
                          <Option value="selectParoject">Paroject</Option>
                          <Option value="selectTask">Task</Option>
                        </Select>
                      </Form.Item>
                    </FromWrapper>
                  </Form>
                </Modal>
              </Discription>

              <Table
                dataSource={categoriesData}
                columns={categoryColumns}
                pagination={false}
              />
            </Container>

            <Container id="types">
              <h2>Types</h2>
              <Table
                dataSource={typesData}
                columns={typesColumn}
                pagination={false}
              />
            </Container>
          </Col>
        </Row>
      </Containerfluid>
    </div>
  )
}

export default Settings
