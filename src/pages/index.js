import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Abouts from "../components/Abouts"
import Artworks from "../components/Artworks"
import styled from "styled-components"
import SEO from "../components/SEO"

export default ({ data }) => {
  const {
    allContentfulArtworks: { nodes: artworks },
  } = data

  return (
    <div>Page temporary down </div>
  )
}

const Wrapper = styled.section`
  /*.navbar {
    background: transparent;
  }*/
`
export const query = graphql`
  {
    allContentfulArtworks(filter: { featured: { eq: true } }) {
      nodes {
        avaible
        date
        description {
          description
        }
        image {
          fluid {
            src
          }
        }
        title
        category
        imgTag
      }
    }
  }
`

// ...GatsbyImageSharpFluid
