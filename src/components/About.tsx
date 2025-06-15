
const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate Software Engineer with expertise in Java, distributed systems, and modern web technologies. 
            Currently working as Software Engineer 2 at GoDaddy, with a strong background in building scalable systems 
            and leading technical initiatives.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Professional Journey</h3>
            <p className="text-gray-600 mb-4">
              With over 4+ years of experience in software development, I specialize in building robust, 
              scalable applications using Java, Spring Boot, and modern cloud technologies.
            </p>
            <p className="text-gray-600 mb-4">
              I have a proven track record of improving system performance, implementing secure authentication systems, 
              and leading technical teams to deliver high-quality software solutions.
            </p>
            <p className="text-gray-600">
              My experience spans from healthcare systems to large-scale platforms serving millions of users, 
              always focusing on performance optimization and user experience.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">Master of Computer Applications</h4>
                <p className="text-gray-600">University of Delhi • CGPA: 9.75</p>
                <p className="text-sm text-gray-500">Apr 2020 - Apr 2023</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">BSc(H) Computer Science</h4>
                <p className="text-gray-600">Hansraj College, University of Delhi • CGPA: 9.8</p>
                <p className="text-sm text-gray-500">May 2017 - Apr 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
