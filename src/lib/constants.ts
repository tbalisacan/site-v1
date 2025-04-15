import { RiBehanceLine, RiGithubFill, RiLinkedinLine } from "react-icons/ri";

export const navItems = [
  {
    name: "Skills",
    link: "/#skills",
  },
  {
    name: "Experience",
    link: "/#experience",
  },
  {
    name: "Works",
    link: "/#works",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

export const projects = [
  {
    idx: 0,
    title: "Anthology Configurator",
    slug: "anthology-configurator",
    coverImage: "/images/dev-work/anthology-configurator/thumbnail.jpg",
    shortDesc:
      "With the convenient 3D configurator, clients of the Keeler Brass Company are able to take an active role in crafting their own hardware samples.",
    desc: `<p>The <strong>Keeler Brass Company</strong> manufactures rare luxury hardware offerings. Their first hardware launch, the Anthology Series, focuses on personalization and offers over 30,000 unique hardware combinations. To showcase this, the company partnered with <strong>WebriQ</strong> to develop a web app that enables their customers to create their own design.</p><p>The <strong>Anthology Configurator</strong> web app spotlights a 3D rendering of a hardware combination that updates as the customer selects provided options. Customers are also able to create a design suite of 11 hardware pieces based on the specs of one design.</p><p>Below are selected screenshots of the web app. You can visit the Anthology Configurator <a class="text-primary underline underline-offset-2 decoration-1" href="https://www.keelerbrasscompany.com/anthology?productType=Bar+Pull&sku=KBC04-I-KN96-I" target="_blank">here</a>.</p>`,
    bgColor: "#6f5958",
    roles: [
      {
        name: "Collaboration",
        desc: "In collaborating with the project manager and lead UI/UX designer, we fine-tuned requirements and expectations to accurately translate the designer's vision to code.",
      },
      {
        name: "Front-end Development",
        desc: "I initiated development by converting the provided Figma prototype into pixel-perfect web interfaces, ensuring responsiveness, speed, and cross-brower compatibility.",
      },
    ],
    team: [
      {
        name: "WebriQ",
        desc: "Superstar development team.",
      },
      {
        name: "Belwith Marketing",
        desc: "Product design team and graphic designers provided visual assets and designed high-fidelity Figma prototype showcasing micro-interactions and user flows.",
      },
    ],
    images: [
      {
        path: "/images/dev-work/anthology-configurator/1.jpg",
        alt: "",
      },
      {
        path: "/images/dev-work/anthology-configurator/2.jpg",
        alt: "",
      },
      {
        path: "/images/dev-work/anthology-configurator/3.jpg",
        alt: "",
      },
      {
        path: "/images/dev-work/anthology-configurator/4.jpg",
        alt: "",
      },
    ],
    mobileImages: [
      {
        path: "/images/dev-work/anthology-configurator/mobile-1.jpg",
        alt: "",
      },
      {
        path: "/images/dev-work/anthology-configurator/mobile-2.jpg",
        alt: "",
      },
      {
        path: "/images/dev-work/anthology-configurator/mobile-3.jpg",
        alt: "",
      },
      {
        path: "/images/dev-work/anthology-configurator/mobile-4.jpg",
        alt: "",
      },
    ],
  },
  {
    idx: 1,
    title: "Hickory Hardware",
    slug: "hickory-hardware",
    coverImage: "/images/dev-work/hickory-hardware/thumbnail.jpg",
    shortDesc: "Ecommerce website for a hardware company.",
    desc: `<p><strong>Hickory Hardware</strong> offers a diverse selection of original hardware designs in various styles, sizes, and finishes. The website is live at <a class="text-primary underline underline-offset-2 decoration-1" href="https://www.hickoryhardware.com/" target="_blank">hickoryhardware.com</a></p>`,
    bgColor: "#419eb2",
    roles: [
      {
        name: "Design",
        desc: "Given a detailed brief, I created designs for different pages of the ecommerce website. After a few rounds of feedback and discussions with the client's marketing team, I refined the high-fidelity prototype prior to heading off to the development phase.",
      },
      {
        name: "Front-end Development",
        desc: "In collaboration with the development team at <strong>WebriQ</strong>",
      },
    ],
    images: [
      {
        path: "/images/dev-work/hickory-hardware/1.jpg",
        alt: "",
      },
      {
        path: "/images/dev-work/hickory-hardware/2.jpg",
        alt: "",
      },
      {
        path: "/images/dev-work/hickory-hardware/3.jpg",
        alt: "",
      },
      {
        path: "/images/dev-work/hickory-hardware/4.jpg",
        alt: "",
      },
      {
        path: "/images/dev-work/hickory-hardware/5.jpg",
        alt: "",
      },
    ],
  },
];

export const designs = [
  {
    title: "Merge Transportation",
    link: "https://www.behance.net/gallery/218683973/Transportation-Provider-Website",
    thumbnail: "/images/design-work/merge-transportation.jpg",
    bgColor: "#F1681F",
  },
  {
    title: "Extreme Motus",
    link: "https://www.behance.net/gallery/215026301/Website-for-an-All-Terrain-Wheelchair",
    thumbnail: "/images/design-work/extreme-motus.jpg",
    bgColor: "#012050",
  },
  {
    title: "Hickory Hardware",
    link: "https://www.behance.net/gallery/223123731/Luxury-Interior-Design-Hardware-E-commerce-Website",
    thumbnail: "/images/design-work/hickory-hardware.jpg",
    bgColor: "#1E607B",
  },
  {
    title: "Montclair Chiropractic",
    link: "https://www.behance.net/gallery/215018299/Chiropractor-Landing-Page",
    thumbnail: "/images/design-work/montclair.jpg",
    bgColor: "#04a3b3",
  },
  {
    title: "3DSHQ",
    link: "https://www.behance.net/gallery/215011359/3D-Manufacturing-E-commerce-Website",
    thumbnail: "/images/design-work/3dshq.jpg",
    bgColor: "#003049",
  },
  {
    title: "Endourage",
    link: "https://www.behance.net/gallery/105558039/CBD-Products-Website-Redesign",
    thumbnail: "/images/design-work/endourage.jpg",
    bgColor: "#8EADAD",
  },
  {
    title: "Aria Custom Design",
    link: "https://www.behance.net/gallery/98566679/Home-Interior-Website",
    thumbnail: "/images/design-work/aria.jpg",
    bgColor: "#D87050",
  },
  {
    title: "IT Specialists",
    link: "https://www.behance.net/gallery/94819655/IT-Company-Custom-Web-Development",
    thumbnail: "/images/design-work/it-specialists.jpg",
    bgColor: "#034C71",
  },
  {
    title: "Pack & Ship Plus",
    link: "https://www.behance.net/gallery/84171917/Packing-Company-Website-Redesign",
    thumbnail: "/images/design-work/pack-ship-plus.jpg",
    bgColor: "#072E5D",
  },
  {
    title: "Sandy Scott Consulting Group",
    link: "https://www.behance.net/gallery/84171533/Consulting-Group-Website-Design",
    thumbnail: "/images/design-work/sandy-scott.jpg",
    bgColor: "#31B4FF",
  },
  {
    title: "ProGrowth Advisors",
    link: "https://www.behance.net/gallery/81920269/ProGrowth-Advisors-Front-end-Web-Design",
    thumbnail: "/images/design-work/progrowth-advisors.jpg",
    bgColor: "#c1002f",
  },
  {
    title: "Bluebox Professionals",
    link: "https://www.behance.net/gallery/73386547/Bluebox-Responsive-Web-Design",
    thumbnail: "/images/design-work/bluebox-professionals.jpg",
    bgColor: "#0192f7",
  },
  {
    title: "Endourage",
    link: "https://www.behance.net/gallery/105558039/CBD-Products-Website-Redesign",
    thumbnail: "/images/design-work/endourage.jpg",
    bgColor: "#8EADAD",
  },
  {
    title: "SolQ",
    link: "https://www.behance.net/gallery/223125973/Solar-Energy-Company-Website",
    thumbnail: "/images/design-work/solq.jpg",
    bgColor: "#3185FF",
  },
  {
    title: "Merge Transportation",
    link: "https://www.behance.net/gallery/218683973/Transportation-Provider-Website",
    thumbnail: "/images/design-work/merge-transportation.jpg",
    bgColor: "#F1681F",
  },
  {
    title: "Aria Custom Design",
    link: "https://www.behance.net/gallery/98566679/Home-Interior-Website",
    thumbnail: "/images/design-work/aria.jpg",
    bgColor: "#D87050",
  },
];

export const jobExperience = [
  {
    company: "WebriQ",
    logo: "/images/company-logos/webriq.svg",
    duration: "Jul 2018 - Oct 2024",
    position: "Web Designer & Front-End Developer",
    duties: [
      "Designed high-fidelity UI/UX prototypes in Figma, accelerating the development process;",
      "Developed responsive, pixel-perfect web interfaces from Figma prototypes using ReactJS/NextJS/Gatsby and Tailwind CSS, ensuring optimized web performance & cross-browser compatibility;",
      "Partnered with project managers and engaged with clients first-hand to refine technical requirements, reducing revisions and shortening delivery timelines;",
      "Led front-end development for multiple projects;",
      "Mentored team members on CSS, UI/UX, ReactJS, and site optimization to collectively improve code quality.",
    ],
  },
  {
    company: "Mopro",
    logo: "/images/company-logos/mopro.png",
    duration: "Feb 2017 - Jun 2018",
    position: "Jr. Web Builder",
    duties: [
      "Built and deployed responsive websites using the company’s proprietary backend system;",
      "Developed custom HTML, CSS, and JavaScript solutions for unique client needs;",
      "Designed and optimized web-ready image assets to enhance site aesthetics and performance;",
      "Provided real-time technical support to customer service teams for reduced issue resolution time.",
    ],
  },
  {
    company: "Tate Publishing",
    logo: "/images/company-logos/tate.png",
    duration: "Apr 2014 - Dec 2016",
    position: "Promos Designer",
    duties: [
      "Revamped and formatted book layouts for various print formats using Adobe InDesign and Photoshop, ensuring high-quality print production;",
      "Enhanced illustrations to create 3D books and coloring books;",
      "Developed engaging social media branding for authors and music artists using Adobe Photoshop and provided email support, strengthening their online presence and audience engagement.",
    ],
  },
  {
    company: "Live2Sell, Inc.",
    logo: "/images/company-logos/live2sell.png",
    duration: "Oct 2012 - Feb 2013",
    position: "Graphic Designer & Content Creator (Intern)",
    duties: [
      "Managed and updated WordPress blogs with SEO-optimized content;",
      "Created visually engaging infographics using Adobe Photoshop/Illustrator for marketing campaigns;",
      "Produced and edited short promotional videos using Vegas Pro;",
      "Researched and wrote SEO-friendly articles on industry trends, improving website ranking and online visibility.",
    ],
  },
];

export const contactDetails = {
  email: "tessa.balisacan@gmail.com",
  phone: "+63-977-143-8397",
  links: [
    {
      id: 0,
      name: "GitHub",
      link: "https://github.com/tbalisacan",
      icon: RiGithubFill,
      target: "_blank",
    },
    {
      id: 1,
      name: "Behance",
      link: "https://www.behance.net/tbalisacan",
      icon: RiBehanceLine,
      target: "_blank",
    },
    {
      id: 2,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/tbalisacan/",
      icon: RiLinkedinLine,
      target: "_blank",
    },
  ],
  filePath: "/assets/tbalisacan-resume.pdf",
};
