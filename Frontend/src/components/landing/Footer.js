import React from 'react';
import { Dumbbell, Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook, FaInstagram, FaYoutube, FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gym-black border-t border-gym-gray pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          <div>
            <div className="flex items-center gap-2 mb-6">
              <Dumbbell className="w-8 h-8 text-gym-red" />
              <span className="text-2xl font-bold text-white tracking-tight">GYM<span className="text-gym-red">PRO</span></span>
            </div>
            <p className="text-gym-lightgray mb-6">
              Empowering you to reach your peak potential. Premium facilities, expert trainers, and a community that pushes you forward.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gym-gray flex items-center justify-center text-white hover:bg-gym-red transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gym-gray flex items-center justify-center text-white hover:bg-gym-red transition-colors">
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gym-gray flex items-center justify-center text-white hover:bg-gym-red transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gym-gray flex items-center justify-center text-white hover:bg-gym-red transition-colors">
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gym-lightgray hover:text-gym-red transition-colors">Home</Link></li>
              <li><a href="#" className="text-gym-lightgray hover:text-gym-red transition-colors">About Us</a></li>
              <li><a href="#" className="text-gym-lightgray hover:text-gym-red transition-colors">Classes</a></li>
              <li><a href="#" className="text-gym-lightgray hover:text-gym-red transition-colors">Trainers</a></li>
              <li><a href="#" className="text-gym-lightgray hover:text-gym-red transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gym-lightgray hover:text-gym-red transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gym-lightgray hover:text-gym-red transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gym-lightgray hover:text-gym-red transition-colors">Privacy Policy</a></li>
              <li><Link to="/login" className="text-gym-lightgray hover:text-gym-red transition-colors">Member Login</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gym-red shrink-0 mt-1" />
                <span className="text-gym-lightgray">123 Fitness Avenue, Muscle City, MC 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gym-red shrink-0" />
                <span className="text-gym-lightgray">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gym-red shrink-0" />
                <span className="text-gym-lightgray">support@gympro.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gym-gray pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gym-lightgray text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} GymPro Management System. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gym-lightgray">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
