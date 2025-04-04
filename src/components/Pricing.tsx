
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const plans = [
  {
    name: "Starter",
    price: 0,
    billed: "Free",
    description: "Perfect for individuals and small projects",
    features: [
      "100 barcodes per month",
      "Basic SKU generation",
      "PDF export",
      "Email support",
      "1 user"
    ],
    buttonText: "Start Free",
    popular: false
  },
  {
    name: "Professional",
    price: 29,
    billed: "per month",
    description: "Ideal for growing businesses with inventory needs",
    features: [
      "Unlimited barcodes",
      "Advanced SKU patterns",
      "All export formats",
      "Priority support",
      "5 team members",
      "API access",
      "Custom branding"
    ],
    buttonText: "Start 14-Day Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: 99,
    billed: "per month",
    description: "For large businesses with complex requirements",
    features: [
      "Everything in Professional",
      "Unlimited team members",
      "24/7 premium support",
      "Advanced security",
      "Custom integration",
      "Dedicated account manager",
      "On-premises option"
    ],
    buttonText: "Contact Sales",
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your business needs. All plans include core features with no hidden fees.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative border ${plan.popular ? 'border-brand-blue shadow-lg shadow-brand-blue/10' : 'border-gray-200'}`}>
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-brand-blue text-white px-3 py-1">Most Popular</Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-500 ml-2">{plan.billed}</span>
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-brand-blue hover:bg-brand-darkBlue' : 'bg-gray-800 hover:bg-gray-900'} text-white`}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Need a custom solution?</h3>
          <p className="text-gray-600 mb-6">
            We offer customized enterprise solutions for large organizations with specific requirements. 
            Contact our sales team to discuss your needs.
          </p>
          <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/5">
            Contact Sales Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
