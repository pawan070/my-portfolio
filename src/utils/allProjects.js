import chess from '../assets/chess.jpg';
import portfolioHome from '../assets/portfolio/portfolioHome.png';
import folio1 from '../assets/portfolio/folio1.png';
import folio2 from '../assets/portfolio/folio2.png';
import folio3 from '../assets/portfolio/folio3.png';
import folio4 from '../assets/portfolio/folio4.png';

export const allProjects = [
    {
        id: 1,
        title: "My Portfolio",
        des: "This is my personal portfolio website showcasing my skills, projects, and experience. It serves as a platform to demonstrate my work and connect with potential clients 😁.",
        heroImage: portfolioHome,
        images: [folio1, folio2, folio3, folio4],
        href: 'https://github.com/pawan070/my-portfolio',
        liveDemo: "http://my-portfolio-nine-eta-54.vercel.app/",
        overview: "This project is a personal portfolio website built to showcase my skills, projects, and experience. It serves as a platform to demonstrate my work and connect with potential clients or employers. The site includes sections for my biography, skills, projects, and contact information. It is designed to be visually appealing, user-friendly, and responsive across devices. you can also find my resume, skills section where I share insights on web development and design. You can also find the link to my GitHub profile and linkedIn accounts.",
        role: "Sole developer responsible for frontend development, UI/UX, and deployment. I have designed and developed the entire website from scratch, ensuring it reflects my personal brand and professional capabilities.",
        tech: "React,  Tailwind CSS, HTML, MUI(Material UI)",
        keyFeatures: ['Fully responsive and mobile-first design',
            'A downladable resume section',
            'Skills section with insights on web development and design',
            'Links to GitHub and LinkedIn profiles'],
        challenges: "Learned to optimize performance with lazy loading and memoization. Gained experience in responsive design and accessibility. Implemented SEO best practices to enhance visibility."
    },
    {
        id: 2,
        title: "Interactive JavaScript Projects",
        des: "A showcase of interactive JavaScript applications demonstrating my ability to build dynamic, API-driven, and user-friendly web experiences.",
        heroImage: chess,
        images: [],
        href: 'https://github.com/pawan070/JavaScriptProject',
        liveDemo: 'https://pawan070.github.io/JavaScriptProject/',
        overview: "This project collection highlights my hands-on work with JavaScript, HTML5, and CSS. It includes several mini-applications such as a Weather App, a Real-Time Date & Time display, and a GitHub User Search tool. Each project is designed to be interactive, functional, and responsive, showcasing my skills in front-end development and API integration.",
        role: "I was responsible for designing and developing a responsive landing page, implementing free-to-use public APIs (such as weather data APIs), and ensuring smooth user interaction. This project demonstrates my ability to take ideas from concept to functional implementation with clean, efficient code.",
        tech: "JavaScript, HTML5, Vanilla CSS, REST APIs",
        keyFeatures: [
            "Weather App with 7-day forecast using live API data",
            "Real-time Date & Time modal",
            "GitHub User Search with API integration",
            "Responsive landing page design"
        ],
        challenges: "Through this project, I gained practical experience in API integration, handling asynchronous JavaScript (fetch/async-await), and structuring responsive UI components. I also learned how to design interactive applications that enhance user engagement while maintaining clean and maintainable code."
    },
    {
        id: 3,
        title: "Email Creation & Management",
        des: "Designed and developed responsive, editable email templates in HubSpot and Marketo for multiple clients across different industries.",
        heroImage: chess,
        images: [],
        href: 'https://github.com/pawan070/emialSample',
        liveDemo: 'https://pawan070.github.io/emialSample/',
        overview: "This project involved creating modular, mobile-friendly email templates tailored for client-specific campaigns in both HubSpot and Marketo. These templates were designed to be fully editable by marketing teams using drag-and-drop or WYSIWYG editors. The goal was to improve campaign efficiency, reduce production time, and ensure cross-client consistency across platforms.",
        role: "HubSpot & Marketo Email Developer",
        tech: "HTML CSS3",
        keyFeatures: ["Fully editable modules using HubSpot's drag-and-drop editor and Marketo's token system",
            "Responsive layouts for all major email clients including Gmail, Outlook, and Apple Mail",
            "Custom CTA buttons, banners, and reusable blocks for dynamic content injection",
            "Dark mode optimization and accessibility best practices"],
        challenges: "Adapted to unique quirks of HubSpot's and Marketo's rendering engines, especially with Outlook. Learned how to structure templates for high reusability while minimizing email weight. Implemented lazy loading for preview assets and tackled CORS issues when fetching third-party assets. Developed a QA checklist to ensure pixel-perfect rendering across 30+ devices and clients."
    }
];
