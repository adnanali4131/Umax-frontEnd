import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTypeAction } from '../../../redux/actions/types.action'

import { Table } from 'antd'
import { typesColumn } from './column'
import { terms } from '../../../data/en-terms'

const Types = () => {
  const dispatch = useDispatch()
  const projectTypes = useSelector((state) => state.projectTypes.types)

  useEffect(() => {
    dispatch(getTypeAction())
  }, [dispatch])

  return (
    <div>
      <h2>{terms.settings.types.title}</h2>
      <Table
        rowKey="1"
        dataSource={projectTypes}
        columns={typesColumn}
        pagination={false}
      />
    </div>
  )
}

export default Types
