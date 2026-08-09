import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased">
      {/* Navigation */}
      <header className="border-b border-gray-200 sticky top-0 bg-white/95 backdrop-blur-sm z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-bold text-lg text-gray-900 tracking-tight">Ragib Sakib</span>
          <nav className="space-x-6 text-sm text-gray-600 font-medium">
            <a href="#about" className="hover:text-uscRed transition-colors">About</a>
            <a href="#education" className="hover:text-uscRed transition-colors">Education</a>
            <a href="#skills" className="hover:text-uscRed transition-colors">Skills</a>
            <a href="#experience" className="hover:text-uscRed transition-colors">Experience</a>
            <a href="#projects" className="hover:text-uscRed transition-colors">Projects</a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        {/* Intro / Header */}
        <section id="about" className="flex flex-col-reverse sm:flex-row items-center justify-between gap-8 py-4">
          <div className="space-y-4 max-w-xl">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Ragib Sakib</h1>
            <p className="text-base text-gray-600 leading-relaxed">
              Software and Machine Learning Engineer based in Hawthorne, CA. Specializing in deep learning pipeline optimization, spatial processing, multi-platform mobile applications, and recommendation systems.
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-medium pt-2">
              <a href="mailto:Ragibsakib2002@gmail.com" className="text-uscRed hover:underline">Email</a>
              <span className="text-gray-300">|</span>
              <a href="https://linkedin.com/in/ragibsakib" target="_blank" rel="noreferrer" className="text-uscRed hover:underline">LinkedIn</a>
              <span className="text-gray-300">|</span>
              <a href="https://github.com/RSakib" target="_blank" rel="noreferrer" className="text-uscRed hover:underline">GitHub</a>
            </div>
          </div>
          <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-uscRed flex-shrink-0 bg-gray-100">
            <img src="/profile.jpg" alt="Ragib Sakib" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* Education */}
        <section id="education" className="space-y-6">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">Education</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold text-gray-900">University of Southern California</h3>
                <span className="text-xs text-gray-500">Sept 2026 – June 2028 (Expected)</span>
              </div>
              <p className="text-sm text-uscRed font-medium">MS in Computer Science (Artificial Intelligence)</p>
            </div>
            <div>
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold text-gray-900">University of California, Irvine</h3>
                <span className="text-xs text-gray-500">Sept 2020 – June 2024</span>
              </div>
              <p className="text-sm text-uscRed font-medium">BS in Software Engineering (GPA: 3.6)</p>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section id="skills" className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-semibold text-gray-900">Languages: </span>
              <span className="text-gray-600">Python, C++, C#, Rust, Java</span>
            </div>
            <div>
              <span className="font-semibold text-gray-900">Data & AI: </span>
              <span className="text-gray-600">PyTorch, TensorFlow, OpenCV, FAISS, SQL, SQLite, Matplotlib, SciPy</span>
            </div>
            <div>
              <span className="font-semibold text-gray-900">Web & Mobile: </span>
              <span className="text-gray-600">React, TypeScript, Angular, HTML, CSS, JavaScript, Node.js, Ionic, React Native, Gradio</span>
            </div>
            <div>
              <span className="font-semibold text-gray-900">Tools: </span>
              <span className="text-gray-600">Docker, Jira, Linux, macOS, Windows</span>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section id="experience" className="space-y-6">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">Work Experience</h2>
          
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold text-gray-900">Canon USA</h3>
                <span className="text-xs text-gray-500">Irvine, CA</span>
              </div>
              <p className="text-sm text-uscRed font-medium">Software and Machine Learning Engineer (Trainee) | Sept 2023 – Feb 2025</p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 pl-1">
                <li>Prototyped a Python pipeline using SAM 2 segmentation, Hough transforms, and clustering for object corner localization.</li>
                <li>Ported spatial clustering and geometric pipelines to C++, reducing execution latency by 90% via pass-by-reference.</li>
                <li>Integrated finalized model runtimes into production software to enhance user experience via low-latency interactivity.</li>
                <li>Shipped an app built in Ionic React to both iOS and Android platforms using a single codebase.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold text-gray-900">Canon USA</h3>
                <span className="text-xs text-gray-500">Irvine, CA</span>
              </div>
              <p className="text-sm text-uscRed font-medium">Software Intern | June 2023 – Aug 2023</p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 pl-1">
                <li>Converted major C# codebase from old UWP standard to current standards to remove technical debt.</li>
                <li>Created a multi-platform mobile and web application expanding upon current web-only clients.</li>
                <li>Operated within an Agile schedule work environment using Jira.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold text-gray-900">Boeing Satellite Systems</h3>
                <span className="text-xs text-gray-500">El Segundo, CA</span>
              </div>
              <p className="text-sm text-uscRed font-medium">Engineering Intern | June 2019 – Aug 2019</p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 pl-1">
                <li>Managed parts inventory and quality inspection for satellite manufacturing components.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Software Projects */}
        <section id="projects" className="space-y-6">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">Software Projects</h2>
          <div className="grid grid-cols-1 gap-6">
            
            <div className="border border-gray-200 rounded-md p-5 hover:border-uscRed transition-colors">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-gray-900">MovieLens 1M Two-Tower Recommendation Engine</h3>
                <a href="https://github.com/RSakib/Pre-2001-Movie-Recs-via-Two-Tower-Neural-Network" target="_blank" rel="noreferrer" className="text-xs text-uscRed font-medium hover:underline">Repository</a>
              </div>
              <p className="text-xs text-gray-500 mt-1 mb-3">June 2026</p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Built a two-tower neural retrieval model with in-batch negative ranking loss for movie recommendations.</li>
                <li>Engineered user tower encoding gender, age group, and sequential watch history for personalized signals.</li>
                <li>Indexed movie catalog into FAISS flat inner product index for fast retrieval at inference time.</li>
                <li>Evaluated on an 80-20 time-based split across 3,700 movies; generated t-SNE visualizations.</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-md p-5 hover:border-uscRed transition-colors">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-gray-900">MovieLens 1M SVD Recommendation Engine</h3>
                <a href="https://huggingface.co/spaces/RSakib/MovieLens-Hybrid-SVD-Recommendation-GUI" target="_blank" rel="noreferrer" className="text-xs text-uscRed font-medium hover:underline">Live Demo</a>
              </div>
              <p className="text-xs text-gray-500 mt-1 mb-3">May 2026</p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Replicated Netflix 2008 recommendation algorithms using Truncated SVD for 6,040 users.</li>
                <li>Architected a neighborhood-based co-occurrence heuristic fallback to bypass SVD limits and add interactivity.</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-md p-5 hover:border-uscRed transition-colors">
              <h3 className="font-semibold text-gray-900">MUGIC Gait Analysis Software (College Capstone)</h3>
              <p className="text-xs text-gray-500 mt-1 mb-3">Sept 2023 – June 2024 | Project Lead & Front-End Engineer</p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Led a team of 3 programmers and 2 designers building a cross-platform rehabilitation app for an Irvine startup.</li>
                <li>Connected app to motion sensors to provide real-time gait feedback.</li>
                <li>Used SQLite for multi-user data storage, standardized formatting with Python linter, and maintained 80% unit test coverage.</li>
              </ul>
            </div>

          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Ragib Sakib. Built with React and Tailwind CSS.</p>
      </footer>
    </div>
  );
}