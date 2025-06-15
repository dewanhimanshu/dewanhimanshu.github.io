
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer 2",
      company: "GoDaddy",
      location: "Gurugram, India",
      period: "Feb 2025 - Present",
      technologies: ["Java", "SQL", "Kafka", "AWS"],
      achievements: [
        "Decommissioned ZooKeeper and implemented a new leader election strategy for the distributed system, reducing infrastructure costs and simplifying deployment",
        "Developed system and integration test cases for Windows OS, covering operations such as VM creation and destruction, hostname configuration, user management, and more."
      ]
    },
    {
      title: "Senior Software Engineer",
      company: "Info Edge | AmbitionBox",
      location: "Noida, India",
      period: "Apr 2024 - Jan 2025",
      technologies: ["Java", "SpringBoot", "MongoDB", "SQL", "ElasticSearch", "Kafka", "Metabase"],
      achievements: [
        "Developed and launched the Communities product on Ambitionbox for 100M users",
        "Upgraded the service from Java 8 to Java 21, implementing virtual threads resulting in a 3x improvement in system concurrency and reducing server costs by 25%",
        "Implemented Apple JWT-based authentication, enabling secure and seamless login for 50k+ users",
        "Designed and deployed a configurable, rule-based spam detection system, reducing spam content by 98% and saving over 200 hours of manual moderation time per month."
      ]
    },
    {
      title: "Software Engineer",
      company: "Info Edge | AmbitionBox",
      location: "Noida, India",
      period: "Jan 2023 - Apr 2024",
      technologies: ["Java", "SpringBoot", "MongoDB", "Kafka"],
      achievements: [
        "Planned and Collaborated on core features such as voting, notifications, commenting, and anonymous profiles, enhancing user engagement and interaction.",
        "Implemented event-driven architecture with Kafka and optimized caching strategies, reducing API response time by 90% with cache hit ratio of 98%"
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Kalpavriksh Healthcare",
      location: "Remote",
      period: "Apr 2020 - Jun 2020",
      technologies: ["Ruby On Rails", "JavaScript", "RDBMS"],
      achievements: [
        "Engineered HL7-based communication between Kalpavriksh Healthcare and Max Hospitals, enhancing interoperability.",
        "Developed an automated system to generate and store medical reports as PDFs on Amazon S3, integrating email and SMS notifications, which improved storage and communication efficiency by 80%."
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="experience">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">My journey in software development</p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] border-l-4 border-l-gradient-to-b from-blue-500 to-indigo-500 bg-gradient-to-r from-white to-blue-50/30 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-gray-900 mb-2">{exp.title}</CardTitle>
                    <p className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{exp.company}</p>
                    <p className="text-gray-500">{exp.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900 bg-blue-100 px-3 py-1 rounded-full">{exp.period}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 hover:from-blue-200 hover:to-indigo-200 transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-600 flex items-start group">
                      <span className="text-blue-500 mr-3 mt-1 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:scale-125 transition-transform duration-300"></span>
                      <span className="group-hover:text-gray-800 transition-colors duration-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
