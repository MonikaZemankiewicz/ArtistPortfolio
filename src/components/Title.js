import React from "react"

const Title = ({ title }) => {
  return (
    <div className="section-title">
      <h2>{title || "default title"}</h2>
      <div className="undereline"></div>
    </div>
  )
}

export default Title
