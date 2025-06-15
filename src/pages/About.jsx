import image1 from '../assets/image1.jpeg';
import chess from '../assets/chess.jpg'

export default function About() {


  return (
    <div className="bio py-2">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">About Me</h1>

      {/* Professional Summary */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-16">
        <div className="max-w-md">
          <p className="text-lg text-gray-700 leading-relaxed">
            Hi, I'm <strong className="text-black-600">Pawan Joshi</strong>, a passionate <strong className="text-black-600">Front-End Developer</strong> with over <strong className="text-black-600">3 years</strong> of experience crafting responsive and dynamic web interfaces.
            I specialize in <strong className="text-black-600">API integration</strong>, <strong className="text-black-600">email development</strong>, and creating high-conversion <strong className="text-black-600">landing pages</strong>.
          </p>
        </div>
        <img
          className="w-48 h-48 rounded-xl shadow-lg transition-transform hover:scale-105 duration-300"
          src={image1}
          alt="Pawan Joshi"
        />
      </div>

      {/* Hobbies Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10">
        <img
          className="w-48 h-48 rounded-xl shadow-lg transition-transform hover:scale-105 duration-300"
          src={chess}
          alt="Pawan Joshi"
        />
        <div className="max-w-md">
          <p className="text-xl text-black-700 leading-relaxed">
            Outside of coding, I enjoy challenging my mind with <strong className="text-yellow-600">chess</strong>, staying active through <strong className="text-yellow-600">cricket and football</strong>, and keeping up with the latest in the world of <strong className="text-yellow-600">sports</strong>.
          </p>
        </div>
      </div>
    </div>

  )
}
