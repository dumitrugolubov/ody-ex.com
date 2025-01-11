import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Send, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">오디세이 거래소</h3>
            <p className="text-gray-400">
              대한민국 최고의 밈코인 거래소에서 여러분의 거래 여정을 시작하세요.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">빠른 링크</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  홈
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  소개
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-400 hover:text-white transition-colors">
                  특징
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-gray-400 hover:text-white transition-colors">
                  파트너
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">거래 특징</h4>
            <ul className="space-y-2 text-gray-400">
              <li>777x 레버리지</li>
              <li>0% 현물 수수료</li>
              <li>청산 수익 공유</li>
              <li>파트너 수익 50%</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">커뮤니티</h4>
            <div className="flex space-x-4">
              <a 
                href="https://x.com/t_dmi3" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="https://t.me/t_dmi3" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-6 h-6" />
              </a>
              <a 
                href="mailto:odyexchange@gmail.com" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 mb-8 w-full">
          <Link 
            to="/exchange" 
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-6 px-8 rounded-xl flex items-center justify-center text-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            지금 바로 거래 시작하기 <ArrowRight className="ml-3 w-6 h-6" />
          </Link>
        </div>
        
        <div className="pt-8 border-t border-slate-700 text-center text-gray-400">
          <p>&copy; 2024 오디세이 거래소. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}