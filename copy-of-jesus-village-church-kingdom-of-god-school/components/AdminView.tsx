
import React, { useState } from 'react';
import { refineSchoolCopy } from '../services/geminiService';

const AdminView: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [rawText, setRawText] = useState('');
  const [refinedCopy, setRefinedCopy] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'content' | 'social' | 'inquiries'>('content');

  const handleRefine = async () => {
    if (!rawText) return;
    setLoading(true);
    const result = await refineSchoolCopy(rawText);
    setRefinedCopy(result);
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black text-white overflow-y-auto">
      <div className="max-w-6xl mx-auto p-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-black">Admin Dashboard <span className="text-[#00FF00] text-sm ml-4 uppercase tracking-[0.2em]">Management</span></h2>
            <div className="flex space-x-6 mt-4">
              {['content', 'social', 'inquiries'].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`text-xs font-bold uppercase tracking-widest pb-2 border-b-2 transition-all ${activeTab === tab ? 'border-[#00FF00] text-white' : 'border-transparent text-gray-600'}`}
                >
                  {tab === 'content' ? 'AI 콘텐츠 관리' : tab === 'social' ? '인스타그램 관리' : '문의 내역'}
                </button>
              ))}
            </div>
          </div>
          <button onClick={onClose} className="px-6 py-2 border border-white/20 rounded-full hover:bg-white/10 transition-all">나가기</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar Info */}
          <div className="lg:col-span-1 space-y-4">
            <div className="p-6 bg-[#0a0a0a] border border-white/10 rounded-2xl">
              <h3 className="font-bold mb-4">입학 문의 현황</h3>
              <div className="text-4xl font-black text-[#00FF00]">12</div>
              <p className="text-gray-500 text-sm">이번 주 새로운 문의</p>
            </div>
            <div className="p-6 bg-[#0a0a0a] border border-white/10 rounded-2xl">
              <h3 className="font-bold mb-4">사이트 통계</h3>
              <div className="text-4xl font-black">1,240</div>
              <p className="text-gray-500 text-sm">이번 달 방문자 수</p>
            </div>
          </div>

          {/* Main Content Area based on Tab */}
          <div className="lg:col-span-2 space-y-8">
            {activeTab === 'content' && (
              <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <span className="w-2 h-2 bg-[#00FF00] rounded-full mr-3"></span>
                  AI 콘텐츠 매니저
                </h3>
                <p className="text-gray-500 mb-6 text-sm">소개서 원고를 붙여넣으세요. Gemini AI가 사이트 톤앤매너에 맞게 다듬어 드립니다.</p>
                
                <textarea 
                  className="w-full bg-black border border-white/10 rounded-xl p-4 min-h-[150px] mb-4 focus:outline-none focus:border-[#00FF00]"
                  placeholder="원문 텍스트를 입력하세요..."
                  value={rawText}
                  onChange={(e) => setRawText(e.target.value)}
                />
                
                <button 
                  onClick={handleRefine}
                  disabled={loading}
                  className="px-8 py-3 bg-[#00FF00] text-black font-bold rounded-xl disabled:opacity-50 glow-green"
                >
                  {loading ? 'AI 분석 중...' : '문구 다듬기'}
                </button>

                {refinedCopy && (
                  <div className="mt-8 p-6 bg-black border border-emerald-500/30 rounded-xl">
                    <h4 className="text-[#00FF00] font-bold mb-4 text-xs uppercase">Refined Copy</h4>
                    <div className="text-gray-300 leading-relaxed whitespace-pre-wrap">
                      {refinedCopy}
                    </div>
                    <button 
                      onClick={() => navigator.clipboard.writeText(refinedCopy)}
                      className="mt-4 text-xs text-gray-500 hover:text-white underline"
                    >
                      복사하기
                    </button>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'social' && (
              <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-6">인스타그램 피드 동기화</h3>
                <p className="text-gray-500 mb-8 text-sm">
                  Instagram Graph API를 연결하거나, 최신 포스트 URL을 입력하여 웹사이트 피드를 수동으로 업데이트할 수 있습니다.
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-black border border-white/5 rounded-xl flex items-center justify-between">
                    <div>
                      <p className="font-bold">@gods_kingdom_school</p>
                      <p className="text-xs text-gray-600">현재 연결된 계정</p>
                    </div>
                    <button className="text-xs bg-white/5 px-4 py-2 rounded-full hover:bg-white/10 transition-all">연결 해제</button>
                  </div>
                  
                  <div className="pt-4">
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">포스트 수동 추가 (URL)</label>
                    <div className="flex space-x-2">
                      <input type="text" placeholder="https://www.instagram.com/p/..." className="flex-1 bg-black border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00FF00]" />
                      <button className="px-6 py-3 bg-white/5 rounded-xl font-bold hover:bg-white/10 transition-all">추가</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'inquiries' && (
              <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-6">최근 문의 내역</h3>
                <div className="space-y-4">
                  {[
                    { name: '김철수', date: '2024.03.15', age: '7세', msg: '입학 설명회 일정이 궁금합니다.' },
                    { name: '이영희', date: '2024.03.14', age: '초1', msg: '셔틀버스 운행 노선을 알 수 있을까요?' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 border-b border-white/5 last:border-0">
                      <div>
                        <span className="font-bold mr-3">{item.name}</span>
                        <span className="text-xs text-gray-600 mr-3">{item.date}</span>
                        <span className="text-xs bg-white/5 px-2 py-1 rounded text-gray-400">{item.age}</span>
                      </div>
                      <button className="text-xs text-[#00FF00] hover:underline">상세보기</button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminView;
