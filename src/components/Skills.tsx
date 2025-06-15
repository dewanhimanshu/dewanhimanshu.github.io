
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
    <section className="py-24 bg-white" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Skills & Achievements
          </h2>
          <p className="text-lg text-gray-600">
            Technologies and accomplishments that drive my work
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border border-gray-100/50 bg-gray-50/30 rounded-3xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-100 hover:border-gray-200 transition-colors duration-300"
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
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Key Achievements
          </h3>
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border border-gray-100/50 bg-gray-50/30 rounded-3xl">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-600 text-sm leading-relaxed">{achievement}</p>
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
