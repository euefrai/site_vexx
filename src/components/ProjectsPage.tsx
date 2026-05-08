import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const allProjects = [
  {
    title: 'Vexx Squad Oficial',
    category: 'Site Institucional',
    link: 'https://vexx-squad.online/',
    synopsis: 'Plataforma oficial do Vexx Squad. Um ambiente digital moderno e imersivo, projetado para destacar nossos serviços de desenvolvimento, alta performance e soluções exclusivas. Foco total em conversão, design premium e experiência do usuário.',
    iframeUrl: 'https://vexx-squad.online/'
  }
];

interface ProjectsPageProps {
  onBack: () => void;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Voltar para Home
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Projetos</span></h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            Explore nossos cases de sucesso detalhados. Veja como combinamos design premium, interações fluidas e alta performance para criar experiências memoráveis e focadas em resultados.
          </p>
        </motion.div>

        <div className="space-y-32">
          {allProjects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center"
            >
              {/* Informações */}
              <div className="lg:w-1/3 space-y-6">
                <div>
                  <span className="text-purple-500 text-xs font-bold tracking-widest uppercase mb-3 block">
                    {project.category}
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">{project.title}</h2>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {project.synopsis}
                  </p>
                </div>
                
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl font-semibold transition-all hover:scale-105 shadow-[0_0_20px_rgba(147,51,234,0.3)] group"
                >
                  Visitar Site
                  <ExternalLink className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Preview "Live" */}
              <div className="lg:w-2/3 w-full">
                <div className="rounded-[24px] md:rounded-[32px] overflow-hidden border border-white/10 bg-zinc-900/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative aspect-[16/10] group">
                  {/* Mock Browser Header */}
                  <div className="h-10 bg-zinc-950 flex items-center px-5 gap-2 border-b border-white/5 relative">
                    <div className="flex gap-2 z-10">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="px-6 py-1 bg-white/5 rounded-md text-[10px] text-gray-400 font-mono tracking-wider backdrop-blur-sm">
                        {project.link.replace('https://', '')}
                      </div>
                    </div>
                  </div>
                  
                  {/* Iframe Live View */}
                  <div className="w-full h-full relative bg-zinc-900">
                    {/* Placeholder loading state */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
                    </div>
                    
                    <iframe 
                      src={project.iframeUrl} 
                      title={project.title}
                      className="w-full h-full border-none absolute inset-0 z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                      sandbox="allow-scripts allow-same-origin"
                      loading="lazy"
                    ></iframe>
                    
                    <div className="absolute inset-0 z-20 pointer-events-none shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
