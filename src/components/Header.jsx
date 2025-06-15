import { useState } from 'react';
import { Link } from 'react-router-dom';

import ImageAvatars from './Avatar';
import image2 from '../assets/image2.jpeg';


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className=" flex justify-between items-center relative bg-gradient-to-r from-blue-800 via-blue-600 to-purple-700 text-white p-4 shadow-lg">
            <h1 className="ml-6 font-bold text-lg flex justify-normal"><ImageAvatars src={image2} /><span className='mt-4 px-4'>Pawan Joshi</span></h1>

            <nav className="mr-6 hidden md:flex gap-6">
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/about" className="hover:underline">About</Link>
                <Link to="/projects" className="hover:underline">Projects</Link>
                <Link to="/skills" className="hover:underline">Skills</Link>
                <Link to="/contact" className="hover:underline">Contact</Link>
                <Link to="/resume" className="hover:underline">Resume</Link>
            </nav>

            {/* Hamburger (mobile) */}
            <button
                className="md:hidden focus:outline-none"
                onClick={toggleMenu}
            >
                <span className="text-2xl">⋮</span>
            </button>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="absolute top-full right-4 bg-white text-black shadow-md rounded-md flex flex-col md:hidden mt-2 z-10">
                    <Link to="/" onClick={toggleMenu} className="px-4 py-2 hover:bg-gray-100">Home</Link>
                    <Link to="/about" onClick={toggleMenu} className="px-4 py-2 hover:bg-gray-100">About</Link>
                    <Link to="/projects" onClick={toggleMenu} className="px-4 py-2 hover:bg-gray-100">Projects</Link>
                    <Link to="/skills" onClick={toggleMenu} className="px-4 py-2 hover:bg-gray-100">Skills</Link>
                    <Link to="/contact" onClick={toggleMenu} className="px-4 py-2 hover:bg-gray-100">Contact</Link>
                    <Link to="/resume" onClick={toggleMenu} className="px-4 py-2 hover:bg-gray-100">Resume</Link>
                </div>
            )}
        </header>
    )
}