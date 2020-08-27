import React, { useState } from 'react'

const SingleSelect = (props) => {
  const [collapsed, setCollapsed] = useState(false)

  const handleCollapsed = () => {
    setCollapsed((prevState) => !prevState)
  }
  return (
    <React.Fragment>
      <div
        onClick={handleCollapsed}
        style={props.style ? props.style : styles.select}
      >
        {props.title}
      </div>

      {collapsed && props.options.map((option) => <div key=''>{option}</div>)}
    </React.Fragment>
  )
}

export default SingleSelect

const styles = {}

styles.select = {
  border: '1px solid'
}
