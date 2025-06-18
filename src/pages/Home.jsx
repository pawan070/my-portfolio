import { useNavigate } from 'react-router-dom';

import home from '../assets/home.jpg';

export default function Home() {
  const navigate = useNavigate();

  const handleContactRedirect = () => {
    navigate('/contact')
  }

  return (
    <>
      <h1 className="text-center text-5xl font-bold text-purple-700 p-2">
        Welcome to a Developer's Hub
      </h1>

      <div className="content flex flex-col-reverse md:flex-row justify-evenly items-center m-6 gap-8">
        <div className="content-text max-w-xl text-lg leading-relaxed">
          <p className="mb-4">
            👋 Hi, I'm <span className="font-bold text-blue-700">Pawan Joshi</span>, a front-end developer passionate about crafting intuitive, pixel-perfect web experiences.
          </p>
          <p className="mb-4">
            Whether it's turning designs into responsive web pages or integrating seamless APIs — I make the web work for you.
          </p>
          <p className="mb-4">
            With <span className="font-bold text-green-700">3+ years of hands-on experience</span> and deep skills in HTML, CSS, JavaScript, React, Node.js, and HubSpot — I'm your go-to developer for fast, reliable, and elegant solutions.
          </p>
          <p className="text-black text-2xl italic">
            Let's turn your ideas into functional, beautiful web pages!
          </p>
        </div>

        <div className="image w-full md:w-5/12">
          <img className="rounded-xl shadow-md transition-transform hover:scale-105 duration-300" src={home} alt="developer workspace" />
        </div>
      </div>
      <div className="button text-center">
        <button className="my-6 px-6 py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition" onClick={handleContactRedirect}>
          Let's Work Together
        </button>
      </div>
    </>
  )
}
