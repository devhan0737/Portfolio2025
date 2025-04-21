export const PROJECTARR = [
  {
    id: 1,
    title: "Portfolio",
    preview: "React 반응형으로 제작된 포트폴리오 사이트",
    subtitle: `<span>신입 FE 개발자 한상진</span> 되기 위해 만든 포트폴리오 사이트입니다.<br/>
    React를 활용하여 만든 반응형 웹사이트입니다.<br/>
    반응형과 UIUX 모두 직접 디자인했습니다.`,
    period: "2025.02~2025.02",
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
    preview: "React를 사용한 반응형 웹사이트",
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
    trouble: `React-Hook-Form과 Zod연결 그리고 유효성 검사 에러.`,
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
    trouble: ``,
  },
];
