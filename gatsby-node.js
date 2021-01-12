const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetArtworks {
      artworks: allContentfulArtworks {
        nodes {
          title
        }
      }
    }
  `)

  result.data.artworks.nodes.forEach(artwork => {
    createPage({
      path: `/artworks/${artwork.title}`,
      component: path.resolve(`src/templates/artwork-template.js`),
      context: {
        title: artwork.title,
      },
    })
  })
}
