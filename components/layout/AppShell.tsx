"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { RouteProgressTracker } from "@/components/progress/RouteProgressTracker";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/learn", label: "Learn" },
  { href: "/explore", label: "Explore" },
  { href: "/build", label: "Build" },
  { href: "/examples", label: "Examples" }
];

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="font-semibold text-white no-underline">
            OpenClaw Tutorial MVP
          </Link>
          <nav className="flex gap-4 text-sm text-slate-300">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="no-underline hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <RouteProgressTracker />
      <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>
    </div>
  );
}
