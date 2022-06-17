---
sidebar_position: 1
title: 시작하기
---

도큐사우루스는 페이스북에서 만든 문서 사이트입니다. 모든 사용자들이 사용 할 수 있습니다.

도큐사우루스는 정적 사이트 생성 도구로 클라이언트에서 빠른 탐색 기능을 지원하고 사이트를 좀 더 인터랙티브하게 만들 수 있게 React의 기능을 최대한 끌어올린 단일 페이지 애플리케이션을 만들 수 있습니다.

## 준비

- Node.js가 있는데 버전이 낮고 지울 수 없으면 [NVM](https://github.com/nvm-sh/nvm)을 사용해보시기 바랍니다.
- [Node.js](https://nodejs.org/en/download/)를 16.14이상 버전을 설치해야 합니다.
- Node.js 설치 이후 [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) 도 같이 설치합니다.
- [Github](https://github.com/) 계정(id를 `helloworld`라고 가정합니다.)
- 코드 편집기 [VSCode](https://code.visualstudio.com/)

### Node.js 설치

1. [Node.js](https://nodejs.org/en/download/) 사이트에 접속합니다.

2. LTS 버전으로 OS에 맞게 클릭하여 다운로드하여 설치 합니다.

3. 설치 후 터미널에서 `node -v` 를 입력 했을때 버전이 16.14이상이 나오는지 확인합니다.

### yarn 설치

1. Node.js가 설치된 상태에서 터미널을 실행하고 다음과 같이 입력합니다.
```
npm install --global yarn
```

### Github 가입 및 Repository 생성

1. (계정이 없는 경우) [Github](https://github.com/)에서 새 계정을 생성합니다.
1. 계정의 우측 상단의 프로필을 클릭시 나타나는 메뉴에서 `Your repositories`를 선택합니다.

    ![메뉴 이미지](/img/tutorial/docusaurus/github-menu.png)
1. `Create a new repository`를 클릭하고 Repository name을 `{id}.github.io`로 입력합니다.

    ![저장소 추가](/img/tutorial/docusaurus/github-create-repo.png)
1. `Add a README file`도 체크하고 `Create repository`를 클릭하여 생성합니다.

## 설치

도큐사우루스의 최신 프로젝트를 `helloworld.github.io`라는 이름으로 폴더를 생하고 `classic` 템플릿을 포함하여 설치합니다. 터미널에서 다음과 같이 입력합니다.

```
npx create-docusaurus@latest helloworld.github.io classic --typescript
```

`--typescript`는 js가 아닌 typescript 언어로 만드는 옵션입니다.

### 프로젝트 구조

classic 템플릿을 선택하고 사이트 이름을 `helloworld.github.io`로 설정했다면 `helloworld.github.io/` 디렉터리 밑에 아래와 같이 파일이 생성된 것을 확인 할 수 있습니다.
```
helloworld.github.io
├── blog
│   ├── 2019-05-28-hola.md
│   ├── 2019-05-29-hello-world.md
│   └── 2020-05-30-welcome.md
├── docs
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
│   └── mdx.md
├── src
│   ├── css
│   │   └── custom.css
│   └── pages
│       ├── styles.module.css
│       └── index.js
├── static
│   └── img
├── docusaurus.config.js
├── package.json
├── README.md
├── sidebars.js
└── yarn.lock
```

### 프로젝트 구조 요약

- `/blog/` - 블로그에서 사용하는 마크다운 파일 디렉터리입니다. 블로그 플러그인을 비활성화한 경우 디렉토리를 삭제하거나 path 옵션을 설정한 후 이름을 변경할 수 있습니다. 좀 더 자세한 내용은 blog 가이드에서 확인할 수 있습니다.
- `/docs/` - 문서에서 사용하는 마크다운 파일 디렉터리입니다. sidebars.js에서 사이드바에 표시되는 문서 순서를 변경할 수 있습니다. 문서 플러그인을 비활성화한 경우 디렉토리를 삭제하거나 path 옵션을 설정한 후 이름을 변경할 수 있습니다. 좀 더 자세한 내용은 docs 가이드에서 확인할 수 있습니다.
- `/src/` - 페이지나 리액트 커스텀 컴포넌트처럼 문서 마크다운 파일이 아닌 파일 디렉터리입니다. 문서가 아닌 파일들을 꼭 여기에 가져다 놓아야 하는 건 아닙니다. 하지만 한곳에 모아놓으면 오류를 체크하거나 추가 작업이 필요할 때 좀 더 편하게 처리할 수 있습니다.
- `/src/pages` - 웹사이트 페이지로 변환할 JSX/TSX/MDX 파일을 모아놓는 디렉터리입니다. 좀 더 자세한 내용은 pages 가이드에서 확인할 수 있습니다.
/static/ - 정적 파일 디렉터리입니다. 이곳에 있는 파일은 build 디렉토리의 루트 저장소로 복사됩니다.
- `/docusaurus.config.js` - 사이트 설정이 저장된 설정 파일입니다. 도큐사우루스 v1에서 사용했던 siteConfig.js 파일과 같은 역할입니다.
- `/package.json` - 도큐사우루스 웹사이트는 리액트 앱입니다. 앱 안에서 원하는 npm 패키지를 설치하고 사용할 수 있습니다.
- `/sidebars.js` - 사이드바에 표시되는 문서의 순서를 조정할 때 사용합니다.

### 개발 서버 실행하기

편집한 내용을 미리보고 싶다면 로컬 개발 서버를 실행해야 합니다. 로컬 개발 서버를 통해 웹 사이트를 확인하고 마지막으로 변경된 내용을 볼 수 있습니다.

```
cd helloworld.github.io
yarn start
```

### 프로젝트 깃허브 연결

무료 호스팅을 이용하려면 우선 깃허브에 저장소에 파일을 올려야 한다. 터미널은 프로젝트 폴더로 이동한 후 다음과 같이 입력한다. 또는 VSCode에서 프로젝트폴더를 열어서 작업 중이라면 <code>ctrl + `</code>키를 눌러 터미널을 열고 입력한다.

```
git init
```

그리고 깃허브의 repository를 연결한다. 깃허브에서 생성한 `{id}.github.io` repository 페이지로 이동해서 `Code` 버튼을 누르면 클론할 URL이 나타난다. HTTPS를 복사해서 터미널 창에 다음과 같이 입력한다.

클론 URL 복사:

![클론 URL 복사](/img/tutorial/docusaurus/github-clone.png)

```
git remote add origin {repository url}
```

이렇게 설정 된 후 소스 커밋은 다음과 같은 방법이 있다.

#### VSCode를 통한 Git 커밋

좌측 메뉴에서 소스 제어를 선택하고 소스 제어에서 메시지를 작성 후 체크 아이콘을 클릭하면 커밋이 된다.

![VSCode 커밋](/img/tutorial/docusaurus/github-vscode-git.png)

### 참고 

https://docusaurus.io/ko/docs/installation


