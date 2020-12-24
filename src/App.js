import React, { useState, useEffect, useRef } from 'react'
import { MyGlobalContext } from './components/context/MyGlobalContext'
import axios from 'axios'
// import ClipLoader from "react-spinners/ClipLoader"
import 'antd/dist/antd.css'

// import UserList from './components/unit-23/UserList'
import TestUseMemo from './components/unit-23/TestUseMemo'



const App = () => {
  const h1 = useRef(null)
  // const [loading, setLoading] = useState(true)
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
      // setLoading(false)
    })
  }

  useEffect(() => {
    getCurrentUser(2)
  }, [])

  useEffect(() => {
    console.log(h1)
  }, [h1])

  return (
    <>
      <MyGlobalContext.Provider value={gContext}>
        <h1 ref={h1}>Buoi 23</h1>
        {/* {gContext.user && <UserList />} */}
        {/* <ClipLoader
          css={{}}
          size={150}
          color={"#123abc"}
          loading={loading}
        /> */}
      </MyGlobalContext.Provider>
      <TestUseMemo />
    </>
  )
}

export default App
