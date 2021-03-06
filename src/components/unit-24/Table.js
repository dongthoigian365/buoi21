import React, { useState } from 'react'
import { Popconfirm, Table, Button, Form, Input, Select } from 'antd'
import { v4 as uuid } from 'uuid'
import { useEffect } from 'react'
import axios from 'axios'


const SUBJECT_LIST = [
  { id: 1, name: 'reactjs' },
  { id: 2, name: 'nodejs' },
  { id: 3, name: 'veujs' },
]


const initData = [
  {
    key: '0',
    name: 'Edward King 0',
    age: '32',
    address: 'London, Park Lane no. 0',
    subject: 1,
  },
  {
    key: '1',
    name: 'Edward King 1',
    age: '32',
    address: 'London, Park Lane no. 1',
    subject: 2,
  },
]

const EditableCell = ({ children, editing, dataIndex, inputType, selectList, currentSelected }) => {
  const isNomalMode = ['text', 'number', 'textarea'].includes(inputType)
  const isSelectMode = inputType === 'select'
  let Component = Input
  if (inputType === 'textarea') {
    Component = Input.TextArea
  }

  let renderEditing = null
  if (isNomalMode) {
    renderEditing = <Component type={inputType} />
  } else if (isSelectMode) {
    renderEditing = (
      <Select>
        {
          selectList.map(item => {
            return <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>
          })
        }
      </Select>
    )
  }

  let renderReadOnly = children
  if (isSelectMode) {
    const item = selectList.find(item => item.id === currentSelected)
    renderReadOnly = item ? item.name : ''
  }


  return <td>
    {
      editing ? (
        <Form.Item name={dataIndex}>
          {/* {isNomalMode && <Component type={inputType} />}
          {isSelectMode && (
            <Select defaultValue={currentSelected}>
              {
                selectList.map(item => {
                  return <Select.Option value={item.id}>{item.name}</Select.Option>
                })
              }
            </Select>
          )} */}
          {renderEditing}
        </Form.Item>
      ) : (
          renderReadOnly
        )
    }
  </td>
}

const MyTable = () => {
  const [form] = Form.useForm()
  const [items, setItems] = useState(initData)
  const [editingKey, setEditingKey] = useState('')
  const [subjects, setSubjects] = useState([])

  const handleDelete = key => {
    const newItems = items.filter(item => item.key !== key)
    setItems([...newItems])
  }

  const isEditing = (record) => record.key === editingKey;

  const edit = record => {
    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
      ...record,
    })

    setEditingKey(record.key)
  }

  const save = (key) => {
    const record = items.find(item => item.key === key)
    if (!record) {
      return;
    }

    //validate

    //getFormData
    const value = form.getFieldValue()
    // console.log(value)

    //save data
    const index = items.findIndex(item => item.key === key)
    const item = items[index]

    const newData = { ...item, ...value }
    items[index] = newData
    setItems([...items])
    setEditingKey('')
  }

  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      width: '30%',
      editable: true,
      onCell: (record) => ({
        record,
        inputType: 'text',
        dataIndex: 'name',
        editing: isEditing(record)
      })
    },
    {
      title: 'age',
      dataIndex: 'age',
      onCell: (record) => ({
        record,
        inputType: 'number',
        dataIndex: 'age',
        editing: isEditing(record)
      })
    },
    {
      title: 'address',
      dataIndex: 'address',
      onCell: (record) => ({
        record,
        inputType: 'textarea',
        dataIndex: 'address',
        editing: isEditing(record)
      })
    },
    {
      title: 'Subject',
      dataIndex: 'subject',
      onCell: (record) => ({
        record,
        inputType: 'select',
        dataIndex: 'subject',
        selectList: subjects,
        currentSelected: record.subject,
        editing: isEditing(record)
      })
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (text, record) => {
        if (!items.length) {
          return null
        }

        const editable = isEditing(record)

        return (<>
          {
            editable ? (
              <>
                <Button onClick={() => save(record.key)}>Save</Button>
                <Button onClick={() => setEditingKey('')}>Cancel</Button>
              </>
            ) : (
                <Button onClick={() => edit(record)}>Edit</Button>
              )
          }

          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
            <a href='#href'>Delete</a>
          </Popconfirm>
        </>)
      }
    },
  ]

  const addNewItem = () => {
    setItems([
      ...items,
      {
        key: uuid(),
        name: '',
        age: '',
        address: '',

      }
    ])
  }

  const fetchSubjects = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(() => {
        setSubjects(SUBJECT_LIST)
      })
  }

  useEffect(() => {
    fetchSubjects()
  }, [])

  return <>
    <Button onClick={addNewItem}>Add new</Button>

    <Form form={form} component={false}>
      <Table
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={items}
        columns={columns}
        components={{
          body: {
            cell: EditableCell,
          },
        }}
      />
    </Form>
  </>
}

export default MyTable
