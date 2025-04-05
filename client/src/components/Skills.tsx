import { skills, skillCategories } from "../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 relative">
          <span className="relative z-10">Technical Skills</span>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary dark:bg-blue-400"></span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Skill Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary dark:text-blue-400">
                  <i className={`${category.icon} mr-2`}></i>{category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="px-3 py-1 bg-blue-100 dark:bg-slate-700 text-blue-800 dark:text-blue-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skill Bars */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="flex justify-between mb-1">
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{skill.name}</span>
                  <span className="text-primary dark:text-blue-400">{skill.proficiency}%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                  <div 
                    className="bg-primary dark:bg-blue-500 h-2.5 rounded-full" 
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
