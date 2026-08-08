import React from 'react';
import { affiliationLinks, bioParagraphs, contactItems, lifePhotos } from '../constants';

const MainContent: React.FC = () => {
  const [csLink, wpiLink, advisorLink] = affiliationLinks;

  return (
    <main className="flex-1 bg-white w-full min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24 lg:py-28">
        <div className="space-y-7 text-lg leading-8 text-slate-700">
          <p>
            I am an incoming Ph.D. student of{' '}
            <a className="font-medium text-indigo-700 hover:text-indigo-900 underline underline-offset-4" href={csLink.href} target="_blank" rel="noreferrer">
              {csLink.label}
            </a>{' '}
            at{' '}
            <a className="font-medium text-indigo-700 hover:text-indigo-900 underline underline-offset-4" href={wpiLink.href} target="_blank" rel="noreferrer">
              {wpiLink.label}
            </a>
            . I am really honored to be advised by{' '}
            <a className="font-medium text-indigo-700 hover:text-indigo-900 underline underline-offset-4" href={advisorLink.href} target="_blank" rel="noreferrer">
              {advisorLink.label}
            </a>
            .
          </p>

          <p>{bioParagraphs[1]}</p>

          <p className="text-base leading-7 text-slate-600">
            {contactItems.map((item, index) => (
              <React.Fragment key={item.label}>
                {index > 0 && <span className="mx-2 text-slate-300">|</span>}
                <span>{item.label}: </span>
                {item.href ? (
                  <a className="font-semibold text-slate-800 hover:text-indigo-700" href={item.href} target={item.href.startsWith('mailto:') ? undefined : '_blank'} rel={item.href.startsWith('mailto:') ? undefined : 'noreferrer'}>
                    {item.value}
                  </a>
                ) : (
                  <strong>{item.value}</strong>
                )}
              </React.Fragment>
            ))}
          </p>
        </div>

        <div className="mt-14 rounded-3xl border border-dashed border-indigo-200 bg-indigo-50/40 p-6 text-slate-600">
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600 mb-3">Life photos</h2>
          {lifePhotos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {lifePhotos.map((photo) => (
                <figure key={photo.src} className="overflow-hidden rounded-2xl bg-white shadow-sm">
                  <img src={photo.src} alt={photo.alt} className="h-56 w-full object-cover" />
                  <figcaption className="px-4 py-3 text-sm text-slate-600">{photo.caption}</figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <p className="leading-7">
              This is a reserved space for future photos from camping, pets, travel, and everyday life. Add images to <code className="rounded bg-white px-2 py-1 text-sm">public/life/</code>, then add each image path to <code className="rounded bg-white px-2 py-1 text-sm">lifePhotos</code> in <code className="rounded bg-white px-2 py-1 text-sm">constants.ts</code>.
            </p>
          )}
        </div>
      </div>
    </main>
  );
};

export default MainContent;
