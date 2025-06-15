
import { Button } from "@/components/ui/button";
import { Mail, User, ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-indigo-400 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-400 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          <div className="relative group">
            <img
              src="/lovable-uploads/19703a54-f1b4-47d2-aec0-4dbaaa38b1a9.png"
              alt="Himanshu Dewan"
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-4 animate-fade-in delay-200">
            Himanshu Dewan
          </h1>
          <p className="text-xl md:text-3xl text-gray-600 mb-2 animate-fade-in delay-300">
            Software Engineer
          </p>
          <p className="text-lg text-gray-500 mb-8 animate-fade-in delay-400">
            Delhi, India • +91 8383006342
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-500">
          <Button 
            size="lg" 
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => scrollToSection('contact')}
          >
            <Mail className="w-5 h-5" />
            Contact Me
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="flex items-center gap-2 border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
          >
            <User className="w-5 h-5" />
            View Resume
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown 
          className="w-6 h-6 text-gray-400 cursor-pointer hover:text-blue-500 transition-colors duration-300" 
          onClick={() => scrollToSection('about')}
        />
      </div>
    </section>
  );
};

export default Hero;
