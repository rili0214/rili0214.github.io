import React from 'react';
import { Camera, MapPin } from 'lucide-react';
import Section from './Section';
import { educationData, photoPlaceholders, profileSummary, projectsData, researchInterests, teachingData } from '../constants';

const MainContent: React.FC = () => {
  return (
    <main className="flex-1 p-6 md:p-12 lg:p-16 bg-white w-full">
      <section id="about" className="scroll-mt-16 mb-12 rounded-3xl bg-gradient-to-br from-indigo-50 via-white to-slate-50 p-8 border border-indigo-100">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 mb-3">Academic Home</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-4">Building reliable neuro-symbolic systems from proofs, runtime evidence, and high-performance infrastructure.</h2>
        <div className="space-y-4 text-slate-700 leading-relaxed">
          {profileSummary.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {researchInterests.map((interest) => (
            <span key={interest} className="rounded-full bg-white px-4 py-2 text-sm font-medium text-indigo-700 border border-indigo-100 shadow-sm">
              {interest}
            </span>
          ))}
        </div>
      </section>

      <Section title="Education" className="scroll-mt-16">
        <div id="education" className="space-y-6">
          {educationData.map((edu, index) => (
            <div key={index} className="relative pl-4 border-l-2 border-indigo-100">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1 gap-1">
                <h3 className="text-lg font-bold text-slate-900">{edu.school}</h3>
                <span className="text-sm text-slate-500 font-mono">{edu.date}</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-700 font-medium mb-2">
                <span>{edu.degree}</span>
                <span className="inline-flex items-center gap-1 text-sm text-slate-500"><MapPin size={14} />{edu.location}</span>
                {edu.honors && <span className="text-indigo-600 text-sm">{edu.honors}</span>}
              </div>
              <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
                {edu.details.map((detail, idx) => (
                  <li key={idx} className="leading-relaxed">{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Research Experiences & Selected Projects" className="scroll-mt-16">
        <div id="research" className="space-y-8">
          {projectsData.map((project) => (
            <article key={project.name} className="rounded-2xl border border-slate-200 p-5 hover:border-indigo-200 hover:shadow-sm transition-all">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                <h3 className="text-lg font-bold text-slate-900">{project.name}</h3>
                <span className="text-xs font-mono text-indigo-600 bg-indigo-50 px-2 py-1 rounded whitespace-nowrap">{project.date}</span>
              </div>
              <p className="text-sm text-slate-700 mb-3 leading-relaxed">{project.summary}</p>
              <ul className="list-disc list-outside ml-5 text-slate-600 text-sm space-y-2">
                {project.highlights.map((desc, idx) => (
                  <li key={idx} className="leading-relaxed">{desc}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Teaching & Service" className="scroll-mt-16">
        <div id="teaching" className="space-y-6">
          {teachingData.map((exp) => (
            <article key={exp.course} className="rounded-2xl bg-slate-50 p-5 border border-slate-200">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{exp.title}</h3>
                  <p className="text-sm font-medium text-slate-700">{exp.course} · {exp.organization}</p>
                </div>
                <span className="text-xs font-mono text-slate-500">{exp.date}</span>
              </div>
              <ul className="list-disc list-outside ml-5 text-slate-600 text-sm space-y-2">
                {exp.highlights.map((desc, idx) => (
                  <li key={idx} className="leading-relaxed">{desc}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Life Outside Research" className="scroll-mt-16">
        <div id="life" className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {photoPlaceholders.map((item) => (
            <div key={item.title} className="min-h-56 rounded-3xl border-2 border-dashed border-indigo-200 bg-indigo-50/40 p-5 flex flex-col justify-between">
              <div className="h-28 rounded-2xl bg-white/80 flex items-center justify-center text-indigo-300 mb-4">
                <Camera size={36} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
};

export default MainContent;
