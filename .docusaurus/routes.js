import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/afex-docs/blog',
    component: ComponentCreator('/afex-docs/blog', '9d0'),
    exact: true
  },
  {
    path: '/afex-docs/blog/archive',
    component: ComponentCreator('/afex-docs/blog/archive', 'b55'),
    exact: true
  },
  {
    path: '/afex-docs/blog/authors',
    component: ComponentCreator('/afex-docs/blog/authors', 'c86'),
    exact: true
  },
  {
    path: '/afex-docs/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/afex-docs/blog/authors/all-sebastien-lorber-articles', '174'),
    exact: true
  },
  {
    path: '/afex-docs/blog/authors/yangshun',
    component: ComponentCreator('/afex-docs/blog/authors/yangshun', 'a24'),
    exact: true
  },
  {
    path: '/afex-docs/blog/first-blog-post',
    component: ComponentCreator('/afex-docs/blog/first-blog-post', 'd47'),
    exact: true
  },
  {
    path: '/afex-docs/blog/long-blog-post',
    component: ComponentCreator('/afex-docs/blog/long-blog-post', '898'),
    exact: true
  },
  {
    path: '/afex-docs/blog/mdx-blog-post',
    component: ComponentCreator('/afex-docs/blog/mdx-blog-post', '7a1'),
    exact: true
  },
  {
    path: '/afex-docs/blog/tags',
    component: ComponentCreator('/afex-docs/blog/tags', '163'),
    exact: true
  },
  {
    path: '/afex-docs/blog/tags/docusaurus',
    component: ComponentCreator('/afex-docs/blog/tags/docusaurus', '2cf'),
    exact: true
  },
  {
    path: '/afex-docs/blog/tags/facebook',
    component: ComponentCreator('/afex-docs/blog/tags/facebook', '13f'),
    exact: true
  },
  {
    path: '/afex-docs/blog/tags/hello',
    component: ComponentCreator('/afex-docs/blog/tags/hello', '4c1'),
    exact: true
  },
  {
    path: '/afex-docs/blog/tags/hola',
    component: ComponentCreator('/afex-docs/blog/tags/hola', '770'),
    exact: true
  },
  {
    path: '/afex-docs/blog/welcome',
    component: ComponentCreator('/afex-docs/blog/welcome', '3b7'),
    exact: true
  },
  {
    path: '/afex-docs/markdown-page',
    component: ComponentCreator('/afex-docs/markdown-page', '0d5'),
    exact: true
  },
  {
    path: '/afex-docs/search',
    component: ComponentCreator('/afex-docs/search', '8fd'),
    exact: true
  },
  {
    path: '/afex-docs/docs',
    component: ComponentCreator('/afex-docs/docs', '814'),
    routes: [
      {
        path: '/afex-docs/docs',
        component: ComponentCreator('/afex-docs/docs', 'df8'),
        routes: [
          {
            path: '/afex-docs/docs',
            component: ComponentCreator('/afex-docs/docs', '0be'),
            routes: [
              {
                path: '/afex-docs/docs/category/introduction',
                component: ComponentCreator('/afex-docs/docs/category/introduction', 'bc6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/afex-docs/docs/category/salary-information-file-sif',
                component: ComponentCreator('/afex-docs/docs/category/salary-information-file-sif', '4d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/afex-docs/docs/introduction/intro',
                component: ComponentCreator('/afex-docs/docs/introduction/intro', 'fbd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/afex-docs/docs/salary-information-file/create-a-sif',
                component: ComponentCreator('/afex-docs/docs/salary-information-file/create-a-sif', 'cd2'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/afex-docs/',
    component: ComponentCreator('/afex-docs/', 'a3c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
