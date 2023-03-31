// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
var header = {
  title: "Resume",
  name: {
    firstname: 'Bohdan',
    lastname: 'Iali'
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць.',
  address: 'Ukraine, Kyiv, Gnata Yury srteet., b. #7b, ap. #36',
}

var footer = {
  social: {
    email: {
      href: 'mailto:ialibogdan90@gmail.com',
      text: 'ialibogdan90@gmail.com',
    },
    phone: {
      href: 'tel:+380991094113',
      text: '+380991094113',
    },
    linkedin: {
      href: 'https://www.linkedin.com/in/ialibogdan/',
      text: 'LinkedIn',
    },
  },
}
var title = {
  title: 'Resume',
  big: true,
}

//=================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {

  res.render('summary', {
    title,

    header,

    main: {
      summary: {
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
      work on a new project I learn the domain and try to understand the idea of the project.Good team'
      player, every colleague is a friend to me.`,
      },
      experience: {
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
                    tournament position, goals etc), analyzing by simple mathematics models and preparing probability
                    for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

router.get('/skills', function (req, res) {
  res.render('skills', {
    title,

    header,

    main: {
      skills: [
        {
          title: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          title: 'Handlebars',
          point: 0,
          isTop: true,
        },
        {
          title: 'VS Code',
          point: 0.2,
          isTop: true,
        },
        {
          title: 'Git',
          point: 0.3,
          isTop: true,
        },
        {
          title: 'Terminal',
          point: 0.3,
          isTop: true,
        },
        {
          title: 'NPM',
          point: 0.2,
          isTop: true,
        },
        {
          title: 'PHP',
          point: null,
          isTop: false,
        },
      ],
      hobbies: [
        {
          name: 'Sound Design',
          isMain: true,
        },
        {
          name: 'Viedo Edit',
          isMain: false,
        },
        {
          name: 'Programming',
          isMain: true,
        },
      ]
    },

    footer,
  })
})

router.get('/education', function (req, res) {
  res.render('education', {
    title,

    header,

    main: {
      institute: [
        {
          name: 'Gymnasium school #27',
          isEnd: true,
        },
        {
          name: 'Computer academy "step"',
          isEnd: false,
        },
        {
          name: 'Mariupol State University',
          isEnd: true,
        },
        {
          name: 'Media educational project "INTERSCHOOL"',
          isEnd: true,
        },
        {
          name: 'Computer courses "IT-BRAIN"',
          isEnd: false,
        }
      ],
      certificates: [
        {
          name: 'Item-1',
          id: 123,
        },
        {
          name: 'Item-2',
          id: 456,
        },
        {
          name: 'Item-3',
          id: 789,
        },
      ]
    },

    footer,
  })
})

router.get('/work', function (req, res) {
  res.render('work', {
    layout: 'big',

    title,

    header,

    main: {
      work: [
        {
          position: 'Fullstack JS Developer',
          company: {
            name: 'IT-BRAINS',
            url: '',
          },
          duration: {
            from: '23.01.2023',
            to: '',
          },

          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              about: 'Programming Language: Java, JavaScript',
              stack: [
                {
                  name: 'HTML',
                },
                {
                  name: 'HTML/CSS',
                },
                {
                  name: 'NodeJS',
                },
              ],

              stackAmount: 3,

              awards: [
                {
                  name: 'Background verification and other...',
                },
                {
                  name: 'Background verification and other...',
                },
                {
                  name: 'Background verification and other...',
                },
              ],
              awardsAmount: 1,
            },
          ],
        }
      ]

    },

    footer,
  })
})

module.exports = router
