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
          status: true,
        },
        {
          name: 'Item-2',
          id: 456,
          status: false,
        },
        {
          name: 'Item-3',
          id: 789,
          status: false,
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

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {
    layout: 'person',

    title: "Person Info.",
    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

router.get('/bio', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('bio', 
  {
    layout: 'bio',
    title: 'Biography',

    name: 'Albert Einstein',
    birthdate: 'March 14, 1879',
    birthplace:
      'Ulm, Kingdom of Württemberg, German Empire',
    deathdate: 'April 18, 1955',
    deathplace: 'Princeton, New Jersey, United States',
    nationality: 'Swiss, German, American',
    occupation: 'Theoretical Physicist',
    known_for: [
      'Theory of Relativity',
      'E=mc²',
      'Photoelectric Effect',
      'Brownian Motion',
    ],
    education: [
      {
        degree: 'Doctor of Philosophy',
        field: 'Physics',
        institution: 'University of Zurich',
        year: 1905,
      },
    ],
    notable_publications: [
      {
        title: 'On the Electrodynamics of Moving Bodies',
        year: 1905,
        publisher: 'Annalen der Physik',
      },
      {
        title:
          'Does the Inertia of a Body Depend Upon Its Energy Content?',
        year: 1905,
        publisher: 'Annalen der Physik',
      },
    ],
    partners: [
      {
        name: 'Mileva Marić',
        relationship: 'First wife',
        years: '1903-1919',
      },
      {
        name: 'Elsa Einstein',
        relationship:
          "Second wife, also Einstein's first cousin",
        years: '1919-1936',
      },
    ],
    awards: [
      {
        title: 'Nobel Prize in Physics',
        year: 1921,
        description:
          'Awarded for his explanation of the photoelectric effect',
      },
    ],
    influences: [
      'Isaac Newton',
      'James Clerk Maxwell',
      'Hermann Minkowski',
    ],
    influenced: [
      'Niels Bohr',
      'Erwin Schrödinger',
      'Werner Heisenberg',
      'Richard Feynman',
    ],
    quotes: [
      'Imagination is more important than knowledge.',
      'I have no special talent. I am only passionately curious.',
      'The important thing is not to stop questioning.',
      'The most beautiful thing we can experience is the mysterious. It is the source of all true art and all science.',
    ],
    major_discoveries: [
      {
        title: 'Photoelectric Effect',
        year: 1905,
        description:
          'Einstein explained the photoelectric effect, where electrons are emitted from a metal surface when it is illuminated by light.',
      },
    ],
    contributions: {
      title: 'Inventions',
      description:
        'Leonardo designed and invented a wide variety of machines and devices, including a helicopter, a diving suit, and a self-propelled cart. Many of his inventions were centuries ahead of their time.',
      year: 'Late 15th to early 16th century',
      field: 'Invention',
    },
  })
})


router.get('/program', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('program', {
    program: {
      excursion: {
        name: 'Cultural Tour',
        location: {
          city: 'Paris',
          country: 'France',
        },
        date: '2023-06-15',
        program: [
          {
            name: 'Museum Visit',
            type: 'Art',
            duration: 3,
            details: {
              museum: {
                name: 'The Louvre',
                location: {
                  address: 'Rue de Rivoli',
                  city: 'Paris',
                  country: 'France',
                },
                exhibits: [
                  {
                    name: 'Mona Lisa',
                    artist: 'Leonardo da Vinci',
                    description: 'Iconic portrait painting',
                    audio_guide: true,
                  },
                  {
                    name: 'Winged Victory of Samothrace',
                    artist: null,
                    description:
                      'Ancient Greek statue of Nike, the goddess of victory',
                    audio_guide: true,
                  },
                ],
              },
              guide: {
                name: 'Francois',
                language: 'French',
                rating: 4.8,
              },
            },
          },
          {
            name: 'Cultural Show',
            type: 'Music and Dance',
            duration: 2,
            details: {
              venue: {
                name: 'Moulin Rouge',
                location: {
                  address: '82 Boulevard de Clichy',
                  city: 'Paris',
                  country: 'France',
                },
              },
              performers: [
                {
                  name: 'Mireille Mathieu',
                  type: 'Chanson singer',
                },
                {
                  name: "Ballet de l'Opéra National de Paris",
                  type: 'Classical ballet company',
                },
              ],
              guide: {
                name: 'Sophie',
                language: 'English',
                rating: 4.6,
              },
            },
          },
        ],
      },
    },
  })
})

module.exports = router
