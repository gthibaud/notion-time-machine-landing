import type { GatsbyConfig } from 'gatsby';
require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
    jsxRuntime: `automatic`,
    siteMetadata: {
        siteUrl: 'https://www.notion-time-machine.com',
        url: 'https://www.notion-time-machine.com',
        title: 'Notion Time Machine',
        titleTemplate: 'Notion Time Machine – %s',
        description: 'Securely backup your Notion workspaces.',
        image: '/images/logo.png',
    },
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Notion Time Machine`,
                short_name: `Notion Time Machine`,
                start_url: `/`,
                background_color: `#FFFFFF`,
                theme_color: `#FFFFFF`,
                display: `standalone`,
                icon: `static/images/logo.png`,
            },
        },
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-postcss`,
        {
            resolve: `gatsby-plugin-web-font-loader`,
            options: {
                google: {
                    families: [`Inter\:400,500,600,700`],
                },
            },
        },
        {
            resolve: 'gatsby-plugin-google-tagmanager',
            options: {
                id: process.env.GOOGLE_TAG_MANAGER_ID || 'G-XXXXXXXXXX',
                includeInDevelopment: false,
                defaultDataLayer: { platform: 'gatsby' },
                enableWebVitalsTracking: true,
            },
        },
    ],
};

export default config;
