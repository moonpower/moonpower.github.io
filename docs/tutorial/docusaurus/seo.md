---
sidebar_position: 3
title: SEO
description: 도큐사우루스 검색최적화
keywords: [도큐사우루스, docusaurus, seo, 검색최적화]
---

검색 엔진 최적화 방법은 https://docusaurus.io/ko/docs/seo 에서 참고하기 바랍니다.

여기에서는 검색 사이트에 사이트를 등록하는 방법을 알아봅니다. `docusaurus.config.js`에서 `trailingSlash=false`로 설정하시기 해주세요([trailingSlash](https://docusaurus.io/ko/docs/next/api/docusaurus-config#trailingSlash)). 검색에 영향을 줄 수 있습니다.

## Google Search

https://search.google.com/search-console/about 에 접속해서 시작하기 버튼을 클릭합니다.

**URL 접두어** 유형에서 URL입력 칸에 **내 사이트 도메인(URL) 주소**를 입력하고, **계속** 버튼을 클릭합니다.

### 소유권 확인하기

소유권 확인 페이지에서 파일을 다운 받아 `static/`에 저장하거나 HTML 태그를 선택해서 메타태그를 설정합니다. 메타태그는 `src/pages/index.tsx`를 열어 다음과 같이 수정합니다.

```tsx {6}
export default function Home(): JSX.Element {
//...
return (
<Layout title="Page" description="A React page demo">
    <Head>
    <meta property="google-site-verification" content="g7hd!@#$%^^" />
    </Head>
    {/* ... */}
</Layout>
)
}
```

소유권 정보를 저장 한 후 확인 버튼을 클릭합니다.

소유권이 확인창이 뜨면 이제 Google 검색 로봇이 며칠 이내로 내 사이트 정보를 수집하여 검색 결과에 반영하기 시작합니다. 더 효과적으로 페이지를 수집할 수 있게 하려면 `속성으로 이동`을 클릭해, 다음 단계를 진행합니다.

### 사이트 맵 제출하기

도큐사우루스는 sitemap.xml를 제공합니다. 구글이 내 사이트 정보를 더 효과적으로 수집하여 더 많이 검색에 반영 될 수 있도록 사이트맵을 추가합니다. 

1. 왼쪽 메뉴에서 `색인 > Sitemaps`를 클릭합니다.
1. 새 사이트맵 추가 항목에 sitemap.xml을 입력하고, 제출 버튼을 클릭합니다.

## Naver Search

네이버 서치어드바이저를 사용해 네이버에 사이트를 등록하면 보다 효율적으로 네이버 검색결과에 노출됩니다.

1. 구글과 동일하게 사이트 주소를 입력하소 소유권을 확인 후 사이트맵을 추가합니다.
1. 먼저 네이버 (서치어드바이저)[https://searchadvisor.naver.com/]에 접속합니다. 그리고 **웹마스터 도구** 버튼을 클릭합니다.

### 사이트 등록하기

내 사이트 도메인을 입력하고 추가 버튼을 클릭합니다.

### 소유권 확인하기

1. 구글과 마찬가지로 파일 또는 HTML 태그가 있는데 파일은 `static/` 폴더에 저장하면 되고, HTML 태그는 `src/pages/index.tsx`에서 다음과 같이 내용을 추가 합니다.

```tsx {6}
export default function Home(): JSX.Element {
//...
return (
<Layout title="Page" description="A React page demo">
    <Head>
    <meta property="naver-site-verification" content="e223495949393939a39339d394" />
    </Head>
    {/* ... */}
</Layout>
)
}
```

2. 작업을 마치면 확인 버튼을 클릭하고 다음 단계로 넘어갑니다. 소유 확인이 되었다는 창이 뜨면 확인을 클릭해 주세요.

### 사이트 맵 제출하기

1. 웹마스터 도구에서 등록한 사이트를 누르면 사이트에 대한 요약 페이지나 나타납니다. 
1. `요청 > 사이트맵 제출`을 클릭해서 도큐사우루스의 `sitemap.xml`을 제출합니다.