import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Nexus SaaS Dashboard',
    category: 'Sistemas Web',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Node.js', 'Tailwind']
  },
  {
    title: 'Lumina Aesthetic LP',
    category: 'Landing Page',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['Framer Motion', 'Conversion']
  },
  {
    title: 'Vertex Corporate Site',
    category: 'Site Institucional',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800',
    tags: ['Next.js', 'UI/UX']
  }
];

const Portfolio = ({ onNavigate }: { onNavigate?: (page: string) => void }) => {
  return (
    <section id="portfolio" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-purple-500 font-semibold tracking-wider uppercase mb-4">Portfólio</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Projetos que definem novos padrões.</h3>
            <p className="text-gray-400 text-lg mb-4">
              Uma seleção de trabalhos recentes onde design e tecnologia se encontram para criar resultados excepcionais.
            </p>
            <p className="text-sm text-purple-400/80 bg-purple-500/10 border border-purple-500/20 px-4 py-2 rounded-lg inline-block">
              * Nota: Os itens abaixo são apenas exemplos visuais ilustrativos para demonstração de layout.
            </p>
          </div>
          <button 
            onClick={() => {
              if (onNavigate) {
                onNavigate('projects');
                window.scrollTo(0, 0);
              }
            }}
            className="text-white border-b border-purple-500 pb-1 hover:text-purple-500 transition-colors flex items-center gap-2 group cursor-pointer"
          >
            Ver todos os projetos
            <ExternalLink className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-[32px] bg-zinc-900 border border-white/5"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="text-purple-400 text-xs font-bold tracking-widest uppercase mb-2 block">{project.category}</span>
                <h4 className="text-2xl font-bold text-white mb-4">{project.title}</h4>
                <div className="flex gap-2">
                  {project.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="text-[10px] px-2 py-1 bg-white/10 text-white/70 rounded-md border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
