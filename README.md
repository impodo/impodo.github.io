# impodo.github.io

🎨 **impodo.github.io**는 [impodo.github.io](https://impodo.github.io/)를 통해 공개된 개인 포트폴리오 웹사이트입니다.  
간결하고 깔끔한 레이아웃으로 나 자신을 소개하고, 프로젝트와 기술 스택을 정리한 정적 웹페이지입니다.

---

## 📌 주요 내용

- 메인
  1. 슬라이드 애니메이션(js/13~36, js/62~67)
     - 섹션 요소(section)가 화면에 들어올 때 애니메이션 적용
     - opacity와 translateY로 슬라이드 인 효과
     - .skills 섹션이 보이면 animateSkillBars()도 함께 실행
- 기술 스택
  1. 숙련도 애니메이션(js/1~11)
     - .skill-progress 클래스가 붙은 요소들을 찾아 data-skill 속성에 따라 너비를 설정
     - - setTimeout으로 약간의 딜레이 효과
- 프로젝트
  1. 모달창 여닫기(js/38~60)
     - 모달을 열고 닫는 기능
     - 바깥 영역을 클릭하면 모달 닫힘
     - 열릴 때는 body 스크롤 잠그고, 닫으면 다시 스크롤 가능
- 희망직무
- 연락처  
- 한/영 번역
  1. 다국어 지원(js/69~166)
     - translations 객체에 모든 텍스트를 저장 (한국어/영어)
     - toggleLanguage()로 언어 전환하고 updateLanguage()로 DOM 요소들 텍스트 갱신
     - 언어 버튼 텍스트는 현재 언어에 따라 'EN' 또는 'KO'로 바뀜
- 다크모드
  1. 다크모드 전환(js/168~181)
     - body에 .dark-mode 클래스 추가/제거
     - 아이콘도 sun/moon 아이콘으로 전환
     - 상태는 localStorage에 저장해서 다음 접속 때 유지됨
- 로딩화면
  1. 로딩 화면(js/183~192)
     - 2초 후 로딩 화면의 opacity를 0으로 만들고 display: none 처리
     - UX 개선용 기본 로딩 연출
- 페이지 초기화
  1. 초기 진입 시 구성요소 세팅(js/194~214)
     - 모든 섹션에 등장 애니메이션 적용 (createObserver)
     - .hero는 항상 보이게 opacity/transform 설정
     - 다크모드, 언어 전환 버튼에 이벤트리스너 등록
     - localStorage를 통해 이전 다크모드 상태 복원
     - hideLoadingScreen()으로 로딩 스크린 제거
- 스타일
  1. 외부 CSS 파일 링크(html/8)
     - 다양한 벡터 아이콘을 제공하는 라이브러리 Font Awesome 6.0.0 버전의 아이콘을 사용 가능하게 만듭니다.
