import { React, useState } from 'react'

import { Button, Badge, Tag } from 'antd'
import { EditOutlined } from '@ant-design/icons'

export const ProjectActions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const modalOpen = () => setIsModalOpen(true)
  const modalCancel = () => setIsModalOpen(false)

  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
    },
    {
      title: 'Status',
      dataIndex: 'status',
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
      key: 'Categorie',
      render: () => {
        return <Tag color="geekblue">JITSI-DEMO</Tag>
      },
    },
    {
      title: 'Action',
      dataIndex: 'Action',
      width: '30%',
      key: 'Action',
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
