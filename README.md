# Marius Cheng — Personal Portfolio

個人作品集網站（repo：`next-MariusProfilo`）。

> 這個專案是由 **Figma 設計稿轉換**而成的，再由 **A.I. 生成程式碼**實作出來，最後經人手微調（含響應式設計）。

## ✨ 專案簡介

此作品集網站從 Figma 設計稿「Personal UI」轉出，包含以下區塊：

- Hero — 個人簡介
- Certificates — 證書
- Experience — 工作經驗
- Photography Portfolio — 攝影作品集
- Skills — 技能
- Personal Projects — 個人專案
- Let's connect — 聯絡方式

## 🎨 設計來源

- Figma: [Personal UI](https://www.figma.com/design/Qk9ROItVgZhjy7S06KOD9L/Personal-UI?node-id=1-15&m=dev)
- 設計轉程式碼：Figma → A.I. 生成 → 人手調整（響應式、`next/image` 圖片優化）

## 🛠 技術棧

- **Next.js 16**（App Router、Turbopack）
- **React 19** + **TypeScript**
- **Tailwind CSS v4** + shadcn/ui
- **Turborepo** monorepo
- `next/font`（Inter 字型）、`next/image`（圖片優化）

## 🚀 開始使用

```bash
npm install        # 安裝依賴
npm run dev        # 開發模式 → http://localhost:3000
npm run build      # 生產建置
npm run typecheck  # 型別檢查
```

## 📁 專案結構

```
apps/web/
  app/                          # Next.js App Router 頁面
  screens/MariusChengProfile/   # 作品集畫面
    sections/                   # 各區塊元件（hero、certificates、experience、gallery、skills、projects、contact）
    data.ts                     # 頁面內容資料
  public/profile/               # 圖片資源（證書、相片）
packages/ui/                    # 共用 UI 套件（shadcn/ui）
packages/eslint-config/         # 共用 ESLint 設定
packages/typescript-config/     # 共用 TypeScript 設定
```

## 🧑‍💻 開發流程

1. 從 Figma 設計稿取得設計規格（顏色、字型、間距、圖片）
2. 以 A.I. 生成各區塊元件程式碼
3. 人手調整：加入響應式設計，手機（320px+）均可正常顯示
4. 圖片以 `next/image` 優化，提升載入效能

