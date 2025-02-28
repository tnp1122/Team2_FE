# 우리들의 네컷 모음집 "네모" - 2조

<img width="403" alt="image" src="https://github.com/Step3-kakao-tech-campus/Team2_BE/assets/98508955/0f52fc19-e558-430c-be8c-236c1050e833">
<br>


## 🔅 프로젝트 소개

 프로젝트 네모는 함께 찍은 네컷 사진들을 그룹 다이어리에 보관하고, 동시에 편집이 가능한 **공유형 다이어리 꾸미기 서비스**입니다.  
   (물론 다른 사진들도 가능합니다 😊)

<br>

### 프로젝트 제안 배경

>요즘 사회는 물질적 소유를 중요시하는  '소유 경제'에서 벗어나 어떤 경험을 했는지가 중요한 **경험 경제**로 변화하고 있다고 합니다.  
>사람들은 자신의 소중한 경험을 다른 사람들과 공유하고, 그 경험을 통해 자신을 표현하고 싶어합니다.  
>이러한 흐름을 반영하여 **소중한 경험을 다같이 공유하고 꾸밀 수 있다면 얼마나 좋을까?** 라는 생각에서 저희의 프로젝트는 시작되었습니다.
>
>MZ세대의 `"꾸미기 문화"`는 주류 트렌드로 확실하게 자리잡고 있습니다. MZ 트렌드를 다루는 미디어 캐릿에서 **"별다꾸"** (별걸 다 꾸민다) 라는 신조어가 생길 정도이니 말입니다.  인스타그램 해시태그 게시물 수에 따르면  `'다꾸'`가 413만개, `'인생네컷'`이 125만개에 이르는 것으로 보아, 10-30 세대들이 이 두 키워드에 큰 관심을 가지고 있다는 것을 알 수 있습니다.
>
>저희는 이 두 키워드를 결합하여, **함께 찍은 사진들을 그룹 다이어리에 보관**하고, **동시에 편집**이 가능한 공유형 다이어리 꾸미기 서비스인 **네모** 를 제안합니다.

<br>

### 개발 기간

2023.09-11 (카카오 테크 캠퍼스 1기 - 3단계 진행 기간)

<br>

### 사용 기술 및 협업 스텍

#### 주요 기술 스택

1. **React (React.js)**

-   버전: 18.2.0
-   사용 이유: 사용자 인터페이스 구축을 위한 주요 JavaScript 라이브러리

2. **TypeScript**

-   버전: 4.9.5
-   사용 이유: JavaScript에 정적 타입을 추가하여 코드의 안정성과 유지보수성 향상

3. **React Query**

-   버전: 3.39.3
-   사용 이유: 서버 상태 관리를 위한 효율적인 데이터 페칭, 캐싱 및 업데이트

4. **Recoil**

-   버전: 0.7.7
-   사용 이유: React 애플리케이션을 위한 상태 관리 라이브러리

5. **React Router DOM**

-   버전: 6.16.0
-   사용 이유: React에서의 라우팅을 관리하기 위한 라이브러리

6. **Axios**

-   버전: 1.5.1
-   사용 이유: HTTP 요청을 보내기 위한 JavaScript 라이브러리

7. **Sass (SCSS)**

-   버전: 1.67.0
-   사용 이유: CSS 확장 언어, 복잡한 스타일링을 위한 효율적인 작성 가능

8. **Testing Library (React Testing Library)**

-   사용 이유: React 컴포넌트 테스트를 위한 라이브러리

9. **Mock Service Worker (MSW)**

-   버전: 1.3.1
-   사용 이유: 네트워크 요청을 모의(Mock)하기 위한 도구

10. **Yjs**

-   버전: 13.6.8
-   사용 이유: 공동 작업 및 실시간 편집 기능을 위한 데이터 동기화 라이브러리

11. **Prettier & ESLint**

-   Prettier 버전: 3.0.3
-   ESLint-config-prettier 버전: 9.0.0
-   사용 이유: 코드 포맷팅과 정적 분석을 통한 코드 품질 관리

12. **Concurrently & Cross-env**

-   Concurrently 버전: 8.2.0
-   Cross-env 버전: 7.0.3
-   사용 이유: 다양한 스크립트를 동시에 실행하고, 크로스 플랫폼 환경 변수 설정

13. **tldraw/tldraw**

-   버전: 1.29.2
-   사용 이유: 사용자 인터페이스에서 간단하고 가벼운 드로잉 기능을 제공하기 위한 라이브러리입니다.

14. **tldraw/core**

-   버전: 1.23.2
-   사용 이유: @tldraw/tldraw 라이브러리의 핵심 기능을 제공하는 라이브러리로, 드로잉 관련 핵심 기능 및 로직 커스터마이징을 담당합니다.
    <br>


## 🙋‍♀️ 서비스 소개
> 실시간 공유형 다이어리 꾸미기 서비스 **네모**
<br>


