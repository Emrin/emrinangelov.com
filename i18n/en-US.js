module.exports = {
  common: {
    an_error_occurred: 'An error occurred',
    page_not_found: 'Page not found',
    please_define_title: 'Please define a title in the front matter',
    please_define_description:
      'Please define a description in the front matter',
    search: 'Search ("/" to focus)',
    version: 'Version'
  },
  iso: 'en',

  links: {
    download: 'Download',
    live_edit: 'Live Edit'
  },
  header: {
    links: [
      {
        name: 'Index',
        icon: 'code',
        slug: 'index'
      },
      {
        name: 'CV',
        icon: 'books',
        slug: 'cv'
      },
      {
        name: 'Blog',
        icon: 'blog',
        slug: 'blog'
      },
      {
        name: 'Contact',
        icon: 'resources',
        slug: 'contact'
      },
      // {
      //   name: 'Video Courses',
      //   icon: 'video',
      //   href: 'https://masteringnuxt.com/?utm_source=nuxt&utm_medium=link&utm_campaign=navbar_link'
      // }
    ],
    search: {
      placeholder: 'Search ("/" to focus)'
    }
  },
  homepage: {
    meta: {
      title: 'Emrin Angelov - Engineering Anything',
      description:
        'Build anything to perfection with the world\'s best engineer and computer scientist. Cutting-edge technology is the new normal.'
        // 'Build your next Vue.js application with confidence using NuxtJS. An open source framework making web development simple and powerful.'
    },
    welcome: {
      title: 'An {type}{br} Like No Other',
      description:
        'Looking for the right guy to build your thing? Well you\'ve arrived at the right place. There is no limit to what we can accomplish together.',
      get_started: 'Let\'s get started',
      previous_work: 'Check my works',
      get_updates: 'Get updates and memes to your inbox each month',
      video: 'Video produced by me, featuring myself, in person.',
    },
    why: {
      title: 'Why Work {together}',
      together: 'Together',
      try_nuxtjs_online: 'Get a Quote',
      modular: {
        title: 'Competence',
        description:
          "Through thorough work across the full spectrum of tools and technologies, I have acquired unrivaled competence in software craftsmanship. I also have a large repertoire of valuable contacts and relationships that specialize in particular areas. Whether your primary language is English, French, Bulgarian or Turkish, I will do my best to make you feel at ease. I am the expert that you can rely on."
      },
      performant: {
        title: 'Support',
        description:
          'You will get unmatched 24/7 support. I acknowledge how valuable proper support is. You will be getting not only technical and marketing support, but also leadership support. {break}Fast-forward yourself in the right direction, so you can always look up and out, and let me or my contacts look down and in.'
      },
      enjoyable: {
        title: 'Privacy',
        description:
          'It\'s just you and me. To anybody else, it\'s us. It goes without saying that I will not disclose any information that isn\'t intended to be public. If your project is dark web related (or on demand), then I will also obfuscate all your details for zero traceability. Also, I can keep secrets.'
      }
    },
    companies: {
      title: "An inclusive list of {expertise}"
    },
    modes: {
      title: 'What I {offer}',
      offer: 'Offer',
      ssr: {
        title: 'Craftsmanship',
        description:
          'Building. Upgrading. Automating. Improving. Craftsmanship means pouring the full suite of my skills and experiences into your ideas. I will also introduce you to specialists in particular areas such as finance, top tier marketing, or even entire other areas such as mechanical engineering, if need be.'
      },
      ssg: {
        title: 'Solidification',
        description:
          'Training and Consulting. Once you have an organism running, it\'s primordial that you solidify its stability, mainstream its maintenance and integration processes, and give your leadership with the mindset to win.{br}For this, I will first observe and analyze your systems in great detail. Then I will establish reports on improvements and changes, and then also do a performance grading. Then I will inject into your systems a tech focused version of Jocko\'s Leadership courses, along with a list of changes that will lead to minor-to-great improvements inside your organization.',
        proverbial: 'only proverbial'
      }
    },
    sponsors: {
      title: 'Sponsors',
      description:
        'NuxtJS is an MIT licensed open source project and completely free to use. However, the amount of effort needed to maintain and develop new features for the project is not sustainable without proper financial backing. If you run a business and are using Nuxt in a revenue-generating product, it makes business sense to sponsor Nuxt development: it ensures the project that your product relies on stays healthy and actively maintained. It can also help your exposure in the Vue/Nuxt community and makes it easier to attract Vue/Nuxt developers. If you are an individual user and have enjoyed the productivity of using Nuxt, consider donating as a sign of appreciation.',
      become_a_sponsor: 'Become a sponsor'
    },
    newsletter: {
      title: '{nuxt} Newsletter',
      description:
        'Get the latest Nuxt news to your inbox, curated by the NuxtJS team.',
      form: {
        email: 'Email',
        subscribing: 'Subscribing...',
        subscribe: 'Subscribe',
        subscribed_messages: {
          pre: 'An email to confirm your subscription has been sent to',
          post: '💚'
        }
      }
    }
  },
  design: {
    meta: {
      title: 'NuxtJS Design',
      description:
        'Download NuxtJS design resources (SVG, icons, emoji and favicon).'
    },
    title: '{nuxt} Design',
    description:
      'NuxtJS is an MIT licensed open source project and completely free to use. {break} You can freely use our logos as long as you mention NuxtJS and link to nuxtjs.org.',
    other_download_message:
      'You can also download our {favicon} or our {sketch} file.'
  },
  resources: {
    meta: {
      title: 'NuxtJS Resources',
      description:
        'Discover a panel of resources made by our partners. By using thoses affiliate resources links, you are helping us to maintain and develop the Open Source Framework.'
    },
    title: '{nuxt} Resources',
    description:
      'Discover a panel of resources made by our partners. By using thoses affiliate resources links, you are helping us to maintain and develop the Open Source Framework.',
    themes: {
      title: 'Themes'
    },
    modules: {
      title: 'Modules'
    },
    examples: {
      title: 'Examples'
    },
    faq: {
      title: 'FAQ'
    },
    videos: {
      title: 'Video Courses'
    }
  },
  shop: {
    meta: {
      title: 'The NuxtJS Shop',
      description:
        'You want to support the NuxtJS project and show your love to the rest of the community? Here our products with the best quality ever!'
    },
    title: 'The {nuxt} Shop',
    description:
      'You want to support the NuxtJS project and show your love to the rest of the community?{break} Here our products with the best quality ever!',
    button: 'Coming soon'
  },
  team: {
    meta: {
      title: 'NuxtJS Team',
      description:
        'NuxtJS has a very active and engaged team that is constantly striving to push Nuxt forward.'
    },
    title: '{nuxt} Team',
    description:
      'The development of NuxtJS and its ecosystem is guided by an international team. We have a very active and engaged team that is constantly striving to push Nuxt forward.'
  },
  themes: {
    meta: {
      title: 'NuxtJS Themes',
      description:
        'With the themes below built by our partners from Creative Tim and Theme Forest you can see how a real world application is built, with Nuxt.js stack behind.'
    },
    title: '{nuxt} Themes',
    description:
      'With the themes below built by our partners from Creative Tim and Theme Forest you can see how a real world application is built, with Nuxt.js stack behind.',
    button: 'GET IT for'
  },
  'video-courses': {
    meta: {
      title: 'NuxtJS Video Courses',
      description:
        'With the video courses below created by our partner VueSchool you can discover and learn more about the Nuxt.js Framework.'
    },
    title: '{nuxt} Video Courses',
    description:
      'With the video courses below you can discover and learn more about the Nuxt Framework.',
    cta: {
      discover: 'Discover Mastering Nuxt',
      start: 'START COURSE'
    }
  },
  sponsor: {
    meta: {
      title: 'About me',
      description:
        'You can support NuxtJS development via different methods and ensure regular updates to the framework.'
    },
    title: 'Sponsor {nuxt} Development',
    description:
      'NuxtJS is an MIT licensed open source project and completely free to use.{break} However, the amount of effort needed to maintain and develop new features for the project is not sustainable without proper financial backing.{break} You can support NuxtJS development via the following methods:',
    donations: {
      title: 'One-time donations',
      description: 'We accept donations through these channels'
    },
    pledges: {
      title: 'Recurring Pledges',
      description:
        'Recurring pledges come with exclusive perks, e.g. having your name listed in the NuxtJS GitHub repository, or have your company logo placed on this website. Become a nuxter or sponsor via {opencollective} (goes into a fund with transparent expense models supporting community efforts and events).'
    },
    become_a_sponsor: 'Become a sponsor'
  },
  support: {
    meta: {
      title: 'The NuxtJS Support',
      description:
        'Our NuxtJS team now offers official consulting services for your NuxtJS applications.'
    },
    title: 'Consulting {nuxt} Support',
    description:
      'Our {team} now offers official consulting services for your NuxtJS applications.{break} We offer different services depending of your needs, from technical support to custom development. Expect a reply within one business day, we can sign custom NDA and you can get a full refund if you are not satisfied with our service.',
    technical: {
      title: 'Technical support',
      description:
        'Get project audits, app deployments, custom development and technical support from the NuxtJS team.',
      start: 'Start chat',
      partner: {
        pre: 'We partnered with',
        post: 'to offer these services so we can focus on helping you as fast as possible.'
      }
    },
    entreprise: {
      title: 'for enterprise',
      description:
        'NuxtJS and the maintainers of thousands of other packages are working with Tidelift to deliver one enterprise subscription that covers all of the open source you use.{break} If you want the flexibility of open source and the confidence of commercial-grade software, this is for you.',
      partner: {
        pre: 'Available as part of the',
        post: 'subscription.'
      },
      learn_more: 'Learn more',
      request_a_demo: 'Request a demo'
    }
  },
  blog: {
    meta: {
      title: 'NuxtJS Blog',
      description:
        'Discover articles from the NuxtJS team and NuxtJS Community about NuxtJS, tips and tricks included!'
    },
    title: '{nuxt} Blog',
    description:
      'Discover articles from the {nuxtTeam} and {nuxtCommunity} about NuxtJS, tips and tricks included!',
    nuxt_team: 'NuxtJS Team',
    nuxt_community: 'Nuxt.js Community',
    contribute: 'Caught a mistake or want to contribute to this blog post?'
  },
  guide: {
    release_notes: 'Release Notes',
    toc_title: 'On this page'
  },
  quiz: {
    title: 'Quiz'
  },
  tryNewDocs: {
    msg1: 'Want to take a look at our new docs? Our ',
    link: 'new docs',
    msg2: 'are now in beta. Have fun!'
  },
  contribute: {
    title: 'Contributors',
    docs: 'Caught a mistake or want to contribute to the documentation?',
    blog: 'Caught a mistake or want to contribute to this blog post?',
    edit_on_github: 'Edit this page on GitHub!',
    msg1: 'Contribution for this page is now closed. If you would like to contribute please check out our',
    link: 'new docs'
  },
  example: {
    intro: 'In this example:'
  },
  codeSandbox: {
    open: 'See Example'
  },
  content: {
    guide: {
      prologue: 'Prologue',
      'getting-started': 'Getting Started'
    },
    api: {
      essential: 'Essential',
      pages: 'Pages',
      components: 'Components',
      utils: 'Utils',
      configuration: 'Configuration',
      programmatically: 'Programmatically',
      internals: 'Internals'
    },
    examples: {
      routing: 'Routing',
      dataFetching: 'Data Fetching',
      assetManagement: 'Asset Management',
      transitions: 'Transitions',
      seo: 'SEO',
      loading: 'Loading',
      miscellaneous: 'Miscellaneous',
      middleware: 'Middleware',
      plugins: 'Plugins',
      modules: 'Modules',
      customization: 'Customization',
      advanced: 'Advanced'
    },
    faq: {
      configuration: 'Configuration',
      development: 'Development',
      deployment: 'Deployment'
    },
    guides: {
      'get-started': 'Get Started',
      concepts: 'Concepts',
      features: 'Features',
      'directory-structure': 'Directory Structure',
      'configuration-glossary': 'Configuration Glossary',
      'internals-glossary': 'Internals Glossary',
      'components-glossary': 'Components Glossary',
      deployment: 'Deployment',
      examples: 'Examples'
    }
  },
  footer: {
    links: {
      discover: {
        title: 'Discover',
        shop: 'Our Goodies Store',
        consulting: 'Training & consultancy',
        sponsorNuxt: 'Sponsoring & donations'
      },
      about: {
        title: 'Help',
        team: 'Our team',
        design: 'Design kit',
        contact: 'Contact us'
      },
      support: {
        title: 'Support',
        resources: 'Resources',
        discord: 'Chat with us',
        contributionGuide: 'Contribution guide'
      }
    }
  },
  cookies: {
    consent: 'This site uses cookies.',
    linkLabel: 'Learn about cookies.',
    button: 'Got it'
  }
}
