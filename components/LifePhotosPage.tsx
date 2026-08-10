import React from 'react';
import { Camera } from 'lucide-react';
import { lifePhotoSections } from '../constants';

const LifePhotosPage: React.FC = () => {
  return (
    <main className="flex-1 bg-white w-full min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 lg:py-28">
        <div className="mb-10">
          <a href="#home" className="text-sm font-semibold text-indigo-700 hover:text-indigo-900 underline underline-offset-4">← Back to home</a>
          <h1 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight text-slate-950">Life Photos</h1>
          <p className="mt-4 max-w-2xl text-slate-600 leading-7">
            A separate page for camping, pets, cooking, travel, and everyday memories.
          </p>
        </div>

        <div className="space-y-10">
          {lifePhotoSections.map((section) => (
            <section key={section.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-5">
                <h2 className="text-xl font-bold text-slate-900">{section.title}</h2>
                <p className="mt-2 text-sm text-slate-600 leading-6">{section.description}</p>
              </div>

              {section.images.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.images.map((image) => (
                    <figure key={image.src} className="overflow-hidden rounded-2xl bg-slate-50 border border-slate-100">
                      <img src={image.src} alt={image.alt} className="h-56 w-full object-cover" />
                      {image.caption && <figcaption className="px-4 py-3 text-sm text-slate-600">{image.caption}</figcaption>}
                    </figure>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[1, 2, 3].map((slot) => (
                    <div key={slot} className="h-52 rounded-2xl bg-indigo-50 flex flex-col items-center justify-center text-indigo-300 border border-indigo-100 border-dashed">
                      <Camera size={36} />
                      <span className="mt-3 text-sm font-medium text-indigo-400">Add photo {slot}</span>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
};

export default LifePhotosPage;
