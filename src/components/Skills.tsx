
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages/Frameworks",
      skills: ["Java", "SpringBoot", "SQL", "MongoDB", "NoSQL", "OOPS", "Kafka", "Distributed Systems", "JUnit"],
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      title: "Developer Tools",
      skills: ["Git", "Docker", "Kubernetes", "VS Code", "IntelliJ", "Linux", "Jenkins (CI/CD)", "Sonar", "Agile", "RESTful APIs", "System Design", "Microservices"],
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  const achievements = [
    "Lead of Google Developer Student Club (2021 - 2022), Established the club (300+ Community Members)",
    "Published Research Paper on AJAX and WebSockets Performance, Published in Taylor & Francis Journal of Statistics and Management Systems Volume 23, 2020",
    "Teaching Assistant in Java with Data Structures and Algorithms with 200+ students batch of Coding Ninjas with ratings 4.5+/5"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">Technologies and tools I work with</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-white to-blue-50/50 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <CardTitle className={`text-xl bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skill} 
                      variant="outline" 
                      className="text-sm py-2 px-4 border-2 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white hover:border-transparent transition-all duration-300 transform hover:scale-105 cursor-pointer"
                      style={{ animationDelay: `${skillIndex * 50}ms` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-8 text-center">
            Achievements & Leadership
          </h3>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="border-l-4 border-l-blue-500 hover:border-l-indigo-500 bg-gradient-to-r from-white to-blue-50/30 hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-700 hover:text-gray-900 transition-colors duration-300">{achievement}</p>
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
