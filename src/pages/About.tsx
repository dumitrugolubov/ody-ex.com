import React from 'react';
import { Shield, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <main className="pt-16">
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            오디세이 거래소 소개
          </h1>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            대한민국 최초의 프리미엄 밈코인 거래소로서, 우리는 혁신적인 거래 환경과 
            최고의 수익 기회를 제공합니다.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 rounded-xl bg-slate-700">
              <Shield className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">안전한 거래</h3>
              <p className="text-gray-300">
                최첨단 보안 시스템으로 여러분의 자산을 안전하게 보호합니다.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-700">
              <Award className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">업계 최고 조건</h3>
              <p className="text-gray-300">
                777x 레버리지와 0% 현물 수수료로 최고의 거래 조건을 제공합니다.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-700">
              <Users className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">커뮤니티 중심</h3>
              <p className="text-gray-300">
                청산 수익 공유와 높은 파트너 수수료로 커뮤니티와 함께 성장합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">우리의 비전</h2>
            <p className="text-gray-300 mb-6">
              오디세이 거래소는 대한민국 암호화폐 시장의 새로운 지평을 열어갑니다. 
              우리는 밈코인 거래의 새로운 기준을 제시하며, 모든 트레이더들에게 
              공정하고 투명한 거래 환경을 제공합니다.
            </p>
            <p className="text-gray-300">
              최신 기술과 혁신적인 거래 시스템을 통해, 우리는 더 나은 암호화폐 
              거래의 미래를 만들어가고 있습니다. 오디세이와 함께라면, 여러분의 
              거래는 새로운 차원으로 도약할 것입니다.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}