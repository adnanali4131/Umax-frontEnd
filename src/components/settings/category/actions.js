import { React, useState } from 'react'
import { Button, Badge } from 'antd'
import { EditOutlined } from '@ant-design/icons'

export const CategoryActions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const modalOpen = () => setIsModalOpen(true)
  const modalCancel = () => setIsModalOpen(false)

  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      key: 'key',
      width: '30%',
    },
    {
      title: 'Status',
      dataIndex: 'status',
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
      title: 'type',
      dataIndex: 'type',
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
          <Button onClick={modalOpen}>
            <EditOutlined type="primary" />
          </Button>
        )
      },
    },
  ]

  return { isModalOpen, modalOpen, modalCancel, columns }
}
