const Support = () => {
  return (
    <section id="support" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Support My Work</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
            If you find my open-source projects, articles, or tutorials helpful, consider supporting my work. Your support helps me create more free content and tools for the developer community.
          </p>
          
          <div className="flex justify-center">
            <a 
              href="#" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-medium rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <i className="fas fa-mug-hot mr-3 text-xl"></i>
              Buy Me a Coffee
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
