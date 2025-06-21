import React from "react";

import Carousel from '../components/Carousel';


export default function Project({ projectData }) {
    console.log('first',projectData.images.length);
    return (
        <div className="max-w-5xl mx-auto px-4 py-10">

            {/* Hero Image */}
            <img
                src={projectData.heroImage}
                alt="Project Screenshot"
                className="rounded shadow-lg mb-8 w-full object-cover max-h-[450px]"
                loading="lazy"
            />

            {/* Overview Section */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-2">Overview</h2>
                <p className="text-black-700 leading-relaxed">
                    {projectData.overview}
                </p>
            </section>

            {/* Role & Stack */}
            <section className="grid sm:grid-cols-2 gap-6 mb-10">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">My Role</h2>
                    <p className="text-black-700">{projectData.role}</p>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
                    <p className="text-black-700">
                        {projectData.tech}
                    </p>
                </div>
            </section>

            {/* Carousel Screenshots */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Screenshots</h2>
                <Carousel images={projectData.images} />
            </section>

            {/* Features Section */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                <ul className="list-disc pl-6 space-y-2 text-black-700">
                {projectData.keyFeatures.map((value,i) => (
                     <li key={'feature_'+i}>{value}</li>
                ))}    
                </ul>
            </section>


            {/* Learnings */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-2">Challenges & Learnings</h2>
                <p className="text-black-700">
                    {projectData.challenges}
                </p>
            </section>

            <div className="btn text-center p-2">
                <a
                    href={projectData.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                >
                    View Code
                </a>
            </div>
        </div>
    );
};
