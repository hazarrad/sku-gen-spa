
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";

const testimonials = [
  {
    name: "John Smith",
    position: "Inventory Manager, TechRetail Inc.",
    content: "SKUGen has transformed our inventory management. We've cut barcode generation time by 75% and virtually eliminated input errors.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "Sarah Johnson",
    position: "COO, Global Logistics Co.",
    content: "The batch processing feature alone saved our team countless hours. The custom SKU patterns perfectly match our existing system.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    name: "Michael Chen",
    position: "E-commerce Director, Fashion Brand",
    content: "We needed a solution that could scale with our growing product line. SKUGen not only met but exceeded our expectations.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    name: "Emily Rodriguez",
    position: "Warehouse Supervisor, Distribution Co.",
    content: "The intuitive interface meant our team was up and running in minutes. Support has been exceptional whenever we had questions.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    name: "David Wilson",
    position: "IT Manager, Retail Chain",
    content: "The API integration was seamless with our existing systems. We now generate and validate barcodes in real-time across all stores.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    name: "Lisa Thompson",
    position: "Small Business Owner",
    content: "As a small business, we needed an affordable solution that didn't sacrifice features. The free tier was perfect to start with.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/6.jpg"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Thousands of businesses rely on SKUGen daily for their inventory management needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-none shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-70">
          {["Company A", "Company B", "Company C", "Company D", "Company E", "Company F"].map((company, index) => (
            <div key={index} className="text-xl font-bold text-gray-400">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
