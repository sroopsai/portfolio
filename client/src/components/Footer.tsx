const Footer = () => {
  return (
    <footer className="bg-slate-800 dark:bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">
              Roop Sai <span className="text-blue-400">Surampudi</span>
            </h2>
            <p className="text-slate-400 mt-2">
              Software Engineer / Backend Developer
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
              <i className="fab fa-github text-xl"></i>
            </a>
            <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
              <i className="fas fa-rss text-xl"></i>
            </a>
          </div>
        </div>
        
        <hr className="border-slate-700 my-8" />
        
        <div className="text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Roop Sai Surampudi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
