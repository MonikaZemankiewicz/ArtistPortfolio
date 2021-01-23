import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    file(relativePath: { eq: "background.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const SubBackground = ({ children, image }) => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <Wrapper>
      <BackgroundImage
        Tag="div"
        fluid={image || fluid}
        className="bcg"
        preserveStackingContext={true}
      >
        {children}
      </BackgroundImage>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .bcg {
    /* obowiązkowe */
    min-height: 100vh;
    margin-top: -5rem;
    display: grid;
    place-items: center;
  }
`
export default SubBackground
