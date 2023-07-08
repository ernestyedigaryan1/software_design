import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs',
    component: ComponentCreator('/docs', '50e'),
    routes: [
      {
        path: '/docs/functional-programming/categories_and_functors',
        component: ComponentCreator('/docs/functional-programming/categories_and_functors', 'e85'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/functional-programming/fp_introduction',
        component: ComponentCreator('/docs/functional-programming/fp_introduction', '3f6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/functional-programming/hometask',
        component: ComponentCreator('/docs/functional-programming/hometask', 'de4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/functional-programming/is_js_functional',
        component: ComponentCreator('/docs/functional-programming/is_js_functional', 'f70'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/functional-programming/main_concepts',
        component: ComponentCreator('/docs/functional-programming/main_concepts', 'c62'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/functional-programming/type_classes',
        component: ComponentCreator('/docs/functional-programming/type_classes', '40e'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '8e9'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
