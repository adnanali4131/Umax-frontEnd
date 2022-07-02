import { Badge } from 'antd'

export const typesColumn = [
  {
    title: 'name',
    dataIndex: '',
    key: 'key',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'key',
    render: (status) => (
      <Badge
        status={status ? 'success' : 'error'}
        text={status ? 'Active' : 'Disabled'}
      />
    ),
  },
]
