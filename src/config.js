// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (add your image to the src/images directory and uncomment the line below to import your image)
// import newLogo from "./images/yourFileName"

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";

// Projects Images (add your images to the images directory and import below)
import Daggerheart from "./images/Daggerheart_logo.png";
import ReeseJonesLogo from "./images/Reese_Jones_Logo.png";
import CloudLogo from "./images/Cloud_Logo.png";
import EmulationStationLogo from "./images/logo_es.png";
import DandyHacksLogo from "./images/DandyHacks2018.png";

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "ReeseAEJones";

// Navbar Logo image
export const navLogo = null;

/* Main
 ************************************************************** 
  Add a custom blog icon or update the hero images for the Main section.
*/
export const Blog = null;

// Hero images (imported above - lines 8-9)
export { HeroLight as Light };
export { HeroDark as Dark };

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I am adaptive to handling complex challenges with strong problem - solving abilities and able to manage projects effectively. Additionly I have proven success in code integration and management, with a commitment to secure coding practices, informed by cybersecurity experience and a background in code analysis and optimization research.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    skill: <Icon icon="proicons:python" className="display-4" />,
    name: "Python",
  },
  {
    skill: <Icon icon="nonicons:c-plusplus-16" className="display-4" />,
    name: "C/C++",
  },
  {
    skill: <Icon icon="fa6-brands:golang" className="display-4" />,
    name: "GoLang",
  },
  {
    skill: <Icon icon="cib:java" className="display-4" />,
    name: "Java",
  },
  {
    skill: <Icon icon="cib:spring" className="display-4" />,
    name: "Spring",
  },
  {
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML5",
  },
  {
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS3",
  },
  {
    skill: <Icon icon="ri:bootstrap-fill" className="display-4" />,
    name: "BootStrap",
  },
  {
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  {
    skill: <Icon icon="akar-icons:redux-fill" className="display-4" />,
    name: "Redux",
  },
  {
    skill: <Icon icon="ph:file-sql-fill" className="display-4" />,
    name: "SQL",
  },
  {
    skill: <Icon icon="devicon-plain:redis" className="display-4" />,
    name: "Redis",
  },
  {
    skill: <Icon icon="mdi:aws" className="display-4" />,
    name: "AWS",
  },
  {
    skill: <Icon icon="tabler:brand-snowflake" className="display-4" />,
    name: "Snowflake",
  },
  {
    skill: <Icon icon="simple-icons:looker" className="display-4" />,
    name: "Looker",
  },
  {
    id: 8,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = "./ReeseAEJones_Resume_2025.pdf";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["daggerheart", "Richmond-Weather-Station", "ReeseAEJones.github.io"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "daggerheart",
    image: Daggerheart,
  },
  {
    name: "Richmond-Weather-Station",
    image: CloudLogo,
  },
  {
    name: "ReeseAEJones.github.io",
    image: ReeseJonesLogo,
  },
  {
    name: "EmulationStation",
    image: EmulationStationLogo,
  },
  {
    name: "visual-education",
    image: DandyHacksLogo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/YourEndpoint";

// Footer icons theme (light or dark)
export const footerTheme = "dark";
