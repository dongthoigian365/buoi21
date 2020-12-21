import React, { useState } from 'react'
import { MyGlobalContext } from './components/context/MyGlobalContext'

import UserList from './components/unit-23/UserList'

const App = () => {
  const [gContext] = useState({
    user: null
  })

  return (
    <>
      <MyGlobalContext.Provider value={gContext}>
        <UserList />
      </MyGlobalContext.Provider>
    </>
  )
}

export default App
