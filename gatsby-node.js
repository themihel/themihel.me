const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  console.info('[CreateStaticPages] Start creating static pages');

  const staticPageTemplate = path.resolve('./src/templates/StaticPage.js');
  const { data } = await graphql(`
    query {
      staticPages: allSanityStaticPage {
        nodes {
          id
          title
          slug {
            current
          }
        }
      }
    }
  `);

  data.staticPages.nodes.forEach((staticPage) => {
    actions.createPage({
      path: `${staticPage.slug.current}`,
      component: staticPageTemplate,
      context: {
        staticPageId: staticPage.id,
      },
    });

    console.info(
      `[CreateStaticPages] Created page for ${staticPage.title} (path: /${staticPage.slug.current})`,
    );
  });
};
