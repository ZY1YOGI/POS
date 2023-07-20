import React from 'react'
import style from './input.module.css'

export default function Input() {
  return (
    <div className={style.container}>
      <label htmlFor="input" className="text">Name:</label>
      <input type="text" placeholder="username" name="input" className="input" />
    </div>
  )
}
