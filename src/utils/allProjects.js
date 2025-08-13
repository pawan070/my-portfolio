import chess from '../assets/chess.jpg';
import portfolioHome from '../assets/portfolioHome.png';
import folio1 from '../assets/folio1.png';
import folio2 from '../assets/folio2.png';
import folio3 from '../assets/folio3.png';
import folio4 from '../assets/folio4.png';

export const allProjects = [
    {
        id: 1,
        tittle: "My Portfolio",
        des: "This is my personal portfolio website showcasing my skills, projects, and experience. It serves as a platform to demonstrate my work and connect with potential clients 😁.",
        heroImage: portfolioHome,
        images: [folio1,folio2,folio3,folio4],
        href:'https://github.com/pawan070/my-portfolio',
        liveDemo : "http://my-portfolio-nine-eta-54.vercel.app/",
        overview: "This project is a personal portfolio website built to showcase my skills, projects, and experience. It serves as a platform to demonstrate my work and connect with potential clients or employers. The site includes sections for my biography, skills, projects, and contact information. It is designed to be visually appealing, user-friendly, and responsive across devices. you can also find my resume, skills section where I share insights on web development and design. You can also find the link to my GitHub profile and linkedIn accounts.",
        role: "Sole developer responsible for frontend development, UI/UX, and deployment. I have designed and developed the entire website from scratch, ensuring it reflects my personal brand and professional capabilities.",
        tech: "React,  Tailwind CSS, HTML, MUI(Material UI)",
        keyFeatures: [ 'Fully responsive and mobile-first design',
            'A downladable resume section',
            'Skills section with insights on web development and design',
            'Links to GitHub and LinkedIn profiles'],
        challenges: "Learned to optimize performance with lazy loading and memoization. Gained experience in responsive design and accessibility. Implemented SEO best practices to enhance visibility."
    },
    // {
    //     id: 2,
    //     tittle: "Second Project",
    //     des: "A smart solution to [problem statement].",
    //     heroImage: chess,
    //     images: [],
    //     href:'',
    //     overview: "This project is a [type] app that helps users [solve a problem or fulfill a need]. Built to address [context or purpose]. It includes features like [key features summary].",
    //     role: "Sole developer responsible for full-stack development, UI/UX, and deployment.",
    //     tech: "React, Node.js, Express, MongoDB, Tailwind CSS, Firebase Auth",
    //     keyFeatures: [],
    //     challenges: "Learned to optimize performance with lazy loading and memoization. Faced and solved CORS issues while integrating with 3rd-party APIs. Gained experience in responsive design and accessibility."
    // },
    {
        id: 2,
        tittle: "Email Creation & Management",
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
