
import { Button } from "@/components/ui/button";
import { Mail, User } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img
            src="/lovable-uploads/cbd1170a-f0e3-4ac8-acc7-0237d2ca28a3.png"
            alt="Himanshu Dewan"
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg"
          />
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Himanshu Dewan
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-2">
            Software Engineer
          </p>
          <p className="text-lg text-gray-500 mb-8">
            Delhi, India • +91 8383006342
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Contact Me
          </Button>
          <Button variant="outline" size="lg" className="flex items-center gap-2">
            <User className="w-5 h-5" />
            View Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
