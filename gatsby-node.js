// gatsby-node.js
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  // Delete the original page (since we're going to create custom pages)
  deletePage(page)

  // Create English version (default)
  createPage({
    ...page,
    context: {
      ...page.context,
      language: 'en',
      i18n: {
        language: 'en',
        routed: false,
        defaultLanguage: 'en',
        generateDefaultLanguagePage: true
      }
    }
  })

  // Create French version with /fr/ prefix
  createPage({
    ...page,
    path: `/fr${page.path}`,
    context: {
      ...page.context,
      language: 'fr',
      i18n: {
        language: 'fr',
        routed: true,
        defaultLanguage: 'en',
        generateDefaultLanguagePage: false
      }
    }
  })
}