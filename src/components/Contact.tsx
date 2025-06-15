
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
    <section className="py-32 bg-white" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight leading-tight">
            Ready to ship<br />
            <span className="text-blue-600">something amazing?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            I'm always open to discussing new opportunities and interesting projects. 
            Let's build something amazing together.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="border-2 border-gray-100 bg-gray-50 rounded-2xl hover:shadow-xl hover:border-gray-200 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-4">Email</h3>
              <p className="text-gray-600 mb-6 text-sm break-words font-medium">
                himanshudewan.mca20.du@gmail.com
              </p>
              <Button 
                variant="outline" 
                className="w-full rounded-xl border-2 border-gray-200 hover:border-gray-900 hover:bg-gray-50 transition-all duration-200 font-semibold" 
                onClick={handleEmailClick}
              >
                Send Email
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-100 bg-gray-50 rounded-2xl hover:shadow-xl hover:border-gray-200 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Linkedin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-4">LinkedIn</h3>
              <p className="text-gray-600 mb-6 text-sm font-medium">
                linkedin.com/in/himanshu-dewan
              </p>
              <Button 
                variant="outline" 
                className="w-full rounded-xl border-2 border-gray-200 hover:border-gray-900 hover:bg-gray-50 transition-all duration-200 font-semibold" 
                onClick={handleLinkedInClick}
              >
                Connect
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-100 bg-gray-50 rounded-2xl hover:shadow-xl hover:border-gray-200 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-4">Phone</h3>
              <p className="text-gray-600 mb-6 text-sm font-medium">+91 8383006342</p>
              <Button 
                variant="outline" 
                className="w-full rounded-xl border-2 border-gray-200 hover:border-gray-900 hover:bg-gray-50 transition-all duration-200 font-semibold" 
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
            className="bg-gray-900 text-white hover:bg-gray-800 rounded-xl px-8 py-4 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200" 
            onClick={handleResumeDownload}
          >
            Download Resume
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
