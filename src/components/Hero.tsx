
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4 pt-16">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-12">
          <div className="mb-8">
            <img
              src="/lovable-uploads/19703a54-f1b4-47d2-aec0-4dbaaa38b1a9.png"
              alt="Himanshu Dewan"
              className="w-24 h-24 rounded-full mx-auto mb-8 object-cover border border-gray-200"
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-black mb-6 tracking-tight">
            Himanshu Dewan
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-600 mb-4 font-medium">
            Software Engineer
          </p>
          
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Building scalable systems and leading technical initiatives at GoDaddy. 
            Passionate about distributed systems, performance optimization, and clean code.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-3 text-base font-medium transition-all duration-200"
            onClick={() => scrollToSection('contact')}
          >
            Get in touch
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-gray-300 hover:border-black hover:bg-gray-50 transition-all duration-200"
              onClick={() => window.open("https://linkedin.com/in/himanshu-dewan", "_blank")}
            >
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-gray-300 hover:border-black hover:bg-gray-50 transition-all duration-200"
            >
              <Github className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        <div className="text-center">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <div className="w-px h-16 bg-gray-300 mx-auto mb-4"></div>
            <div className="text-sm">Scroll to explore</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
