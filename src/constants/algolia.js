const contentfulQuery = `
  {
    allContentfulArtworks {
      nodes {
        id
        avaible
        date
        description {
          description
        }
        image {
          fluid {
            src
            aspectRatio
            base64
            sizes
            srcSet
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
function pageToAlgoliaRecord({
  id,
  description,
  title,
  category,
  image,
  avaible,
}) {
  return {
    objectID: id,
    title,
    description: { description },
    category,
    image: { ...image.fluid },
    avaible,
  }
}

const queries = [
  {
    query: contentfulQuery,
    transformer: ({ data }) =>
      data.allContentfulArtworks.nodes.map(pageToAlgoliaRecord),
  },
]

module.exports = queries
