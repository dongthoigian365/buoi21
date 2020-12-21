import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Table, Tag, Button } from 'antd'
import { MyGlobalContext } from './../context/MyGlobalContext'
import { UserOutlined, EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Popconfirm, message } from 'antd'


const UserList = () => {
  const [users, setUsers] = useState([])
  const gContext = useContext(MyGlobalContext)

  const deleteUser = user => {
    const newUsers = users.filter(u => u.id !== user.id)
    setUsers(newUsers)
  }

  const collumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      fixed: 'left'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (name, row) => {
        if (row.id === gContext.user.id) {
          return (
            <Tag>
              <UserOutlined /> {' '}
              {name}
            </Tag>
          )
        } else {
          return name
        }
      }
    },
    {
      title: 'User name',
      dataIndex: 'username',
      key: 'username'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Action',
      key: 'action ',
      fixed: 'right',
      render: (cell, row) => {
        return (
          <>
            <Button shape='circle'>
              <EyeOutlined />
            </Button>
            <Button shape='circle'>
              <EditOutlined />
            </Button>
            <Popconfirm
              title="Ban co muon xoa dong nay"
              onConfirm={() => deleteUser(row)}
              onCancel={() => { }}
              okText="Yes"
              cancelText="No"
            >
              <Button shape='circle' danger>
                <DeleteOutlined />
              </Button>
            </Popconfirm>
          </>
        )
      }
    },

  ]

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      setUsers(response.data)
    })
  }, [])

  return (
    <>
      <h1>Danh sach user</h1>

      <Table rowKey='id' dataSource={users} columns={collumns} />
    </>
  )
}

export default UserList
