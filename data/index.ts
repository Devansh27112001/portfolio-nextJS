export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Approach", link: "#approach" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize my work",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with my time schedule",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Learning new things everyday",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Working on a Full-Stack web application using Spring Boot for backend and ReactJs.",
    description: "Currently",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to add me to your team?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "The-Wild-Oasis",
    des: "A complete Hotel Management Web application built using ReactJs, React-Query, TailWindCSS and Supabase.",
    img: "/image.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/supabase-logo-icon.svg",
      "/react-query-seeklogo.svg",
    ],
    link: "https://the-wild-oasis-umber-rho.vercel.app",
  },
  {
    id: 2,
    title: "The-Wild-Oasis-Website",
    des: "A beautiful customer facing booking website for the The-Wild-Oasis web application using NextJs, TailWindCSS and Supabase",
    img: "/image2.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/supabase-logo-icon.svg"],
    link: "https://the-wild-oasis-website-jet-seven.vercel.app/",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software enginner Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Package Consultant | Software Engineer Intern",
    desc: "Assisted in developing a full-stack web application focusing on backend using microservices acrhitecture. ",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    link: "https://github.com/Devansh27112001",
    img: "/git.svg",
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/devansh-kansara-804447262/",
    img: "/link.svg",
  },
];
