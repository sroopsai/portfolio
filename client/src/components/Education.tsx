const Education = () => {
  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 relative">
          <span className="relative z-10">Education</span>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary dark:bg-blue-400"></span>
        </h2>

        <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:shrink-0 bg-primary dark:bg-blue-600 text-white flex items-center justify-center p-6 md:p-8">
              <i className="fas fa-graduation-cap text-4xl md:text-5xl"></i>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                  Master's in Software Engineering
                </h3>
                <span className="text-slate-500 dark:text-slate-400 text-sm">
                  2013 - 2015
                </span>
              </div>
              <h4 className="text-primary dark:text-blue-400 mb-4">Blekinge Institute of Technology (BTH), Sweden</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Specialized in distributed systems and database optimization. Received scholarship for academic excellence and research contributions.
              </p>
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                <h5 className="font-medium mb-2">Thesis</h5>
                <p className="text-slate-700 dark:text-slate-300 italic">
                  "Random Compaction Strategy for Cassandra-like systems"
                </p>
                <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">
                  Researched and implemented an optimized compaction strategy for NoSQL databases resulting in 25% improvement in read/write performance under specific workloads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
