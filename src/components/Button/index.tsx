import React from "react"

// ******* Props

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  fontSize?: string
  noPaddings?: true
  variant?: "black" | "white"
  text: string
}

// ******* Components

const Button = ({
  fontSize,
  noPaddings,
  variant,
  disabled,
  className,
  text,
  ...rest
}: Props) => {
  // ------- Computed

  const fontSizeCondition = fontSize || "text-lg"

  const padding = !noPaddings ? "py-3 px-8" : ""

  const variantStyle =
    variant === "black" ? "bg-black" : variant === "white" ? "bg-white" : ""

  const textVariantStyle = variant === "black" ? "text-white" : "text-black"

  const opacityStyle = disabled ? "opacity-50" : ""

  const computedStyle = `${fontSizeCondition} ${padding} ${variantStyle} ${textVariantStyle} ${opacityStyle} ${className}`

  // ------- Render

  return (
    <button
      className={`rounded-full font-bold sm:leading-9 ${computedStyle}`}
      {...rest}
    >
      {text}
    </button>
  )
}

export default Button
