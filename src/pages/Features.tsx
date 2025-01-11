import React from 'react';
import { Rocket, Percent, Share2, Users } from 'lucide-react';

export default function Features() {
  return (
    <main className="pt-16">
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            특별한 거래 혜택
          </h1>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            오디세이 거래소만의 독보적인 특징으로 여러분의 거래 수익을 극대화하세요.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-xl bg-slate-700">
              <Rocket className="w-16 h-16 text-blue-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">777x 레버리지</h3>
              <p className="text-gray-300">
                업계 최고 수준인 777배 레버리지로 작은 자본으로도 큰 수익을 
                실현할 수 있습니다. 전략적인 포지션 관리로 수익을 극대화하세요.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-slate-700">
              <Percent className="w-16 h-16 text-blue-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">0% 현물 수수료</h3>
              <p className="text-gray-300">
                모든 현물 거래에서 0% 수수료 혜택을 제공합니다. 수수료 부담 없이 
                자유롭게 거래하며 더 많은 수익을 창출하세요.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-slate-700">
              <Share2 className="w-16 h-16 text-blue-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">청산 수익 공유</h3>
              <p className="text-gray-300">
                모든 청산 수익의 10%를 트레이더들과 공유합니다. 성공적인 거래로 
                추가 수익을 얻을 수 있는 특별한 기회를 제공합니다.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-slate-700">
              <Users className="w-16 h-16 text-blue-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">파트너 프로그램</h3>
              <p className="text-gray-300">
                업계 최고 수준인 50%의 파트너 수수료를 제공합니다. 여러분의 
                네트워크를 통해 안정적인 수익을 창출하세요.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}