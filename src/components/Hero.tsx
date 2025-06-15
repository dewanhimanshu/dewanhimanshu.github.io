
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <div className="mb-12">
            <img
              src="/lovable-uploads/19703a54-f1b4-47d2-aec0-4dbaaa38b1a9.png"
              alt="Himanshu Dewan"
              className="w-20 h-20 rounded-full mx-auto mb-8 object-cover"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
            Build software<br />
            <span className="text-blue-600">at scale</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium leading-relaxed max-w-3xl mx-auto">
            Software Engineer at GoDaddy building distributed systems 
            and leading technical initiatives.
          </p>
          
          <p className="text-lg text-gray-500 mb-16 max-w-2xl mx-auto leading-relaxed">
            Passionate about performance optimization, scalable architecture, 
            and clean code that powers millions of users.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <Button 
            size="lg" 
            className="bg-gray-900 text-white hover:bg-gray-800 rounded-xl px-8 py-4 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            onClick={() => scrollToSection('contact')}
          >
            Get in touch
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="lg"
              className="rounded-xl border-2 border-gray-200 hover:border-gray-900 hover:bg-gray-50 transition-all duration-200 px-6 py-4"
              onClick={() => window.open("https://linkedin.com/in/himanshu-dewan", "_blank")}
            >
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-xl border-2 border-gray-200 hover:border-gray-900 hover:bg-gray-50 transition-all duration-200 px-6 py-4"
            >
              <Github className="w-5 h-5" />
            </Button>
          </div>
        </div>
        
        <div className="text-center">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200 group"
          >
            <div className="w-px h-12 bg-gray-300 mx-auto mb-3 group-hover:bg-gray-400 transition-colors"></div>
            <div className="text-sm font-medium">Scroll to explore</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
