
import React from 'react';

const Hero: React.FC = () => {
  const BROCHURE_URL = "https://drive.google.com/file/d/10TBTdyyJOtLvUXV9GbduP2g2ICT51xaC/view?usp=drive_link";

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Overlay - 항해하는 밤바다 분위기 연출 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-[#000000] z-10" />
      
      {/* Background Image: Majestic Night Sea / Ocean Horizon */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=2026&auto=format&fit=crop" 
          alt="Majestic Ocean Horizon at Night" 
          className="w-full h-full object-cover opacity-60 scale-105 animate-[subtle-zoom_30s_infinite]"
        />
      </div>

      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto mt-20">
        <div className="inline-flex items-center space-x-3 mb-12 bg-white/5 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/10">
          <svg className="w-5 h-5 text-[#00FF00] animate-pulse" fill="currentColor" viewBox="0 0 20 20">
            <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1a1 1 0 112 0v1a1 1 0 11-2 0zM13.536 14.95a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM16.121 17.535a1 1 0 01-1.415 0l-.707-.707a1 1 0 011.414-1.414l.707.707a1 1 0 010 1.415z" />
          </svg>
          <span className="text-[#00FF00] font-bold tracking-[0.4em] text-[10px] uppercase">
            The Ark of Kingdom of God
          </span>
        </div>
        
        <h1 className="text-6xl md:text-[7.5rem] font-black leading-[1.15] mb-12 tracking-tighter">
          거친 세상 속 <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF00] via-emerald-400 to-[#00FF00] animate-[gradient-shift_8s_infinite]">믿음의 방주</span>
        </h1>

        <p className="text-gray-300 text-xl md:text-2xl mb-16 max-w-3xl mx-auto leading-relaxed font-light">
          예수촌교회 하나님나라 학교는 아이들이 거친 세상의 풍파를 이겨내고 <br className="hidden md:block" /> 
          생명을 보존하며 새로운 시대를 여는 '방주'의 리더가 되도록 양육합니다.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a 
            href={BROCHURE_URL} 
            target="_blank" 
            rel="noreferrer"
            className="w-full md:w-auto px-14 py-6 bg-[#00FF00] text-black font-black rounded-full glow-green transition-all hover:scale-105 active:scale-95 text-center uppercase tracking-widest text-xs"
          >
            학교 소개서 보기
          </a>
          <a href="#admission" className="w-full md:w-auto px-14 py-6 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-[#00FF00]/10 hover:border-[#00FF00]/50 transition-all rounded-full font-black text-center uppercase tracking-widest text-xs">
            입학 상담 신청
          </a>
        </div>
      </div>

      {/* Bottom transition mask - 하단 물결 배경과의 조화로운 연결 */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 animate-bounce opacity-40">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
        </svg>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes subtle-zoom {
          0% { transform: scale(1.0); }
          50% { transform: scale(1.15); }
          100% { transform: scale(1.0); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}} />
    </section>
  );
};

export default Hero;
