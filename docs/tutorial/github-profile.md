---
sidebar_position: 2
title: 깃허브 프로필 꾸미기
description: 깃허브 프로필 꾸미기
keywords: [github profile, 깃허브 프로필 꾸미기]
---

계정의 메인 화면을 다음과 같이 꾸며볼 것이다:

![preview](/img/tutorial/github-pages/preview.gif)

## 깃허브 프로필 README 생성하기

깃허브의 프로필을 꾸미려면 계정의 repositories에 자식의 계정과 동일한 저장소가 있어야 한다. 아래 이미지는 이미 만들어진 상태라고 메시지가 출력되는데 고양이 아이콘의 설명으로는 자신의 아이디로 만드는 저장소는 readme.md를 추가해서 깃허브 프로필을 만들수 있는 특별한 저장소라고 한다. 저장소 시작할때 반드시 공개로 설정하고 README를 초기화해야 한다고 한다.

![create repository image](/img/tutorial/github-pages/create-repository.png)

생성된 저장소는 다음과 같이 표시된다.

![created repository](/img/tutorial/github-pages/created-repository.png)

저장소를 선택해서 보면 README.md 파일이 하나 있을 것이고, 그것을 연필 버튼 클릭해서 편집을 누르면 꾸미기를 시작할 수 있다.

![edit README](/img/tutorial/github-pages/edit-readme.png)

md확장자의 파일은 마크다운 또는 HTML을 사용하여 꾸밀 수 있다. 마크다운 언어는 검색을 해서 주로 사용하는 것만 정리한 글들이 많으니 참고한다.

- [GitLab markdown-guide](https://about.gitlab.com/handbook/markdown-guide/)
- [GitHub Basic formatting syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
- [Markdown Guide Basic Syntax](https://www.markdownguide.org/basic-syntax/)

## 헤더/푸터 추가

헤더는 `capsule-render` open-api를 사용하였다. 

[capsule render](https://github.com/kyechan99/capsule-render)

api뒤에 옵션 값들을 입력하면 되는데 지원하는 옵션들은 capsule render에서 확인 할 수 있다.

헤더의 설정 예:
```
![header](https://capsule-render.vercel.app/api?type=waving&color=timeAuto&fontAlign=50&fontAlignY=30&text=Youngdongbot&desc=developer&descAlign=70&descAlignY=55&height=200&fontSize=60&fontColor=ffffff)
```

## gif 이미지 추가

애니메이션 이미지를 사용하여 공간을 채워볼 수 있다. 컴퓨터 이미지는 [giphy](https://giphy.com/stickers/tech-code-coding-QTfX9Ejfra3ZmNxh6B)에서 얻을 수 있다.

이미지 추가 예:
```
<div id="header" align="center">
  <img src="https://media.giphy.com/media/QTfX9Ejfra3ZmNxh6B/giphy.gif" width="200"/>
</div>
```

## badge 추가

![badges](/img/tutorial/github-pages/badges.png)

badge는 [shields.io](https://shields.io/)에서 여러 스타일로 만들 수 있다. badge에 사용되는 아이콘은 [simpleicons.org](https://simpleicons.org/)에서 *이미지 이름*과 *색코드*를 확인 할 수 있다. GET 방식으로 값을 작성 할때는 url인코딩이되어야 한다. 공백은 `%20`으로 작성해야 한다.

badge 추가 예:
```
![javascript](https://img.shields.io/badge/JAVASCRIPT-F7D1E?style=flat-square&logo=JavaScript&logoColor=white)
```

또는

```
<img src="https://img.shields.io/badge/JAVASCRIPT-F7D1E?style=flat-square&logo=JavaScript&logoColor=white" alt="javascript/>
```

## view counter 추가

![counter](/img/tutorial/github-pages/counter.png)

메인 페이지를 접속 할때마다 카운터를 할 수 있는 [GitHub Profile Views Counter](https://github.com/antonkomarev/github-profile-views-counter)를 사용한다. [hits](https://hits.seeyoufarm.com/)도 있다.

카운터 추가 예:

```
<div align="center">
  <img src="https://komarev.com/ghpvc/?username=moonpower&style=flat-square&color=blue" alt=""/>
</div>
```


## stats 추가

![stats](/img/tutorial/github-pages/stats.png)

상태는 [github-readme-stats](https://github.com/anuraghazra/github-readme-stats)에서 사용할 수 있다. username만 설정해주면 계정의 정보를 보여주기 때문에 간단하다.

상태 추가 예:
```
[![Moopower's GitHub stats](https://github-readme-stats.vercel.app/api?username=moonpower)](https://github.com/anuraghazra/github-readme-stats)

[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=moonpower&layout=compact)](https://github.com/anuraghazra/github-readme-stats)
```

## 소스

꾸며진 소스는 아래의 링크를 통해 `<>`(Display the source blob)버튼을 눌러 확인 할 수 있다.

[README.md](https://github.com/moonpower/moonpower/blob/main/README.md)

