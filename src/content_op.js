const logotext = "Francesco";
const copyright = "ColazzoFrancesco";
const meta = {
  title: "Francesco Colazzo",
  description: "I’m Francesco Colazzo FullStack developer",
};

const introdata = {
  title: "I’m Francesco Colazzo",
  animated: {
    first: "I'm passionate about coding",
    second: "I specialize in developing sleek and innovative websites",
    third: "I thrive in architecting robust and scalable backend systems",
  },
  description: "",
  my_img: "me.jpeg",
};

const dataabout = {
  title: "A little bit about myself",
  aboutme:
    "I am a 32-year-old Italian developer with a passion for the flavors of my homeland, Salento in Puglia. In my free time, I enjoy discovering new wonders and playing tennis. With a passion for my craft and tenacity in the life, I strive to do my best, aiming to become a better person every passing day, for myself and those around me.",
};
const worktimeline = [
  {
    jobtitle: "Backend Developer",
    where: "Chiasso, Switzerland",
    date: "2022",
  },
  {
    jobtitle: "Full Stack Developer",
    where: "Rome, Italy",
    date: "2020",
  },
  {
    jobtitle: "Analyst Developer ",
    where: "Turin, Italy",
    date: "2018",
  },
  {
    jobtitle: "Junior Web Developer Freelancer",
    where: "Lecce, Italy",
    date: "2015",
  },
];

const skills = [
  {
    name: "PHP",
    value: 90,
  },
  {
    name: "Laravel",
    value: 90,
  },
  {
    name: "Java",
    value: 70,
  },
  {
    name: "Javascript",
    value: 80,
  },
  {
    name: "React",
    value: 70,
  },
  {
    name: "Jquery",
    value: 80,
  },
];

const contactConfig = {
  EMAIL: `${process.env.REACT_APP_EMAIL}`,
  description:
    "Write me if you want to stay in touch with me or ask me something. I can’t wait to hear from you!",
  SERVICE_ID: `${process.env.REACT_APP_SERVICE_ID}`,
  TEMPLATE_ID: `${process.env.REACT_APP_TEMPLATE_ID}`,
  PUBLIC_KEY: `${process.env.REACT_APP_PUBLIC_KEY}`,
};

const socialprofils = {
  github: `${process.env.REACT_APP_GITHUB}`,
  facebook: `${process.env.REACT_APP_FACEBOOK}`,
  linkedin: `${process.env.REACT_APP_LINKEDIN}`,
  instagram: `${process.env.REACT_APP_INSTAGRAM}`,
};
export {
  meta,
  dataabout,
  worktimeline,
  skills,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
  copyright
};
