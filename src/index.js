import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component yuhu: {text}</div>
}

export { default as SingleSelect } from './components/SingleSelect'
