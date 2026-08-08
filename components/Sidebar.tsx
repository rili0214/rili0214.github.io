import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { personalInfo } from '../constants';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className = "" }) => {
  return (
    <aside className={`bg-[#4f5fb8] text-white flex-shrink-0 md:w-72 lg:w-80 md:h-screen md:sticky md:top-0 overflow-y-auto ${className}`}>
      <div className="p-8 flex flex-col items-center text-center">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/20 mb-6 shadow-lg bg-white">
          <img src="/avatar.jpg" alt={personalInfo.name} className="w-full h-full object-cover" />
        </div>

        <h1 className="text-2xl font-bold mb-1">{personalInfo.name}</h1>
        <p className="text-indigo-100 text-sm mb-8 font-light leading-relaxed">{personalInfo.title}</p>

        <div className="w-full space-y-3 text-sm text-indigo-50 border-t border-indigo-400/30 pt-6">
          <div className="flex gap-2 justify-center mb-2">
            <a href="/cv_en.pdf" target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2 bg-white/10 rounded hover:bg-white/20 transition-colors cursor-pointer">
              <FileText size={14} />
              <span>CV (EN)</span>
            </a>
            <a href="/cv_cn.pdf" target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2 bg-white/10 rounded hover:bg-white/20 transition-colors cursor-pointer">
              <FileText size={14} />
              <span>CV (中)</span>
            </a>
          </div>

          <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 hover:text-white transition-colors">
            <Mail size={16} />
            <span className="truncate">{personalInfo.email}</span>
          </a>

          {personalInfo.linkedin && (
            <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
              <Linkedin size={16} />
              <span className="truncate">LinkedIn</span>
            </a>
          )}

          {personalInfo.github && (
            <a href={`https://${personalInfo.github}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
              <Github size={16} />
              <span className="truncate">GitHub</span>
            </a>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
