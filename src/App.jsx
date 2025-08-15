/*
import { Header } from "./components/header";
import { Projects } from "./components/projects";
import {Contact} from "./components/contact"
import {About} from "./components/about"
import {Skill} from "./components/skill"
import { Home } from "./components/home";
export default function App() {
  return ( 
    <div>
                     
        <div className="bg-orange-400 w-[1350px]" >
         <Header></Header>
</div>
        <Home></Home>
            <div>
        <About> </About>
        </div>

  </div>
   
  );
}
  */
import { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="  min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Navbar */}
      <nav className="fixed w-full bg-lime-200 shadow-md p-4 ">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-blue-600">Meku</h1>

          {/* Desktop Menu */}
          <div className="  hidden md:flex gap-6 text-lg">
            <a href="#top" className="hover:text-blue-600">Home</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-6 h-0.5 bg-gray-800"></span>
            <span className="w-6 h-0.5 bg-gray-800"></span>
            <span className="w-6 h-0.5 bg-gray-800"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="flex flex-col gap-4 mt-4 md:hidden  ml-96">

            <a
              href="#top"
              className="hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-20 px-6 bg-gradient-to-r from-blue-100 to-blue-200">
        <img
          src="me.jpg"
          alt="Profile"
          className="rounded-full border-4 border-white shadow-lg w-32 sm:w-40 lg:w-48"
        />
        <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold">
          Mequanent Erkie Ayele
        </h2>
        <p className="text-gray-700 text-base sm:text-lg lg:text-xl max-w-xl">
          Lecturer | Full Stack Developer | Engineer | AI designer
        </p>
        <a
          href="#projects"
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition"
        >
          View My Work
        </a>
        <br/>
            <a
      href="Mequanent_Erkie_CV.pdf"
      download
      className="bg-green-600 text-white px-6 py-2 rounded-full shadow hover:bg-green-700 transition"
    >
      Download Resume
    </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">About Me</h3>
        <p className="text-gray-700 leading-relaxed text-base sm:text-lg text-justify">
          I am a senior lecturer in Electrical and Computer Engineering at Mizan Tepi University with 
          a BSc and MSc in Computer Engineering from Bahir Dar University. I have extensive experience 
          in teaching, leading academic programs, and developing software solutions.  
          Currently, I serve as a lecturer in Engineering & Technology College @ MTU.
          <br /><br />
          My skills span across applications development, full-stack web development (React, Node.js, Express, MongoDB),
          mobile app development and Electrica and Computer Engineering project supervision.
          I am passionate about creating impactful tools and adapting new technlogy.
          </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-100 px-6">
        <h3 className="text-2xl font-bold mb-6 text-center">Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Multi-level Approval System",
              desc: "A request management platform with Admin, Department, and Registrar approval stages."
            },
            {
              title: "Social Media Message Manager",
              desc: "Tool for managing multiple social media account messages in one interface."
            },
            {
              title: "Zoom QR Code Overlay App",
              desc: "Customizable QR code overlay tool for Zoom video calls."
            },
            {
              title: "Plastic Surgeon Portfolio Website",
              desc: "Responsive and visually appealing WordPress site for a medical professional."
            },
            {
              title: "Cryptocurrency Wallet Tracker",
              desc: "Web app for tracking multiple cryptocurrency wallets in real-time."
            },
            {
              title: "Amharic Sign Language Recognition",
              desc: "Prototype for recognizing Amharic sign language using AI."
            }
          ].map((proj, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition"
            >
              <h4 className="text-lg font-bold">{proj.title}</h4>
              <p className="text-gray-600">{proj.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">Contact</h3>
        <p className="mb-6">
          Feel free to reach out for collaborations, academic inquiries, or software projects.
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded"
          />
          <textarea
            placeholder="Message"
            rows="5"
            className="w-full p-3 border rounded"
          ></textarea>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Send
          </button>
        </form>
        <div className="mt-6 text-gray-700">
          <p><strong>Email:</strong> mekueer@gmail.com</p>
          <p><strong>Phone:</strong> +251 930 974 987</p>
          <p><strong>Location:</strong> Addis Ababa, Ethiopia</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full bg-gray-800 text-white text-center py-4 text-sm sm:text-base">
        © {new Date().getFullYear()} Mequanent Erkie Ayele. All rights reserved.
      </footer>
    </div>
  );
}


