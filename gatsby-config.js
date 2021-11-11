module.exports = {
  siteMetadata: {
    siteUrl: 'https://themihel.me',
    title: 'themihel.me',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'pk1fahuo',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'themihel.me | Mischa Helfenstein',
        short_name: 'themihel.me',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#000000',
        display: 'standalone',
        icon: 'static/favicon.png',
        icons: [{
          src: 'static/launcher-icons/icon-128x128.png',
          sizes: '128x128',
          type: 'image/png',
        }, {
          src: 'static/launcher-icons/apple-touch-icon.png',
          sizes: '152x152',
          type: 'image/png',
        }, {
          src: 'static/launcher-icons/ms-touch-icon-144x144-precomposed.png',
          sizes: '144x144',
          type: 'image/png',
        }, {
          src: 'static/launcher-icons/chrome-touch-icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        }],
      },
    },
  ],
};
