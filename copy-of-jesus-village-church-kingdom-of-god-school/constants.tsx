
import { NavItem, Program } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '학교 소개', href: '#about' },
  { label: '커리큘럼', href: '#curriculum' },
  { label: '커뮤니티', href: '#community' },
  { label: '입학 안내', href: '#admission' },
];

export const PROGRAMS: Program[] = [
  {
    title: '성경적 세계관 교육',
    description: '하나님의 말씀을 통해 세상을 바라보는 눈을 기르는 핵심 교육 과정입니다.',
    category: '신앙 교육',
    imageUrl: 'https://picsum.photos/seed/bible/600/400'
  },
  {
    title: '창의적 예술 활동',
    description: '달란트를 발견하고 하나님을 찬양하는 다양한 예술적 표현을 배웁니다.',
    category: '예술/문화',
    imageUrl: 'https://picsum.photos/seed/art/600/400'
  },
  {
    title: '글로벌 리더십 캠프',
    description: '세상을 섬기는 지도자로 성장하기 위한 협동심과 리더십을 훈련합니다.',
    category: '리더십',
    imageUrl: 'https://picsum.photos/seed/leadership/600/400'
  },
  {
    title: '자연과 함께하는 생태 학습',
    description: '하나님이 만드신 창조 세계의 아름다움을 체험하고 돌보는 법을 배웁니다.',
    category: '자연/생태',
    imageUrl: 'https://picsum.photos/seed/nature/600/400'
  }
];
