# Kakapoly Store Hydrogen

A hydrogen app for Kakapoly Store storefront.

## 배포

firebase로 gcp cloud run 인스턴스 연결 설정.

### Firebase 설정

#### 타겟 설정

https://firebase.google.com/docs/cli/targets

```
firebase target:apply hosting {kakapoly-store-dev kakapoly-store-dev
```

### Hosting 배포하기 (Cloud Run 연결)

https://firebase.google.com/docs/hosting/cloud-run#direct_requests_to_container

```
firebase deploy --only hosting --project kakapoly
```

## Migration

- https://github.com/Shopify/hydrogen의 버전이 업데이트 되었을 때 주기적으로 새 버전을 반영하고, 변경된 example을 참고하여 비교합니다.
- 비교할때 hydrogen 레포지터리를 clone 받고 kakapoly-store-hydrogen이 참고한 버전의 커밋과 마이그레이션 대상 커밋의 change를 비교하여 반영합니다.
  - 왠만해서는 마크업을 변경하지 맙시다.
  - 라이브러리의 API가 크게 변한 경우만 해당 부분을 변경합니다.
- vscode에서 비교하기
  - vscode 메뉴 > GitLens 에 접근합니다.
  - SEARCH & COMPARE 탭 > Compare References... 에 접근합니다
  - 먼저 비교 기준 커밋(최신 버전)을 선택합니다. 그 다음, 비교 대상 커밋(이전 버전)을 선택합니다.
  - 변화한 내용을 조회할 수 있습니다. 이때 examples/template-hydrogen-default의 내용을 살피면 됩니다.
