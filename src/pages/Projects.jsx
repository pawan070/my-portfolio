import { useState } from 'react';
import Project from '../components/Project';

import { allProjects } from '../utils/allProjects';

export default function Projects() {
    const [openProjectId, setOpenProjectId] = useState(null);

    const toggleProject = (projectId) => {
        setOpenProjectId(prev => prev === projectId ? null : projectId);
    };

    return (
        <>
            <h1 className="text-4xl font-bold mb-2 text-center">Projects List</h1>
            {allProjects.map((pro) => (
                <div key={pro.id} className="max-w-5xl mx-auto px-4 py-10">
                    <div className="flex justify-between">
                        <div className='max-w-3xl'>
                            <h1 className="text-3xl font-bold mb-2">{pro.id}. {pro.tittle}</h1>
                            <p className="text-white-100 text-xl">{pro.des}</p>
                        </div>
                        <div>
                            <button 
                                className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700'
                                onClick={() => toggleProject(pro.id)}
                            >
                                {openProjectId === pro.id ? 'Close' : 'Open'} Project
                            </button>
                        </div>
                    </div>
                    {openProjectId === pro.id && <Project projectData={pro} />}
                </div>
            ))}
        </>
    );
}