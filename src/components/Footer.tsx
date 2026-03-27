import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">H</span>
              </div>
              <span className="font-heading text-xl font-bold">
               Halal<span className="text-primary">care</span>
             </span>
            </div>
            <p className="text-muted text-sm">
              Your trusted gateway to world-class healthcare in India. Connecting international
              patients with top hospitals.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-full bg-muted/20 hover:bg-primary transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-muted/20 hover:bg-primary transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-muted/20 hover:bg-primary transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-muted/20 hover:bg-primary transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/hospitals" className="text-muted text-sm hover:text-primary transition-colors">
                  Find Hospitals
                </Link>
              </li>
              <li>
                <Link to="/patient-stories" className="text-muted text-sm hover:text-primary transition-colors">
                  Patient Stories
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted text-sm hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-muted text-sm hover:text-primary transition-colors">
                  Health Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted text-sm hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Popular Treatments</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li className="hover:text-primary transition-colors cursor-pointer">Cardiac Surgery</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Orthopedic Treatment</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Cancer Treatment</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Fertility Treatment</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Transplant Surgery</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>123 Medical Plaza, New Delhi, India 110001</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+911234567890" className="hover:text-primary transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@medtripz.com" className="hover:text-primary transition-colors">
                  info@medtripz.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-muted/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
          <p>© 2024 MedTripz. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
