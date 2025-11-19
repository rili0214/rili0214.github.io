import React from 'react';
import { Mail, Phone, Github, GraduationCap, FileText, BookOpen } from 'lucide-react';
import { personalInfo } from '../constants';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className = "" }) => {
  return (
    <aside className={`bg-[#5c6bc0] text-white flex-shrink-0 md:w-72 lg:w-80 md:h-screen md:sticky md:top-0 overflow-y-auto ${className}`}>
      <div className="p-8 flex flex-col items-center text-center">
        {/* Profile Image Placeholder */}
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/20 mb-6 shadow-lg bg-white">
           <img 
             src="https://picsum.photos/300/300" 
             alt={personalInfo.name}
             className="w-full h-full object-cover"
           />
        </div>

        <h1 className="text-2xl font-bold mb-1">{personalInfo.name}</h1>
        <p className="text-indigo-100 text-sm mb-8 font-light">{personalInfo.title}</p>

        {/* Navigation / Links */}
        <nav className="w-full space-y-4 mb-8">
          <a href="#education" className="block py-2 px-4 rounded hover:bg-white/10 transition-colors text-sm font-medium">Education</a>
          <a href="#skills" className="block py-2 px-4 rounded hover:bg-white/10 transition-colors text-sm font-medium">Skills</a>
          <a href="#projects" className="block py-2 px-4 rounded hover:bg-white/10 transition-colors text-sm font-medium">Projects</a>
          <a href="#experience" className="block py-2 px-4 rounded hover:bg-white/10 transition-colors text-sm font-medium">Research & Experience</a>
          <a href="#publications" className="block py-2 px-4 rounded hover:bg-white/10 transition-colors text-sm font-medium">Publications</a>
        </nav>

        {/* Contact Info */}
        <div className="w-full space-y-3 text-sm text-indigo-50 border-t border-indigo-400/30 pt-6">
          <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
             <FileText size={16} />
             <span className="truncate">Résumé</span>
          </div>
          <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 hover:text-white transition-colors">
             <Mail size={16} />
             <span className="truncate">{personalInfo.email}</span>
          </a>
          <div className="flex items-center gap-3 hover:text-white transition-colors">
             <Phone size={16} />
             <span className="truncate">{personalInfo.phone}</span>
          </div>
          {personalInfo.github && (
             <a href={`https://${personalInfo.github}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                <Github size={16} />
                <span className="truncate">GitHub</span>
             </a>
          )}
           <a href="#" className="flex items-center gap-3 hover:text-white transition-colors">
             <BookOpen size={16} />
             <span className="truncate">Google Scholar</span>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;