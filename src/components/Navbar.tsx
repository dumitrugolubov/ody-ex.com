import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-slate-800/50 backdrop-blur-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold flex items-center space-x-2">
            <img src="/favicon.png" alt="오디세이 거래소" className="w-8 h-8" />
            <span>오디세이 거래소</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              홈
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              소개
            </Link>
            <Link to="/features" className="text-gray-300 hover:text-white transition-colors">
              특징
            </Link>
            <Link to="/partners" className="text-gray-300 hover:text-white transition-colors">
              파트너
            </Link>
            <Link 
              to="/exchange"
              className="px-4 py-2 rounded bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-colors"
            >
              거래하기
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                홈
              </Link>
              <Link 
                to="/about" 
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                소개
              </Link>
              <Link 
                to="/features" 
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                특징
              </Link>
              <Link 
                to="/partners" 
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                파트너
              </Link>
              <Link 
                to="/exchange"
                className="px-4 py-2 rounded bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-colors inline-block text-center"
                onClick={() => setIsOpen(false)}
              >
                거래하기
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}