export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '615efd00201e9226589b009d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-vcknpkgv',
                  apiId: '51ff59bd-2312-4875-bce0-8cd8d6590929'
                },
                {
                  buildHookId: '615efd00b8fcb427440bd2d3',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-9pfffzp8',
                  apiId: '00a6e099-4ec1-4321-afe0-2e6d876563b7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/CamiloSysAdm/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-9pfffzp8.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
