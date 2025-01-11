import React from 'react';
import { ArrowRight, PieChart, Wallet, BadgeCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Partners() {
  return (
    <main className="pt-16">
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            파트너 프로그램
          </h1>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            업계 최고 수준의 50% 수수료 공유로 안정적인 수익을 창출하세요.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="p-6 rounded-xl bg-slate-700">
              <PieChart className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">50% 수수료 공유</h3>
              <p className="text-gray-300">
                소개한 트레이더의 거래 수수료 50%를 평생 수익으로 받아가세요.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-700">
              <Wallet className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">즉시 정산</h3>
              <p className="text-gray-300">
                발생한 수수료는 실시간으로 정산되어 즉시 출금이 가능합니다.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-700">
              <BadgeCheck className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">투명한 관리</h3>
              <p className="text-gray-300">
                실시간 통계와 상세한 리포트로 수익을 투명하게 관리하세요.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/exchange" 
              className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              파트너 등록하기 <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">파트너 혜택</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <ArrowRight className="w-6 h-6 mr-2 flex-shrink-0 text-blue-500" />
                <span>업계 최고 수준의 50% 수수료 공유 프로그램</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-6 h-6 mr-2 flex-shrink-0 text-blue-500" />
                <span>실시간 수익 정산 및 즉시 출금 가능</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-6 h-6 mr-2 flex-shrink-0 text-blue-500" />
                <span>상세한 통계 및 리포트 제공</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-6 h-6 mr-2 flex-shrink-0 text-blue-500" />
                <span>전용 파트너 매니저 배정</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-6 h-6 mr-2 flex-shrink-0 text-blue-500" />
                <span>마케팅 자료 및 기술 지원 제공</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}