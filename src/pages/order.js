import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import SubBackground from "../components/SubBackground"

const order = () => {
  return (
    <Layout>
      <SEO title="Order" description="This is the order page" />
      <SubBackground>
        <section className="contact-page">
          <article className="contact-form">
            <h3> Describe your order</h3>
            <form action="https://formspree.io/f/xgeppdgr" method="POST">
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
                  name="description"
                  rows="5"
                  placeholder="Describe your order here..."
                  className="form-control"
                  required
                />
                <label htmlFor="Deadline">
                  If you need the order to be ready before a certain date,
                  please specify it:
                </label>
                <input type="date" name="deadline" className="form-control" />

                <button type="submit" className="submit-btn btn">
                  send
                </button>
              </div>
            </form>
          </article>
        </section>
      </SubBackground>
    </Layout>
  )
}

export default order
