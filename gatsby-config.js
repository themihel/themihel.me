require('dotenv').config({ path: '.env' });

module.exports = {
  siteMetadata: {
    siteUrl: 'https://themihel.me',
    title: 'themihel.me',
  },
  plugins: [
    'gatsby-plugin-netlify',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-preact',
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-simple-analytics',
      options: {
        trackPageViews: true,
        events: true,
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
        include_favicon: false,
        icon: 'static/maskable/icon.png',
        icon_options: {
          purpose: 'any maskable',
        },
        icons: [
          {
            src: 'static/maskable/icon_x48.png',
            sizes: '48x48',
            type: 'image/png',
          },
          {
            src: 'static/maskable/icon_x72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: 'static/maskable/icon_x96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: 'static/maskable/icon_x128.png',
            sizes: '128x128',
            type: 'image/png',
          },
          {
            src: 'static/maskable/icon_x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'static/maskable/icon_x384.png',
            sizes: '384x384',
            type: 'image/png',
          },
          {
            src: 'static/maskable/icon_x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    'gatsby-plugin-sitemap',
  ],
};
