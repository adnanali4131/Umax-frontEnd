import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProjects } from '../../../redux/actions/project.actions'

import { Table } from 'antd'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import ProjectModal from './modal'
import { ProjectActions } from './actions'
import { Discription } from './projects.styles'
import { terms } from '../../../data/en-terms'

const Projects = () => {
  const dispatch = useDispatch()
  const actions = ProjectActions()

  const projects = useSelector((state) => state?.projects?.projects)

  useEffect(() => {
    dispatch(getProjects())
  }, [dispatch])

  return (
    <div>
      <Discription>
        <h2>{terms.settings.project.title}</h2>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={actions.modalOpen}
        >
          {terms.settings.project.button}
        </Button>
      </Discription>

      <Table
        rowKey="_id"
        dataSource={projects}
        columns={actions.columns}
        pagination={false}
      />
      {actions.isModalOpen && (
        <ProjectModal
          modalOpen={actions.modalOpen}
          modalCancel={actions.modalCancel}
        />
      )}
    </div>
  )
}

export default Projects
