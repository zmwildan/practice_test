import React from "react"
export default props => {
  return (
    <input
      type={"text"}
      value={props.value}
      onChange={e => props.onChange(e)}
      name={props.name}
    />
  )
}
