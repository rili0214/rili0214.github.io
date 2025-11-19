import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, className = "" }) => {
  return (
    <section className={`mb-10 ${className}`}>
      <h2 className="text-xl font-bold text-slate-800 border-b-2 border-slate-200 pb-2 mb-4 font-sans uppercase tracking-wide">
        {title}
      </h2>
      <div>
        {children}
      </div>
    </section>
  );
};

export default Section;