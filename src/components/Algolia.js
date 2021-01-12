import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import Title from "./Title"
import algoliasearch from "algoliasearch/lite"
import { FaExpandAlt } from "react-icons/fa"

import { InstantSearch, SearchBox, connectHits } from "react-instantsearch-dom"

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)
const NewHits = connectHits(({ hits }) => {
  return hits.map(item => {
    const { objectID, image, title, description } = item
    return (
      <article key={objectID}>
        <div className="container">
          <Image fluid={image} className="img" alt={title} />
          <div className="info">
            <a href={`/artworks/${title}`}>
              <FaExpandAlt className="open-icon" aria-label="open-details" />
            </a>
          </div>
        </div>
        <h4>{title}</h4>
        <p>{description}</p>
      </article>
    )
  })
})
const Search = () => {
  return (
    <Wrapper>
      <Title title="Algolia Search" />
      <InstantSearch
        indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
        searchClient={searchClient}
      >
        <SearchBox />
        <Container className="section-center">
          <NewHits />
        </Container>
      </InstantSearch>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .section-center {
    margin-top: 4rem;
    max-width: var(--max-width);
    display: grid;
    gap: 2rem;
    /* safari workaround */
    grid-gap: 2rem;
    .img {
      height: 20rem;
      border-radius: var(--radius);
      transition: var(--transition);
    }
    article {
      box-shadow: var(--light-shadow);
      border-radius: var(--radius);
      transition: var(--transition);
    }
    article:hover {
      box-shadow: var(--dark-shadow);
    }
    .container {
      position: relative;
      overflow: hidden;
      border-radius: var(--radius);
      background: var(--clr-burgundy);
      &:hover .img {
        opacity: 0.2;
      }
      .info {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        opacity: 0;
        transition: var(--transition);
        color: var(--clr-white);
        text-align: center;
        p {
          margin-bottom: 0.5rem;
          color: var(--clr-white);
          text-transform: uppercase;
        }

        .project-links {
          .project-icon {
            display: inline-block;
          }
        }
      }
      &:hover .info {
        opacity: 1;
      }
    }
    @media (min-width: 768px) {
      .img {
        height: 15rem;
      }
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      .img {
        height: 12.5rem;
      }
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 1200px) {
      .img {
        height: 15rem;
      }
    }
  }
  padding: 5rem 0;
  .ais-SearchBox {
    width: 90vw;
    max-width: 400px;
    margin: 0 auto;
    margin-bottom: 2rem;
    form {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 3rem 3rem;
      input,
      button {
        border: transparent;
        font-size: 1.1rem;
      }
      input {
        border: transparent;
        padding: 0.5rem 1rem;
        outline-color: var(--clr-grey-9);
      }
      button {
        background: var(--clr-grey-5);
        svg {
          fill: var(--clr-white);
        }
      }
      button.ais-SearchBox-reset {
        background: var(--clr-red-light);
      }
    }
  }
`

const Container = styled.div`
  display: grid;
  gap: 2rem;
  /* safari workaround */
  grid-gap: 2rem;
  article {
    background: var(--clr-white);
    text-align: center;
    border-radius: var(--radius);
    box-shadow: var(--ligth-shadow);
    transition: var(--transition);
    &:hover {
      transform: scale(1.001);
      box-shadow: var(--dark-shadow);
    }
    h4 {
      padding: 1rem;
      margin-bottom: 0;
    }
  }
  .img {
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    height: 10rem;
  }
  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    .img {
      height: 8.5rem;
    }
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export default Search
