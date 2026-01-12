
import React, { useState } from 'react';

const AdmissionForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const FORMSPREE_URL = "https://formspree.io/f/xvzzozvo";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        setError(data.error || "메시지 전송에 실패했습니다. 잠시 후 다시 시도해 주세요.");
      }
    } catch (err) {
      setError("네트워크 오류가 발생했습니다. 인터넷 연결을 확인해 주세요.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="admission" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-xl mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-[#00FF00]/10 border border-[#00FF00] rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-[#00FF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-3xl font-black mb-4">상담 신청이 완료되었습니다</h3>
          <p className="text-gray-500 mb-8">학교 담당자가 확인 후 24시간 이내에 연락드리겠습니다. 소중한 관심에 감사드립니다.</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-[#00FF00] underline font-bold"
          >
            다시 신청하기
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="admission" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-sm font-bold text-[#00FF00] tracking-widest uppercase mb-4">Admission</h2>
          <h3 className="text-4xl font-black mb-8">함께 꿈을 키워갈 <br /> 가족을 기다립니다</h3>
          <p className="text-gray-400 mb-8 text-lg">
            학교 생활, 커리큘럼, 등록 절차 등 궁금하신 모든 사항을 친절히 상담해 드립니다. 
            아래 폼을 작성해 주시면 담당자가 연락드리겠습니다.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-gray-500">
              <div className="p-3 bg-white/5 rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span>02-1234-5678</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-500">
              <div className="p-3 bg-white/5 rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span>contact@kingdomschool.org</span>
            </div>
          </div>
        </div>

        <div className="bg-black border border-white/10 rounded-3xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">신청자 성함</label>
                <input 
                  required 
                  type="text" 
                  name="name"
                  placeholder="홍길동" 
                  className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00FF00] transition-colors" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">연락처</label>
                <input 
                  required 
                  type="tel" 
                  name="phone"
                  placeholder="010-0000-0000" 
                  className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00FF00] transition-colors" 
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">자녀 나이 / 학년</label>
              <input 
                required 
                type="text" 
                name="child_info"
                placeholder="예: 7세 / 초등 1학년" 
                className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00FF00] transition-colors" 
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">문의 사항</label>
              <textarea 
                rows={4} 
                name="message"
                placeholder="문의하실 내용을 남겨주세요." 
                className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00FF00] transition-colors resize-none"
              ></textarea>
            </div>
            
            {error && (
              <p className="text-red-500 text-sm font-medium">{error}</p>
            )}

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-4 bg-[#00FF00] text-black font-black uppercase tracking-widest rounded-xl hover:bg-emerald-400 glow-green transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : "상담 신청 보내기"}
            </button>
          </form>
          <p className="text-[10px] text-gray-600 mt-4 text-center uppercase tracking-widest">
            Powered by Formspree
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdmissionForm;
