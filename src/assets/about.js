const about = {
  description:
    "hey, i'm ryan. thanks for checking out my personal website! to tell you a bit about myself, i'm currently a fourth year management engineering (computing option) student at the university of waterloo who has an interest in software engineering. i'm also currently a backend developer intern at ecobee in toronto, ontario!",
  closer:
    "i'm currently seeking 2022 new grad opportunities so if you have any available, please reach out!",
  education:
    "4b management engineering, computing option at the university of waterloo, 4.00 gpa",
  toolset: "angular, react, vue, javascript, java, c, go, sql, html/css",
  interests: "basketball, volleyball, travelling, learning new things",
  experience: [
    {
      position: "backend developer intern",
      organization: "ecobee",
      timeInterval: "fall 2021",
      location: "toronto, ontario",
      technologies: ["java, go, mysql, spring"],
      blurb:
        "currently working as a backend developer intern on the one platform team"
    },
    {
      position: "backend developer intern",
      organization: "ecobee",
      timeInterval: "winter 2021",
      location: "toronto, ontario",
      technologies: [
        "java, go, mysql, spring, apache beam, prometheus, grafana"
      ],
      blurb:
        "ecobee is a home automation company that focuses on creating smart thermostats, sensors, lightswitches and more. as an intern, i was responsible for creating an etl pipeline to transfer device configs over to our new database, google cloud spanner. i was also responsible for adding observability to our reslet filters and developing grpc api endpoints."
    },
    {
      position: "software engineering intern",
      organization: "minimax labs",
      timeInterval: "summer 2020",
      location: "london, england",
      technologies: ["angular, spring boot, mongodb"],
      blurb:
        "minimax labs creates optimization decision support systems that create massive value and provide competitive advantage for global enterprises. as an intern, i was responsible for redesigning our entire front-end application into one single configurable application. i also developed several elegant web interfaces allowing users to visualize and manipulate data."
    },
    {
      position: "software engineering intern",
      organization: "emailgistics",
      timeInterval: "fall 2019",
      location: "mississauga, ontario",
      technologies: ["vue, go, mongodb"],
      blurb:
        "emailgistics allows for customers working in a shared mailbox to achieve maximum productivity and efficiency. as an intern, i was tasked with developing a microsoft outlook add-in allowing users to easily perform various tasks regarding managing mail. i was also responsible for implementing new backend logic for new features and incorporating csrf protection middleware for all services."
    },
    {
      position: "software engineering intern",
      organization: "boss insights",
      timeInterval: "winter 2019",
      location: "toronto, ontario",
      technologies: ["node, php, sql, postgres"],
      blurb:
        "boss insights provides real time insights for startups, accelerators and investors. as an intern, i designed and developed universal input configuration files used to add 3rd party integrations to our data aggregation system. i also refactored the entire codebase to enable integrations with xml response-based apis and created unique authorization header handling with oauth 1.0 & oath 2.0."
    },
    {
      position: "sql developer",
      organization: "prgx",
      timeInterval: "summer 2017",
      location: "mississauga, ontario",
      technologies: ["sql"],
      blurb:
        "prgx is a global company providing data analytics services in the procure-to-pay process. as an intern, i was tasked with cleansing 750k+ rows of raw data by developing complex sql scripts. i was also responsible for creating database views and indexes according to logical design models."
    }
  ],
  projects: [
    {
      title: "search engine",
      repoLink: "https://github.com/ryanhow10/SearchEngine",
      technologies: "java",
      timeInterval: "summer 2021",
      blurb:
        "a text-based interactive search engine for the '89/'90 LA Times document collection"
    },
    {
      title: "cflp",
      repoLink: "https://github.com/ryanhow10/CFLP",
      technologies: "java, gurobi",
      timeInterval: "summer 2021",
      blurb:
        "determines the optimal placement of facilities in order to minimize costs and satisfy demands and constraints."
    },
    {
      title: "personal portfolio v2",
      repoLink: "",
      technologies: "react",
      timeInterval: "summer 2020",
      blurb:
        "designed and developed a simple and elegant personal porfolio website."
    },
    {
      title: "raptor tracker",
      repoLink: "http://github.com/ryanhow10/raptor-tracker",
      technologies: "react, redux",
      timeInterval: "summer 2020",
      blurb:
        "built a basic progressive web application for toronto raptors fans to have easy access to the roster's social media accounts."
    },
    {
      title: "free talk",
      repoLink: "https://github.com/ryanhow10/FreeTalk",
      technologies: "angular, spring boot, mongodb",
      timeInterval: "summer 2020",
      blurb:
        "inspired by twitter, free talk is an application where users can speak their mind anonymously in the form of posts. users can like, dislike and report other's posts as well as search posts by content & hashtags."
    },
    {
      title: "keeping up with covid19",
      repoLink: "https://github.com/ryanhow10/KeepingUpWithCovid19",
      technologies: "angular, google maps api",
      timeInterval: "summer 2020",
      blurb:
        "developed a web application with an interactive map to display worldwide and country specified covid19 statistics."
    },
    {
      title: "productivity please",
      repoLink: "https://github.com/ryanhow10/ProductivityPlease",
      technologies: "vue, express, mongodb",
      timeInterval: "winter 2020",
      blurb:
        "created for my personal use, this application allows me to keep track of upcoming deadlines & outstanding tasks. it also displays motivational quotes, the current time & weather."
    },
    {
      title: "personal portfolio v1",
      repoLink: "https://github.com/ryanhow10/PersonalPortfolioV1",
      technologies: "vue",
      timeInterval: "fall 2019",
      blurb: "my initial take on a personal portfolio."
    },
    {
      title: "ball stats",
      repoLink: "https://github.com/ryanhow10/BallStats",
      technologies: "html/css, php, sql",
      timeInterval: "summer 2019",
      blurb:
        "created as part of msci346: database systems, this application displays statistics on nba players, teams, coaches & staff. users have the ability to trade players, create their own teams, schedule games & score games."
    }
  ]
};

export default about;
