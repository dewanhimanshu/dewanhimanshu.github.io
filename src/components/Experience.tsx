
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
    <section className="py-20 bg-gray-50" id="experience">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600">My journey in software development</p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-gray-900">{exp.title}</CardTitle>
                    <p className="text-lg font-semibold text-blue-600">{exp.company}</p>
                    <p className="text-gray-500">{exp.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{exp.period}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-600 flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      {achievement}
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
