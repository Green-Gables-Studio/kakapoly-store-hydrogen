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
