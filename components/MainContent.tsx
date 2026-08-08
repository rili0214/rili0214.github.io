import React from 'react';
import { affiliationLinks, contactItems, lifePhotos, recentNews, researchFocus } from '../constants';

const ExternalLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a className="font-medium text-indigo-700 hover:text-indigo-900 underline underline-offset-4 decoration-indigo-200 hover:decoration-indigo-500 transition-colors" href={href} target="_blank" rel="noreferrer">
    {children}
  </a>
);

const MainContent: React.FC = () => {
  const [csLink, wpiLink, advisorLink, brownLink, rpiLink] = affiliationLinks;

  return (
    <main className="flex-1 bg-white w-full min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24 lg:py-28">
        <section className="space-y-6 text-[1.05rem] leading-8 text-slate-700">
          <p>
            I am a first-year Ph.D. student of{' '}
            <ExternalLink href={csLink.href}>{csLink.label}</ExternalLink> at{' '}
            <ExternalLink href={wpiLink.href}>{wpiLink.label}</ExternalLink>. I am really honored to be advised by{' '}
            <ExternalLink href={advisorLink.href}>{advisorLink.label}</ExternalLink>.
          </p>

          <p>{researchFocus}</p>

          <p>
            Previously, I was a graduate student at <ExternalLink href={brownLink.href}>{brownLink.label}</ExternalLink>. Before that, I received my B.S. in Computer Science and Mathematics from{' '}
            <ExternalLink href={rpiLink.href}>{rpiLink.label}</ExternalLink>.
          </p>

          <p className="text-base leading-7 text-slate-600">
            {contactItems.map((item, index) => (
              <React.Fragment key={item.label}>
                {index > 0 && <span className="mx-2 text-slate-300">|</span>}
                <span>{item.label}: </span>
                {item.href ? (
                  <a className="font-semibold text-slate-800 hover:text-indigo-700 transition-colors" href={item.href} target={item.href.startsWith('mailto:') ? undefined : '_blank'} rel={item.href.startsWith('mailto:') ? undefined : 'noreferrer'}>
                    {item.value}
                  </a>
                ) : (
                  <strong>{item.value}</strong>
                )}
              </React.Fragment>
            ))}
          </p>
        </section>

        <section className="mt-14 border-t border-slate-200 pt-8">
          <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-slate-900 mb-5">Recent News</h2>
          <div className="space-y-3 text-slate-700 leading-7">
            {recentNews.map((item) => (
              <p key={`${item.date}-${item.text}`}>
                <span className="font-semibold text-slate-900">{item.date}:</span>{' '}
                {item.href ? <ExternalLink href={item.href}>{item.text}</ExternalLink> : item.text}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-8">
          <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-slate-900 mb-5">Current Research</h2>
        </section>

        <section className="mt-12 rounded-3xl border border-dashed border-indigo-200 bg-indigo-50/40 p-6 text-slate-600">
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600 mb-3">Life Photos</h2>
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
              Reserved for future photos from camping, pets, travel, and everyday life. Add images to <code className="rounded bg-white px-2 py-1 text-sm">public/life/</code>, then list them in <code className="rounded bg-white px-2 py-1 text-sm">lifePhotos</code> in <code className="rounded bg-white px-2 py-1 text-sm">constants.ts</code>.
            </p>
          )}
        </section>
      </div>
    </main>
  );
};

export default MainContent;
