const Hero = () => {
  return (
    <section id="hero" className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            <span className="text-slate-800 dark:text-slate-200">Hi, I'm </span>
            <span className="text-primary dark:text-blue-400">Roop Sai Surampudi</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-6">
            Software Engineer / Backend Developer
          </h2>
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8 max-w-xl">
            Crafting scalable backend systems with Java, Spring Boot, and more.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a href="#projects" className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-blue-600 transition-colors">
              View Projects
            </a>
            <a href="#blog" className="px-6 py-3 bg-white dark:bg-slate-800 text-primary dark:text-blue-400 font-medium rounded-lg border border-primary dark:border-blue-400 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
              Read Blog
            </a>
            <a href="#contact" className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
              Contact Me
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-500/10 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-20"></div>
            <i className="fas fa-user-circle text-8xl text-blue-400/60 dark:text-blue-400/80"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
