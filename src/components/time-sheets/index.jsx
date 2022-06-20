import { React, useState } from 'react'
import {
  Card,
  Button,
  Avatar,
  Table,
  Tag,
  Modal,
  Form,
  DatePicker,
  TimePicker,
  Input,
  Dropdown,
  Menu,
} from 'antd'
import {
  PlusCircleFilled,
  CheckCircleOutlined,
  EditOutlined,
  MessageOutlined,
  DeleteOutlined,
  DownOutlined,
} from '@ant-design/icons'
import moment from 'moment'

import HeaderComponent from '../header'
import Filters from './filters'
import {
  CardWrapper,
  CardContainer,
  AddTime,
  CardTitle,
  ApproveTime,
  Actions,
  FromWrapper,
  Container,
  Containerfluid,
} from './timesheet.styles'

const { TextArea } = Input
const format = 'HH:mm'
const { RangePicker } = DatePicker

const chooseProjects = [
  {
    key: '1',
    label: 'Project 1',
  },
]
const chooseProjectsDropdown = <Menu items={chooseProjects} />

const TimeSheets = () => {
  // modal work
  const [isAddTimeVisible, setIsAddTimeVisible] = useState(false)
  const [isCommentVisible, setIsCommentVisible] = useState(false)

  const showModalTime = () => {
    setIsAddTimeVisible(true)
  }
  const showComment = () => {
    setIsCommentVisible(true)
  }

  const handleOk = () => {
    setIsAddTimeVisible(false)
  }
  const handleCommentOK = () => {
    setIsCommentVisible(false)
  }

  const handleCancel = () => {
    setIsAddTimeVisible(false)
  }
  const handleCancelComment = () => {
    setIsCommentVisible(false)
  }
  // employees
  const ApprovedData = [
    {
      key: '1',
      Date: 'thu,09 june',
      Description: '123',
      Project: 'Category4',
      Category: 'Test',
      StartTime: '01:15',
      EndTime: '5:00',
      BreakTime: '01:00',
      Hours: '02:45',
      Status: 'Active',
      Action: '',
    },
  ]
  const ApprovedColumns = [
    {
      title: 'Date',
      dataIndex: 'Date',
      key: 'key',
    },
    {
      title: 'Description',
      dataIndex: 'Description',
      width: '18%',
      key: 'key',
    },
    {
      title: 'Project',
      dataIndex: 'Project',
      key: 'key',
      responsive: ['xl'],
      render: () => {
        return <Tag color="geekblue">JITSI-DEMO</Tag>
      },
    },
    {
      title: 'Category',
      dataIndex: 'Category',
      key: 'key',
      responsive: ['xl'],
      render: () => {
        return <Tag color="geekblue">JITSI-DEMO</Tag>
      },
    },
    {
      title: 'StartTime',
      dataIndex: 'StartTime',
      responsive: ['xl'],
      key: 'key',
    },
    {
      title: 'EndTime',
      dataIndex: 'EndTime',
      responsive: ['xl'],
      key: 'key',
    },
    {
      title: 'BreakTime',
      dataIndex: 'BreakTime',
      responsive: ['xl'],
      key: 'key',
    },
    {
      title: 'Hours',
      dataIndex: 'Hours',
      responsive: ['xl'],
      key: 'key',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'key',
      render: () => <CheckCircleOutlined />,
    },

    {
      title: 'Action',
      dataIndex: 'Action',
      key: 'key',
      render: () => (
        <Actions>
          <Button onClick={showModalTime}>
            <EditOutlined />
          </Button>

          <Button onClick={showComment}>
            <MessageOutlined />
          </Button>
          <Modal
            title="Add Comment"
            visible={isCommentVisible}
            onOk={handleCommentOK}
            onCancel={handleCancelComment}
            okButtonProps={{
              children: 'Custom OK',
            }}
            cancelButtonProps={{
              children: 'Custom cancel',
            }}
            okText="Save"
            cancelText="Cancel"
          >
            <TextArea rows={4} placeholder="Add Your Commnet" />
          </Modal>

          <Button>
            <DeleteOutlined />
          </Button>
        </Actions>
      ),
    },
  ]

  return (
    <div>
      <HeaderComponent />
      <Containerfluid>
        <Filters />
        <Container>
          <Button block size="large" type="primary">
            Download PDF
          </Button>
        </Container>
      </Containerfluid>

      <CardWrapper>
        <Card
          title={
            <CardTitle>
              <Avatar size={54}>AA</Avatar>
              <h1> App Admin</h1>
            </CardTitle>
          }
          extra={
            <CardContainer>
              <p>Total Hours</p>

              <AddTime>
                <h2>00:00/02:45</h2>

                <Button type="primary" size="md" onClick={showModalTime}>
                  <PlusCircleFilled /> Add time
                </Button>
                <Modal
                  title="Add Time"
                  visible={isAddTimeVisible}
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
                    <FromWrapper>
                      <Form.Item>
                        <Dropdown
                          overlay={chooseProjectsDropdown}
                          trigger={['click']}
                        >
                          <span>
                            <p>PROJECT</p>
                            <Button size="large">
                              Choose Projects <DownOutlined />
                            </Button>
                          </span>
                        </Dropdown>
                      </Form.Item>
                      <Form.Item
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <Dropdown
                          overlay={chooseProjectsDropdown}
                          trigger={['click']}
                        >
                          <span>
                            <p>CATEGORY</p>
                            <Button size="large">
                              Choose Category <DownOutlined />
                            </Button>
                          </span>
                        </Dropdown>
                      </Form.Item>
                    </FromWrapper>

                    <Form.Item
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <p>CHOOSE DATE</p>
                      <div>
                        <RangePicker size={'large'} style={{ width: '100%' }} />
                      </div>
                    </Form.Item>

                    <FromWrapper>
                      <Form.Item
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        START TIME
                        <div>
                          <TimePicker
                            size={'large'}
                            defaultValue={moment('12:08', format)}
                            format={format}
                          />
                        </div>
                      </Form.Item>
                      <Form.Item
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        END TIME
                        <div>
                          <TimePicker
                            size={'large'}
                            defaultValue={moment('12:08', format)}
                            format={format}
                          />
                        </div>
                      </Form.Item>
                    </FromWrapper>

                    <Form.Item
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      BREAK TIME
                      <div>
                        <TimePicker
                          style={{ width: '100%' }}
                          defaultValue={moment('12:08', format)}
                          format={format}
                          size="large"
                        />
                      </div>
                    </Form.Item>

                    <Form.Item
                      wrapperCol={{ sm: 24 }}
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      DESCRIPTION
                      <div>
                        <TextArea rows={4} />
                      </div>
                    </Form.Item>
                  </Form>
                </Modal>
              </AddTime>
            </CardContainer>
          }
        >
          <ApproveTime>
            <h2>Week</h2>

            <Button size="md">
              <CheckCircleOutlined /> Approved time
            </Button>
          </ApproveTime>

          <Table
            dataSource={ApprovedData}
            columns={ApprovedColumns}
            pagination={false}
          />
        </Card>
      </CardWrapper>
    </div>
  )
}

export default TimeSheets
