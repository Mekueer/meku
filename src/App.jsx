import React, { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react"; // hamburger + close icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Handle outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
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
            <a href="#skills" className="hover:text-blue-600">Skills</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>

          {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-white shadow-lg border-t px-6 py-4  flex flex-col space-y-4 justify-end"
        >
            <a
              href="#top"
              className="hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
                        <a
              href="#projects"
              className="hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
            <a
              href="#skills"
              className="hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-blue-600"
              onClick={() => setIsOpen(false)}
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
        {/* Skills Section */}
<section id="skills" className="py-16 px-6 max-w-5xl mx-auto">
  <h3 className="text-2xl font-bold mb-6 text-center">Skills</h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Frontend Skills */}
    <div className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition">
      <h4 className="text-lg font-bold mb-2">Frontend Development</h4>
      <ul className="list-disc list-inside text-gray-700">
        <li>React.js</li>
        <li>HTML & CSS</li>
        <li>Tailwind CSS</li>
        <li>JavaScript / TypeScript</li>
      </ul>
    </div>

    {/* Backend Skills */}
    <div className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition">
      <h4 className="text-lg font-bold mb-2">Backend Development</h4>
      <ul className="list-disc list-inside text-gray-700">
        <li>Node.js & Express.js</li>
        <li>MongoDB / Mongoose & MySql</li>
        <li>RESTful APIs</li>
        <li>Authentication & Authorization</li>
      </ul>
    </div>

    {/* Other Skills */}
    <div className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition">
      <h4 className="text-lg font-bold mb-2">Other Skills</h4>
      <ul className="list-disc list-inside text-gray-700">
        <li>AI Development</li>
        <li>Software Development Lifecycle (SDLC)</li>
        <li>Task Planning & Project Management</li>
        <li>Teaching & Academic Leadership</li>
      </ul>
    </div>
  </div>
</section>
      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-100 px-6">
        <h3 className="text-2xl font-bold mb-6 text-center">Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Student Dormitory management System",
              desc: "A system to efficiently manage student dormitory assignments, occupancy, and related administrative tasks."
            },
            {
              title: "Social Media Message Manager",
              desc: "Tool for managing multiple social media account messages in one interface."
            },
            {
              title: "Kebele Residential management System",
              desc: "A digital system to efficiently manage resident and household information within a kebele."
            },
                        {
              title: "Portfolio Website",
              desc: " A personal portfolio website showcasing my projects, skills, and professional experience."
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


