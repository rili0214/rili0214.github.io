import React from 'react';
import Section from './Section';
import { educationData, skillsData, projectsData, experienceData, publicationsData } from '../constants';

const MainContent: React.FC = () => {
  return (
    <main className="flex-1 p-6 md:p-12 lg:p-16 bg-white w-full">
      
      {/* Education Section */}
      <Section title="Education" className="scroll-mt-16" >
        <div id="education" className="space-y-6">
          {educationData.map((edu, index) => (
            <div key={index} className="relative pl-4 border-l-2 border-indigo-100">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                <h3 className="text-lg font-bold text-slate-900">{edu.school}</h3>
                <span className="text-sm text-slate-500 font-mono">{edu.date}</span>
              </div>
              <div className="text-slate-700 font-medium mb-2">
                {edu.degree}
                {edu.honors && <span className="ml-2 text-indigo-600 text-sm">({edu.honors})</span>}
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

      {/* Skills Section */}
      <Section title="Skills" className="scroll-mt-16">
        <div id="skills" className="grid grid-cols-1 gap-4">
          {skillsData.map((skill, index) => (
            <div key={index} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
              <span className="text-sm font-bold text-slate-900 sm:w-48 flex-shrink-0">{skill.category}:</span>
              <div className="text-sm text-slate-600 leading-relaxed">
                {skill.items.join(", ")}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section title="Selected Projects" className="scroll-mt-16">
        <div id="projects" className="space-y-8">
          {projectsData.map((project, index) => (
            <div key={index}>
              <div className="mb-2">
                <h3 className="text-lg font-bold text-slate-900 flex items-center flex-wrap gap-2">
                  {project.name.split('|')[0]} 
                  {project.name.split('|')[1] && <span className="text-base font-normal text-slate-500">| {project.name.split('|')[1]}</span>}
                </h3>
                {project.techStack && (
                  <p className="text-xs font-mono text-indigo-600 mt-1 bg-indigo-50 inline-block px-2 py-1 rounded">
                    {project.techStack}
                  </p>
                )}
              </div>
              <ul className="list-disc list-outside ml-5 text-slate-600 text-sm space-y-2">
                {project.description.map((desc, idx) => (
                  <li key={idx} className="leading-relaxed">{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section title="Research & Teaching Experience" className="scroll-mt-16">
        <div id="experience" className="space-y-6">
          {experienceData.map((exp, index) => (
            <div key={index}>
              {/* Note: The provided data structure for experience was flat strings in description mostly, 
                  adapting generic rendering based on the specific data provided */}
              <ul className="list-disc list-outside ml-5 text-slate-600 text-sm space-y-3">
                {exp.description.map((desc, idx) => {
                  const [boldPart, ...rest] = desc.split(':');
                  return (
                    <li key={idx} className="leading-relaxed">
                      {rest.length > 0 ? (
                        <span>
                          <strong className="text-slate-800">{boldPart}:</strong>{rest.join(':')}
                        </span>
                      ) : (
                        boldPart
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Publications Section */}
      <Section title="Selected Publications" className="scroll-mt-16">
        <div id="publications" className="space-y-4">
          {publicationsData.map((pub, index) => (
            <div key={index} className="flex gap-3 text-sm text-slate-600">
              <span className="font-mono text-indigo-600 font-bold">[{index + 1}]</span>
              <div>
                 <span className="font-medium text-slate-800">{pub.title}</span>. <br/>
                 <span className="italic">{pub.authors}</span>. <br/>
                 <span className="text-slate-500">{pub.venue}, {pub.year}.</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

    </main>
  );
};

export default MainContent;