import { Manrope } from "@next/font/google";
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={manrope.className}>
      <div>
        <div className="w-full">
          <Header />
        </div>
        <div className="flex">
          <div className="w-1/6">
            <Sidebar />
          </div>
          <div className="w-5/6 h-full bg-[#F4F4F4]">{children}</div>
        </div>
      </div>
    </div>
  );
}
