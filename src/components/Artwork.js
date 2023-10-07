import React from "react"
import Image from "gatsby-image"
import { FaExpandAlt, FaStore } from "react-icons/fa"

const Artwork = ({
  title,
  url,
  imgTag,
  image,
  description,
  category,
  avaible,
}) => {
  return (
    <article>
      <div className="container">
        <Image fluid={image.fluid} className="img" alt={title} />
        <div className="info">
          <a href={`/artworks/${title}`}>
            <FaExpandAlt className="open-icon" aria-label="open-details" />
          </a>
          <p>{description.description}</p>
          <div className="project-stack">
            {imgTag.map(item => {
              return <span key={item.id}>{item}</span>
            })}
          </div>
          {avaible && (
            <div className="project-links">
              <a href={url}>
                <FaStore className="project-icon" />
              </a>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

Artwork.propTypes = {}

export default Artwork
