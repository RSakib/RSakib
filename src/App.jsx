import React, { useState, useEffect } from 'react';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [showNavTitle, setShowNavTitle] = useState(false);
  const [aboutOpacity, setAboutOpacity] = useState(1);

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
        rootMargin: '-10% 0px -70% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      const mainTitle = document.getElementById('main-title');
      if (mainTitle) {
        const rect = mainTitle.getBoundingClientRect();
        
        setShowNavTitle(rect.bottom < 20);

        const fadeStart = 120;
        const fadeEnd = -100;
        const currentPos = rect.top;

        if (currentPos >= fadeStart) {
          setAboutOpacity(1);
        } else if (currentPos <= fadeEnd) {
          setAboutOpacity(0);
        } else {
          const opacity = (currentPos - fadeEnd) / (fadeStart - fadeEnd);
          setAboutOpacity(Math.max(0, Math.min(1, opacity)));
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-gray-800 font-sans antialiased">
      
      <div 
        className="absolute top-0 left-0 right-0 w-full h-[450px] pointer-events-none z-0 transition-opacity duration-75 ease-linear"
        style={{
          opacity: aboutOpacity,
          background: 'linear-gradient(to bottom, #FFC72C 0%, rgba(255, 199, 44, 0.6) 40%, rgba(255, 255, 255, 0) 100%)'
        }}
      />

      <header className="sticky top-0 z-30 border-b border-gray-200/80 bg-white/80 backdrop-blur-md transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          
          <span 
            className={`font-bold text-sm sm:text-base md:text-lg text-gray-900 tracking-tight transition-all duration-300 ease-in-out ${
              showNavTitle 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-2 pointer-events-none'
            }`}
          >
            Ragib Sakib
          </span>

          <nav className="space-x-3 sm:space-x-6 text-xs sm:text-sm text-gray-600 font-medium">
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

      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-2 sm:pt-4 pb-12 space-y-12 sm:space-y-16">
        <section 
          id="about" 
          style={{ opacity: aboutOpacity }}
          className="scroll-mt-20 flex flex-col-reverse sm:flex-row items-center justify-between gap-6 sm:gap-8 p-4 sm:p-6 transition-opacity duration-75 ease-linear"
        >
          <div className="space-y-3 sm:space-y-4 max-w-xl text-center sm:text-left">
            <h1 id="main-title" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Ragib Sakib
            </h1>
            
            <div className="text-sm sm:text-base text-gray-600 font-medium space-y-1">
              <p>Machine Learning Engineer based in Hawthorne, CA.</p>
              <p>Specializing in Computer Vision and Recommendation Systems.</p>
            </div>

            <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4 text-xs sm:text-sm font-medium pt-1 sm:pt-2">
              <a href="mailto:Ragibsakib2002@gmail.com" className="text-uscRed hover:underline">Email</a>
              <span className="text-gray-300">|</span>
              <a href="https://linkedin.com/in/ragibsakib" target="_blank" rel="noreferrer" className="text-uscRed hover:underline">LinkedIn</a>
              <span className="text-gray-300">|</span>
              <a href="https://github.com/RSakib" target="_blank" rel="noreferrer" className="text-uscRed hover:underline">GitHub</a>
              <span className="text-gray-300">|</span>
              <a href="https://huggingface.co/RSakib" target="_blank" rel="noreferrer" className="text-uscRed hover:underline">HuggingFace</a>
            </div>
          </div>

          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-uscRed flex-shrink-0 bg-gray-100 shadow-md">
            <img src="/profile.jpg" alt="Ragib Sakib" className="w-full h-full object-cover" />
          </div>
        </section>

        <section id="education" className="scroll-mt-20 space-y-6">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">
            Education
          </h2>
          <div className="space-y-6">
            <div className="border-l-2 border-uscRed pl-4 py-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0">
                <div className="flex items-center gap-3">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/9/94/USC_Trojans_logo.svg" 
                    alt="USC Logo" 
                    className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                  />
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold text-sm sm:text-base text-gray-900">University of Southern California</h3>
                      <span className="bg-uscRed/10 text-uscRed text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded">Current</span>
                    </div>
                    <p className="text-xs sm:text-sm text-uscRed font-medium">MS in Computer Science (Artificial Intelligence)</p>
                  </div>
                </div>
                <span className="text-[11px] sm:text-xs text-gray-500 whitespace-nowrap pl-10 sm:pl-0">Sept 2026 – June 2028 (Expected)</span>
              </div>
            </div>

            <div className="pl-4 py-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0">
                <div className="flex items-center gap-3">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/8/8f/University_of_California%2C_Irvine_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" 
                    alt="UCI Logo" 
                    className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                  />
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base text-gray-900">University of California, Irvine</h3>
                    <p className="text-xs sm:text-sm text-gray-700 font-medium">BS in Software Engineering (GPA: 3.6)</p>
                  </div>
                </div>
                <span className="text-[11px] sm:text-xs text-gray-500 whitespace-nowrap pl-10 sm:pl-0">Sept 2020 – June 2024</span>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="scroll-mt-20 space-y-6">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">
            Work Experience
          </h2>
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold text-sm sm:text-base text-gray-900">Canon USA</h3>
                <span className="text-[11px] sm:text-xs text-gray-500">Irvine, CA</span>
              </div>
              <p className="text-xs sm:text-sm text-uscRed font-medium">Software and Machine Learning Engineer (Trainee)</p>
              <p className="text-[11px] sm:text-xs text-gray-500 font-medium">Sept 2023 – Feb 2025</p>
              <ul className="list-disc list-inside text-xs sm:text-sm text-gray-600 space-y-1 pl-1">
                <li>Prototyped a Python pipeline using SAM 2 segmentation, Hough transforms, and clustering for object corner localization.</li>
                <li>Ported spatial clustering and geometric pipelines to C++, reducing execution latency by 90% via pass-by-reference.</li>
                <li>Integrated finalized model runtimes into production software to enhance user experience via low-latency interactivity.</li>
                <li>Shipped an app built in Ionic React to both iOS and Android platforms using a single codebase.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold text-sm sm:text-base text-gray-900">Canon USA</h3>
                <span className="text-[11px] sm:text-xs text-gray-500">Irvine, CA</span>
              </div>
              <p className="text-xs sm:text-sm text-uscRed font-medium">Software Intern</p>
              <p className="text-[11px] sm:text-xs text-gray-500 font-medium">June 2023 – Aug 2023</p>
              <ul className="list-disc list-inside text-xs sm:text-sm text-gray-600 space-y-1 pl-1">
                <li>Converted major C# codebase from old UWP standard to current standards to remove technical debt.</li>
                <li>Created a multi-platform mobile and web application expanding upon current web-only clients.</li>
                <li>Operated within an Agile schedule work environment using Jira.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold text-sm sm:text-base text-gray-900">Boeing Satellite Systems</h3>
                <span className="text-[11px] sm:text-xs text-gray-500">El Segundo, CA</span>
              </div>
              <p className="text-xs sm:text-sm text-uscRed font-medium">Engineering Intern</p>
              <p className="text-[11px] sm:text-xs text-gray-500 font-medium">June 2019 – Aug 2019</p>
              <ul className="list-disc list-inside text-xs sm:text-sm text-gray-600 space-y-1 pl-1">
                <li>Managed parts inventory and quality inspection for satellite manufacturing components.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-20 space-y-6">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">
            Software Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            
            <div className="border border-gray-200 rounded-lg p-4 sm:p-5 hover:border-uscRed transition-colors bg-white shadow-sm space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-gray-900 leading-snug">MovieLens 1M Two-Tower Engine</h3>
                  <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">June 2026</p>
                </div>
                <a 
                  href="https://github.com/RSakib/Pre-2001-Movie-Recs-via-Two-Tower-Neural-Network" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-1.5 bg-uscRed hover:bg-red-800 text-white text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md transition-all flex-shrink-0"
                >
                  <span>Repo/Demo</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              <div className="overflow-hidden rounded-md border border-gray-200 bg-black">
                <img 
                  src="/Two-Tower.jpg" 
                  alt="MovieLens Pre-2001 Two-Tower Recommendation Interface" 
                  className="w-full h-32 sm:h-36 object-cover hover:scale-[1.01] transition-transform duration-200"
                />
              </div>

              <ul className="list-disc list-inside text-xs text-gray-600 space-y-1">
                <li>Built a two-tower neural retrieval model with in-batch negative ranking loss.</li>
                <li>Engineered user tower encoding demographic and watch history signals.</li>
                <li>Indexed movie catalog into FAISS flat inner product index for quick inference.</li>
                <li>Achieved NDCG@10 of 0.0320 evaluated on an 80-20 time-based split.</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 sm:p-5 hover:border-uscRed transition-colors bg-white shadow-sm space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-gray-900 leading-snug">MovieLens 1M SVD Recommendation Engine</h3>
                  <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">May 2026</p>
                </div>
                <a 
                  href="https://huggingface.co/spaces/RSakib/MovieLens-Hybrid-SVD-Recommendation-GUI" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-1.5 bg-uscRed hover:bg-red-800 text-white text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md transition-all flex-shrink-0"
                >
                  <span>Demo</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              <ul className="list-disc list-inside text-xs text-gray-600 space-y-1.5">
                <li>Engineered a recommendation web app replicating 2008 Netflix algorithms.</li>
                <li>Optimized recommendations for 6,040 users using Truncated SVD.</li>
                <li>Created a low-rank, low-latency prediction lookup matrix.</li>
                <li>Architected a co-occurrence heuristic fallback to resolve cold-start issues.</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 sm:p-5 hover:border-uscRed transition-colors bg-white shadow-sm space-y-3">
              <div>
                <h3 className="font-bold text-sm sm:text-base text-gray-900 leading-snug">MUGIC Gait Analysis Software</h3>
                <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">Sept 2023 – June 2024 | Capstone Lead</p>
              </div>

              <ul className="list-disc list-inside text-xs text-gray-600 space-y-1.5">
                <li>Led 3 programmers and 2 designers building a cross-platform rehab app.</li>
                <li>Connected app to motion sensors for real-time gait feedback.</li>
                <li>Used SQLite for multi-user data storage and targeted 80% test coverage.</li>
              </ul>
            </div>

          </div>
        </section>

        <section id="skills" className="scroll-mt-20 space-y-6">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="border border-gray-200 rounded-lg p-4 sm:p-5 bg-white shadow-sm hover:border-gray-300 transition-colors">
              <h3 className="text-[11px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Languages & Core Systems</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'C++', 'C#', 'Rust', 'Java', 'SQL', 'TypeScript', 'JavaScript'].map((skill) => (
                  <span key={skill} className="bg-gray-100 text-gray-800 text-[11px] sm:text-xs font-medium px-2.5 py-1 rounded border border-gray-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 sm:p-5 bg-white shadow-sm hover:border-gray-300 transition-colors">
              <h3 className="text-[11px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">AI / ML & Vector Search</h3>
              <div className="flex flex-wrap gap-2">
                {['PyTorch', 'TensorFlow', 'FAISS', 'OpenCV', 'SAM 2', 'Two-Tower Models', 'Truncated SVD', 'SciPy', 'Matplotlib'].map((skill) => (
                  <span key={skill} className="bg-uscRed/5 text-uscRed border border-uscRed/20 text-[11px] sm:text-xs font-medium px-2.5 py-1 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 sm:p-5 bg-white shadow-sm hover:border-gray-300 transition-colors">
              <h3 className="text-[11px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Web, Mobile & Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'React Native', 'Ionic Framework', 'Angular', 'Node.js', 'Gradio', 'HTML5/CSS3', 'SQLite'].map((skill) => (
                  <span key={skill} className="bg-gray-100 text-gray-800 text-[11px] sm:text-xs font-medium px-2.5 py-1 rounded border border-gray-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 sm:p-5 bg-white shadow-sm hover:border-gray-300 transition-colors">
              <h3 className="text-[11px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Developer Tools & Infrastructure</h3>
              <div className="flex flex-wrap gap-2">
                {['Docker', 'Git / GitHub', 'Linux / Unix', 'Agile / Jira', 'Pass-by-Reference Opt.', 'CI/CD Basics'].map((skill) => (
                  <span key={skill} className="bg-gray-100 text-gray-800 text-[11px] sm:text-xs font-medium px-2.5 py-1 rounded border border-gray-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-gray-200 py-6 sm:py-8 text-center text-[11px] sm:text-xs text-gray-500 space-y-2 px-4">
        <p>© {new Date().getFullYear()} Ragib Sakib. Built with React and Tailwind CSS.</p>
        <p className="text-gray-400">
          Logos provided via <a href="https://commons.wikimedia.org/wiki/File:USC_Trojans_logo.svg" target="_blank" rel="noreferrer" className="underline hover:text-gray-600">Wikimedia Commons (USC)</a> and <a href="https://commons.wikimedia.org/wiki/File:University_of_California,_Irvine_logo.svg" target="_blank" rel="noreferrer" className="underline hover:text-gray-600">Wikimedia Commons (UCI)</a>.
        </p>
      </footer>
    </div>
  );
}