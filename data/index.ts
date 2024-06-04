// TODO add content

export const resume = () => {
  return open("/public/DemoResumeJune.html");
};

export const aboutItems = [
  {
    title: "Academics",
    content:
      "Since enrolling at Yeshiva University in August 2022, I've been committed to pursuing a Bachelor of Science degree in computer science, with a specialization in distributed systems. This specialization equips me with the essential skills and knowledge needed to excel in various computer science domains. Through my coursework, I've achieved proficiency in fundamental programming concepts, data structures, and algorithms. This includes mastering tools like Java and Python, as well as complex data structures and object-oriented programming. Practical project experiences, such as developing 'StockTerminal,' have allowed me to apply these skills in real-world scenarios, further enhancing my problem-solving abilities and providing insights into the practical applications of distributed systems, particularly in the field of finance.",
  },
  {
    title: "Business",
    content:
      "As a driven entrepreneur, I have successfully established and managed two freelance businesses, leveraging my background and expertise in technology to deliver exceptional results. In my IT consulting business, I offer a wide range of services, including complex software installation, custom data storage solutions, and hardware upgrades. Through close collaboration with clients, I identify their unique technology needs and provide tailored solutions that address their specific requirements. On the other hand, my web design business specializes in creating visually appealing and user-friendly websites. I focus on responsive design and intuitive navigation to help businesses establish a strong online presence. By maintaining a client-centric approach, I am committed to consistently delivering exceptional services for my clients.",
  },
  // TODO add: { title: "Professional", content: "..." },
];

export const projectItems = [
  { img: "", title: "StockTerminal", content: "...", tags: [], link: "" },
  { img: "", title: "Home Lab", content: "...", tags: [], link: "" },
  { img: "", title: "Website", content: "...", tags: [], link: "" },
  // TODO add more projects
];

// TODO figure out best way to represent skills

export const skillItems = [];

// TODO add more socials?

export const socials = [
  {
    title: "Email",
    user: "maxfranklin@maxfdev.com",
    link: "mailto:maxfranklin@maxfdev.com", // TODO should this be a copy link?
  },
  {
    title: "GitHub",
    user: "maxfdev",
    link: "https://github.com/MaxFdev",
  },
  {
    title: "LinkedIn",
    user: "Max Franklin",
    link: "https://www.linkedin.com/in/max--franklin/",
  },
];
