module.exports = {
  pathPrefix: "blog",
  siteMetadata: {
    title: `Mitesh Shah's Blog`,
    name: `Mitesh Shah's Blog`,
    siteUrl: `http://mitesh1612.github.io/blog`,
    description: `This is my blog developed using Gatsby.Js and using the Novella Theme`,
    hero: {
      heading: `Welcome to my personal blog.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/mitesh_1612`,
      },
      {
        name: `github`,
        url: `https://github.com/mitesh1612`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/mitesh1612`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/mitesh-shah16`,
      }
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
