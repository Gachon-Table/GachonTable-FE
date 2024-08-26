# 🎪 라인업지

<div style="display: flex; justify-content: center;">
  <img style="max-width: 50%; height: auto; margin: 0 5px;" alt="favicon" src="public/images/logo.png"> 
</div>

## 프로젝트 소개

- 가천대학교 축제 기간 주점을 예약하고 알림을 받는 서비스입니다.
- 검색을 통해 주점을 둘러보고 자유롭게 선택할 수 있습니다.
- 원하는 주점을 줄서기를 통해 방문하지 않아도 실시간 대기를 할 수 있습니다.

## Commit 메세지 구조

```javascript
  feat: 새로운 기능 추가
  fix: 버그 수정
  style: 스타일 마크다운, UI 구현
  docs: 문서 추가 및 수정
  refactor: 코드 리팩토링
  chore: 빌드 업무 수정, 패키지 매니저 수정, 초기 세팅
```

## 폴더 구조

```
📦src
┣ 📂app
┃ ┣ 📂(route)
┃ ┃ ┣ 📂(home)
┃ ┃ ┃ ┗ 📜page.tsx
┃ ┃ ┣ 📂[waitingId]
┃ ┃ ┃ ┣ 📂_components
┃ ┃ ┃ ┃ ┣ 📜AlertBox.tsx
┃ ┃ ┃ ┃ ┣ 📜CancelButton.tsx
┃ ┃ ┃ ┃ ┣ 📜CancelModal.tsx
┃ ┃ ┃ ┃ ┣ 📜DetailBox.tsx
┃ ┃ ┃ ┃ ┗ 📜Header.tsx
┃ ┃ ┃ ┗ 📜page.tsx
┃ ┃ ┣ 📂admin
┃ ┃ ┃ ┣ 📂_components
┃ ┃ ┃ ┃ ┣ 📂field
┃ ┃ ┃ ┃ ┃ ┣ 📜Information.tsx
┃ ┃ ┃ ┃ ┃ ┣ 📜NumberKeypad.tsx
┃ ┃ ┃ ┃ ┃ ┗ 📜ParticipantsModal.tsx
┃ ┃ ┃ ┃ ┣ 📂pubInput
┃ ┃ ┃ ┃ ┃ ┣ 📜ImageUploader.tsx
┃ ┃ ┃ ┃ ┃ ┣ 📜MenuInputBox.tsx
┃ ┃ ┃ ┃ ┃ ┗ 📜StudentIdInputBox.tsx
┃ ┃ ┃ ┃ ┣ 📜AlertModal.tsx
┃ ┃ ┃ ┃ ┣ 📜Dropdown.tsx
┃ ┃ ┃ ┃ ┣ 📜ErrorModal.tsx
┃ ┃ ┃ ┃ ┣ 📜NavBar.tsx
┃ ┃ ┃ ┃ ┗ 📜WaitingList.tsx
┃ ┃ ┃ ┣ 📂onsite-lineup
┃ ┃ ┃ ┃ ┗ 📜page.tsx
┃ ┃ ┃ ┣ 📂pub-management
┃ ┃ ┃ ┃ ┗ 📜page.tsx
┃ ┃ ┃ ┣ 📂waiting-management
┃ ┃ ┃ ┃ ┗ 📜page.tsx
┃ ┃ ┃ ┣ 📜layout.tsx
┃ ┃ ┃ ┗ 📜page.tsx
┃ ┃ ┣ 📂mypage
┃ ┃ ┃ ┣ 📂_components
┃ ┃ ┃ ┃ ┣ 📜AfterProfile.tsx
┃ ┃ ┃ ┃ ┣ 📜BeforeProfile.tsx
┃ ┃ ┃ ┃ ┣ 📜CancelModal.tsx
┃ ┃ ┃ ┃ ┣ 📜Tab.tsx
┃ ┃ ┃ ┃ ┣ 📜WaitedList.tsx
┃ ┃ ┃ ┃ ┗ 📜WaitingList.tsx
┃ ┃ ┃ ┣ 📜layout.tsx
┃ ┃ ┃ ┗ 📜page.tsx
┃ ┃ ┣ 📂oauth
┃ ┃ ┃ ┗ 📜page.tsx
┃ ┃ ┣ 📂privacy-policy
┃ ┃ ┃ ┗ 📜page.tsx
┃ ┃ ┗ 📂pub
┃ ┃ ┃ ┣ 📂[id]
┃ ┃ ┃ ┃ ┣ 📜layout.tsx
┃ ┃ ┃ ┃ ┗ 📜page.tsx
┃ ┃ ┃ ┗ 📂_components
┃ ┃ ┃ ┃ ┣ 📜ConfirmPopup.tsx
┃ ┃ ┃ ┃ ┣ 📜PeopleCountPopup.tsx
┃ ┃ ┃ ┃ ┣ 📜PubList.tsx
┃ ┃ ┃ ┃ ┣ 📜SuccessPopup.tsx
┃ ┃ ┃ ┃ ┗ 📜WaitingTeams.tsx
┃ ┣ 📂api
┃ ┃ ┣ 📂axios
┃ ┃ ┃ ┣ 📜adminAxios.ts
┃ ┃ ┃ ┣ 📜pubAxios.ts
┃ ┃ ┃ ┣ 📜userAxios.ts
┃ ┃ ┃ ┗ 📜waitingAxios.ts
┃ ┃ ┣ 📂s3-upload
┃ ┃ ┃ ┗ 📜uploadToS3.tsx
┃ ┃ ┗ 📂service
┃ ┃ ┃ ┣ 📂admin
┃ ┃ ┃ ┃ ┣ 📜adminAuth.tsx
┃ ┃ ┃ ┃ ┣ 📜getPubInfo.tsx
┃ ┃ ┃ ┃ ┣ 📜getWaitingList.tsx
┃ ┃ ┃ ┃ ┣ 📜handleStatus.tsx
┃ ┃ ┃ ┃ ┣ 📜onsiteWaiting.tsx
┃ ┃ ┃ ┃ ┗ 📜savePubInfo.tsx
┃ ┃ ┃ ┣ 📂user
┃ ┃ ┃ ┃ ┣ 📜getPubInfoForUser.tsx
┃ ┃ ┃ ┃ ┗ 📜userAuth.tsx
┃ ┃ ┃ ┗ 📜getWaitingInfo.tsx
┃ ┣ 📂common
┃ ┃ ┣ 📜BackButton.tsx
┃ ┃ ┣ 📜Footer.tsx
┃ ┃ ┗ 📜Navbar.tsx
┃ ┣ 📂service
┃ ┃ ┗ 📜getRequest.ts
┃ ┣ 📂types
┃ ┃ ┗ 📜next-auth.d.ts
┃ ┣ 📜favicon.ico
┃ ┣ 📜globals.css
┃ ┗ 📜layout.tsx
┗ 📂hooks
```