**📲 로그인**

 ![로그인프로세스](https://github.com/Step3-kakao-tech-campus/Team2_FE/assets/80628077/5752968a-3557-4c82-b952-942489461006)
  - 카카오와 구글 로그인을 통해 간편하게 소셜 로그인 및 회원가입을 할 수 있어요!


**🫂 나만의 포토 앨범 만들기**


![그룹 생성](https://github.com/Step3-kakao-tech-campus/Team2_FE/assets/80628077/52ea2d36-cebd-4222-a819-5ae39fb86d0d)
![앨범꾸미기](https://github.com/Step3-kakao-tech-campus/Team2_FE/assets/80628077/a734369c-a02b-454b-8536-96a72890ac59)
![앨범보기](https://github.com/Step3-kakao-tech-campus/Team2_FE/assets/80628077/158b0f96-f7ad-452d-9ad6-a513c4c59423)
   - 간단한 로직을 통해 그룹을 생성하고 앨범을 꾸밀 수 있어요!
   - 친구, 연인, 가족, 혼자와 같은 다양한 카테고리로 나만의 포토 앨범을 만들 수 있어요!
   - 이 앨범은 그룹원들만이 공유하고 감상할 수 있는 **소중한 공간👨‍👩‍👦‍👦**이 될 것 입니다.
     
**⏱️ 동시 편집 기능**

![앨범동시꾸미기](https://github.com/Step3-kakao-tech-campus/Team2_FE/assets/80628077/7dbaa298-8858-49b1-9c4d-96f5749a7dd6)
   - 네모는 여러 사람이 **동시에** 사진을 추가하거나 편집할 수 있어요.
   - 그래서 각자의 집에서도 서로가 어떤 사진을 추가하고 어떻게 꾸미는지를 **실시간**으로 확인👀하고 함께 할 수 있답니다.
     
**💻  QR 인식 기능**

![QR인식](https://github.com/Step3-kakao-tech-campus/Team2_FE/assets/80628077/4f05a9dd-8bd8-420d-94a7-351f2aa83f64)
   - 네모 앨범은 **QR 코드**를 통해 네컷 사진을 바로 불러올 수 있어요.
   - 이를 통해, 사진이나 앨범을 서로 공유하고 관리하는 것이 더욱 **간편**해질 거에요.
    
**🏃‍♀️ 도전과제**

![도전과제칭호](https://github.com/Step3-kakao-tech-campus/Team2_FE/assets/80628077/c98e9ac5-5cea-4515-a06f-ce3bb3754517)
   - 네모 앨범은 그룹원들이 함께 혹은 개인적으로 다양한 **도전과제**를 수행할 수 있도록 해요!
   - 또한, **골드 단계🏅**를 수행하면 나만의 **칭호**도 획득할 수 있답니다.
   -  이를 통해 사진찍고 꾸미는 것이 더욱 **즐거운 경험✨**으로 변화할 거에요.
   
**🗑️  휴지통 기능**


<img width="738" alt="휴지통" src="https://github.com/Step3-kakao-tech-campus/Team2_FE/assets/80628077/b396cde9-77f9-4ae5-a8f2-07dccf862967">


   - 그룹원이 삭제한 페이지를 다시 확인하고 싶다면, 휴지통에서 **복구**할 수 있어요.
   - 휴지통은 **최대 7일간** 삭제된 페이지를 보관하니, 중요한 페이지를 실수로 삭제하더라도 걱정하지 마세요.

  
<br>

<br>

## 🎯 중점을 둔 기능

#### 1. 캔버스 기반의 도형 및 드로잉 기능 (TLdraw 활용)

-   사용자가 웹 애플리케이션 내에서 직관적으로 드로잉하고 도형을 그릴 수 있는 기능을 제공할 수 있도록 구현했습니다.
-   [깃허브 URL](https://github.com/Step3-kakao-tech-campus/Team2_FE/tree/master/src/pages/Canvas)

#### 2. 웹 소켓 통신을 이용한 실시간 협업 및 동시 편집 기능

-   Yjs 라이브러리(yjs, y-websocket, y-presence)를 활용하여 실시간 협업 및 동시 편집 기능을 구현하여 여러 사용자가 동일한 캔버스(TLdraw) 페이지에 대해 동시에 작업할 수 있도록 했습니다.

#### 3. 반응형 디자인 및 최적화된 사용자 인터페이스

-   react-select, react-modal 등의 라이브러리를 활용하여 사용자 인터페이스를 최적화하고, 반응형 웹 디자인을 구현하여 다양한 디바이스에서의 사용자 경험을 향상시킵니다.
-   [깃허브 URL](https://github.com/Step3-kakao-tech-campus/Team2_FE/tree/master/src/pages)

#### 4. 소셜 로그인 및 사용자 인증
