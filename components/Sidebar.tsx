import React from 'react';
import { Mail, Linkedin, Github, FileText, BookOpen } from 'lucide-react'; // 引入 Linkedin 图标
import { personalInfo } from '../constants';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className = "" }) => {
  return (
    // 🎨 修改侧边栏颜色：修改 bg-[#5c6bc0] 为你想要的颜色，例如 bg-slate-800 (深黑) 或 bg-blue-900
    <aside className={`bg-[#5c6bc0] text-white flex-shrink-0 md:w-72 lg:w-80 md:h-screen md:sticky md:top-0 overflow-y-auto ${className}`}>
      <div className="p-8 flex flex-col items-center text-center">
        
        {/* 🖼️ 4. 修改头像：使用 public 文件夹里的图片 */}
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/20 mb-6 shadow-lg bg-white">
           <img 
             src="/avatar.jpg"  /* 这里直接引用 public 下的文件名 */
             alt={personalInfo.name}
             className="w-full h-full object-cover"
           />
        </div>

        <h1 className="text-2xl font-bold mb-1">{personalInfo.name}</h1>
        <p className="text-indigo-100 text-sm mb-8 font-light">{personalInfo.title}</p>

        {/* Navigation ... (保持不变) */}
        <nav className="w-full space-y-4 mb-8">
           {/* ... 原有的导航链接 ... */}
           <a href="#education" className="block py-2 px-4 rounded hover:bg-white/10 transition-colors text-sm font-medium">Education</a>
           <a href="#skills" className="block py-2 px-4 rounded hover:bg-white/10 transition-colors text-sm font-medium">Skills</a>
           <a href="#projects" className="block py-2 px-4 rounded hover:bg-white/10 transition-colors text-sm font-medium">Projects</a>
           <a href="#experience" className="block py-2 px-4 rounded hover:bg-white/10 transition-colors text-sm font-medium">Experience</a>
           <a href="#publications" className="block py-2 px-4 rounded hover:bg-white/10 transition-colors text-sm font-medium">Publications</a>
        </nav>

        {/* Contact Info */}
        <div className="w-full space-y-3 text-sm text-indigo-50 border-t border-indigo-400/30 pt-6">
          
          {/* 📄 3. 双语 CV 下载链接 */}
          <div className="flex gap-2 justify-center mb-2">
            <a href="/cv_en.pdf" target="_blank" className="flex-1 flex items-center justify-center gap-2 py-2 bg-white/10 rounded hover:bg-white/20 transition-colors cursor-pointer">
               <FileText size={14} />
               <span>CV (EN)</span>
            </a>
            <a href="/cv_cn.pdf" target="_blank" className="flex-1 flex items-center justify-center gap-2 py-2 bg-white/10 rounded hover:bg-white/20 transition-colors cursor-pointer">
               <FileText size={14} />
               <span>CV (中)</span>
            </a>
          </div>

          {/* Email */}
          <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 hover:text-white transition-colors">
             <Mail size={16} />
             <span className="truncate">{personalInfo.email}</span>
          </a>

          {/* 🔗 2. 替换电话为 LinkedIn */}
          {personalInfo.linkedin && (
             <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                <Linkedin size={16} />
                <span className="truncate">LinkedIn</span>
             </a>
          )}

          {/* Github */}
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