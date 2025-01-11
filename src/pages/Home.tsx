import React from 'react';
import { ArrowRight, Rocket, Shield, Coins } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/odyssey-exchange.webp"
            alt="Trading background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            오디세이 거래소
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            대한민국 최초의 프리미엄 밈코인 거래소
          </p>
          <Link 
            to="/exchange"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            지금 거래하기 <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            최고의 거래 조건
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-slate-700 text-center">
              <Rocket className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2">777x 레버리지</h3>
              <p className="text-gray-300">업계 최고 수준의 레버리지로 수익 극대화</p>
            </div>
            
            <div className="p-6 rounded-xl bg-slate-700 text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2">0% 현물 수수료</h3>
              <p className="text-gray-300">수수료 없는 현물 거래로 더 많은 수익</p>
            </div>
            
            <div className="p-6 rounded-xl bg-slate-700 text-center">
              <Coins className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2">청산 수익 공유</h3>
              <p className="text-gray-300">청산 수익의 10%를 트레이더와 공유</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}