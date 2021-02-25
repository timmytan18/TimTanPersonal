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
import rasaIcon from "./images/rasa.svg"
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
    youtube: 'https://www.youtube.com/timtan1',
    email: 'timmytan18@gmail.com'
  },

  // End Header Details -----------------------

  // About Secton --------------
  aboutParaOne:
    "I’m currently a junior at Georgia Tech, majoring in Computer Science. I am passionate about using the tools and knowledge I have to create and work on projects that will improve the lives of others.",
  aboutParaTwo:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  aboutParaThree:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  aboutImage:
    require("./images/profilefull.jpg"),

  //   End About Section ---------------------

  // Work Section ------------------------
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "Feast", //Project Title - Add Your Project Title Here
      para:
        "A mobile network for discovering restaurants with friends and sharing photos and reviews of delicious eats", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: require("./images/feast.png"),
      //Project URL - Add Your Project Url Here
      url: "https://www.myfeastapp.com/",
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
      title: "Coffee Chat", //Project Title - Add Your Project Title Here
      para:
        "A platform aimed at connecting college students through 1:1 video calls, providing introductions using individuals' goals and interests", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: require("./images/coffeechat.jpg"),
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },
    {
      id: 4, //DO NOT CHANGE THIS (Please)😅
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
  youtubePara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End YouTube Section -----------------

  // Experience Section ---------------

  //   Import Icons from the top and link it here

  experience: [
    {
      id: 1,
      img: gtIcon,
      title: "Georgia Institute of Technology",
      subtitle: "B.S. in Computer Science | 2018-2022",
      para: "Concentration in Artifical Intelligence and Human-Computer Interaction",
    },
    {
      id: 2,
      img: amazonIcon,
      title: "Amazon",
      subtitle: "Incoming Software Development Intern",
      para: "",
    },
    {
      id: 3,
      img: amexIcon,
      title: "American Express",
      subtitle: "Software Engineering Intern",
      para: "",
    },
    {
      id: 4,
      img: thrustIcon,
      title: "Thrust Interactive",
      subtitle: "Mobile Development Intern",
      para: "",
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
        title: "Java",
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
        img: rasaIcon,
        title: "Rasa",
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
      {
        id: 4,
        img: null,
        title: "",
      },
    ],
  },

  // End Skills Section --------------------------

  //   Contact Section --------------

  contactSubHeading: "I hope to meet and work with you!",

  // End Contact Section ---------------
}
