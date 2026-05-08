import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-purple-500 font-semibold tracking-wider uppercase mb-4">Sobre a VEXX</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Sua marca merece uma <br />
              <span className="text-gray-500">experiência digital de elite.</span>
            </h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              A VEXX desenvolve soluções digitais sob medida para marcas, empresas e profissionais que desejam crescer com presença online de alto impacto. Não somos apenas desenvolvedores; somos arquitetos de autoridade digital.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: Zap, title: 'Inovação Constante', desc: 'Tecnologias de ponta para garantir que seu projeto nunca fique obsoleto.' },
                { icon: Shield, title: 'Performance & Segurança', desc: 'Sites extremamente rápidos e protegidos contra ameaças digitais.' },
                { icon: Target, title: 'Foco em Conversão', desc: 'Design estratégico pensado para transformar visitantes em clientes reais.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-900/20 border border-purple-500/30 rounded-lg flex items-center justify-center">
                    <item.icon className="text-purple-400 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 relative group">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
                alt="Tech environment" 
                className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl">
                <p className="text-white font-medium italic">
                  "O digital não é mais uma opção, é a vitrine principal do seu sucesso comercial."
                </p>
                <p className="text-purple-400 text-sm mt-2 font-bold">— VEXX Digital Architecture</p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-purple-600/20 rounded-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
