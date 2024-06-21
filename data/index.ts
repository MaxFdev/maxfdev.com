export const resume = () => {
  return open("/public/DemoResumeJune.html");
};

// TODO fix writing

export const aboutItems = [
  {
    title: "Academics",
    content:
      "Since enrolling at Yeshiva University in August 2022, I've been committed to pursuing a Bachelor of Science degree in computer science, with a specialization in distributed systems. This specialization equips me with the essential skills and knowledge needed to excel in various computer science domains. Through my coursework, I've achieved proficiency in fundamental programming concepts, data structures, and algorithms. This includes mastering tools like Java and Python, as well as complex data structures and object-oriented programming. Practical project experiences, such as developing 'StockTerminal', have allowed me to apply these skills in real-world scenarios, further enhancing my problem-solving abilities and providing insights into the practical applications of distributed systems, particularly in the field of finance.",
  },
  {
    title: "Business",
    content:
      "As a driven entrepreneur, I have successfully established and managed two freelance businesses, leveraging my background and expertise in technology to deliver exceptional results. In my IT consulting business, I offer a wide range of services, including complex software installation, custom data storage solutions, and hardware upgrades. Through close collaboration with clients, I identify their unique technology needs and provide tailored solutions that address their specific requirements. On the other hand, my web design business specializes in creating visually appealing and user-friendly websites. I focus on responsive design and intuitive navigation to help businesses establish a strong online presence. By maintaining a client-centric approach, I am committed to consistently delivering exceptional services for my clients.",
  },
  // TODO add:
  // {
  //   title: "Professional",
  //   content:
  //     "...",
  // },
];

// TODO add all projects

// TODO make sure all links are up to date

export const projectItems = [
  {
    img: "/images/StockTerminal.png",
    color: "#00ffa2",
    title: "StockTerminal",
    content:
      "StockTerminal is a Java-based program designed to retrieve and organize real-time stock market data efficiently. Developed with fintech professionals in mind, this project caters to individuals who require quick access to market data directly from the terminal. Leveraging a combination of object-oriented programming principles and various data structures, StockTerminal seamlessly fetches stock data from an API and presents it in a user-friendly format within the terminal. My partner and I effectively collaborated to develop StockTerminal as a functional program within a single week.",
    tags: ["JAVA", "CLI", "API", "FINANCE", "DATA STRUCTURES"],
    link: "https://github.com/MaxFdev/StocksTerminal-SE_Project",
  },
  {
    img: "/images/HomeLab.png",
    color: "#90dcff",
    title: "Home Lab",
    content:
      "My home lab is an ongoing and continuously evolving project that serves as the backbone for my technological endeavors. At the heart of the lab is a custom-built PC running Proxmox, providing a powerful and versatile virtualization platform. This setup enables me to efficiently manage and deploy various virtual machines and containers for various projects and experiments. I have also established a secure and remote-accessible environment for my home lab by utilizing a single-board computer (SBC) running Ubuntu server and Cloudflared. This allows me to seamlessly access and manage the lab's resources from anywhere with an internet connection. The home lab empowers me to explore and test new technologies, optimize workflows, and ensure a reliable infrastructure to support my projects and technical aspirations.",
    tags: ["SERVER", "CONTAINERS", "VIRTUALIZATION", "NETWORKING", "SECURITY"],
    link: "https://github.com/MaxFdev/HomeLab",
  },
  {
    img: "/images/Website.png",
    color: "#ccc2ff",
    title: "Website",
    content:
      "This portfolio website stands as a testament to my growth and proficiency in web development. Crafted as a personal project, it has been instrumental in expanding my knowledge of front-end technologies, including HTML, CSS, and JavaScript. Through this website, I showcase my skills, experiences, and projects, providing visitors with an interactive and informative browsing experience. Hosted on Cloudflare Pages, the site benefits from the enhanced security features offered by Cloudflare, ensuring a safe browsing environment. Furthermore, leveraging DNS routing and Cloudflare tunnels, the website seamlessly grants access to my home lab, enabling me to continually expand my web infrastructure and explore new possibilities.",
    tags: ["WEB DEVELOPMENT", "DNS", "CLOUDFLARE", "HTML/CSS", "JAVASCRIPT"],
    link: "https://github.com/MaxFdev/MaxFdev.github.io",
  },
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
