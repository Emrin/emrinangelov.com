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
      // title: 'An {engineer}{br} Like No Other',
      // title: 'Creating, Optimizing,{br} and Leading You to Your Dreams',
      title: '{part1} and {br}Perfecting {part3}',
      title_part1: 'Engineering',
      title_part2: 'Perfecting',
      title_part3: 'Your Vision',
      description:
        'Looking for the right guy to build your thing? Well you\'ve arrived at the right place. There is no limit to what we can accomplish together.',
      get_started: 'Let\'s get started',
      previous_work: 'Check my works',
      get_updates: 'Get updates and memes to your inbox each month',
      video: 'Video featuring me, produced by myself.',
    },
    why: {
      title: 'Why Work {together}',
      together: 'Together',
      try_nuxtjs_online: 'Get a Quote',
      competence: {
        title: 'Competence',
        description:
        'Through thorough work across a wide spectrum of tools and technologies, I have acquired great competence in software craftsmanship. There are, however, areas that require years of experience or a completely different skill set; in those cases I will explain to you exactly what needs to be done and introduce you to valuable contacts with the right expertise. I am the expert that you can rely on.'
      },
      support: {
        title: 'Support',
        description:
        'Receive unmatched support. I will adapt to your systems and needs. Proper support is an extremely valuable service. You will be getting not only technical and marketing support, but also leadership support. I always go out of my way to do the best possible work for my clients. Fast-forward yourself in the right direction, let me and my contacts look down and in to the details, so that you can look up and out to your next step.'
      },
      privacy: {
        title: 'Privacy',
        description:
        'Privacy is of primordial importance, especially in this era. It goes without saying that I will not disclose any information that isn\'t intended to be public. In my {contact}, I’ve put a list of ways you can contact me, and if you need absolute privacy (or onions) I recommend contacting me via Protonmail. {link}',
        contact: 'contacts page',
        link: 'I also accept crypto payments.',
      }
    },
    companies: {
      title: "An inclusive list of {expertise}",
      dev: 'DEVELOPMENT: Cloud-Native, Full-Stack Web and Mobile Development',
      ops: 'OPERATIONS: Continuous Integration and Development, Cybersecurity, Automatisation',
      lead: 'LEADERSHIP CONSULTING: Assessments, Training, Strategic Advising',
      contact: 'Interested in being part of the currently forming consulting company? {contact} for details.',
      c: 'Contact me',
    },
    modes: {
      title: 'What I {offer}',
      offer: 'Offer',
      craftsmanship: {
        title: 'Craftsmanship',
        description:
        'Building. Automating. Improving. Craftsmanship means utilizing my full skillset to accomplish something beautiful, performant, and effective. Together we can shape ideas into reality, and deeply impact environments. The importance is and always will be the creation, the growth, and the perfection of technologies, and we will see it done.'
      },
      solidification: {
        title: 'Solidification',
        description:
        'Automating. Consulting. Perfecting. Once you have an organism running, it\'s primordial that you solidify its stability, mainstream its maintenance and integration processes, and give your leadership the mindset to win. When you are too deep in your project, it is often easier to miss details that cause internal friction and slow down your processes, this is why technical and leadership consulting can be so beneficial: it can fix and correct the internal gears of your organization in such a way that will propel you towards your goals.',
      }
    },
    sponsors: {
      title: 'About me',
      description:
      'I am a warrior, a builder, and a philosopher. I have a Master\'s Degree in Engineering, established by France. I have lived and studied in numerous European countries, and can speak, think, and reason in several culturally diverse languages. Constantly seeking to improve is a second nature for me, so I\'m constantly on the hunt for learning and novelty. I specialize in creation, optimization, and leadership. I enjoy working on high-impact projects with many moving parts. Ground-up or fully established. I\'m positive the input of my point of view and expertise will be of great benefit to your organizations.\n',
      become_a_sponsor: 'Contact'
    },
    newsletter: {
      title: 'The {fun} Newsletter',
      title2: 'Fun',
      description:
        'How often do you receive poems, memes, and cool guides in your inbox? Time to up those rookie numbers.',
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
  contact: {
    title: '{contact} Details',
    title2: 'Contact',
    message: 'Send a {message}',
    anon: 'You can also use this form to quickly send an anonymous mail.',
    a2: 'message',
    description:
      'How often do you receive poems, memes, and cool guides in your inbox? Time to up those rookie numbers.',
    form: {
      email: 'Email (optional)',
      message: 'Message',
      sending: 'Sending...',
      send: 'Send',
      sent: 'Message sent !'
    }
  },
  cv: {
    download: 'Download CV (English)',
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
    title: 'Sponsor & Donate',
    description:
      'BTC: 3LYu69HdChTW4xEScBdVUbf2HrknLFA1FX{break}Ethereum: 0x84cb10f7a997eefc7a16eb6c2f84f81b5243b33c{break}Monero: 834wWuKWuBjjHu2roitmEeGLDWUqEKk9HDezaxs9ykXsSxjgbZpUR5M1MF6D7y2b3hC57BHeBouS9i6JKBwTfPy467EFWYS{break}Nano: nano_3fc87qsxgratp9f8151i7hx1o6agomadcm7dgktcnqcx9p3yxaskj5h7n78o{break}Doge: DEQavxTeQpqgpt59GxfZMEfHbmQKmktFnB',
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
      title: 'Blog',
      description:
        'Discover articles written by Emrin Angelov about all sorts of interesting topics.'
    },
    title: 'Blog',
    description:
      'Discover cool articles about all sorts of interesting things!',
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
