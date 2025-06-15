
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Phone, ArrowRight } from "lucide-react";

const Contact = () => {
  const handleEmailClick = () => {
    window.open("mailto:himanshudewan.mca20.du@gmail.com", "_blank");
  };

  const handleLinkedInClick = () => {
    window.open("https://linkedin.com/in/himanshu-dewan", "_blank");
  };

  const handlePhoneClick = () => {
    window.open("tel:+918383006342", "_self");
  };

  const handleResumeDownload = () => {
    console.log("Resume download button clicked");
    try {
      window.open("https://drive.google.com/file/d/17A2EYSlQhjVO5KH-ZP3cK0NUs5m5kAqj/view?usp=sharing", "_blank");
      console.log("Resume download initiated successfully");
    } catch (error) {
      console.error("Error opening resume:", error);
    }
  };

  return (
    <section className="py-24 bg-gray-50/30" id="contact">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Let's work together
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects. 
            Let's build something amazing together.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="border border-gray-100/50 bg-white rounded-3xl hover:shadow-sm transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Email</h3>
              <p className="text-gray-500 mb-6 text-sm break-words">
                himanshudewan.mca20.du@gmail.com
              </p>
              <Button 
                variant="outline" 
                className="w-full rounded-full border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 shadow-sm" 
                onClick={handleEmailClick}
              >
                Send Email
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card className="border border-gray-100/50 bg-white rounded-3xl hover:shadow-sm transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Linkedin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">LinkedIn</h3>
              <p className="text-gray-500 mb-6 text-sm">
                linkedin.com/in/himanshu-dewan
              </p>
              <Button 
                variant="outline" 
                className="w-full rounded-full border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 shadow-sm" 
                onClick={handleLinkedInClick}
              >
                Connect
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card className="border border-gray-100/50 bg-white rounded-3xl hover:shadow-sm transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Phone</h3>
              <p className="text-gray-500 mb-6 text-sm">+91 8383006342</p>
              <Button 
                variant="outline" 
                className="w-full rounded-full border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 shadow-sm" 
                onClick={handlePhoneClick}
              >
                Call
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-8 py-3 text-base font-medium transition-all duration-300 shadow-sm hover:shadow-md" 
            onClick={handleResumeDownload}
          >
            Download Resume
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
