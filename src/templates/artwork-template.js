import React from "react"
import Layout from "../components/Layout"
import Image from "gatsby-image"
import { graphql } from "gatsby"
import styled from "styled-components"
import { FaStore, IoCloseCircleOutline } from "react-icons/fa"
import { DiscussionEmbed } from "disqus-react"
import Modal from "react-modal"
import closebtn from "../assets/closebtn.svg"
import SEO from "../components/SEO"

const ArtworkTemplate = ({
  data: {
    artwork: { title, image, description, url, imgTag },
  },
}) => {
  const disqusShortname = "artistic-portfolio"
  const disqusConfig = {
    url: "https://zemankiewicz-art.netlify.app/artworks/" + title,
    identifier: title,
    title: title,
  }

  const [modalIsOpen, setModalIsOpen] = React.useState(false)

  return (
    <Wrapper>
      <Layout>
        <SEO title={title} description="Single artwork page" />
        <section className="details-page">
          <div onClick={() => setModalIsOpen(true)} className="img-container">
            <Image fluid={image.fluid} className="details-img"></Image>
          </div>

          <article className="about-text">
            <p>- {description.description} -</p>
            <div className="project-stack">
              {imgTag.map(item => {
                return <span key={item.id}>{item}</span>
              })}
            </div>
            <div className="project-links">
              <a href={url}>
                <FaStore className="shop-icon" />
              </a>
            </div>
          </article>
          <div className="comments-wrapper">
            <DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </div>
        </section>
      </Layout>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        ariaHideApp={false}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.95)",
            zIndex: 300,
          },
          content: {
            position: "absolute",
            top: "60px",
            left: "40px",
            right: "40px",
            bottom: "40px",
            border: "none",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "none",
            backgroundColor: "transparent",
          },
        }}
      >
        <button
          className="modal__close-btn"
          onClick={() => setModalIsOpen(false)}
        >
          <img src={closebtn} alt="close modal" />
        </button>
        <Image fluid={image.fluid} className="modal__img"></Image>
      </Modal>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .details-page {
    padding: 7rem 2.5rem;
    text-align: center;

    .image-container {
      max-height: 30rem;
    }

    .about-text {
      margin: 2rem;
      height: 11rem;
      width: fit-content;
      margin-left: auto;
      margin-right: auto;
      border-radius: 1rem;
      padding: 1rem;
      border: 2px solid #555;
      background: rgba(140, 115, 115, 0.3);
    }

    .shop-icon {
      color: white;
      font-size: 2rem;
      margin-right: 0.5rem;
      margin-top: 0.5rem;
      transition: var(--transition);
    }
    .shop-icon:hover {
      color: var(--clr-primary-1);
    }

    h3 {
      color: var(--clr-primary-6);
    }

    .img-container {
    }

    .details-img {
      max-width: 700px;
      height: auto;
      width: auto;
      border: 2px solid #555;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 2rem;
    }

    p {
      text-transform: uppercase;
    }
    .comments-wrapper {
      margin: 3rem auto;
      background: rgba(140, 115, 115, 0.7);
      max-width: 800px;
      border-radius: 1rem;
    }
    #disqus_thread {
      margin: 1rem 1rem;
      border-radius: 1rem;
    }
  }
`

export const query = graphql`
  query GetSingleArtwork($title: String) {
    artwork: contentfulArtworks(title: { eq: $title }) {
      category
      description {
        description
      }
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      title
      url
      imgTag
    }
  }
`

export default ArtworkTemplate
