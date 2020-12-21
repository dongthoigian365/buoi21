import React, { useState, useEffect } from 'react'
import { MyGlobalContext } from './components/context/MyGlobalContext'
import axios from 'axios'
import ClipLoader from "react-spinners/ClipLoader"
import 'antd/dist/antd.css'

import UserList from './components/unit-23/UserList'



const App = () => {
  const [loading, setLoading] = useState(true)
  const [gContext, setGContext] = useState({
    user: null
  })

  const getCurrentUser = id => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => {
      const user = response.data
      setGContext({
        user
      })
      setLoading(false)
    })
  }

  useEffect(() => {
    getCurrentUser(2)
  }, [])

  return (
    <>
      <MyGlobalContext.Provider value={gContext}>
        {
          !loading && <UserList />          
        }
        <ClipLoader
          css={{}}
          size={150}
          color={"#123abc"}
          loading={loading}
        />
      </MyGlobalContext.Provider>
    </>
  )
}

export default App
