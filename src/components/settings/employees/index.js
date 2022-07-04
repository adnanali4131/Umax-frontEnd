import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Button } from 'antd'
import { terms } from '../../../data/en-terms'

import { PlusOutlined } from '@ant-design/icons'
import { EmployeesActions } from './actions'
import EmployeesModal from './modal'
import { Discription } from './employees.styles'
import { useEffect } from 'react'
import { getEmployees } from '../../../redux/actions/employees.actions'

const Employees = () => {
  const actions = EmployeesActions()
  const dispatch = useDispatch()
  const employees = useSelector((state) => state?.employees?.users)

  useEffect(() => {
    dispatch(getEmployees())
  }, [dispatch])

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
        rowKey="_id"
        dataSource={employees}
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
