'use client';

import React from 'react';

export default function TopBar() {
  return (
    <header className="w-full hidden bg-blue-600 text-white p-4 sm:flex justify-between items-center">
      <h1 className="text-xl font-bold"><a href="/">Projekt z informatyki</a></h1>
      <nav>
        <a href="/materialy" className="mx-2 hover:underline hover:text-gray-200 font-semibold text-lg">Materiały użyte w projekcie</a>
      </nav>
    </header>
  );
}