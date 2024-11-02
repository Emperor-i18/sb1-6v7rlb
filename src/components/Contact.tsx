import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg">
            <Mail className="w-8 h-8 text-purple-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-600 text-center">rakshithvswaroopv@gmail.com</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg">
            <Phone className="w-8 h-8 text-purple-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-gray-600 text-center">(+91) 82960-06453</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg">
            <MapPin className="w-8 h-8 text-purple-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-gray-600 text-center">KOLAR , KARNATAKA </p>
          </div>
        </div>
      </div>
    </section>
  );
}