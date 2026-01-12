
import React from 'react';

const AboutDetailed: React.FC = () => {
  return (
    <section id="about" className="py-40 bg-transparent relative overflow-hidden">
      {/* 전역 물결 배경 시스템 */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 심해의 깊이감을 더하는 배경 그라데이션 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#000a05] to-black opacity-90" />
        
        {/* 대형 유기적 물결 1 - 상단에서 하단까지 넓게 퍼짐 */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg className="w-[200%] h-full animate-[wave-flow_30s_infinite_linear]" viewBox="0 0 1440 1000" preserveAspectRatio="none">
            <path d="M0,200 Q360,100 720,200 T1440,200 T2160,200 L2160,1000 L0,1000 Z" fill="url(#wave-grad-1)" />
            <defs>
              <linearGradient id="wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#00FF00', stopOpacity: 0.3 }} />
                <stop offset="100%" style={{ stopColor: '#000000', stopOpacity: 0 }} />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* 대형 유기적 물결 2 - 반대 방향으로 느리게 이동 */}
        <div className="absolute top-0 left-[-100%] w-[200%] h-full opacity-[0.07]">
          <svg className="w-full h-full animate-[wave-flow_45s_infinite_linear_reverse]" viewBox="0 0 1440 1000" preserveAspectRatio="none">
            <path d="M0,300 Q400,200 800,300 T1600,300 T2400,300 L2400,1000 L0,1000 Z" fill="url(#wave-grad-2)" />
            <defs>
              <linearGradient id="wave-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#10B981', stopOpacity: 0.2 }} />
                <stop offset="100%" style={{ stopColor: '#000000', stopOpacity: 0 }} />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* 심해의 생명력을 상징하는 부유 입자 */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className="absolute bg-[#00FF00]/20 rounded-full blur-xl animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${5 + Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Goals Section */}
        <div className="text-center mb-56">
          <div className="inline-block mb-10 px-6 py-2 border border-[#00FF00]/30 rounded-full bg-black/20 backdrop-blur-xl">
            <h2 className="text-[10px] font-bold text-[#00FF00] tracking-[0.6em] uppercase">Core Philosophy</h2>
          </div>
          <p className="text-4xl md:text-7xl font-black leading-[1.1] text-white tracking-tighter">
            "이 시대의 회복과 부흥을 <br className="hidden md:block" /> 담아낼 
            <span className="relative inline-block mx-4">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#00FF00] to-emerald-300">다음세대</span>
              <span className="absolute bottom-4 left-0 w-full h-4 bg-[#00FF00]/10 -z-10 blur-md"></span>
            </span>
            를 세우는 것"
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#00FF00]/40 to-transparent mx-auto mt-20" />
        </div>

        {/* Content Blocks with shared ambient background feel */}
        <div className="space-y-48">
          {/* Background Section */}
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/3">
              <div className="sticky top-40">
                <div className="flex items-center space-x-3 mb-6">
                   <div className="w-10 h-[1px] bg-[#00FF00]/50"></div>
                   <span className="text-[#00FF00] text-xs font-bold tracking-widest uppercase">Context</span>
                </div>
                <h3 className="text-5xl font-black text-white leading-tight">
                  시대적 <br />배경 <span className="text-[#00FF00]">.</span>
                </h3>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="space-y-12 text-gray-400 text-xl md:text-2xl leading-relaxed font-light">
                <p>
                  현대 교육은 하나님의 위엄과 질서가 약화되며, 하나님에 대한 참된 배움과 성경적 가르침이 부족한 현실에 직면해 있습니다. 이러한 상황은 가치관의 혼란과 도덕적 질서의 붕괴를 초래하며, 다음 세대가 신앙과 지혜를 바탕으로 올바르게 성장할 수 있는 기반을 위협하고 있습니다.
                </p>
                <div className="relative group">
                   <div className="absolute -inset-4 bg-gradient-to-r from-[#00FF00]/5 to-transparent blur-3xl" />
                   <p className="relative text-white font-medium text-3xl leading-snug border-l-[3px] border-[#00FF00] pl-10 py-2">
                    <span className="text-[#00FF00] font-black">하나님나라 학교</span>는 이러한 시대적 흐름 속에서 하나님의 뜻과 질서를 회복하며 설립되었습니다.
                  </p>
                </div>
                <p>
                  학생들이 하나님을 경외하고 성경적 가치를 중심으로 삶을 살아갈 수 있도록 돕는 것이 우리의 가장 큰 사명입니다. 이를 통해 다음 세대가 하나님 나라의 군사로 성장하여 삶의 모든 영역에서 하나님의 뜻을 실현하도록 돕고자 합니다.
                </p>
              </div>
            </div>
          </div>

          {/* Purpose Section */}
          <div className="flex flex-col md:flex-row gap-16 items-start pb-20">
            <div className="md:w-1/3">
              <div className="sticky top-40">
                <div className="flex items-center space-x-3 mb-6">
                   <div className="w-10 h-[1px] bg-[#00FF00]/50"></div>
                   <span className="text-[#00FF00] text-xs font-bold tracking-widest uppercase">Mission</span>
                </div>
                <h3 className="text-5xl font-black text-white leading-tight">
                  설립 <br />목적 <span className="text-[#00FF00]">.</span>
                </h3>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="space-y-12 text-gray-400 text-xl md:text-2xl leading-relaxed font-light">
                <p>
                  하나님나라 학교는 성경적 가치관을 생활 속에서 실천하며, 하나님 나라의 확장을 위해 헌신하는 인재를 양성하는 것을 사명으로 삼습니다. 학생들이 자신의 삶 속에서 하나님의 말씀을 기준으로 삼아 학문과 믿음을 겸비한 리더로 성장할 수 있도록 지원합니다.
                </p>
                <div className="relative">
                  <div className="absolute -inset-8 bg-[#00FF00]/5 rounded-[3rem] blur-2xl" />
                  <div className="relative p-14 border border-white/5 bg-white/5 backdrop-blur-md rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    <p className="text-white italic text-3xl font-light leading-snug">
                      "신앙과 학문이 조화를 이루는 균형 잡힌 교육을 통해, 공동체 속에서 서로 협력하고 섬기는 훈련을 강화합니다."
                    </p>
                  </div>
                </div>
                <p>
                  이를 통해 학생들은 사회와 교회를 변화시키는 영향력 있는 인재로 거듭나며, 하나님의 나라를 삶의 모든 영역에서 구현해 나갈 수 있는 준비를 갖추게 됩니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes wave-flow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </section>
  );
};

export default AboutDetailed;
