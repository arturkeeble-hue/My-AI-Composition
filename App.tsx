
import React from 'react';

const App: React.FC = () => {
  return (
    <main className="bg-gray-900 text-white min-h-screen flex items-center justify-center font-sans">
      <div className="text-center">
        <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text animate-pulse">
          Hello
        </h1>
        <p className="text-gray-400 mt-4 text-lg md:text-2xl">
          Welcome to your simple React application.
        </p>
      </div>
    </main>
  );
};

export default App;
