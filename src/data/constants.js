import my_pic from "../images/my_pic.jpeg"
import gulaabJamun from "../images/gj.png"
import spam_website from "../images/spam.png"
import ihs from "../images/ihs.jpg"
import movie_recommender from "../images/recommender.jpg"
import movie_website from "../images/movie.png"

export const Bio = {
  name: "Navish Goyal",
  roles: [
    "Software Developer",
    "Web developer",
    "Data Scientist",
  ],
  description:
"Hello! I'm Navish Goyal, a Pre-Final Year Engineering Student at Thapar Institute of Engineering and Technology with skills in Data Structures, Algorithms, MERN Stack Web Development, and Data Science, I build efficient, data-driven solutions and responsive web applications. Explore my projects to see my passion for tech in action!",
  github: "https://github.com/navishgoyal8",
  resume:
    "https://drive.google.com/file/d/10fDRzCw76S3gtw_MPs1dI8t6Qq2miRoc/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/navish-goyal-b40667224/",
  insta: "https://www.instagram.com/navishgoyal8/?hl=en",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Tailwind CSS",
        image:
          "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node JS",
        image:
          "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
      },
      {
        name : "Express JS",
        image : "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"
      },
      {
        name: "Postgre SQL",
        image: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "MongoDB",
        image: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
      },
    ],
  },
  {
    title: "Data Science",
    skills: [
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "Data Structures",
        image:
          "data:image/png;base64,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",
      },
      {
        name: "Algorithms",
        image:
          "https://cdn-icons-png.freepik.com/512/15237/15237417.png?ga=GA1.1.119099582.1712822957",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://git-scm.com/images/logo@2x.png",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "ChatGPT",
        image:
          "data:image/png;base64,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",
      }
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "data:image/jpeg;base64,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",
    role: "Vice Management Head",
    company: "Microsoft Learning Student Chapter",
    date: "Jan 2023 - May 2024",
    desc: "Contributed on Event Management and pitching to the sponsers.",
    skills: [
      "Leadership",
      "Communication",
      "Team Work",
      "Event Management",
      "Pitching",
      "Sponsership",
      "Documentation",
      "Organization",
      "Management",
    ],
    doc: "",
  }
];

export const education = [
  {
    id: 0,
    img: "https://media.licdn.com/dms/image/v2/C560BAQEHtx1U87kUjA/company-logo_200_200/company-logo_200_200/0/1645923773036?e=1738800000&v=beta&t=CbBExagZmXGPkQf6NBErvqgh8KwosorRY-k1nzzDkFE",
    school: "Thapar Institute of Engineering and Technology",
    date: "2022 - 2026",
    grade: "8.53 CGPA",
    desc: "I am currently pursuing B.E in Computer Science and Engineering at Thapar Institute of Engineering and Technology. I have completed 4 semesters and have a CGPA of 8.53. I have taken courses in Reactjs, Web Development, Machine Learning, Deep Learning. I was also a member of the Microsoft Learning Chapter Society of Thapar Institute of Engineering and Technology, where I learned additional softskills.",
    degree: "Bachelor of Engineering - BTech, Computer Science and Engineering",
  },
  {
    id: 1,
    img: ihs,
    school: "Innocent Hearts School",
    date: "2020 - 2022",
    grade: "92.4%",
    desc: "I completed my class 12 high school education at Innocent Hearts School, where I choose Non-Medical.",
    degree: "CBSE, Non-Medical",
  },
  {
    id: 2,
    img: ihs,
    school: "Innocent Hearts School",
    date: "2019 - 2020",
    grade: "93%",
    desc: "I completed my class 10 education at Innocent Hearts School.",
    degree: "CBSE",
  },
];

export const projects = [
  {
    id: 0,
    title: "Gulaab-Jamoon",
    date: "Sept 2024 - Dec 2024",
    description:
      "Developing proper backend using NodeJS for a travel based startup Gulaab-Jamoon.",
    image: gulaabJamun,
    tags: ["NodeJs", "ExpressJS", "MongoDB", "Backend", "Deployment"],
    category: "Web",
    github: "https://github.com/anubhakapur/GulaabJamoon",
    webapp: "https://gulaabjamoon.com/",
    member: [
      {
        name: "Navish Goyal",
        img: my_pic,
        linkedin: "https://www.linkedin.com/in/navish-goyal-b40667224/",
        github: "https://github.com/navishgoyal8/",
      },
    ],
  },
  {
    id: 0,
    title: "Movie Website",
    date: "June 2024 - July 2024",
    description:
      "Developing a Movie website to track different movies and their crew and cast and also can see the movie trailer made using Tmdb API.",
    image: movie_website,
    tags: ["ReactJS", "CSS", "Javascript", "API", "NodeJS", "vercel","website"],
    category: "Web",
    github: "https://github.com/navishgoyal8/MovioWebsite",
    webapp: "https://moviowebsite.vercel.app/",
    member: [
      {
        name: "Navish Goyal",
        img: my_pic,
        linkedin: "https://www.linkedin.com/in/navish-goyal-b40667224/",
        github: "https://github.com/navishgoyal8/",
      },
    ],
  },
  {
    id: 0,
    title: "Email-Spam-Classifier",
    date: "March 2024 - June 2024",
    description:"Developed an Email Spam Classifier using Natural Language Processing (NLP) techniques in Python, leveraging libraries such as NLTK and scikit-learn. The model was trained on a dataset of emails and achieved an accuracy of over 97% in classifying emails as spam or non-spam.",
    image:
      spam_website,
    tags: ["Python", "NLTK", "ML Models", "NLP", "reactjs", "responsive","website"],
    category: "Machine Learning",
    github: "https://github.com/navishgoyal8/email-spam-classifier",
    webapp: "https://email-spam-classifier-ourrhghavssl2m4r59mq23.streamlit.app/",
    member: [
      {
        name: "Navish Goyal",
        img: my_pic,
        linkedin: "https://www.linkedin.com/in/navish-goyal-b40667224/",
        github: "https://github.com/navishgoyal8/",
      },
    ],
  },
  {
    id: 0,
    title: "Movie-Recommender-System",
    date: "April 2024 - May 2024",
    description:"Developed a Movie Recommender System using Python, leveraging the LightFM library to build a hybrid recommendation model based on collaborative filtering and content-based filtering. The system recommends movies to users based on their preferences and viewing history.",
    image: movie_recommender,
    tags: [
      "Python",
      "LightFM",
      "ML Models",
      "Deep Learning",
      "Machine Learning",
      "NLTK",
      "scikit-learn",
    ],
    category: "Deep Learning",
    github: "https://github.com/navishgoyal8/movie-recommender-system",
    webapp: "",
    member: [
      {
        name: "Navish Goyal",
        img: my_pic,
        linkedin: "https://www.linkedin.com/in/navish-goyal-b40667224/",
        github: "https://github.com/navishgoyal8/",
      },
    ]
  },

];


