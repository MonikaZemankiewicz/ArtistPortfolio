import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Artworks from "../components/Artworks"
import styled from "styled-components"
import SEO from "../components/SEO"

const ArtworksPage = ({
  data: {
    allContentfulArtworks: { nodes: artworks },
  },
}) => {
  return (
    <Wrapper>
      <Layout>
        <SEO title="Gallery" description="This is the gallery page" />

        <section className="projects-page">
          <Artworks artworks={artworks} title="Gallery" page />
        </section>
      </Layout>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  min-height: 100vh;
  background: var(--clr-grey-10);
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
export default ArtworksPage
