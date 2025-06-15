
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-4 pt-16">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-12">
          <div className="mb-8">
            <img
              src="/lovable-uploads/19703a54-f1b4-47d2-aec0-4dbaaa38b1a9.png"
              alt="Himanshu Dewan"
              className="w-24 h-24 rounded-full mx-auto mb-8 object-cover border-2 border-gray-100 shadow-sm"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
            Himanshu Dewan
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
            Software Engineer
          </p>
          
          <p className="text-base text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Building scalable systems and leading technical initiatives at GoDaddy. 
            Passionate about distributed systems, performance optimization, and clean code.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-8 py-3 text-base font-medium transition-all duration-300 shadow-sm hover:shadow-md"
            onClick={() => scrollToSection('contact')}
          >
            Get in touch
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 shadow-sm"
              onClick={() => window.open("https://linkedin.com/in/himanshu-dewan", "_blank")}
            >
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 shadow-sm"
            >
              <Github className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        <div className="text-center">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-400 hover:text-gray-500 transition-colors duration-300"
          >
            <div className="w-px h-12 bg-gray-200 mx-auto mb-3"></div>
            <div className="text-sm font-medium">Scroll to explore</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
