
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, User, Link, Phone } from "lucide-react";

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
    // This would typically link to your actual resume file
    console.log("Resume download initiated");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100" id="contact">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Let's discuss opportunities and collaborations
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-white to-blue-50/50 border-0 shadow-lg animate-fade-in">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-lg">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">himanshudewan.mca20.du@gmail.com</p>
              <Button 
                variant="outline" 
                className="w-full border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105" 
                onClick={handleEmailClick}
              >
                Send Email
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-white to-indigo-50/50 border-0 shadow-lg animate-fade-in delay-200">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Link className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-lg">LinkedIn</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">linkedin.com/in/himanshu-dewan</p>
              <Button 
                variant="outline" 
                className="w-full border-2 border-indigo-500 text-indigo-600 hover:bg-indigo-500 hover:text-white transition-all duration-300 transform hover:scale-105" 
                onClick={handleLinkedInClick}
              >
                Connect
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-white to-purple-50/50 border-0 shadow-lg animate-fade-in delay-400">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-lg">Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">+91 8383006342</p>
              <Button 
                variant="outline" 
                className="w-full border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105" 
                onClick={handlePhoneClick}
              >
                Call
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12 animate-fade-in delay-600">
          <p className="text-gray-600 mb-6">
            Open to new opportunities and interesting projects. Let's build something amazing together!
          </p>
          <Button 
            size="lg" 
            className="px-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" 
            onClick={handleResumeDownload}
          >
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
