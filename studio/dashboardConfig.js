export default {
  widgets: [
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
                  buildHookId: '5ed4b1891c84485c28327c6e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-tqjw8xkf',
                  apiId: '3b5c83f5-b537-40a2-8931-b42c2e4f559a'
                },
                {
                  buildHookId: '5ed4b18902b1494d3eb588cb',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-d7mr8ach',
                  apiId: '44b40ab6-43a9-457f-899d-0c5632037c29'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/deepjyotipaulhere/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-d7mr8ach.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
