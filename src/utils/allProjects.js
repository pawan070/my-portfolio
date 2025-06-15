import chess from '../assets/chess.jpg';

export const allProjects = [
    {
        id: 1,
        tittle: "First Project",
        des: "A smart solution to [problem statement].",
        heroImage: chess,
        images: [chess,],
        overview: "This project is a [type] app that helps users [solve a problem or fulfill a need]. Built to address [context or purpose]. It includes features like [key features summary].",
        role: "Sole developer responsible for full-stack development, UI/UX, and deployment.",
        tech: "React, Node.js, Express, MongoDB, Tailwind CSS, Firebase Auth",
        keyFeatures: ['blank', 'User registration with Firebase authentication', 'Real-time dashboard with chart.js visualizations', 'Admin panel with role-based access', 'Fully responsive and mobile-first design'],
        challenges: "Learned to optimize performance with lazy loading and memoization. Faced and solved CORS issues while integrating with 3rd-party APIs. Gained experience in responsive design and accessibility."
    },
    {
        id: 2,
        tittle: "Second Project",
        des: "A smart solution to [problem statement].",
        heroImage: chess,
        images: [],
        overview: "This project is a [type] app that helps users [solve a problem or fulfill a need]. Built to address [context or purpose]. It includes features like [key features summary].",
        role: "Sole developer responsible for full-stack development, UI/UX, and deployment.",
        tech: "React, Node.js, Express, MongoDB, Tailwind CSS, Firebase Auth",
        keyFeatures: [],
        challenges: "Learned to optimize performance with lazy loading and memoization. Faced and solved CORS issues while integrating with 3rd-party APIs. Gained experience in responsive design and accessibility."
    },
    {
        id: 3,
        tittle: "Email Creation & Management",
        des: "Designed and developed responsive, editable email templates in HubSpot and Marketo for multiple clients across different industries.",
        heroImage: chess,
        images: [],
        href: 'https://github.com/pawan070/my-portfolio',
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
