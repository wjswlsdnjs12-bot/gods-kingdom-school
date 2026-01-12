
import React from 'react';

const SocialFeed: React.FC = () => {
  const INSTAGRAM_URL = "https://www.instagram.com/gods_kingdom_school/";
  const HANDLE = "@gods_kingdom_school";

  // Mock data representing latest posts
  const posts = [
    { id: 1, type: 'image', url: 'https://picsum.photos/seed/school1/600/600', likes: '124', comments: '12' },
    { id: 2, type: 'video', url: 'https://picsum.photos/seed/school2/600/600', likes: '89', comments: '5' },
    { id: 3, type: 'image', url: 'https://picsum.photos/seed/school3/600/600', likes: '210', comments: '18' },
    { id: 4, type: 'image', url: 'https://picsum.photos/seed/school4/600/600', likes: '156', comments: '9' },
    { id: 5, type: 'image', url: 'https://picsum.photos/seed/school5/600/600', likes: '92', comments: '4' },
    { id: 6, type: 'video', url: 'https://picsum.photos/seed/school6/600/600', likes: '312', comments: '24' },
    { id: 7, type: 'image', url: 'https://picsum.photos/seed/school7/600/600', likes: '178', comments: '11' },
    { id: 8, type: 'image', url: 'https://picsum.photos/seed/school8/600/600', likes: '245', comments: '30' },
  ];

  return (
    <section id="community" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-left">
            <h2 className="text-sm font-bold text-[#00FF00] tracking-widest uppercase mb-4">Social Media</h2>
            <h3 className="text-4xl font-black mb-2 tracking-tighter">우리들의 소중한 기록</h3>
            <p className="text-gray-500 font-medium">인스타그램 <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="text-white hover:text-[#00FF00] transition-colors">{HANDLE}</a>에서 더 많은 소식을 확인하세요.</p>
          </div>
          <a 
            href={INSTAGRAM_URL} 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center space-x-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all text-sm font-bold"
          >
            <span>Instagram 바로가기</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {posts.map((post) => (
            <a 
              key={post.id} 
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="relative aspect-square bg-gray-900 rounded-2xl overflow-hidden group cursor-pointer border border-white/5"
            >
              <img 
                src={post.url} 
                alt={`School update ${post.id}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-50"
              />
              
              {/* Overlay with Meta Info */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex space-x-6 text-white font-bold">
                  <div className="flex items-center space-x-1">
                    <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 20 20">
                      <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                    </svg>
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
                    </svg>
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>

              {/* Video Indicator */}
              {post.type === 'video' && (
                <div className="absolute top-4 right-4 text-white drop-shadow-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-4-3v6l4-3z" />
                  </svg>
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
