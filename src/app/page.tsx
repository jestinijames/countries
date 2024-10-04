import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import React from "react";

export default function Home() {
  return (
    <>
    <Header />
      <div className='flex h-screen overflow-hidden'>
        <Sidebar />
        <main className='flex-1 overflow-scroll pt-16'>
          {/* COntent here */}
        </main>
      </div>
    </>
  );
}
