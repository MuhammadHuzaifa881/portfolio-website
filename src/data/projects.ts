import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Health Plus",
    href: "/projects",
    tags: ["Nextjs", "Tailwindcss", "Monaco Editor", "Vercel"],
    image: {
      LIGHT: "/images/projects/health/1.png",
      DARK: "/images/projects/health/1.png",
    },
  },
  {
    index: 1,
    title: "Mega Cart",
    href: "/projects",
    tags: [
      "Reactjs",
      "Tailwindcss",
      "Scss",
      "Vite",
      "React-router-dom",
      "Redux",
      "Vercel",
    ],
    image: {
      LIGHT: "/images/projects/mega-cart/1.png",
      DARK: "/images/projects/mega-cart/2.png",
    },
  },
  {
    index: 2,
    title: "React Bank",
    href: "/projects",
    tags: ["Reactjs", "Vite", "Tailwindcss", "Vercel", "Zustand", "React DND"],
    image: {
      LIGHT: "/images/projects/mega-cart/1.png",
      DARK: "/images/projects/mega-cart/2.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Healtgh Plus",
    favicon: "/icons/plus.svg",
    imageUrl: [
      "/images/projects/health/1.png",
      "/images/projects/health/2.png",
    ],
    description:
      "Visualize JSON data format in form of a tree or graph. Application is made using Nextjs, Tailwindcss and Monaco Editor. Design image can be downloaded from this app.",
    sourceCodeHref:
      "https://github.com/MuhammadHuzaifa881/Pakistan-health-plus.git",
    liveWebsiteHref: "https://pakistan-health-plus.vercel.app/",
  },
  {
    name: "Mega Cart",
    favicon: "/icons/cart.svg",
    imageUrl: [
      "/images/projects/mega-cart/1.png",
      "/images/projects/mega-cart/2.png",
      "/images/projects/mega-cart/1.png",
    ],
    description:
      "Keep track of projects and tasks in different categories. Drag and drop card from tables. Assign user and priority to task and many more features. This app is made using Reactjs, Typescript, Tailwindcss and React-beautiful-dnd library.",
    sourceCodeHref: "https://github.com/MuhammadHuzaifa881/Mega-cart.git",
    liveWebsiteHref: "https://mega-cart-seven.vercel.app/",
  },
  {
    name: "React Bank",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/mega-cart/1.png",
      "/images/projects/mega-cart/2.png",
      "/images/projects/mega-cart/1.png",
    ],
    description:
      "Many short and fun games using Reactjs, Typescript and Tailwindcss with collaboration with other developers",
    sourceCodeHref: "https://github.com/MuhammadHuzaifa881/Raect-Bank.git",
    liveWebsiteHref: "https://raect-bank.vercel.app/",
  },
  {
    name: "Blog React",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/blog-react/1.png",
      "/images/projects/blog-react/2.png",
      "/images/projects/blog-react/1.png",
      "/images/projects/blog-react/2.png",
    ],
    description:
      "My personal portfolio website made using ReactJs, tailwindcss and framer motion.",
    sourceCodeHref: "https://github.com/MuhammadHuzaifa881/cute-blog.git",
    liveWebsiteHref: siteMetadata.siteUrl,
  },
  {
    name: "Covid Tracker",
    favicon: "/images/projects/logos/covidtracker.ico",
    imageUrl: [
      "/images/projects/covidTracker.webp",
      "/images/projects/covidTrackerMap.webp",
      "/images/projects/covidTrackerTable.webp",
    ],
    description:
      "Get latest covid related stats in a table where user can filter using country and cases. It also has a map which show every countries data for quick view. It uses an open source api (disease.sh). Made using Reactjs, Javascript and MUI",
    sourceCodeHref: "https://github.com/MuhammadHuzaifa881/covid-tracker.git",
    liveWebsiteHref: "https://bumbaiya.github.io/CovidTracker",
  },
  {
    name: "Stock predictor",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: [
      "/images/projects/stockPredictor.webp",
      "/images/projects/stockPredictorCandleChart.webp",
      "/images/projects/stockPredictorCompareChart.webp",
      "/images/projects/stockPredictorLineChart.webp",
    ],
    description:
      "Get prediction of opening and closing price of stocks price. Frontend is made using Reactjs and backend is made using Flask and Machine learning model are trained using Tensorflow",
    sourceCodeHref: "https://github.com/MuhammadHuzaifa881/stock-predictor.git",
  },
];
