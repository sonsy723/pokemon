import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "./provider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokemon Book",
  description: "Pokemon Book",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <Link href={"/"}>
            <img src="/dr_oh.png" alt="오박사" className="h-48 mt-6 m-auto" />
          </Link>
          <div className="w-1/2 h-24 m-auto flex items-center text-xl p-10 border-2 rounded-xl font-Galmuri9">
            ▶ 바깥은 혼자 돌아다니기엔 위험하단다 !<br />
            &nbsp;&nbsp;&nbsp; 이 아이들 중 하나를 데려가렴 !
          </div>

          {children}

          <footer className="w-full static bottom-0 text-center py-12 mt-16 bg-zinc-900 font-Galmuri9 ">
            <div className="flex items-center justify-center">
              <a href="https://velog.io/@sonsy723/posts" target="/">
                <FontAwesomeIcon
                  icon={faBlog}
                  className="w-8 pb-6 mr-6 text-gray-300"
                />
              </a>
              <a href="https://github.com/sonsy723/pokemon" target="/">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="w-8 pb-6 mr-6 text-gray-300"
                />
              </a>
              <a
                href="https://www.instagram.com/teoyo_?igsh=MW9kNndkd252MnZibg%3D%3D&utm_source=qr"
                target="/"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="w-8 pb-6 text-gray-300"
                />
              </a>
            </div>
            <p className="text-sm text-gray-300">ⓒ 연무동매콤주먹</p>
          </footer>
        </QueryProvider>
      </body>
    </html>
  );
}
