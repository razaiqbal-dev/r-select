# r-select

> Select component for react

[![NPM](https://img.shields.io/npm/v/r-select.svg)](https://www.npmjs.com/package/r-select) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save r-select
```

## Usage

```jsx
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
        style={style}
        title='Select Option'
        options={options}
        setSelected={(value) => handleSelected(value)}
      />
    </React.Fragment>
  )
}

export default App

const style = {
  border: '1px solid red'
}
```

## License

MIT © [https://github.com/razaIqbal07](https://github.com/https://github.com/razaIqbal07)
