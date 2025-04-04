
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter Section */}
        <div className="bg-gray-800 rounded-lg p-6 mb-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-white mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-gray-400">Get the latest updates and news about our services</p>
            </div>
            <div className="flex flex-col sm:flex-row w-full md:w-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-brand-blue"
              />
              <Button className="bg-brand-blue hover:bg-brand-darkBlue text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">SKU<span className="text-brand-blue">Gen</span></h3>
            <p className="text-gray-400 mb-4">Advanced barcode and SKU generation for businesses of all sizes. Streamline your inventory management with our powerful tools.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-blue">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-blue">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-blue">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-blue">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Features', 'Pricing', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-brand-blue transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {['Documentation', 'API Reference', 'Tutorials', 'Blog', 'Help Center'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-brand-blue transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={20} className="mr-3 text-brand-blue flex-shrink-0 mt-1" />
                <span>support@skugen.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="mr-3 text-brand-blue flex-shrink-0 mt-1" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <address className="not-italic text-gray-400">
                  123 Tech Avenue<br />
                  San Francisco, CA 94107<br />
                  United States
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} SKUGen. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-brand-blue">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-brand-blue">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-brand-blue">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
