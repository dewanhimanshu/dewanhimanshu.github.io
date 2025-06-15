
import { Card, CardContent } from "@/components/ui/card";

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
    <section className="py-24 bg-gray-50/30" id="experience">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Experience
          </h2>
          <p className="text-lg text-gray-600">
            My journey in software development
          </p>
        </div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="border border-gray-100/50 bg-white rounded-3xl overflow-hidden hover:shadow-sm transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{exp.title}</h3>
                    <p className="text-lg text-gray-700 font-medium mb-1">{exp.company}</p>
                    <p className="text-gray-500 text-sm">{exp.location}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-100">
                      {exp.period}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.technologies.map((tech, techIndex) => (
                    <span 
                      key={tech} 
                      className="bg-gray-50 text-gray-600 px-3 py-1 rounded-full text-sm font-medium border border-gray-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-600 flex items-start text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span>{achievement}</span>
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
