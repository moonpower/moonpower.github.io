---
sidebar_position: 2
title: Javadoc 생성하기
keywords: [자바, javadoc, java, eclipse]
---

JAVA를 개발하면서 API에 대한 문서를 요청 받는 경우가 발생한다. 이러한 경우 Javadoc을 생성하여 전달하는데 어떻게 생성하는지 알아보자

## eclipse에서 생성하기

1. `Package Explorer` 또는 `Project Explorer`에서 내보낼 파일, 패키지, 프로젝트 중 마우스로 우클릭해서 나타나는 컨텍스트 메뉴 중에 `Export...`를 선택한다.

    내보내기 창:

    ![내보내기 창](/img/java/javadoc/eclipse_2022-04-27_14-58-09.png)

1. `Java > Javadoc`를 선택하고 `Next`를 클릭한다.

1. `Javadoc Command:` 에 `javadoc.exe` 경로를 설정하고, `Select types for which Javadoc will be generated:` 에는 Javadoc을 생성할 프로젝트를 설정한다.

1. `Create Javadoc for members with visibility:`에서 Private, Package, Protected, Public가 있는데 API를 사용하는 사람들에게 전달한다면 Public를 선택한다.

1. `Use standard doclet`에서 내보낼 폴더를 설정하고 `Next`를 눌러 다음 페이지로 넘어간다.

1. javadoc에서 생성되는 문서에 대한 설정을 한다. 기본값으로 내보낼 시 수정할 필요 없으므로 `Next`를 눌러 다음 페이지로 넘어간다.

1. `VM options`에서 작성된 내용이 한글인 경우 인코딩을 추가한다.

    ```
    -encoding UTF-8 -charset UTF-8 -docencoding UTF-8
    ```

    ![VM options 설청 창](/img/java/javadoc/eclipse_2022-04-27_15-24-18.png)

1. `Finish`를 눌러 생성된 Javadoc 폴더에서 index.html 눌러 확인 할 수 있다.


