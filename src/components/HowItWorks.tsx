
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    number: 1,
    title: "Sign Up & Configure",
    description: "Create your account and set up your preferences for barcode and SKU generation.",
    highlights: [
      "Quick registration process",
      "Customizable settings",
      "Import existing data",
    ]
  },
  {
    number: 2,
    title: "Generate & Customize",
    description: "Use our intuitive interface to generate barcodes and SKUs tailored to your needs.",
    highlights: [
      "Multiple barcode formats",
      "Custom SKU patterns",
      "Batch processing",
    ]
  },
  {
    number: 3,
    title: "Export & Implement",
    description: "Download your generated codes in various formats or integrate directly with your systems.",
    highlights: [
      "High-resolution exports",
      "API integration",
      "Multiple file formats",
    ]
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How SKUGen Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our simple three-step process gets you from setup to implementation in minutes, not hours.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 h-full flex flex-col">
                <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-xl mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-6">{step.description}</p>
                <div className="mt-auto">
                  <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
                  <ul className="space-y-2">
                    {step.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Connector line */}
              {step.number < steps.length && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-gray-300"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button 
            className="bg-brand-blue hover:bg-brand-darkBlue text-white font-semibold py-6 px-8 text-lg"
          >
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
