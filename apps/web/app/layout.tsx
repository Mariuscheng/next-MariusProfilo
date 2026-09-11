// ----------------------------------------------------------------------
// 第一步：Import 必要的模組與字體
// ----------------------------------------------------------------------
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@workspace/ui/lib/utils" // 如果你的路徑是 @/lib/utils 請相應修改
import "@workspace/ui/globals.css" // 或 "@workspace/ui/globals.css"

// 設定字體變數
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

// ----------------------------------------------------------------------
// 第二步：定義 RootLayout 函式與 Props 型別
// ----------------------------------------------------------------------
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // 第三步：寫出 <html> 與 <body> 基礎容器
    <html
      lang="zh-HK"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans"
      )}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        {/* 第四步：包裹 ThemeProvider 與全站骨架 */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          
          {/* 1. Header (導覽列) - 可在下一階段填入內容 */}
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
            <div className="container mx-auto flex h-14 items-center justify-between px-4">
              {/* 預留 Header 位置 */}
            </div>
          </header>

          {/* 2. Main (主內容區) - page.tsx 會渲染於此 */}
          <main className="flex-1">
            {children}
          </main>

          {/* 3. Footer (頁尾) */}
          <footer className="border-t py-6 text-center text-sm text-muted-foreground">
            {/* 預留 Footer 位置 */}
          </footer>

        </ThemeProvider>
      </body>
    </html>
  )
}