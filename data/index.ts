// TODO fix writing

// FIXME finalize intro writing

export const intro = {
  text: "Hello, I'm Max, a technology enthusiast pursuing a Bachelor's degree in Computer Science at Yeshiva University. My studies are focussed in Distributed Systems, and my goal is to get into the Software Engineering industry. I am currently employed in my university's IT department, where I help deploy infrastructure and resolve issues related to networking and all sorts of software. I had previously run two successful freelance businesses, one in website development and the other in IT consulting. Alongside my technical experience, I have a lot of experience programming, primarily in Java.",
};

// FIXME finish rewriting sections
// TODO add graphics for each tab | something nicer to look at

export const aboutItems = [
  {
    title: "Academics",
    content:
      "I have been enrolled at Yeshiva University since August of 2022. Since then, I have been committed to pursuing a B.S. in Computer Science, with a focus in Distributed Systems. Through my classes and coursework, I have developed a solid foundation in programming, primarily with Java, but also in C and Python. Through my studies, I have worked on many projects that practically apply C.S. theory in many contexts, such as Parallel Programming, Distributed Systems, and Networking. Additionally, I have been chosen to fill the role of Head Website Manager for the YU Observer, a school newspaper. The role involves working with a team of students to maintain and update the website.",
  },
  {
    title: "Business",
    content:
      "In 2018 I started to learn how to build websites with WordPress as a side project. Soon after learning, family and friends offered to pay me to build, fix, and redo their websites. I grew from doing odd jobs for family and friends to running a freelance website development business catering to small local businesses. In addition to websites, some clients needed I.T. work, mainly networking, hardware modifications, and software setup. So I began offering freelance I.T. consulting services alongside web development.",
  },
  {
    title: "Professional",
    content: 
      "In May of 2024, I began working as a Student I.T. Specialist for Yeshiva University. My role primarily consists of setting up I.T. infrastructure and assisting students and faculty with all sorts of issues. I plan on pivoting into Software Engineering in the near future.",
  },
];

// TODO source projects from github?
// TODO store text differently & redo writing

export const projectItems = [
  {
    img: "/images/StockTerminal.png",
    color: "#00ffa2",
    title: "StockTerminal",
    content:
      "StockTerminal is a Java-based program designed to retrieve and organize real-time stock market data efficiently. Developed with fintech professionals in mind, this project caters to individuals who require quick access to market data directly from the terminal. Leveraging a combination of object-oriented programming principles and various data structures, StockTerminal seamlessly fetches stock data from an API and presents it in a user-friendly format within the terminal. My partner and I effectively collaborated to develop StockTerminal as a functional program within a single week.",
    tags: ["JAVA", "CLI", "API", "FINANCE", "DATA STRUCTURES"],
    link: "https://github.com/MaxFdev/StocksTerminal_SE_Project",
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
    title: "Website (Original)",
    content:
      "This portfolio website stands as a testament to my growth and proficiency in web development. Crafted as a personal project, it has been instrumental in expanding my knowledge of front-end technologies, including HTML, CSS, and JavaScript. Through this website, I showcase my skills, experiences, and projects, providing visitors with an interactive and informative browsing experience. Hosted on Cloudflare Pages, the site benefits from the enhanced security features offered by Cloudflare, ensuring a safe browsing environment. Furthermore, leveraging DNS routing and Cloudflare tunnels, the website seamlessly grants access to my home lab, enabling me to continually expand my web infrastructure and explore new possibilities.",
    tags: ["WEB DEVELOPMENT", "DNS", "CLOUDFLARE", "HTML/CSS", "JAVASCRIPT"],
    link: "https://github.com/MaxFdev/MaxFdev.github.io",
  },
];

// TODO add more socials (hacker rank, leet code, this website)?
// TODO make user copyable and link go to icon

export const socials = [
  {
    title: "Email",
    user: "maxfranklin@maxfdev.com",
    link: "mailto:maxfranklin@maxfdev.com",
  },
  {
    title: "GitHub",
    user: "MaxFdev",
    link: "https://github.com/MaxFdev",
  },
  {
    title: "LinkedIn",
    user: "Max Franklin",
    link: "https://www.linkedin.com/in/max--franklin/",
  },
];
