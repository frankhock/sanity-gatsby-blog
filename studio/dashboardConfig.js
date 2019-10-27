export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5db5f65de3158e4486b5fa4b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-89aiyjyn',
                  apiId: 'f989a63b-4f1d-4b21-ad0c-6553a3a35414'
                },
                {
                  buildHookId: '5db5f65ea35d1f19c1348446',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-cnf5ugqd',
                  apiId: '1e7303ff-7be5-4fb8-bad5-7ca623e2dd99'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/frankhock/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-cnf5ugqd.netlify.com', category: 'apps'}
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
