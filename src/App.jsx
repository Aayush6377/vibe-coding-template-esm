import React, { useState } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Template Ready
      </h1>
      <p className="text-gray-600">
        Waiting for AI to generate components...
      </p>
    </div>
  );
}