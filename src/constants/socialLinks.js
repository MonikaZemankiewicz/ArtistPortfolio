import React from "react"
import { FaFacebookF, FaInstagram, FaRegEnvelope } from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaInstagram className="social-icon"></FaInstagram>,
    url: "https://www.instagram.com/basiek_art/",
  },
  {
    id: 2,
    icon: <FaRegEnvelope className="social-icon"></FaRegEnvelope>,
    url: "mailto:zemankiewiczart@gmail.com",
  },
  {
    id: 3,
    icon: <FaFacebookF className="social-icon"></FaFacebookF>,
    url: "https://www.facebook.com",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
