import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import styled from "styled-components"
import Algolia from "../components/Algolia"
import SEO from "../components/SEO"

const SearchPage = ({
  data: {
    allContentfulArtworks: { nodes: artworks },
  },
}) => {
  return (
    <Wrapper>
      <Layout>
        <SEO title="Search" description="This is the search page" />

        <section className="projects-page">
          <Algolia />
        </section>
      </Layout>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  min-height: 100vh;
  background: var(--clr-grey-10);
  nav {
    background: black;
  }
`

export const query = graphql`
  {
    allContentfulArtworks {
      nodes {
        avaible
        date
        description {
          description
        }
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        title
        category
        imgTag
        url
      }
    }
  }
`
export default SearchPage
