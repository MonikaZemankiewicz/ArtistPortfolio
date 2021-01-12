import React from "react"
import styled from "styled-components"

const SearchButtons = ({ artworks, setArtworks, setBackToAll }) => {
  const [index, setIndex] = React.useState(0)
  const categories = [
    ...new Set(
      artworks.map(artwork => {
        return artwork.category
      })
    ),
    "all",
  ]

  const showArtworks = (category, categoryIndex) => {
    setIndex(categoryIndex)
    if (category === "all") {
      setBackToAll()
    } else {
      const tempArtworks = artworks.filter(
        artwork => artwork.category === category
      )
      setArtworks(tempArtworks)
    }
  }

  return (
    <Wrapper>
      {categories.map((category, categoryIndex) => {
        return (
          <button
            key={categoryIndex}
            className={index === categoryIndex ? "active" : undefined}
            onClick={() => showArtworks(category, categoryIndex)}
          >
            {category}
          </button>
        )
      })}
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: flex;
  margin-bottom: 0;
  justify-content: center;
  flex-wrap: wrap;
  button {
    margin: 0.5rem;
    text-transform: capitalize;
    background: transparent;
    border: transparent;
    color: var(--clr-grey-6);
    letter-spacing: var(--spacing);
    font-size: 1.2rem;
    padding: 0.25rem;
    cursor: pointer;
    outline: none;
    transition: var(--transition);
    border-radius: var(--radius);
  }
  button:hover,
  button.active {
    box-shadow: 0px 1.5px 0 var(--clr-grey-6);
    background: var(--clr-burgundy);
    color: white;
  }
`
export default SearchButtons
