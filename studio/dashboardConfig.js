export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e33cadb79dfa889c5b057fa',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-dmhxmp4s',
                  apiId: '353eaded-0e76-4c9a-b911-cd2c79d0a566'
                },
                {
                  buildHookId: '5e33cadc1b9484f687aebbba',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-martiq9e',
                  apiId: 'c58d63cd-51d1-459d-918a-9412654eecfa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/parksunwoo/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-martiq9e.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
