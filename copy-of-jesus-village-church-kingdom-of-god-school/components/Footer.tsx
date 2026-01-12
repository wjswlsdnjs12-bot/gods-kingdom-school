
import React from 'react';

const Footer: React.FC = () => {
  const BROCHURE_URL = "https://drive.google.com/file/d/10TBTdyyJOtLvUXV9GbduP2g2ICT51xaC/view?usp=drive_link";

  return (
    <footer className="bg-black border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-[#00FF00] rounded-sm flex items-center justify-center font-bold text-black text-xl">J</div>
              <span className="text-xl font-black tracking-tighter uppercase">Kingdom School</span>
            </div>
            <p className="text-gray-500 max-w-sm leading-relaxed mb-6">
              예수촌교회 하나님나라 학교는 하나님의 꿈이 아이들의 삶에서 현실이 되도록 최고의 교육 환경과 영성 훈련을 제공합니다.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/gods_kingdom_school/" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#00FF00]/20 hover:text-[#00FF00] transition-all cursor-pointer"
              >
                <span className="text-xs font-bold">IG</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">학교 소개</a></li>
              <li><a href="#curriculum" className="hover:text-white transition-colors">커리큘럼</a></li>
              <li><a href={BROCHURE_URL} target="_blank" rel="noreferrer" className="hover:text-[#00FF00] transition-colors font-bold">학교 소개서(PDF)</a></li>
              <li><a href="#admission" className="hover:text-white transition-colors">입학 상담</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li>서울특별시 OO구 OO로 123</li>
              <li>02-1234-5678</li>
              <li>info@jesusvillage.com</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-600 text-[10px] font-bold uppercase tracking-widest">
          <p>© 2024 JESUS VILLAGE CHURCH KINGDOM SCHOOL. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
