import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import Abouts from "../components/Abouts"
import SEO from "../components/SEO"

const About = ({
  data: {
    about: { nodes },
  },
}) => {
  const { title, info, image } = nodes[0]
  return (
    <Layout>
      <SEO
        title="About"
        description="This is the about page with an Artist Statement"
      />
      <section className="about-page">
        <div className="section-center about-center">
          {<Image fluid={image.fluid} className="about-img"></Image>}
          <article className="about-text">
            <Title title={title} />
            <p>{info.info}</p>
          </article>
        </div>
      </section>
      <Abouts page />
    </Layout>
  )
}

export const query = graphql`
  {
    about: allContentfulArtist {
      nodes {
        title
        info {
          info
        }
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default About
