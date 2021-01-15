import React from "react"
import { FaBrush, FaMagic, FaPortrait } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaPortrait className="service-icon" />,
    title: "Portraits",
    text: "Please specify the size and technique.",
  },
  {
    id: 2,
    icon: <FaBrush className="service-icon" />,
    title: "Paintings",
    text: `Specify what you want exactly. The size of the artwork is also very important.`,
  },
  {
    id: 3,
    icon: <FaMagic className="service-icon" />,
    title: "Graphics",
    text: `Is it a logo? A graphic for your company? Describe your requirements.`,
  },
]
