// 포트폴리오 콘텐츠 (PDF 내용을 웹용으로 간략화)
const PROFILE = {
  name: '정두홍',
  role: 'BACKEND DEVELOPER',
  email: 'enghddd@naver.com',
  github: 'https://github.com/jung18',
  photo: 'assets/images/profile.png',
  about: [
    '문제를 해결하고 시스템을 개선하는 과정에서 가장 큰 보람을 느낍니다.',
    '발생한 이슈는 원인을 끝까지 추적해 근본적으로 해결하려 노력하며, 사용자가 더 편리하게 시스템을 이용할 수 있도록 기능을 개선하고자 합니다.',
    '꾸준히 배우고 적용하며, 더 안정적이고 편리한 서비스를 만들어가는 개발자가 되겠습니다.'
  ],
  skills: [
    { group: 'Backend', items: ['Java', 'SpringBoot', 'Python', 'Docker', 'RDBMS', 'Elasticsearch'] },
    { group: 'Version Control', items: ['Git', 'Github', 'GitLab'] },
    { group: 'Cooperation', items: ['Notion', 'Jira', 'Confluence'] }
  ]
};

const IMG = 'assets/images/';

const PROJECTS = [
  {
    id: 'ajangajang',
    title: '아장아장',
    period: '2024.07.08 - 2024.08.16',
    periodLong: '2024.07.08 ~ 2024.08.16',
    summary: '육아용품 중고거래 서비스',
    team: '백엔드 3명, 프론트엔드 2명  (총 5명)',
    target: '고가의 육아용품 구매에 부담을 느끼는 부모 및 예비부모',
    github: 'https://github.com/jung18/AjangAjang',
    shots: ['ajangajang-screen-1.png', 'ajangajang-screen-2.png'],
    roles: [
      '전국 법정동 데이터베이스 구축',
      '판매글 API 설계',
      '검색 및 카테고리 필터링 구현',
      '사용자 위치기반 거래장소 추천기능 구현'
    ],
    stack: ['FastAPI', 'Springboot', 'SpringSecurity', 'Elasticsearch', 'React', 'PWA', 'MySQL', 'MongoDB', 'Redis', 'AWS EC2', 'AWS S3', 'Jenkins', 'Docker', 'Nginx'],
    architecture: 'ajangajang-architecture.png',
    details: [
      {
        img: 'ajangajang-search-flow.png',
        title: '검색 기능 고도화 및 조회 성능 최적화',
        groups: [
          { h: '검색 사용자 경험(UX) 개선', sub: ['네이버 검색어 제안 API 연동으로 오타 교정 및 원래 검색어 재조회', '카테고리별 필터링으로 정밀한 검색 결과 제공'] },
          { h: 'Elasticsearch 기반 검색 아키텍처 설계', sub: ['지역·키워드 필터링 등 복잡한 동적 쿼리를 Elasticsearch가 전담', 'Nori 형태소 분석기로 한국어 검색 정확도 향상'] },
          { h: '시스템 부하 분산 및 쿼리 효율화', sub: ['Elasticsearch에서 게시글 ID 목록만 추출, SQL은 단순 PK 조회로 이원화', 'RDB의 고비용 Join·Full-scan 연산 최소화'] }
        ]
      },
      {
        img: 'ajangajang-location-flow.png',
        title: '사용자 위치 기반 안전 거래 장소 추천 시스템',
        groups: [
          { h: '사용자 맞춤형 추천 로직 구현', sub: ['판매자·구매자 위치를 분석해 장소 추천', '반경 최대 10km 내 은행, 경찰서, 공공기관 등 안전한 장소를 우선 제안'] },
          { h: '카카오 로컬 및 지도 API 활용', sub: ['Kakao Local API로 카테고리별 장소를 실시간 호출·필터링', '카카오 지도에 사용자 위치와 추천 장소를 마커로 시각화'] },
          { h: '거래 편의를 위한 경로 상세 정보 제공', sub: ['선택 장소와 각 사용자 간 직선거리 및 자동차 기준 소요시간 산출', '길찾기 경로 데이터를 시각화해 접근성 제공'] }
        ]
      }
    ]
  },
  {
    id: 'triplet',
    title: 'Triplet',
    period: '2024.08.19 - 2024.10.11',
    periodLong: '2024.08.19 ~ 2024.10.11',
    summary: '여행경비 관리 및 공유 서비스',
    team: '백엔드 3명, 프론트엔드 2명  (총 5명)',
    target: '여행 경비의 설정 및 관리에 어려움을 느끼는 사람들',
    github: 'https://github.com/jung18/Triplet',
    shots: ['triplet-screen-1.png', 'triplet-screen-2.png'],
    roles: [
      'Spring Security 인증, 인가 (JWT, OAuth2)',
      '송금/환전/거래내역 API 설계',
      '문자 인증 기능 구현',
      '전역 예외처리 구현'
    ],
    stack: ['Springboot', 'Spring Security', 'Elasticsearch', 'React', 'PWA', 'MySQL', 'Redis', 'AWS EC2', 'AWS S3', 'Jenkins', 'Docker', 'Nginx'],
    architecture: 'triplet-architecture.png',
    details: [
      {
        img: 'triplet-oauth-flow.png',
        title: '인증 시스템 통합 및 소셜 로그인 최적화',
        groups: [
          { h: '통합 인증 아키텍처 구축', sub: ['자체 계정(ID/PW) 로그인과 OAuth 2.0 소셜 로그인을 단일 인증 체계로 통합'] },
          { h: '백엔드 중심의 소셜 인증 프로세스 설계', sub: ['인가 코드 수신, 토큰 교환, 사용자 정보 획득, JWT 발행까지 모든 리디렉션을 백엔드에서 처리', '프론트엔드 인증 로직 의존도를 낮춰 클라이언트 복잡성 감소, 보안성 강화'] }
        ]
      },
      {
        img: 'triplet-sms-flow.png',
        title: '휴대폰 본인 인증 및 데이터 관리 최적화',
        groups: [
          { h: '외부 SMS API 연동 인증 시스템', sub: ['CoolSMS API로 회원가입 시 실시간 휴대폰 본인 인증 구축', '6자리 난수 인증 코드 자동 생성 및 SMS 발송 로직 구현'] },
          { h: 'Redis를 활용한 인증 상태 관리', sub: ['인증 코드와 전화번호를 Redis에 임시 저장해 빠른 읽기/쓰기 확보', 'TTL 설정으로 일정 시간 후 자동 삭제, 보안과 저장 공간 효율 확보'] }
        ]
      }
    ]
  },
  {
    id: 'daejeon-wassu',
    title: '대전왔슈',
    period: '2024.10.14 - 2024.11.19',
    periodLong: '2024.10.14 ~ 2024.11.19',
    summary: '대전 여행 서비스',
    team: '백엔드 1명, 프론트엔드 1명  (총 2명)',
    target: '대전에 여행오는 여행객 및 대전에서 놀거리를 찾는 사람들',
    github: 'https://github.com/jung18/daejeon-wassu',
    shots: ['daejeon-wassu-screen-1.png', 'daejeon-wassu-screen-2.png'],
    roles: [
      '인프라 구축 (AWS, CI/CD, Docker)',
      '관광지 데이터 수집',
      'SSE 기반 부루마블 기능 구현',
      '관광지 리뷰 API 설계'
    ],
    stack: ['Springboot', 'Spring Security', 'FastAPI', 'Elasticsearch', 'React Native', 'Next.js', 'PostgreSQL', 'Redis', 'AWS EC2', 'AWS S3', 'Jenkins', 'Docker', 'Nginx'],
    architecture: 'daejeon-wassu-architecture.png',
    details: [
      {
        img: 'daejeon-wassu-architecture-cicd.png',
        title: 'CI/CD 파이프라인 구축 및 인프라 최적화',
        groups: [
          { h: '지속적 통합 및 배포(CI/CD) 자동화', sub: ['Jenkins로 코드 push부터 빌드, 테스트, 배포까지 자동화', '배포 자동화로 개발 생산성 향상, 배포 프로세스 일관성 확보'] },
          { h: 'Docker Compose 기반 서비스 컨테이너 관리', sub: ['각 서비스를 Docker Compose로 그룹화해 통합 관리, 실행 환경 표준화', '환경 변수·설정 파일 관리를 단일화해 인프라 구성 편의성과 확장성 강화'] },
          { h: 'Nginx를 활용한 라우팅 설계', sub: ['리버스 프록시로 백엔드 서버 보안성 강화', '경로 기반 라우팅으로 다중 서비스 환경의 요청을 체계적으로 관리'] }
        ]
      },
      {
        img: 'daejeon-wassu-sse-flow.png',
        title: 'SSE 기반 실시간 데이터 동기화 시스템 구축',
        groups: [
          { h: 'SseEmitter를 활용한 실시간 단방향 통신', sub: ['SSE(Server-Sent Events)로 새로고침 없이 서버 변경사항을 클라이언트에 즉시 반영', '게임 내 데이터 변화 시 해당 방의 모든 사용자에게 실시간 반영'] },
          { h: '효율적인 커넥션 관리 및 안정성 확보', sub: ['ConcurrentHashMap으로 방 ID·참가자 ID별 Emitter를 매핑해 멀티스레드 환경에서도 안전하게 접근', '스케줄러가 주기적으로 Ping을 전송해 유휴 연결 타임아웃 방지'] }
        ]
      }
    ]
  },
  {
    id: 'shortsking',
    title: 'Shortsking',
    period: '2026.02.09 -',
    periodLong: '2026.02.09 ~ 개발 중',
    summary: '유튜브 급상승 쇼츠 분석 서비스',
    team: '백엔드 1명, 데이터 분석 1명 (총 2명)',
    target: '인기 챌린지 영상을 주기적으로 업로드하는 크리에이터',
    github: null,
    site: 'https://shortsking.duckdns.org',
    shots: ['shortsking-screen.png'],
    wide: true,
    roles: [
      '인프라 구축 (AWS, Docker)',
      '백엔드 API 서버 개발',
      '화면 설계 및 프론트엔드 개발 (바이브 코딩 활용)',
      '쇼츠 검색 및 필터링 구현'
    ],
    stack: ['Springboot', 'Spring Security', 'Elasticsearch', 'React', 'Python', 'AWS EC2', 'AWS RDS(MariaDB)', 'AWS Cognito', 'AWS DynamoDB', 'AWS Lambda', 'Docker', 'Nginx'],
    architecture: 'shortsking-architecture.png',
    details: []
  }
];
