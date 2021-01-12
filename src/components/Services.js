import React from "react"
import Title from "./Title"
import services from "../constants/services"

const Services = () => {
  return (
    <section className="section bg-grey">
      <Title title="Order" />
      <div className="section-center services-center">
        {services.map(service => {
          const { id, icon, title, text } = service
          return (
            <a href="/order/" key={id} className="service">
              {icon}
              <h3>{title}</h3>
              <div className="underline"></div>
              <p>{text}</p>
            </a>
          )
        })}
      </div>
    </section>
  )
}

export default Services
