import portfolio from "../img/portfolio.png"
import mock21 from "../img/mock21.png"
import mock22 from "../img/mock22.png"
import mock23 from "../img/mock23.png"
import mock24 from "../img/mock24.png"
import mock25 from "../img/mock25.png"
import mock26 from "../img/mock26.png"
import mock31 from "../img/mock31.png"
import mock32 from "../img/mock32.png"
import mock33 from "../img/mock33.png"
import mock34 from "../img/mock34.png"
import mock35 from "../img/mock35.png"
import mock36 from "../img/mock36.png"
import mock37 from "../img/mock37.png"
import mock38 from "../img/mock38.png"
import mock41 from "../img/mock41.png"
import mock42 from "../img/mock42.png"
import mock51 from "../img/mock51.png"
import mock52 from "../img/mock52.png"
import mock53 from "../img/mock53.png"
import mock61 from "../img/mock61.png"
import mock62 from "../img/mock62.png"
import mock63 from "../img/mock63.png"
import yashphoto from "../img/yashphoto.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

// export let colors = [" rgba(0,0,0,0), rgba(60,16,148,1) "];
export let colors = [" rgba(67,54,240,1), rgba(174,147,227,1) "];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Yash",
  lastName: "Sakhare",
  initials: "𝕐𝕊", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Full Stack Developer",
  selfPortrait: yashphoto, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: '☕',
      text: 'fueled by chai (tea)'
    },
    {
      emoji: '🌎',
      text: 'based in Navi Mumbai, India'
    },
    {
      emoji: "💼",
      text: "Full Stack Developer Intern at YRSK Marketing (01/2024 - 07/ 2024)"
    },
    {
      emoji: "📧",
      text: "yashsakhare951@gmail.com"
    }
  ],
  socials: [
    {
      link: "https://www.facebook.com/yash.sakhare.07/",
      icon: 'fa fa-facebook',
      label: 'facebook'
    },
    {
      link: "https://www.instagram.com/sakhare__y/",
      icon: 'fa fa-instagram',
      label: 'instagram'
    },
    {
      link: "https://github.com/YSCodez",
      icon: "fa fa-github",
      label: 'github'
    },
    {
      link: "https://www.linkedin.com/in/yash-sakhare12/",
      icon: "fa fa-linkedin",
      label: 'linkedin'
    },
    {
      link: "https://x.com/s_yash07",
      icon: "fa fa-twitter",
      label: 'twitter'
    }
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.

  ],
  bio: "Hello! I'm Yash Sakhare. I'm a Full Stack Developer and a Fresher Seeking Opportunities. I studied InfoTech at PCE, New Panvel.I enjoy long rides on motorcycle, and I believe artificial intelligence will inevitably be a tool to handle most of our day to day task.",
  skills:
  {
    proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'nuxtjs', 'Django', 'nodejs'],
    exposedTo: ['mysql', 'python', 'C', 'java', 'docker', 'laravel php']
  }
  ,
  hobbies: [
    {
      label: 'reading',
      emoji: '📖'
    },
    {
      label: 'riding',
      emoji: '🏍️'
    },
    {
      label: 'trekking',
      emoji: '🧗'
    },
    {
      label: 'movies',
      emoji: '🎥'
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    {
      title: "Portfolio (React.js)",
      live: "https://ydsportfolio.netlify.app/",
      source: "https://github.com/YSCodez/portfolioReact.git",
      images: [portfolio]
    },
    {
      title: "Internship Project - Social Media Handling",

      source: "https://github.com/Shade6/marketing_frontend.git",
      images: [mock21, mock22, mock23, mock24, mock25, mock26]
    },
    {
      title: "Android (Kotlin) - Advanced Tour Guide",
      source: "",
      images: [mock31, mock32, mock33, mock34, mock35, mock36, mock37, mock38]
    },
    {
      title: "Hackathon (Django) - Resume Builder",
      source: "https://github.com/YSCodez/35-APIHunters.git",
      images: [mock41, mock42]
    },
    {
      title: "Mobile price and range prediction (Machine learning)",
      source: "https://github.com/YSCodez/Mobile-price-and-range-prediction",
      images: [mock51, mock52, mock53]
    },
    {
      title: "Staff Duty Allocation (Django)",
      live: "https://paytonpierce.dev",
      source: "https://github.com/YSCodez/Staff-Duty-Allocation",
      images: [mock61, mock62, mock63]
    }
  ]
};
