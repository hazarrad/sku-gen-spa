
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Barcode, QrCode, Settings, Shield, Sparkles, Tag, Clock, Maximize } from "lucide-react";

const features = [
  {
    title: "Barcode Generation",
    description: "Generate standard compliant barcodes in various formats including UPC, EAN, CODE128 and more.",
    icon: Barcode,
  },
  {
    title: "QR Code Creation",
    description: "Create custom QR codes with your branding for product information, landing pages, and more.",
    icon: QrCode,
  },
  {
    title: "SKU Management",
    description: "Automated SKU generation with customizable formats and inventory integration.",
    icon: Tag,
  },
  {
    title: "Real-time Processing",
    description: "Generate thousands of codes in seconds with our powerful cloud infrastructure.",
    icon: Clock,
  },
  {
    title: "Advanced Customization",
    description: "Adapt the platform to your specific business needs with flexible configuration options.",
    icon: Settings,
  },
  {
    title: "Data Security",
    description: "Enterprise-level encryption and secure data handling for complete peace of mind.",
    icon: Shield,
  },
  {
    title: "High Resolution Output",
    description: "Export barcodes in high resolution formats perfect for print and digital use.",
    icon: Maximize,
  },
  {
    title: "Smart Suggestions",
    description: "AI-powered recommendations for optimal barcode and SKU settings based on your industry.",
    icon: Sparkles,
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Modern Businesses</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform provides everything you need to streamline your inventory and product management processes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-100 hover:border-brand-blue/30 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-brand-blue/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-brand-blue" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
