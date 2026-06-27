import React from 'react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="border-t border-stone-100 bg-stone-900 text-stone-400 px-6 py-12 md:px-12">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="space-y-4">
          <Logo textColor="text-white" />
          <p className="text-sm leading-relaxed max-w-xs">
            Your all-in-one organic digital companion on your path to mindfulness and complete bio-harmony.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Product</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">AI Coaching</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#" className="hover:text-emerald-400 transition-colors">About</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Stay Tuned</h4>
          <p className="text-sm mb-3">Subscribe for regular holistic insight dispatches.</p>
          <div className="flex rounded-lg overflow-hidden border border-stone-700">
            <input type="email" placeholder="Email Address" className="w-full bg-stone-800 px-3.5 py-2 text-sm text-white placeholder-stone-500 focus:outline-none" />
            <button className="bg-emerald-700 text-white px-4 text-sm font-medium hover:bg-emerald-600 transition-colors">→</button>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl border-t border-stone-800 pt-6 text-center text-xs text-stone-500 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>&copy; 2026 VitaSphere. Crafted for clean living.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}