import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <header className="p-4 bg-slate-900 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wide">FireShield Pro</h1>
          <nav className="space-x-4 text-sm font-medium">
            <a href="/" className="hover:text-red-400 transition">Home</a>
            <a href="/admin" className="hover:text-red-400 transition">Admin</a>
          </nav>
        </div>
      </header>

      <main className="flex-1 container mx-auto p-6">
        <Outlet />
      </main>

      <footer className="p-4 bg-slate-900 text-slate-400 text-center text-sm border-t border-slate-800">
        &copy; {new Date().getFullYear()} FireShield Pro. All rights reserved.
      </footer>
    </div>
  );
};

export default MainLayout;