
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages/Frameworks",
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
    <section className="py-20 bg-white" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600">Technologies and tools I work with</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-sm py-1 px-3">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Achievements & Leadership</h3>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-l-4 border-l-blue-500">
                <CardContent className="pt-6">
                  <p className="text-gray-700">{achievement}</p>
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
