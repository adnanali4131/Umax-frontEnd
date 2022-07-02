import React from 'react'
import { Table, Button } from 'antd'
import { terms } from '../../../data/en-terms'

import { PlusOutlined } from '@ant-design/icons'
import { EmployeesActions } from './actions'
import EmployeesModal from './modal'
import { Discription } from './employees.styles'

const Employees = () => {
  const actions = EmployeesActions()

  return (
    <div>
      <Discription>
        <h2>{terms.settings.employees.title}</h2>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={actions.modalOpen}
        >
          {terms.settings.employees.button}
        </Button>
      </Discription>
      <Table
        //   dataSource={employeesData}
        columns={actions.columns}
        pagination={false}
      />

      {actions.isModalOpen && (
        <EmployeesModal
          modalOpen={actions.modalOpen}
          modalCancel={actions.modalCancel}
        />
      )}
    </div>
  )
}

export default Employees
