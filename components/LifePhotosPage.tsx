import React from 'react';
import { Camera } from 'lucide-react';
import { lifePhotos } from '../constants';

const LifePhotosPage: React.FC = () => {
  return (
    <main className="flex-1 bg-white w-full min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 lg:py-28">
        <div className="mb-10">
          <a href="#home" className="text-sm font-semibold text-indigo-700 hover:text-indigo-900 underline underline-offset-4">← Back to home</a>
          <h1 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight text-slate-950">Life Photos</h1>
          <p className="mt-4 max-w-2xl text-slate-600 leading-7">
            A separate page for camping, pets, cooking, travel, and everyday memories. Each card has its own image and description placeholder so you can replace them one by one.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lifePhotos.map((photo) => (
            <article key={photo.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              {photo.src ? (
                <img src={photo.src} alt={photo.alt ?? photo.title} className="h-64 w-full object-cover" />
              ) : (
                <div className="h-64 w-full bg-indigo-50 flex flex-col items-center justify-center text-indigo-300 border-b border-indigo-100">
                  <Camera size={42} />
                  <span className="mt-3 text-sm font-medium text-indigo-400">Photo placeholder</span>
                </div>
              )}
              <div className="p-5">
                <h2 className="font-bold text-slate-900 mb-2">{photo.title}</h2>
                <p className="text-sm text-slate-600 leading-6">{photo.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default LifePhotosPage;
