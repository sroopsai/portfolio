import { experiences } from "../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 relative">
          <span className="relative z-10">Professional Experience</span>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary dark:bg-blue-400"></span>
        </h2>

        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 h-full w-0.5 bg-slate-200 dark:bg-slate-700 transform md:-translate-x-1/2"></div>

            {/* Experience Items */}
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`relative ${index !== experiences.length - 1 ? 'mb-16' : ''}`}>
                <div className="absolute left-0 md:left-1/2 -ml-3 md:-ml-3.5 mt-1.5 w-7 h-7 rounded-full bg-primary dark:bg-blue-500 border-4 border-white dark:border-slate-800 transform md:-translate-x-1/2 flex items-center justify-center">
                  <i className="fas fa-briefcase text-white text-xs"></i>
                </div>

                <div className="ml-12 md:ml-0 md:flex items-center">
                  {/* For desktop, alternate left/right */}
                  <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 text-right' : 'md:pl-8'}`}>
                    {index % 2 === 0 ? (
                      <>
                        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">{exp.title}</h3>
                        <h4 className="text-primary dark:text-blue-400 mb-2">{exp.company}</h4>
                        <p className="text-slate-600 dark:text-slate-400">
                          {exp.description}
                        </p>
                        <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 mt-2">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex}>{achievement}</li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <span className="text-slate-500 dark:text-slate-400 font-medium">
                        {exp.period}
                      </span>
                    )}
                  </div>

                  <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8 text-right'}`}>
                    {index % 2 === 1 ? (
                      <>
                        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">{exp.title}</h3>
                        <h4 className="text-primary dark:text-blue-400 mb-2">{exp.company}</h4>
                        <p className="text-slate-600 dark:text-slate-400">
                          {exp.description}
                        </p>
                        <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 mt-2">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex}>{achievement}</li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <span className="text-slate-500 dark:text-slate-400 font-medium">
                        {exp.period}
                      </span>
                    )}
                  </div>

                  {/* For mobile, always content then date */}
                  <div className="md:hidden">
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">{exp.title}</h3>
                    <h4 className="text-primary dark:text-blue-400 mb-1">{exp.company}</h4>
                    <span className="text-slate-500 dark:text-slate-400 text-sm font-medium block mb-2">
                      {exp.period}
                    </span>
                    <p className="text-slate-600 dark:text-slate-400">
                      {exp.description}
                    </p>
                    <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 mt-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
