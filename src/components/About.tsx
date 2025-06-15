
const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50" id="about">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-4 animate-fade-in">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6 animate-fade-in delay-200"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in delay-300">
            Passionate Software Engineer with expertise in Java, distributed systems, and modern web technologies. 
            Currently working as Software Engineer 2 at GoDaddy, with a strong background in building scalable systems 
            and leading technical initiatives.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in delay-400">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Professional Journey</h3>
            <div className="space-y-4">
              <p className="text-gray-600 relative pl-6">
                <span className="absolute left-0 top-2 w-2 h-2 bg-blue-500 rounded-full"></span>
                With over 4+ years of experience in software development, I specialize in building robust, 
                scalable applications using Java, Spring Boot, and modern cloud technologies.
              </p>
              <p className="text-gray-600 relative pl-6">
                <span className="absolute left-0 top-2 w-2 h-2 bg-indigo-500 rounded-full"></span>
                I have a proven track record of improving system performance, implementing secure authentication systems, 
                and leading technical teams to deliver high-quality software solutions.
              </p>
              <p className="text-gray-600 relative pl-6">
                <span className="absolute left-0 top-2 w-2 h-2 bg-purple-500 rounded-full"></span>
                My experience spans from healthcare systems to large-scale platforms serving millions of users, 
                always focusing on performance optimization and user experience.
              </p>
            </div>
          </div>
          
          <div className="animate-fade-in delay-500">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Education</h3>
              <div className="space-y-6">
                <div className="relative">
                  <div className="absolute left-0 top-0 w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                  <div className="pl-6">
                    <h4 className="font-semibold text-gray-900">Master of Computer Applications</h4>
                    <p className="text-blue-600 font-medium">University of Delhi • CGPA: 9.75</p>
                    <p className="text-sm text-gray-500">Apr 2020 - Apr 2023</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute left-0 top-0 w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                  <div className="pl-6">
                    <h4 className="font-semibold text-gray-900">BSc(H) Computer Science</h4>
                    <p className="text-indigo-600 font-medium">Hansraj College, University of Delhi • CGPA: 9.8</p>
                    <p className="text-sm text-gray-500">May 2017 - Apr 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
