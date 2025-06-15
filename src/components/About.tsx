
const About = () => {
  return (
    <section className="py-32 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-5xl font-bold text-black mb-8 tracking-tight">
              About me
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                I'm a passionate Software Engineer with over 4+ years of experience 
                building robust, scalable applications. Currently working as Software 
                Engineer 2 at GoDaddy, where I focus on distributed systems and 
                performance optimization.
              </p>
              <p>
                My expertise spans Java, Spring Boot, and modern cloud technologies. 
                I have a proven track record of improving system performance, 
                implementing secure authentication systems, and leading technical 
                teams to deliver high-quality software solutions.
              </p>
              <p>
                From healthcare systems to large-scale platforms serving millions 
                of users, I always focus on creating elegant solutions that prioritize 
                both performance and user experience.
              </p>
            </div>
          </div>
          
          <div className="lg:pl-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-black mb-8">Education</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="font-semibold text-black text-lg mb-2">
                    Master of Computer Applications
                  </h4>
                  <p className="text-gray-600 mb-1">University of Delhi</p>
                  <p className="text-sm text-gray-500">CGPA: 9.75 • Apr 2020 - Apr 2023</p>
                </div>
                <div>
                  <h4 className="font-semibold text-black text-lg mb-2">
                    BSc(H) Computer Science
                  </h4>
                  <p className="text-gray-600 mb-1">Hansraj College, University of Delhi</p>
                  <p className="text-sm text-gray-500">CGPA: 9.8 • May 2017 - Apr 2020</p>
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
