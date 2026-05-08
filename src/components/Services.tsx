import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Layout, Cpu, Code2, Repeat } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Sites Profissionais',
    desc: 'Sites institucionais elegantes que posicionam sua empresa no topo do mercado.',
    features: ['Performance Ultra-rápida', 'SEO Otimizado', 'Design Exclusivo']
  },
  {
    icon: Layout,
    title: 'Landing Pages',
    desc: 'Páginas de alta conversão focadas em campanhas de tráfego pago e lançamentos.',
    features: ['Copywriting Estratégico', 'Testes A/B', 'Foco em Lead Gen']
  },
  {
    icon: Cpu,
    title: 'Mini SaaS',
    desc: 'Soluções de software enxutas para resolver problemas específicos via navegador.',
    features: ['Arquitetura Moderna', 'Escalabilidade', 'Interface Fluida']
  },
  {
    icon: Code2,
    title: 'Sistemas Web',
    desc: 'Dashboards e sistemas personalizados para gestão de processos internos.',
    features: ['Integração de APIs', 'Bancos de Dados', 'Multi-níveis de Acesso']
  },
  {
    icon: Repeat,
    title: 'Automação Digital',
    desc: 'Conectamos suas ferramentas para automatizar fluxos de trabalho repetitivos.',
    features: ['Integrações No-Code', 'Bots de Atendimento', 'Webhooks']
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-purple-500 font-semibold tracking-wider uppercase mb-4"
          >
            Nossas Soluções
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Desenvolvimento de alto padrão para mentes ambiciosas.
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-purple-900/10 transition-all duration-300 flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-purple-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                <service.icon className="text-purple-400 group-hover:text-white w-7 h-7" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">{service.title}</h4>
              <p className="text-gray-400 mb-6 flex-grow">{service.desc}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="text-sm text-gray-500 flex items-center gap-2">
                    <div className="w-1 h-1 bg-purple-500 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Special Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-purple-600 to-indigo-700 flex flex-col justify-center items-center text-center group cursor-pointer"
          >
            <h4 className="text-2xl font-bold text-white mb-4">Tem um projeto único?</h4>
            <p className="text-purple-100 mb-8">Nós adoramos desafios técnicos. Vamos construir algo novo.</p>
            <button className="px-6 py-3 bg-white text-purple-700 font-bold rounded-xl hover:bg-purple-50 transition-colors shadow-lg">
              Consultoria Gratuita
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
