
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, User, Link, Phone } from "lucide-react";

const Contact = () => {
  const handleEmailClick = () => {
    window.open("mailto:himanshudewan@gmail.com", "_blank");
  };

  const handleLinkedInClick = () => {
    window.open("https://linkedin.com/in/himanshu-dewan", "_blank");
  };

  const handlePhoneClick = () => {
    window.open("tel:+918383006342", "_self");
  };

  const handleResumeDownload = () => {
    // This would typically link to your actual resume file
    console.log("Resume download initiated");
  };

  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600">
            Let's discuss opportunities and collaborations
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">himanshudewan@gmail.com</p>
              <Button variant="outline" className="w-full" onClick={handleEmailClick}>
                Send Email
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Link className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <CardTitle className="text-lg">LinkedIn</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">linkedin.com/in/himanshu-dewan</p>
              <Button variant="outline" className="w-full" onClick={handleLinkedInClick}>
                Connect
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Phone className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">+91 8383006342</p>
              <Button variant="outline" className="w-full" onClick={handlePhoneClick}>
                Call
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Open to new opportunities and interesting projects. Let's build something amazing together!
          </p>
          <Button size="lg" className="px-8" onClick={handleResumeDownload}>
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
