import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import Background from "../components/Background"

const Contact = ({
  data: {
    contact: { nodes },
  },
}) => {
  const { name, email, phoneNumber } = nodes[0]
  return (
    <Layout>
      <SEO title="Contact" description="This is the contact page" />
      <Background>
        <section className="contact-page">
          <article className="contact-form">
            <div className="contact-info">
              <h3>Contact Info</h3>
              <p>{name}</p>
              <div className="contact-line">
                <p>{phoneNumber}</p>
              </div>
              <div className="contact-line">
                <p>email: {email}</p>
              </div>
            </div>
            <h3> Contact me</h3>
            <form action="https://formspree.io/f/xdopppzk" method="POST">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="form-control"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="form-control"
                  required
                />
                <textarea
                  name="message"
                  rows="5"
                  placeholder="message"
                  className="form-control"
                  required
                />
                <button type="submit" className="submit-btn btn">
                  send
                </button>
              </div>
            </form>
          </article>
        </section>
      </Background>
    </Layout>
  )
}

export const query = graphql`
  {
    contact: allContentfulContact {
      nodes {
        name
        email
        phoneNumber
      }
    }
  }
`

export default Contact
