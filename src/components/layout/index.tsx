"use client";
import React, { memo, ReactNode } from "react";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import { useSidebarContext } from "@/providers/use-sidebar";

// Memoize these components to avoid unnecessary re-renders
const MemoizedHeader = memo(Header);
const MemoizedSidebar = memo(Sidebar);

const LayoutWrapper = ({ children }: { children: ReactNode }) => {
  const { heading, description } = useSidebarContext();

  return (
    <>
      <MemoizedHeader />
      <div className="flex h-screen overflow-hidden">
        <MemoizedSidebar />
        <main className="flex-1 overflow-scroll pt-16">
          <div className="flex-1 space-y-4 p-5">
            <div className="flex items-center justify-between">
              <Heading title={heading} description={description} />
            </div>
            <Separator />
            {children}
          </div>
        </main>
      </div>
    </>
  );
};

export default LayoutWrapper;
