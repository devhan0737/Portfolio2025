export const PROJECTARR = [
  {
    id: 1,
    title: "Portfolio",
    preview: "React를 활용해 반응형으로 제작된 포트폴리오 사이트",
    subtitle: `<span>신입 FE 개발자 한상진</span> 되기 위해 만든 포트폴리오 사이트입니다.<br/>
    React를 활용하여 만든 반응형 웹사이트입니다.<br/>
    반응형과 UIUX 모두 직접 디자인했습니다.`,
    period: "2025.02~2025.02",
    main_function: "반응형 웹페이지, 회원가입 및 로그인 유효성 검사",
    main_technoloy: [
      "React",
      "Styled-components",
      "Zod",
      "Github",
      "Html",
      "Css",
      "Vite",
      "JavaScript",
    ],
    contribution: "100%",
    github: "https://github.com/devhan0737/pillgram",
    url: "https://github.com/devhan0737/pillgram",
    trouble: `문제 : 깃허브 호스팅시 발생하는 404 에러와 이미지 경로 처리 문제. <br/>
    원인 : 호스팅시에 라우터를 사용하는 경우 a태그의 링크로 페이지 이동시 404 에러가 발생한다. <br/>
    해결 방법 : a 링크 대신 Link 를 사용하여 페이지를 이동하는 경우 정상적으로 작동한다. <br/>
    또한 호스팅시에 발생하는 이미지 에러는 public 파일에 이미지를 넣지 말고 theme.js 파일에 임포트하여 사용하는것을 추천한다. <br/>
    public 파일에 이미지를 넣고 사용시 경로문제로 이미지 로딩이 안될수 있다.`,
  },

  {
    id: 2,
    title: "Pillgram",
    preview:
      "React를 활용한 반응형 웹사이트로 모바일 웹사이트인 필그램을 클론코딩한 사이트",
    subtitle: `Pillgram은 바쁜 현대사회에서 영양제를 손쉽게 구독할 수 있도록 도와드리는 서비스입니다.<br/>
      기존의 모바일 서비스를 <span>반응형 웹</span> 환경으로 재구현한 프로젝트입니다.<br/>
      전체 서비스 내용은 그대로 유지하였습니다.<br/>
      직접 웹 디자인과 반응형 UI를 설계하여 다양한 디바이스에서도 편리하게 이용하실 수 있도록 하였습니다.<br/>
      주요 페이지로는 메인 페이지, <span>로그인 및 회원가입</span> 페이지가 있습니다.<br/>
      로그인과 회원가입 시 <span>유효성 검사</span>를 적용하여 안전하고 간편한 사용자 관리를 지원해 드립니다.`,
    period: "24.01 ~ 24.02",
    main_function: "반응형 웹페이지, 회원가입 및 로그인 유효성 검사",
    main_technoloy: [
      "React",
      "Styled-components",
      "Zod",
      "Swiper",
      "Github",
      "Html",
      "Css",
      "Vite",
      "JavaScript",
    ],
    contribution: "100%",
    github: "https://github.com/devhan0737/pillgram",
    url: "https://devhan0737.github.io/pillgram/",
    trouble: `문제 : Swiper의 슬라이드 문제점.<br/>
    원인 : 4개의 슬라이드로 Loop를 사용하여 8개의 슬라이드 처럼 사용하려 했으나<br/> 스와이퍼에는 최소 슬라이드 개수가 필요했다.<br/>
    해결 방법 : SlidePerview의 개수가 4라면 최소 8개의 슬라이드가 필요하기 때문에 슬라이드 개수를 늘려주면 된다.<br/>
    또한 스와이퍼는 반응형이 아닌 적응형이다.<br/> 반응형처럼 보이게 하려면 슬라이드의 비율을 일정하게 지정하거나. BreakPoint를 더 자세히 나눠 설정해야 한다. `,
  },

  {
    id: 3,
    title: "MovieSite",
    preview: "Open Api인 TMDB를 활용한 영화 소개 사이트",
    subtitle: `React를 활용해 <span>Open API인 TMDB</span>를 사용해 만든 반응형 웹 사이트입니다.<br/>
    API에 대한 이해와 경험을 위해 만든 토이 프로젝트입니다.<br/>
    Open API를 관리하기 위해 <span>React-Query</span>와<span> Axios</span>를 사용하였습니다.<br/>
    또한 SNS 로그인을 위해 <span>Google API</span>와 <span>Kakao API</span>를 사용하였습니다`,
    period: "24.03 ~ 24.03",
    main_function: "Open Api 경험과 React-Query 라이브러리 활용하기",
    main_technoloy: [
      "React",
      "Styled-components",
      "Zod",
      "Swiper",
      "Github",
      "Html",
      "Css",
      "Vite",
      "JavaScript",
    ],
    contribution: "100%",
    github: "https://github.com/devhan0737/MovieSite",
    url: "https://devhan0737.github.io/MovieSite/",
    trouble: `문제 : 구글 SNS 로그인에서 모바일 버젼은 로그인이 안되는 에러<br/>
    원인 : PC버젼에서는 팝업으로 인한 로그인이 가능하지만 모바일에서는 팝업이 뜨지 않아 발생.<br/>
    해결 방법 : 로그인 팝업을 띄우지 않고 구글의 로그인 페이지로 이동하는 방향으로 수정`,
  },

  {
    id: 4,
    title: "Loop",
    preview: "TypeSciprt를 활용한 모바일 웹사이트",
    subtitle: `TypeScirpt를 활용한 모바일 웹사이트 입니다.<br/>
    `,
    period: "24.03 ~ 24.03",
    main_function:
      "Supabase와 실시간 통신 데이터 테이블 제작과 백엔드와의 통신",
    main_technoloy: [
      "React",
      "Styled-components",
      "Zod",
      "Swiper",
      "Github",
      "Html",
      "Css",
      "Vite",
      "TypeScript",
    ],
    contribution: "100%",
    github: "https://github.com/devhan0737/MovieSite",
    url: "https://devhan0737.github.io/MovieSite/",
    trouble: `문제 : `,
  },

  {
    id: 5,
    title: "WipiCake",
    preview: "처음으로 만들게 된 팀 프로젝트입니다.",
    subtitle: `첫 팀 프로젝트로 만들게 된 사이트 입니다.<br/>
    백엔드와의 협업 경험을 쌓기 위해 시작한 팀 프로젝트로 아직 현재 진행형인 프로젝트입니다.`,
    period: "24.03 ~ 24.03",
    main_function: "Open Api 경험과 React-Query 라이브러리 활용하기",
    main_technoloy: [
      "React",
      "Styled-components",
      "Zod",
      "Swiper",
      "Github",
      "Html",
      "Css",
      "Vite",
      "JavaScript",
    ],
    contribution: "100%",
    github: "https://github.com/devhan0737/MovieSite",
    url: "https://devhan0737.github.io/MovieSite/",
    trouble: `문제 : 아이디 비밀번호 찾기 페이지의 폼데이터 중복 문제<br/>
    원인 : 동일한 구조의 디자인에서 하나의 form 으로 4개의 api 기능을 연결하여 form 데이터를 제출하는 방식이 문제<br/>
    해결 방법 : 각 기능에 맞게 form을 분리하여 각각의 기능을 사용하는 방식으로 수정`,
  },
  {
    id: 6,
    title: "Be-our",
    preview: "타입스크립트와 tailwindCSS를 활용한 공간대여 서비스입니다.",
    subtitle: `첫 팀 프로젝트로 만들게 된 사이트 입니다.<br/>
    백엔드와의 협업 경험을 쌓기 위해 시작한 팀 프로젝트로 아직 현재 진행형인 프로젝트입니다.`,
    period: "24.03 ~ 24.03",
    main_function: "Open Api 경험과 React-Query 라이브러리 활용하기",
    main_technoloy: [
      "React",
      "Styled-components",
      "Zod",
      "Swiper",
      "Github",
      "Html",
      "Css",
      "Vite",
      "JavaScript",
    ],
    contribution: "100%",
    github: "https://github.com/devhan0737/MovieSite",
    url: "https://devhan0737.github.io/MovieSite/",
    trouble: ``,
  },
];
