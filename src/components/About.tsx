
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-900" id="about">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">
              About me
            </h2>
            <div className="space-y-6 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
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
            <div className="bg-gray-50/50 dark:bg-gray-800/50 rounded-3xl p-8 border border-gray-100/50 dark:border-gray-700/50">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Education</h3>
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                      Master of Computer Applications
                    </h4>
                    <Badge variant="secondary" className="bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-amber-200/50 dark:border-amber-800/50 text-xs font-medium">
                      Gold Medalist
                    </Badge>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-1 font-medium">University of Delhi</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">CGPA: 9.75 • Apr 2020 - Apr 2023</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                      BSc(H) Computer Science
                    </h4>
                    <Badge variant="secondary" className="bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-amber-200/50 dark:border-amber-800/50 text-xs font-medium">
                      Gold Medalist
                    </Badge>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-1 font-medium">Hansraj College, University of Delhi</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">CGPA: 9.8 • May 2017 - Apr 2020</p>
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
