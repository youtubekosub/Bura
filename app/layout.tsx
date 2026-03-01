import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MySearch - 自由な検索エンジン",
  description: "Vercelで動作する自作検索エンジンプロトタイプ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
