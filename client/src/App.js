import React from 'react';
import RecommendationForm from './components/RecommendationForm';

function App() {
  return (
    <div className='flex flex-col bg-stone-300 min-h-screen'>
      <h1 className='font-mono text-6xl font-bold text-center mb-3 mt-20'>you'd like this book</h1>
      <p className='font-mono text-lg text-center mb-5'>input your favorite book and get similar book recommendations!</p>
      <RecommendationForm />

      <div className='mt-auto'>
        <footer className='bg-stone-600 text-white text-center py-6 w-full'>
          <p className='font-mono'>
            <a href="https://github.com/kittenspow" target="_blank" rel="noopener noreferrer"
              className='hover:underline'>
              kittenspow
            </a>, 2025
          </p>
        </footer>
      </div>

    </div>
  );
}

export default App;
