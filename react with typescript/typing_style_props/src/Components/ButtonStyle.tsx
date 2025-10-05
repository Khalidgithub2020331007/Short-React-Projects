import React from 'react'
type ButtonStyle={
    btnStyle: React.CSSProperties;
}

const ButtonStyle = (props:ButtonStyle) => {
  return (
    <div style={props.btnStyle}>
      ButtonStyle
    </div>
  )
}

export default ButtonStyle
