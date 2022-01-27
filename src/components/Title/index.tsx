import React from "react"

// ******* Props

interface Props {
  text: string
  className?: string
}

// ******* Component

const Title = ({ text, className }: Props) => (
  <div className={className}>
    <h1>{text}</h1>
  </div>
)

export default Title
