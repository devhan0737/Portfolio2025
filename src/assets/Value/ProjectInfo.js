export const PROJECTARR = [
  {
    id: 1,
    name: "Pillgram",
    subtitle: `Pillgram은 바쁜 현대사회에서 영양제를 손쉽게 구독할 수 있도록 도와드리는 서비스입니다. 
    기존의 모바일 서비스를 웹 환경으로 재구현한 프로젝트입니다.
    전체 서비스 내용은 그대로 유지하였습니다.
    직접 웹 디자인과 반응형 UI를 설계하여 다양한 디바이스에서도 편리하게 이용하실 수 있도록 하였습니다.
    주요 페이지로는 메인 페이지, 로그인 및 회원가입 페이지가 있습니다.
    로그인과 회원가입 시 유효성 검사를 적용하여 안전하고 간편한 사용자 관리를 지원해 드립니다.`,
    period: "24.01 ~ 24.02",
    main_function: "반응형 웹페이지, 회원가입 및 로그인 유효성 검사",
    main_technoloy: "React, Styled-components, React-Hook-Form, Zod",
    contribution: "100%",
    github: "https://github.com/devhan0737/pillgram",
    url: "https://github.com/devhan0737/pillgram",
    troble: "쌸라쌸라",
  },
];

export const project = PROJECTARR[0];

export const INFOLIST = [
  { label: "기간", detail: project.period },
  { label: "주요기능", detail: project.main_function },
  { label: "주요기술", detail: project.main_technoloy },
  { label: "기여도", detail: project.contribution },
  { label: "깃허브", detail: "깃허브", link: project.github },
  { label: "URL", detail: "깃허브", link: project.url },
];
