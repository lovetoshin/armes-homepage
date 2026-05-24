# ARMES 배포 가이드

## 1. Vercel 배포 (권장)

### 빠른 시작

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel

# 프로덕션 배포
vercel --prod
```

### GitHub 연동 자동 배포

1. [vercel.com](https://vercel.com) → **New Project**
2. GitHub 저장소 연결
3. Framework: **Next.js** (자동 감지)
4. 환경 변수 설정 (아래 참고)
5. **Deploy** 클릭

### 환경 변수 설정 (Vercel 대시보드)

| 변수명 | 값 | 필수 |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://armes.co.kr` | ✅ |
| `CONTACT_WEBHOOK_URL` | Slack/Discord Webhook URL | 선택 |

---

## 2. 커스텀 도메인 연결

Vercel 대시보드 → Project → **Domains**

```
armes.co.kr       → Vercel 프로젝트
www.armes.co.kr   → armes.co.kr (리다이렉트)
```

**DNS 설정 (가비아/후이즈 등)**

| 타입 | 호스트 | 값 |
|---|---|---|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

---

## 3. 문의 폼 알림 연결

### Slack Webhook

1. Slack → Apps → Incoming Webhooks 앱 설치
2. Webhook URL 복사
3. Vercel 환경 변수에 `CONTACT_WEBHOOK_URL` 설정

### 이메일 (Nodemailer) 연결

`app/api/contact/route.ts` 수정:

```typescript
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

await transporter.sendMail({
  from: process.env.SMTP_FROM,
  to:   process.env.SMTP_TO,
  subject: `[ARMES] 새 문의 — ${data.type} (${data.name})`,
  html: `...`,
});
```

---

## 4. 토스페이먼츠 PG 심사 체크리스트

심사 전 반드시 확인:

- [x] 메인 홈페이지 운영 중 (`/`)
- [x] 개인정보처리방침 페이지 (`/privacy`)
- [x] 이용약관 페이지 (`/terms`)
- [x] 문의/고객센터 페이지 (`/contact`)
- [x] Footer에 사업자 정보 (상호명, 사업자번호, 대표자, 주소, 연락처)
- [x] HTTPS 적용
- [ ] 실제 서비스 URL 연결
- [ ] 앱 스토어 링크 연결

---

## 5. 로컬 개발

```bash
# 의존성 설치
npm install

# 환경 변수 설정
cp .env.example .env.local
# .env.local 파일 수정

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 빌드 후 실행
npm start
```

---

## 6. 프로젝트 구조

```
app/
  page.tsx          ← 메인 랜딩페이지
  layout.tsx        ← 전역 레이아웃 (폰트, 메타데이터)
  globals.css       ← 디자인 시스템
  contact/          ← 문의 페이지
  privacy/          ← 개인정보처리방침
  terms/            ← 이용약관
  api/contact/      ← 문의 폼 API
  robots.ts         ← robots.txt
  sitemap.ts        ← sitemap.xml
  opengraph-image.tsx ← OG 이미지 (자동 생성)

components/
  Navbar.tsx
  Ticker.tsx
  PhoneMockup.tsx
  Footer.tsx
  ContactModal.tsx
  ContactProvider.tsx
  forms/ContactForm.tsx
  sections/
    Hero.tsx
    Ecosystem.tsx
    Experience.tsx
    Seller.tsx
    Vision.tsx
    CTA.tsx
  legal/LegalLayout.tsx
```
