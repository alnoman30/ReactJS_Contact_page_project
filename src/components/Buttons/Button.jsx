import React from 'react'


import style from './button.module.css'

const Button = (props) => {
  const{isOutline, text, icon} = props;
  return (
    <div>
      <button className={isOutline ? style.outline_btn :style.primary_button}>
      <span className={style.icon}>{icon}</span>
      {text}
      </button>
    </div>
  )
}

export default Button
