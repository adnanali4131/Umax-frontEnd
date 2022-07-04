import { useState } from 'react'
import Moment from 'react-moment'
import { Button, Badge } from 'antd'
import { EditOutlined } from '@ant-design/icons'

export const EmployeesActions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const modalOpen = () => setIsModalOpen(true)
  const modalCancel = () => setIsModalOpen(false)
  const columns = [
    {
      title: 'Name',
      dataIndex: 'firstName',
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
      dataIndex: 'email',
      key: 'key',
      width: '20%',
    },
    {
      responsive: ['xl'],
      title: 'Date Of Birth',
      dataIndex: 'dob',
      key: 'key',
      width: '15%',
      render: () => {
        return <Moment format={'YYYY-MM-DD'} />
      },
    },
    {
      responsive: ['xl'],
      title: 'Role',
      dataIndex: 'role',
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
          <Button>
            <EditOutlined type="primary" />
          </Button>
        )
      },
    },
  ]

  return {
    isModalOpen,
    modalOpen,
    modalCancel,
    columns,
  }
}
