import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allContentfulAbouts(sort: { order: ASC, fields: category }) {
      nodes {
        category
        desc
      }
    }
  }
`

const Abouts = ({ page }) => {
  const data = useStaticQuery(query)
  const {
    allContentfulAbouts: { nodes: abouts },
  } = data
  const [value, setValue] = React.useState(0)

  const { category, desc } = abouts[value]

  return (
    <section className="section jobs">
      <Title title="Bio" />
      <div className="jobs-center">
        {/* buttons */}
        <div className="btn-container">
          {abouts.map((item, index) => {
            return (
              <button
                key={item.strapiId}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.category}
              </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{category}</h3>
          {desc.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item}</p>
              </div>
            )
          })}
        </article>
      </div>
      {!page && (
        <Link to="/about" className="btn center-btn">
          Artist Statement
        </Link>
      )}
    </section>
  )
}

export default Abouts
