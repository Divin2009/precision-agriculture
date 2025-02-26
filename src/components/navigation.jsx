'use client'
import { useState } from 'react';
import { Home, Leaf, Rocket, FileText, Menu } from 'lucide-react'; // icons from lucide-react
import { Button } from '@/components/ui/button';
import { useCallback } from 'react';
import { redirect } from 'next/navigation';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = useCallback((path) => {
    setIsMenuOpen(false);  // Close the menu after navigation
    redirect(path);
  }, []);

  return (
    <nav className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 border-b border-purple-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Branding */}
          <div onClick={() => handleNavigation('/')} className="flex items-center space-x-2 cursor-pointer">
            <Rocket className="h-6 w-6 text-white" />
            <span className="text-white font-bold text-lg">Precision Farming</span>
          </div>
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <Button 
              variant="ghost" 
              className="text-white hover:bg-purple-700/50 hover:text-white"
              onClick={() => handleNavigation('/')}
            >
              <Home className="mr-2 h-4 w-4" /> Home
            </Button>
            <Button 
              variant="ghost" 
              className="text-white hover:bg-purple-700/50 hover:text-white"
              onClick={() => handleNavigation('/benefits')}
            >
              <Leaf className="mr-2 h-4 w-4" /> Benefits
            </Button>
            <Button 
              variant="ghost" 
              className="text-white hover:bg-purple-700/50 hover:text-white"
              onClick={() => handleNavigation('/technologies')}
            >
              <Rocket className="mr-2 h-4 w-4" /> Technologies
            </Button>
            <Button 
              variant="ghost" 
              className="text-white hover:bg-purple-700/50 hover:text-white"
              onClick={() => handleNavigation('/case-studies')}
            >
              <FileText className="mr-2 h-4 w-4" /> Case Studies
            </Button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              className="text-white hover:bg-purple-700/50"
              onClick={toggleMenu}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute right-0 top-16 w-48 rounded-lg bg-black/95 backdrop-blur-md border border-purple-500/20">
          <div className="px-4 py-3 space-y-1">
            <Button 
              variant="ghost" 
              className="w-full text-white hover:bg-purple-700/50 hover:text-white justify-start"
              onClick={() => handleNavigation('/')}
            >
              <Home className="mr-2 h-4 w-4" /> Home
            </Button>
            <Button 
              variant="ghost" 
              className="w-full text-white hover:bg-purple-700/50 hover:text-white justify-start"
              onClick={() => handleNavigation('/benefits')}
            >
              <Leaf className="mr-2 h-4 w-4" /> Benefits
            </Button>
            <Button 
              variant="ghost" 
              className="w-full text-white hover:bg-purple-700/50 hover:text-white justify-start"
              onClick={() => handleNavigation('/technologies')}
            >
              <Rocket className="mr-2 h-4 w-4" /> Technologies
            </Button>
            <Button 
              variant="ghost" 
              className="w-full text-white hover:bg-purple-700/50 hover:text-white justify-start"
              onClick={() => handleNavigation('/case-studies')}
            >
              <FileText className="mr-2 h-4 w-4" /> Case Studies
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
