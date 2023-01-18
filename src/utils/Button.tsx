import React from 'react'

function Button({text = "", handler = () => {}}) {
  return (
    <button onClick={handler} className="standard-outline-button">{text}</button>
  )
}

export default Button