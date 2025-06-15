
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: ["Java", "SpringBoot", "SQL", "MongoDB", "NoSQL", "OOPS", "Kafka", "Distributed Systems", "JUnit"]
    },
    {
      title: "Developer Tools",
      skills: ["Git", "Docker", "Kubernetes", "VS Code", "IntelliJ", "Linux", "Jenkins (CI/CD)", "Sonar", "Agile", "RESTful APIs", "System Design", "Microservices"]
    }
  ];

  const achievements = [
    "Lead of Google Developer Student Club (2021 - 2022), Established the club (300+ Community Members)",
    "Published Research Paper on AJAX and WebSockets Performance, Published in Taylor & Francis Journal of Statistics and Management Systems Volume 23, 2020",
    "Teaching Assistant in Java with Data Structures and Algorithms with 200+ students batch of Coding Ninjas with ratings 4.5+/5"
  ];

  return (
    <section className="py-32 bg-gray-50" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight leading-tight">
            Performant by default.<br />
            <span className="text-blue-600">Reliable at scale.</span>
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            Technologies and accomplishments that drive my work
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-2 border-gray-100 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-black text-gray-900 mb-6">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="bg-gray-100 text-gray-800 px-4 py-2 rounded-xl text-sm font-semibold border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-3xl font-black text-gray-900 mb-8">
            Key Achievements
          </h3>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-2 border-gray-100 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-700 text-lg font-medium">{achievement}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
