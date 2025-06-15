
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
    console.log("Resume download initiated");
  };

  return (
    <section className="py-32 bg-gray-50" id="contact">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-4 tracking-tight">
            Let's work together
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects. 
            Let's build something amazing together.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="border border-gray-200 bg-white rounded-2xl hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Email</h3>
              <p className="text-gray-600 mb-6 text-sm break-words">
                himanshudewan.mca20.du@gmail.com
              </p>
              <Button 
                variant="outline" 
                className="w-full rounded-full border-gray-300 hover:border-black hover:bg-gray-50 transition-all duration-200" 
                onClick={handleEmailClick}
              >
                Send Email
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 bg-white rounded-2xl hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Linkedin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">LinkedIn</h3>
              <p className="text-gray-600 mb-6 text-sm">
                linkedin.com/in/himanshu-dewan
              </p>
              <Button 
                variant="outline" 
                className="w-full rounded-full border-gray-300 hover:border-black hover:bg-gray-50 transition-all duration-200" 
                onClick={handleLinkedInClick}
              >
                Connect
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 bg-white rounded-2xl hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Phone</h3>
              <p className="text-gray-600 mb-6 text-sm">+91 8383006342</p>
              <Button 
                variant="outline" 
                className="w-full rounded-full border-gray-300 hover:border-black hover:bg-gray-50 transition-all duration-200" 
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
            className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-3 text-base font-medium transition-all duration-200" 
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
