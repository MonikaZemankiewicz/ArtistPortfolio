import React from "react"
import Title from "./Title"
import Artwork from "./Artwork"
import { Link } from "gatsby"
import styled from "styled-components"
import SearchButtons from "./SearchButtons"

const Artworks = ({ artworks: data, title, page }) => {
  const [artworks, setArtworks] = React.useState(data)
  const setBackToAll = () => {
    setArtworks(data)
  }

  return (
    <Wrapper className="section">
      <Title title={title || "Gallery"} />
      {page && (
        <SearchButtons
          artworks={data}
          setArtworks={setArtworks}
          setBackToAll={setBackToAll}
        />
      )}
      <div className="section-center">
        {artworks.map((artwork, index) => {
          return <Artwork key={artwork.id} index={index} {...artwork} />
        })}
      </div>
      {!page && (
        <Link to="/artworks" className="btn center-btn">
          Full Gallery
        </Link>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .center-btn {
    margin-top: 3rem;
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
      background: var(--clr-green-blue);
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
          font-size: 0.8rem;
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
        height: 15rem;
      }
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 1200px) {
      .img {
        height: 15rem;
      }
    }
  }
  a {
    display: block;
    width: 9rem;
    text-align: center;
    margin: 0 auto;
  }
`

export default Artworks
