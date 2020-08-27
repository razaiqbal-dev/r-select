import React, { useState, useEffect } from 'react'

const SingleSelect = (props) => {
  const [collapsed, setCollapsed] = useState(false)

  const [selected, setSelected] = useState({
    title: props.title,
    value: ''
  })

  const handleCollapsed = () => {
    setCollapsed((prevState) => !prevState)
  }

  const handleSelected = (option) => {
    setSelected({
      title: option.name,
      value: option.value
    })
  }

  useEffect(() => {
    setCollapsed(false)
  }, [selected])

  return (
    <React.Fragment>
      <div
        onClick={handleCollapsed}
        style={props.style ? props.style : styles.select}
        setSelected={props.setSelected(selected)}
      >
        {selected.title}
      </div>

      {collapsed &&
        props.options.map((option, index) => (
          <div
            style={styles.options}
            data-option-value={option.value}
            onClick={() => handleSelected(option)}
            key={index}
          >
            {option.name}
          </div>
        ))}
    </React.Fragment>
  )
}

export default SingleSelect

const styles = {}

styles.select = {
  border: '1px solid #f5f5f5',
  width: '15rem',
  borderRadius: '15px',
  padding: '.5rem 1rem',
  color: '#5c5c5c',
  fontWeight: '400'
}

styles.options = {
  ...styles.select,
  border: 'none',
  borderBottom: '1px solid #f5f5f5',
  borderRadius: 'none',
  fontSize: '14px'
}
