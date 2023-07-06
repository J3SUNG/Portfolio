import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "이제성 포트폴리오",
  description: "환영합니다! 이제성의 포트폴리오 사이트 입니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" sizes="76x76" href="static/JS2.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1"
        ></meta>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
