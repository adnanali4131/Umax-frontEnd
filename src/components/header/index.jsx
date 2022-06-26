import { React, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'
import Titleiamge from '../../assets/timer-logo.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logOut } from '../../redux/actions/logout.actions'

import {
  Avatar,
  Menu,
  Dropdown,
  Col,
  Row,
  Button as AntButton,
  Drawer,
  Popover,
  Form,
  Select,
  Input,
  DatePicker,
  TimePicker,
} from 'antd'
import {
  DashboardOutlined,
  FileDoneOutlined,
  DollarOutlined,
  SettingOutlined,
  GlobalOutlined,
  DownOutlined,
  MenuOutlined,
  ClockCircleFilled,
} from '@ant-design/icons'
import {
  Header,
  Button,
  List,
  ListItem,
  Containerfluid,
  Container,
  TimerImg,
  FormWrapper,
  Timer,
} from './header.styles'
import { theme } from '../../utils/theme'
import moment from 'moment'

const format = 'HH:mm'
const { Option } = Select
const { TextArea } = Input

// Timer
const onChange = (date, dateString) => {}
const handleChange = (value) => {}

const content = (
  <FormWrapper>
    <Form>
      <Form.Item>
        <TimerImg>
          <img alt="Timer" src={Titleiamge} />
        </TimerImg>
      </Form.Item>

      <Form.Item>
        <span>CHOOSE DATE </span>
        <DatePicker
          onChange={onChange}
          style={{ width: '100%' }}
          size="large"
        />
      </Form.Item>

      <Form.Item>
        <span>START TIME</span>
        <TimePicker format={format} style={{ width: '100%' }} size="large" />
      </Form.Item>

      <Form.Item>
        <span>END TIME</span>
        <TimePicker format={format} style={{ width: '100%' }} size="large" />
      </Form.Item>

      <Form.Item>
        <span>BREAK TIME</span>
        <TimePicker
          defaultValue={moment('01:00', format)}
          format={format}
          size="large"
          style={{ width: '100%' }}
        />
      </Form.Item>

      <Form.Item>
        <p>DETAILS</p>
        <Select
          defaultValue="Choose Project"
          onChange={handleChange}
          size="large"
          style={{ width: '100%' }}
        >
          <Option value="one">1</Option>
          <Option value="two">2</Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <Select
          defaultValue="Choose Category"
          onChange={handleChange}
          size="large"
          style={{ width: '100%' }}
        >
          <Option value="one">1</Option>
          <Option value="two">2</Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <TextArea
          rows={4}
          placeholder="What did you work today?"
          maxLength={6}
        />
      </Form.Item>

      <Form.Item>
        <AntButton block type="primary" size="large">
          Submit
        </AntButton>
      </Form.Item>
    </Form>
  </FormWrapper>
)

const languages = [
  {
    key: '1',
    label: 'Dutch',
  },
  {
    key: '2',
    label: 'Arabic',
  },
]
const languageDropdown = <Menu items={languages} />

const menuLinks = [
  {
    name: 'Statistics',
    url: '/',
    icon: <DashboardOutlined />,
  },
  {
    name: 'Timesheets',
    url: '/timesheets',
    icon: <FileDoneOutlined />,
  },
  {
    name: 'Salaries',
    url: '/salaries',
    icon: <DollarOutlined />,
  },
  {
    name: 'Settings',
    url: '/settings',
    icon: <SettingOutlined />,
  },
]

const HeaderComponent = () => {
  // redux
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handlelogOut = () => {
    dispatch(logOut(navigate))
  }
  // logOut
  const menuItems = [
    {
      key: '1',
      label: 'Sign Out',
    },
  ]
  const loginDropdown = <Menu items={menuItems} onClick={handlelogOut} />

  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }
  // responsive work
  const isTabletOrMobile = useMediaQuery({ maxWidth: theme.breakpoints.xl })

  const MenuItem = ({ url, icon, name }) => {
    return (
      <ListItem>
        <Link to={url}>
          <span>{icon}</span>
          <span>{name}</span>
        </Link>
      </ListItem>
    )
  }

  return (
    <Header>
      <Row>
        <Col xs={1} sm={1} md={1} lg={2} xl={3}>
          <Button>
            <h3>Umax</h3>
          </Button>
        </Col>

        <Col xs={8} sm={14} md={16} lg={17} xl={16}>
          <Containerfluid>
            {!isTabletOrMobile && (
              <Container>
                <List>
                  {menuLinks.map(({ name, url, icon }, index) => {
                    return (
                      <MenuItem key={index} name={name} url={url} icon={icon} />
                    )
                  })}
                </List>

                <Popover placement="bottom" content={content} trigger="click">
                  <Timer>
                    <span>
                      <ClockCircleFilled />
                      Timer
                    </span>
                  </Timer>
                </Popover>
              </Container>
            )}
          </Containerfluid>
        </Col>

        <Col xs={14} sm={9} md={7} lg={5} xl={5}>
          <Containerfluid>
            <Dropdown overlay={languageDropdown} trigger={['click']}>
              <Button>
                <GlobalOutlined /> English
              </Button>
            </Dropdown>

            <Container>
              <Dropdown
                overlay={loginDropdown}
                trigger={['hover']}
                onClick={handlelogOut}
              >
                {!isTabletOrMobile ? (
                  <span>
                    <Avatar>AA</Avatar>
                    <Button>
                      Admin <DownOutlined />
                    </Button>
                  </span>
                ) : (
                  <Avatar>AA</Avatar>
                )}
              </Dropdown>

              {isTabletOrMobile && (
                <span>
                  <AntButton onClick={showDrawer}>
                    <MenuOutlined />
                  </AntButton>

                  <Drawer
                    placement="right"
                    onClose={onClose}
                    visible={visible}
                    width={200}
                  >
                    <List>
                      {menuLinks.map(({ name, url, icon }, index) => {
                        return (
                          <MenuItem
                            key={index}
                            name={name}
                            url={url}
                            icon={icon}
                          />
                        )
                      })}
                    </List>
                  </Drawer>
                </span>
              )}
            </Container>
          </Containerfluid>
        </Col>
      </Row>
    </Header>
  )
}

export default HeaderComponent
