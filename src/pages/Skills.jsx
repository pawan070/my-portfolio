import { useNavigate } from 'react-router-dom';

const skills = [
    {
        category: "Frontend",
        items: [
            { name: "React", level: 80 },
            { name: "JavaScript", level: 90 },
            { name: "HTML5", level: 95 },
            { name: "Tailwind CSS", level: 90 },
            { name: "CSS3", level: 90 },
        ],
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", level: 80 },
            { name: "REST APIs", level: 90 },
            { name: "Webhooks", level: 90 },
            { name: "MySQL", level: 80 },
            { name: "Express", level: 80 },
        ],
    },
    {
        category: "Tools",
        items: [
            { name: "Git", level: 85 },
            { name: "GitHub", level: 85 },
            { name: "Postman", level: 80 },
            { name: "VS Code", level: 90 },
            { name: "Figma", level: 70 },
        ],
    },
];

const Skills = () => {
    const navigate = useNavigate();

    const handleContactRedirect = () => {
        navigate('/projects')
    }

    return (
        <div className="max-w-5xl mx-auto px-6 py-4">
            <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">Skills & Tools</h2>

            {skills.map((group, index) => (
                <div key={index} className="mb-10">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">{group.category}</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {group.items.map((skill, idx) => (
                            <div key={idx} className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
                                <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                                    <span>{skill.name}</span>
                                    <span>{skill.level}%</span>
                                </div>
                                <div className="w-full bg-gray-200 h-2 rounded-full">
                                    <div
                                        className="bg-blue-500 h-2 rounded-full transition-all"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            <div className="button text-center">
                <button className="mt-6 px-8 py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition" onClick={handleContactRedirect}>
                    See All Projects
                </button>
            </div>
        </div>
    );
};

export default Skills;
