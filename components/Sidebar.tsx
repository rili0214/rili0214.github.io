import React from 'react';
import { FileText, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../constants';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className = "" }) => {
  return (
    <aside className={`bg-[#5c63b6] text-white flex-shrink-0 md:w-72 lg:w-80 md:h-screen md:sticky md:top-0 overflow-y-auto ${className}`}>
      <div className="p-10 flex flex-col items-center text-center">
        <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-white mb-8 shadow-xl bg-white/20">
          <img src="/avatar.jpg" alt={personalInfo.name} className="w-full h-full object-cover" />
        </div>

        <h1 className="text-3xl font-bold mb-3 tracking-tight">{personalInfo.name}</h1>
        <p className="text-indigo-50 text-lg mb-12 font-light leading-relaxed">{personalInfo.title}</p>

        <nav className="w-full space-y-3 text-base text-indigo-50 border-t border-white/15 pt-8 mb-8">
          <a href="#home" className="block py-2 px-4 rounded hover:bg-white/10 transition-colors font-medium">Home</a>
          <a href="#photos" className="block py-2 px-4 rounded hover:bg-white/10 transition-colors font-medium">Life Photos</a>
        </nav>

        <div className="w-full space-y-5 text-base text-indigo-50 border-t border-white/15 pt-8">
          <a href="/cv_en.pdf" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 py-3 bg-white/10 rounded-md hover:bg-white/20 transition-colors cursor-pointer font-medium">
            <FileText size={18} />
            <span>CV (EN)</span>
          </a>
          <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 hover:text-white transition-colors">
            <Mail size={20} />
            <span className="truncate font-medium">{personalInfo.email}</span>
          </a>

          {personalInfo.linkedin && (
            <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:text-white transition-colors">
              <Linkedin size={20} />
              <span className="truncate font-medium">LinkedIn</span>
            </a>
          )}

          {personalInfo.github && (
            <a href={`https://${personalInfo.github}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:text-white transition-colors">
              <Github size={20} />
              <span className="truncate font-medium">GitHub</span>
            </a>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
