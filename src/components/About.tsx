
const About = () => {
  return (
    <section className="py-32 bg-gray-50" id="about">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 tracking-tight leading-tight">
              Ship faster.<br />
              Scale further.
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
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-black text-gray-900 mb-8">Education</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">
                    Master of Computer Applications
                  </h4>
                  <p className="text-gray-600 mb-1 font-medium">University of Delhi</p>
                  <p className="text-sm text-gray-500 font-medium">CGPA: 9.75 • Apr 2020 - Apr 2023</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">
                    BSc(H) Computer Science
                  </h4>
                  <p className="text-gray-600 mb-1 font-medium">Hansraj College, University of Delhi</p>
                  <p className="text-sm text-gray-500 font-medium">CGPA: 9.8 • May 2017 - Apr 2020</p>
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
