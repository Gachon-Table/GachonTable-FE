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
 ┗ 📂app
 ┃ ┣ 📂(route)
 ┃ ┃ ┣ 📂(home)
 ┃ ┃ ┃ ┣ 📂_components
 ┃ ┃ ┃ ┃ ┣ 📜LandingNavbar.tsx
 ┃ ┃ ┃ ┃ ┗ 📜LandingSearchBar.tsx
 ┃ ┃ ┃ ┣ 📜layout.tsx
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂admin
 ┃ ┃ ┃ ┣ 📂(home)
 ┃ ┃ ┃ ┃ ┣ 📜layout.tsx
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂_components
 ┃ ┃ ┃ ┃ ┣ 📂client-management
 ┃ ┃ ┃ ┃ ┃ ┣ 📜ClientStateTabs.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜PendingClientItem.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜PendingClientList.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜ServedClientItem.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜ServedClientList.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜TableInputToastModal.tsx
 ┃ ┃ ┃ ┃ ┣ 📂menu-management
 ┃ ┃ ┃ ┃ ┃ ┣ 📜ImagePreview.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜ImageUploadButton.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜ImageUploader.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜MenuInputBox.tsx
 ┃ ┃ ┃ ┃ ┣ 📂others
 ┃ ┃ ┃ ┃ ┃ ┣ 📂onsite-lineup
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂field
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Information.tsx
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜NumberKeypad.tsx
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ParticipantsModal.tsx
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📂pubInput
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ImageUploader.tsx
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜StudentIdInputBox.tsx
 ┃ ┃ ┃ ┃ ┣ 📂setting
 ┃ ┃ ┃ ┃ ┃ ┣ 📜ClosureCard.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜LogoutButton.tsx
 ┃ ┃ ┃ ┃ ┣ 📜NavBar.tsx
 ┃ ┃ ┃ ┃ ┗ 📜TableTypeLabel.tsx
 ┃ ┃ ┃ ┣ 📂client-management
 ┃ ┃ ┃ ┃ ┣ 📜layout.tsx
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂menu-management
 ┃ ┃ ┃ ┃ ┣ 📜layout.tsx
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┗ 📂setting
 ┃ ┃ ┃ ┃ ┣ 📜layout.tsx
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂mypage
 ┃ ┃ ┃ ┣ 📂_components
 ┃ ┃ ┃ ┃ ┣ 📜CancelModal.tsx
 ┃ ┃ ┃ ┃ ┣ 📜Profile.tsx
 ┃ ┃ ┃ ┃ ┣ 📜Tab.tsx
 ┃ ┃ ┃ ┃ ┣ 📜WaitedList.tsx
 ┃ ┃ ┃ ┃ ┗ 📜WaitingList.tsx
 ┃ ┃ ┃ ┣ 📜layout.tsx
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂oauth
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂policy
 ┃ ┃ ┃ ┣ 📂privacy
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┗ 📂service
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂pub
 ┃ ┃ ┃ ┣ 📂[id]
 ┃ ┃ ┃ ┃ ┣ 📂_components
 ┃ ┃ ┃ ┃ ┃ ┣ 📜DetailImage.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜DetailMenuList.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜DetailTitle.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜LoginToastModal.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜TableBottomSheet.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜TableRadioButton.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜VisitorCountToastModal.tsx
 ┃ ┃ ┃ ┃ ┣ 📜layout.tsx
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┗ 📂_components
 ┃ ┃ ┃ ┃ ┣ 📜PeopleCountPopup.tsx
 ┃ ┃ ┃ ┃ ┣ 📜PubList.tsx
 ┃ ┃ ┃ ┃ ┗ 📜WaitingButton.tsx
 ┃ ┃ ┗ 📂waiting
 ┃ ┃ ┃ ┗ 📂biztalk-status
 ┃ ┃ ┃ ┃ ┗ 📂[waitingId]
 ┃ ┃ ┃ ┃ ┃ ┣ 📂_components
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AlertBox.tsx
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CancelButton.tsx
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜DetailBox.tsx
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜NoteBox.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📂axios
 ┃ ┃ ┃ ┣ 📜adminAxios.ts
 ┃ ┃ ┃ ┣ 📜pubAxios.ts
 ┃ ┃ ┃ ┣ 📜userAxios.ts
 ┃ ┃ ┃ ┗ 📜waitingAxios.ts
 ┃ ┃ ┣ 📂s3
 ┃ ┃ ┃ ┣ 📜deleteFromS3.tsx
 ┃ ┃ ┃ ┗ 📜uploadToS3.tsx
 ┃ ┃ ┗ 📂service
 ┃ ┃ ┃ ┣ 📂admin
 ┃ ┃ ┃ ┃ ┣ 📜adminAuth.tsx
 ┃ ┃ ┃ ┃ ┣ 📜getPubInfo.tsx
 ┃ ┃ ┃ ┃ ┣ 📜getSeatingList.tsx
 ┃ ┃ ┃ ┃ ┣ 📜getWaitingList.tsx
 ┃ ┃ ┃ ┃ ┣ 📜handleStatus.tsx
 ┃ ┃ ┃ ┃ ┣ 📜onsiteWaiting.tsx
 ┃ ┃ ┃ ┃ ┣ 📜patchCallClient.tsx
 ┃ ┃ ┃ ┃ ┣ 📜patchEnterClient.tsx
 ┃ ┃ ┃ ┃ ┣ 📜patchExitClient.tsx
 ┃ ┃ ┃ ┃ ┣ 📜patchManageMenu.tsx
 ┃ ┃ ┃ ┃ ┣ 📜patchPubStatus.tsx
 ┃ ┃ ┃ ┃ ┣ 📜patchWaitingStatus.tsx
 ┃ ┃ ┃ ┃ ┗ 📜savePubInfo.tsx
 ┃ ┃ ┃ ┣ 📂user
 ┃ ┃ ┃ ┃ ┣ 📜getPubInfoForUser.tsx
 ┃ ┃ ┃ ┃ ┣ 📜patchWaitingCancel.tsx
 ┃ ┃ ┃ ┃ ┗ 📜userAuth.tsx
 ┃ ┃ ┃ ┗ 📜getWaitingInfo.tsx
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜AlertModal.tsx
 ┃ ┃ ┣ 📜Footer.tsx
 ┃ ┃ ┣ 📜Modal.tsx
 ┃ ┃ ┣ 📜PageHeader.tsx
 ┃ ┃ ┣ 📜ScrollToTopButton.tsx
 ┃ ┃ ┗ 📜ToastModal.tsx
 ┃ ┣ 📂constants
 ┃ ┃ ┗ 📜metadata.ts
 ┃ ┣ 📂fonts
 ┃ ┃ ┗ 📜PretendardVariable.woff2
 ┃ ┣ 📂utils
 ┃ ┃ ┗ 📜getMetadata.ts
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜globals.css
 ┃ ┣ 📜layout.tsx
 ┃ ┣ 📜loading.tsx
 ┃ ┗ 📜not-found.tsx
```
