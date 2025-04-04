
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-white to-blue-50 pt-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 py-12 md:py-24 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gray-800">Generate Barcodes & SKUs with </span>
              <span className="text-brand-blue">Speed & Precision</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Streamline your inventory management with our powerful barcode and SKU generation platform. Perfect for businesses of all sizes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-brand-blue hover:bg-brand-darkBlue text-white font-semibold py-6 px-8 text-lg"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-brand-blue text-brand-blue hover:bg-brand-blue/5 font-semibold py-6 px-8 text-lg"
              >
                Watch Demo
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center overflow-hidden"
                  >
                    <span className="text-xs font-semibold text-gray-600">{i}</span>
                  </div>
                ))}
              </div>
              <p className="ml-4 text-sm text-gray-600">
                <span className="font-semibold">1,000+ businesses</span> already use our platform
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transform rotate-1 relative z-20">
              <div className="grid grid-cols-3 gap-4 mb-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="w-3/4 h-12 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAyCAYAAAAZUZThAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAyKADAAQAAAABAAAAMgAAAABxH8V6AAABzklEQVR4Ae3YQW1UAQBF0XkJgjIoIGUQMAiCgCKgCBgYBhQUAUNQBMPb5wLuHZlM2nP27jf9kAoI8v9A7YICd74UzNDdL0AfAUKQy4CY/5IAMVyR48U+ZBCmAFHWgTMChDmAKOvAGQHCHECUdeCMAGEOIMo6cEaAMAcQZR04I0CYA4iyDpwRIMwBRFkHzggQ5gCirANnBAhzAFHWgTMChDmAKOvAGQHCHECUdeCMAGEOIMo6cEaAMAcQZR04I0CYA4iyDpwRIMwBRFkHzggQ5gCirANnBAhzAFHWgTMChDmAKOvAGQHCHECUdeCMAGEOIMo6cEaAMAcQZR04I0CYA4iyDpwRIMwBRFkHzggQ5gCirANnBAhzAFHWgTOOF+YAoqwDZ4wXzAFEWQfOeATP/0d+e+Lq9XtO7Q90BO8inq+Hw99fvf2kqNvng/tPt28f3tw9Xj76A9eCXJ7+XRy7/vLjy85zXKDw7s3Vq4+P3x+uD09Xp8i1IDvP/9/r3enu8RP3s9sdLi/i87NRj3MXqJxvnz4+nn58e75dPk9HZrsWZBzf//r+9efPk+MCULbbeUDGFTmd5r6Pv/PzuDHt7Dz/ATk+JHsHkl5kAAAAAElFTkSuQmCC')]"></div>
                  </div>
                ))}
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="h-8 bg-gray-200 w-3/4 rounded mb-4"></div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-10 bg-brand-lightBlue rounded flex items-center justify-center text-brand-darkBlue font-mono">SKU-10243</div>
                  <div className="h-10 bg-brand-lightBlue rounded flex items-center justify-center text-brand-darkBlue font-mono">SKU-10244</div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/4 -right-4 w-12 h-12 bg-yellow-300 rounded-full opacity-60"></div>
            <div className="absolute bottom-1/4 -left-4 w-16 h-16 bg-brand-blue rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 right-1/3 w-20 h-20 bg-purple-400 rounded-full opacity-10"></div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,122.7C96,149,192,203,288,202.7C384,203,480,149,576,138.7C672,128,768,160,864,170.7C960,181,1056,171,1152,144C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
