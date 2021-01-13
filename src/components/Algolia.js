import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import algoliasearch from "algoliasearch/lite"
import { FaExpandAlt } from "react-icons/fa"
import { FaStore } from "react-icons/fa"
import logo from "../assets/search-by-algolia-light-background.png"

import { InstantSearch, SearchBox, connectHits } from "react-instantsearch-dom"

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)
const NewHits = connectHits(({ hits }) => {
  return hits.map(item => {
    const {
      objectID,
      image,
      title,
      avaible,
      description: { description },
      category,
      url,
    } = item
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
        <h3>{title}</h3>
        <div className="section">
          <p>- {category} -</p>
          <p> {description.description}</p>
          {avaible && (
            <div>
              <p className="avaible">Avaible for sale</p>
              <div className="project-links">
                <a href={url}>
                  <FaStore className="project-icon" />
                </a>
              </div>
            </div>
          )}
        </div>
      </article>
    )
  })
})
const Search = () => {
  return (
    <Wrapper>
      <InstantSearch
        indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
        searchClient={searchClient}
      >
        <SearchBox />
        <Container className="section-center">
          <NewHits />
        </Container>
      </InstantSearch>
      <div className="algolia-logo">
        <img src={logo} alt="logo-algolia " height="15px" width="100px" />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);

  .algolia-logo {
    text-align: center;
    margin-top: 1rem;
  }

  .section {
    margin: 2rem;
    height: 12rem;
    box-shadow: var(--dark-shadow);
    border-radius: var(--radius);
    transition: var(--transition);
    border: 1px grey;
    padding: 1rem;
    background: var(--clr-grey-10);
  }
  p {
    margin-block-end: 0.5em;
    font-size: 1rem;
  }

  .avaible {
    font-weight: bold;
  }

  .project-icon {
    color: var(--clr-burgundy);
    margin-bottom: 0rem;
    margin-right: 0rem;
  }
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
      margin-bottom: 0.5rem;
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
        outline-color: var(--clr-grey-10);
        border-radius: 1rem;
      }
      button {
        background: var(--clr-purple);
        border-radius: 1rem;
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
