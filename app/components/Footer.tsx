import { User, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">ServiceConnect</span>
            </div>
            <p className="text-gray-400 text-sm">
              Connecting customers with trusted local service providers for all
              your home and business needs.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Plumbing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Electrical
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Carpentry
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Auto Repair
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tech Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  House Painting
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Safety
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>support@serviceconnect.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>
                  123 Business Ave, Suite 100
                  <br />
                  City, State 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; 2024 ServiceConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
