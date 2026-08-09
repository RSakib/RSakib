import React, { useState, useEffect } from 'react';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // Target a detection line near the top-middle of the screen
        rootMargin: '-10% 0px -70% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased">
      {/* Navigation */}
      <header className="border-b border-gray-200 sticky top-0 bg-white/95 backdrop-blur-sm z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-bold text-lg text-gray-900 tracking-tight">Ragib Sakib</span>
          <nav className="space-x-6 text-sm text-gray-600 font-medium">
            <a 
              href="#about" 
              className={`transition-colors ${activeSection === 'about' ? 'text-uscRed font-bold' : 'hover:text-uscRed'}`}
            >
              About
            </a>
            <a 
              href="#education" 
              className={`transition-colors ${activeSection === 'education' ? 'text-uscRed font-bold' : 'hover:text-uscRed'}`}
            >
              Education
            </a>
            <a 
              href="#experience" 
              className={`transition-colors ${activeSection === 'experience' ? 'text-uscRed font-bold' : 'hover:text-uscRed'}`}
            >
              Experience
            </a>
            <a 
              href="#projects" 
              className={`transition-colors ${activeSection === 'projects' ? 'text-uscRed font-bold' : 'hover:text-uscRed'}`}
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className={`transition-colors ${activeSection === 'skills' ? 'text-uscRed font-bold' : 'hover:text-uscRed'}`}
            >
              Skills
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        {/* Intro / Header */}
        <section id="about" className="scroll-mt-20 flex flex-col-reverse sm:flex-row items-center justify-between gap-8 py-4">
          <div className="space-y-4 max-w-xl">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Ragib Sakib</h1>
            <p className="text-base text-gray-600 leading-relaxed">
              Software and Machine Learning Engineer based in Hawthorne, CA, building machine learning models with a focus on Computer Vision and Recommendation Systems. Currently pursuing a Master’s in Computer Science (Artificial Intelligence) at USC and formerly a Software/ML Intern at Canon USA, with experience specializing in deep learning pipeline optimization, spatial processing, and multi-platform applications.
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-medium pt-2">
              <a href="mailto:Ragibsakib2002@gmail.com" className="text-uscRed hover:underline">Email</a>
              <span className="text-gray-300">|</span>
              <a href="https://linkedin.com/in/ragibsakib" target="_blank" rel="noreferrer" className="text-uscRed hover:underline">LinkedIn</a>
              <span className="text-gray-300">|</span>
              <a href="https://github.com/RSakib" target="_blank" rel="noreferrer" className="text-uscRed hover:underline">GitHub</a>
              <span className="text-gray-300">|</span>
              <a href="https://huggingface.co/RSakib" target="_blank" rel="noreferrer" className="text-uscRed hover:underline">HuggingFace</a>
            </div>
          </div>
          <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-uscRed flex-shrink-0 bg-gray-100 shadow-md">
            <img src="/profile.jpg" alt="Ragib Sakib" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* Education */}
        <section id="education" className="scroll-mt-20 space-y-6">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">
            Education
          </h2>
          <div className="space-y-6">
            
            {/* USC - Current University */}
            <div className="border-l-2 border-uscRed pl-4 py-1">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/9/94/USC_Trojans_logo.svg" 
                    alt="USC Logo" 
                    className="w-8 h-8 object-contain"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-gray-900">University of Southern California</h3>
                      <span className="bg-uscRed/10 text-uscRed text-xs font-semibold px-2 py-0.5 rounded">Current</span>
                    </div>
                    <p className="text-sm text-uscRed font-medium">MS in Computer Science (Artificial Intelligence)</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500 whitespace-nowrap">Sept 2026 – June 2028 (Expected)</span>
              </div>
            </div>

            {/* UCI */}
            <div className="pl-4 py-1">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/8/8f/University_of_California%2C_Irvine_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" 
                    alt="UCI Logo" 
                    className="w-8 h-8 object-contain"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">University of California, Irvine</h3>
                    <p className="text-sm text-gray-700 font-medium">BS in Software Engineering (GPA: 3.6)</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500 whitespace-nowrap">Sept 2020 – June 2024</span>
              </div>
            </div>

          </div>
        </section>

        {/* Work Experience */}
        <section id="experience" className="scroll-mt-20 space-y-6">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">
            Work Experience
          </h2>
          
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
        <section id="projects" className="scroll-mt-20 space-y-6">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">
            Software Projects
          </h2>
          <div className="grid grid-cols-1 gap-6">
            
            {/* Two Tower Project Card */}
            <div className="border border-gray-200 rounded-lg p-6 hover:border-uscRed transition-colors space-y-5 bg-white shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">MovieLens 1M Two-Tower Recommendation Engine</h3>
                  <p className="text-xs text-gray-500 mt-0.5">June 2026</p>
                </div>
                <a 
                  href="https://github.com/RSakib/Pre-2001-Movie-Recs-via-Two-Tower-Neural-Network" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center justify-center gap-2 bg-uscRed hover:bg-red-800 text-white text-xs font-semibold px-4 py-2.5 rounded-md shadow-sm transition-all duration-200 hover:shadow-md self-start sm:self-auto"
                >
                  <span>View Repository</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Project Preview Image */}
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-black">
                <img 
                  src="/Two-Tower.jpg" 
                  alt="MovieLens Pre-2001 Two-Tower Recommendation Interface" 
                  className="w-full h-auto object-cover max-h-80 hover:scale-[1.01] transition-transform duration-200"
                />
              </div>

              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5">
                <li>Built a two-tower neural retrieval model with in-batch negative ranking loss for movie recommendations.</li>
                <li>Engineered user tower encoding gender, age group, and sequential watch history for personalized signals.</li>
                <li>Indexed movie catalog into FAISS flat inner product index for fast retrieval at inference time.</li>
                <li>Achieved NDCG@10 of 0.0320 evaluated on an 80-20 time-based split across 3,700 movies; generated t-SNE visualizations.</li>
              </ul>
            </div>

            {/* SVD Project Card */}
            <div className="border border-gray-200 rounded-lg p-6 hover:border-uscRed transition-colors space-y-4 bg-white shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">MovieLens 1M SVD Recommendation Engine</h3>
                  <p className="text-xs text-gray-500 mt-0.5">May 2026</p>
                </div>
                <a 
                  href="https://huggingface.co/spaces/RSakib/MovieLens-Hybrid-SVD-Recommendation-GUI" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center justify-center gap-2 bg-uscRed hover:bg-red-800 text-white text-xs font-semibold px-4 py-2.5 rounded-md shadow-sm transition-all duration-200 hover:shadow-md self-start sm:self-auto"
                >
                  <span>Launch Live Demo</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5">
                <li>Engineered a recommendation web app to replicate the algorithms used by Netflix Recommendations in 2008.</li>
                <li>Optimized recommendations for 6,040 users using Truncated SVD to create a low-rank, low-latency prediction lookup matrix.</li>
                <li>Architected a neighborhood-based co-occurrence heuristic fallback to bypass SVD's limits and add interaction to app.</li>
              </ul>
            </div>

            {/* Capstone Project Card */}
            <div className="border border-gray-200 rounded-lg p-6 hover:border-uscRed transition-colors space-y-2 bg-white shadow-sm">
              <h3 className="font-bold text-lg text-gray-900">MUGIC Gait Analysis Software (College Capstone)</h3>
              <p className="text-xs text-gray-500 pb-2">Sept 2023 – June 2024 | Project Lead & Front-End Engineer</p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5">
                <li>Led a team of 3 programmers and 2 designers building a cross-platform rehabilitation app for an Irvine startup.</li>
                <li>Connected app to motion sensors to provide real-time gait feedback.</li>
                <li>Used SQLite for multi-user data storage, standardized formatting with Python linter, and maintained 80% unit test coverage.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Technical Skills */}
        <section id="skills" className="scroll-mt-20 space-y-6">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">
            Technical Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Systems & Languages */}
            <div className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm hover:border-gray-300 transition-colors">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Languages & Core Systems</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'C++', 'C#', 'Rust', 'Java', 'SQL', 'TypeScript', 'JavaScript'].map((skill) => (
                  <span key={skill} className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded border border-gray-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* AI, ML & Data Systems */}
            <div className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm hover:border-gray-300 transition-colors">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">AI / ML & Vector Search</h3>
              <div className="flex flex-wrap gap-2">
                {['PyTorch', 'TensorFlow', 'FAISS', 'OpenCV', 'SAM 2', 'Two-Tower Models', 'Truncated SVD', 'SciPy', 'Matplotlib'].map((skill) => (
                  <span key={skill} className="bg-uscRed/5 text-uscRed border border-uscRed/20 text-xs font-medium px-2.5 py-1 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Full-Stack & Mobile */}
            <div className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm hover:border-gray-300 transition-colors">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Web, Mobile & Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'React Native', 'Ionic Framework', 'Angular', 'Node.js', 'Gradio', 'HTML5/CSS3', 'SQLite'].map((skill) => (
                  <span key={skill} className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded border border-gray-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Infrastructure & DevOps */}
            <div className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm hover:border-gray-300 transition-colors">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Developer Tools & Infrastructure</h3>
              <div className="flex flex-wrap gap-2">
                {['Docker', 'Git / GitHub', 'Linux / Unix', 'Agile / Jira', 'Pass-by-Reference Opt.', 'CI/CD Basics'].map((skill) => (
                  <span key={skill} className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded border border-gray-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 text-center text-xs text-gray-500 space-y-2">
        <p>© {new Date().getFullYear()} Ragib Sakib. Built with React and Tailwind CSS.</p>
        <p className="text-gray-400">
          Logos provided via <a href="https://commons.wikimedia.org/wiki/File:USC_Trojans_logo.svg" target="_blank" rel="noreferrer" className="underline hover:text-gray-600">Wikimedia Commons (USC)</a> and <a href="https://commons.wikimedia.org/wiki/File:University_of_California,_Irvine_logo.svg" target="_blank" rel="noreferrer" className="underline hover:text-gray-600">Wikimedia Commons (UCI)</a>.
        </p>
      </footer>
    </div>
  );
}