import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 border-b border-stone-100 bg-stone-50/80 backdrop-blur-md px-6 py-4 md:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link to="/">
          <Logo />
        </Link>
        
        <div className="hidden items-center gap-8 text-sm font-medium text-stone-600 md:flex">
          <Link to="/" className="transition-colors hover:text-emerald-600">Features</Link>
          <a href="#about" className="transition-colors hover:text-emerald-600">About</a>
          <a href="#progress" className="transition-colors hover:text-emerald-600">Progress</a>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/login')} className="text-sm font-medium text-stone-600 transition-colors hover:text-emerald-700">
            Login
          </button>
          <button onClick={() => navigate('/login')} className="rounded-full bg-emerald-800 px-5 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-emerald-900 hover:shadow-md">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}