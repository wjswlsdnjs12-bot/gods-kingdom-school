
import React from 'react';
import { PROGRAMS } from '../constants';

const Programs: React.FC = () => {
  return (
    <section id="curriculum" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[#00FF00] tracking-widest uppercase mb-4">Curriculum</h2>
          <h3 className="text-4xl md:text-5xl font-black mb-6">성장 단계별 맞춤 과정</h3>
          <p className="text-gray-500 max-w-2xl mx-auto">아이들의 발달 단계에 맞춘 최적화된 교육 프로그램을 통해 잠재력을 극대화합니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROGRAMS.map((program, idx) => (
            <div 
              key={idx} 
              className="group bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden hover:border-[#00FF00]/30 transition-all duration-500"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={program.imageUrl} 
                  alt={program.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#00FF00] text-black text-[10px] font-black uppercase px-2 py-1 rounded">
                    {program.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold mb-4 group-hover:text-[#00FF00] transition-colors">
                  {program.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
