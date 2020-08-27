import React from 'react'

import { ExampleComponent, SingleSelect } from 'r-select'
import 'r-select/dist/index.css'

const options = [1, 2, 3]
const App = () => {
  return <SingleSelect style={style} title='Select option' options={options} />
}

export default App

const style = {
  border: '1px solid red'
}
