import { useState } from 'react'
import { Button, Badge } from 'antd'
import { EditOutlined } from '@ant-design/icons'

export const EmployeesActions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const modalOpen = () => setIsModalOpen(true)
  const modalCancel = () => setIsModalOpen(false)
  const columns = [
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
