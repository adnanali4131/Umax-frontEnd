import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategorys } from '../../../redux/actions/category.actions'

import { Table, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import CategoryModal from './modal'
import { CategoryActions } from './actions'
import { Discription } from './category.styles'
import { terms } from '../../../data/en-terms'

const Caterory = () => {
  const actions = CategoryActions()
  const dispatch = useDispatch()

  const category = useSelector((state) => state?.category?.categorys)

  useEffect(() => {
    dispatch(getCategorys())
  }, [dispatch])

  return (
    <div>
      <Discription>
        <h2>{terms.settings.category.title}</h2>
        <Button
          type="primary"
          onClick={actions.modalOpen}
          icon={<PlusOutlined />}
        >
          {terms.settings.category.button}
        </Button>
      </Discription>

      <Table
        rowKey="_id"
        dataSource={category}
        columns={actions.columns}
        pagination={false}
      />

      {actions.isModalOpen && (
        <CategoryModal
          modalOpen={actions.modalOpen}
          modalCancel={actions.modalCancel}
        />
      )}
    </div>
  )
}

export default Caterory
