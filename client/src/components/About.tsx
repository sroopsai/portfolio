const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 relative">
            <span className="relative z-10">About Me</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary dark:bg-blue-400"></span>
          </h2>
          <div className="text-lg text-slate-700 dark:text-slate-300 space-y-6">
            <p>
              I'm a passionate Software Engineer specializing in backend development with a strong foundation in building scalable, reliable systems. With expertise in Java, Spring Boot, and distributed systems, I enjoy solving complex problems and creating efficient solutions.
            </p>
            <p>
              My journey began with a Master's in Software Engineering from BTH Sweden, where I developed a deep interest in distributed systems and database technologies. I've since worked with companies like Ericsson and Infor, building resilient backend services that handle complex business logic and high transaction volumes.
            </p>
            <p>
              Currently, I'm expanding my skills in Rust and exploring advanced concepts in system design. I'm particularly interested in how emerging technologies can improve backend performance and scalability in cloud environments.
            </p>
            <p>
              When I'm not coding, I enjoy writing technical articles on my blog, contributing to open-source projects, and mentoring aspiring developers. I believe in continuous learning and sharing knowledge with the community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
