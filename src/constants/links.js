import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about/",
  },
  {
    id: 3,
    text: "gallery",
    url: "/artworks/",
  },
  {
    id: 4,
    text: "order",
    url: "/order/",
  },
  {
    id: 5,
    text: "contact",
    url: "/contact/",
  },
  {
    id: 6,
    text: "search",
    url: "/search/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
