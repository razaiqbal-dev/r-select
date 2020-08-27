import React, { useState } from 'react'

import { SingleSelect } from 'r-select'

const options = [
  {
    name: 'Apple',
    value: 'apple'
  },
  {
    name: 'Samsung',
    value: 'samsung'
  },
  {
    name: 'Microsoft',
    value: 'microsoft'
  },
  {
    name: 'Google',
    value: 'google'
  },
  {
    name: 'OnePlus',
    value: 'oneplus'
  }
]

const App = () => {
  const [selected, setSelected] = useState()

  const handleSelected = (value) => {
    setSelected(value)
  }

  return (
    <React.Fragment>
      <div>{JSON.stringify(selected)}</div>
      <SingleSelect
        // style={style}
        title='Select Option'
        options={options}
        setSelected={(value) => handleSelected(value)}
      />
    </React.Fragment>
  )
}

export default App

const style = {}
