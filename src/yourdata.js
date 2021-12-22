import React from "react"

// Experience Icons
import gtIcon from "./images/georgiatech.png"
import amazonIcon from "./images/amazon.png"
import amexIcon from "./images/americanexpress.png"
import thrustIcon from "./images/thrustinteractive.png"

// Skills Icons
import pythonIcon from "./images/python.png"
import javascriptIcon from "./images/javascript.png"
import javaIcon from "./images/java.png"
import cssIcon from "./images/css.png"
import reactIcon from "./images/react.png"
import reactNativeIcon from "./images/reactnative.png"
import awsIcon from "./images/aws.png"
import androidIcon from "./images/android.png"
import mandarinIcon from "./images/mandarin.png"
import sketchIcon from "./images/sketch.png"
import finalCutIcon from "./images/finalcut.png"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Tim",
  headerTagline: [
    //Line 1 For Header
    "Developer",
    //Line 2 For Header
    "Creator",
    //Line 3 For Header
    "Student",
  ],
  //   Header Paragraph
  headerParagraph:
    "Welcome to my personal page!\nTake a look around — if anything intrigues you or if you want to chat, don't hesitate to reach out!",

  //Contact Email
  contactEmail: "timmytan18@gmail.com",

  //Social
  socialMedia: {
    linkedin: 'https://www.linkedin.com/in/timtan1/',
    instagram: 'https://www.instagram.com/tim0_otan/',
    github: 'https://github.com/timmytan18',
    twitter: 'https://www.twitter.com/timmytan18',
    youtube: 'https://www.youtube.com/timtan1',
    email: 'timmytan18@gmail.com'
  },

  // End Header Details -----------------------

  // About Secton --------------
  aboutParaOne:
    "I’m currently a senior at Georgia Tech, majoring in Computer Science. I enjoy designing and building full stack and mobile apps, and I am passionate about using the tools and knowledge I have to create and work on products that will improve the lives of others.",
  aboutParaTwo:
    "As I have a strong interest in software and tech entrepreneurship, I'm currently trying to learn as much as I can about startups, aka watching a ton of YC videos. I aspire to one day create and grow my own startup in the social / creator economy space or one that will allow for a tangible impact on many people.",
  aboutParaThree:
    "Even though I’m quite technical, I also love storytelling and all things visual. I'm definitely still a beginner designer and filmmaker, but I hope to use my skills to tell the stories of my life and others. Be sure to watch out for new videos on my YouTube channel! Thanks for checking out my page :)",
  aboutImage:
    require("./images/profilefull.jpg"),

  //   End About Section ---------------------

  // Work Section ------------------------
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "Feast", //Project Title - Add Your Project Title Here
      subtitle: "In development",
      para:
        "A mobile network for discovering restaurants with friends and sharing photos and reviews of delicious eats", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: require("./images/feast.png"),
      //Project URL - Add Your Project Url Here
      url: "https://www.feastapp.io/",
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "Intelliflect", //Project Title - Add Your Project Title Here
      para:
        "A home assistant smart mirror prototype that listens for voice commands to display relevant visual data, including local weather information, YouTube videos, and calendar events", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: require("./images/intelliflect.jpg"),
      //Project URL - Add Your Project Url Here
      url: "https://rb.gy/bdkamq",
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "Space Traders", //Project Title - Add Your Project Title Here
      para:
        "A space travel and exploration strategy web game created as a group project", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: require("./images/spacetraders.png"),
      //Project URL - Add Your Project Url Here
      url: "https://spacetraders2340.herokuapp.com/",
    },
  ],

  // End Work Section -----------------------
  
  //   YouTube Section --------------------------

  youtubeHeading: "YouTube",
  // End YouTube Section -----------------

  // Experience Section ---------------

  //   Import Icons from the top and link it here

  experience: [
    {
      id: 1,
      img: gtIcon,
      title: "Georgia Institute of Technology",
      subtitle: "B.S. in Computer Science | 2018-2022",
      para: <p>Concentration in Media and Human-Computer Interaction{"\n"}</p>,
    },
    {
      id: 2,
      img: amazonIcon,
      title: "Amazon",
      subtitle: "Software Development Intern | Summer 2021",
      para: <p>I established the foundation for millions of Fire TV users to block unwanted content in child profiles, creating the UI/UX and implementing the Android front end using Kotlin and Java with internal back end API services.</p>,
    },
    {
      id: 3,
      img: amexIcon,
      title: "American Express",
      subtitle: "Software Engineering Intern | Summer 2020",
      para: <p>I created an AI chat bot for (COVID) crisis relief using Rasa to be integrated in the AMEX mobile app. By analyzing current chat data, my teammate and I automated 63% of crisis relief customer service conversations from June 2020.</p>,
    },
    {
      id: 4,
      img: thrustIcon,
      title: "Thrust Interactive",
      subtitle: "Mobile Development Intern | Summer 2019",
      para: <p>I worked on front end development with React Native for multiple client iOS and Android apps including <a href="https://playfanstable.com/" target="_blank">
        FanStable
      </a> and a vocabulary learning app for children with ASD.</p>,
    },
  ],

  // End Experience Section --------------------------

  // Skills Section ---------------

  skills: {

    languages: [
      {
        id: 1,
        img: pythonIcon,
        title: "Python",
      },
      {
        id: 2,
        img: javascriptIcon,
        title: "Javascript",
      },
      {
        id: 3,
        img: javaIcon,
        title: "Java / Kotlin",
      },
      {
        id: 4,
        img: cssIcon,
        title: "HTML / CSS",
      },
    ],

    technologies: [
      {
        id: 1,
        img: reactIcon,
        title: "React",
      },
      {
        id: 2,
        img: reactNativeIcon,
        title: "React Native",
      },
      {
        id: 3,
        img: awsIcon,
        title: "AWS",
      },
      {
        id: 4,
        img: androidIcon,
        title: "Android",
      },
    ],

    other: [
      {
        id: 1,
        img: mandarinIcon,
        title: "Mandarin",
      },
      {
        id: 2,
        img: sketchIcon,
        title: "Sketch",
      },
      {
        id: 3,
        img: finalCutIcon,
        title: "Final Cut Pro",
      },
      // {
      //   id: 4,
      //   img: null,
      //   title: "",
      // },
    ],
  },

  // End Skills Section --------------------------

  //   Contact Section --------------

  contactSubHeading: "I hope to meet and work with you!",

  // End Contact Section ---------------
}
