import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  {
    title: 'Design Moderno',
    description: 'Interfaces limpas e sofisticadas que transmitem credibilidade instantânea.'
  },
  {
    title: 'Performance Rápida',
    description: 'Código otimizado para carregar em milissegundos, melhorando o SEO e retenção.'
  },
  {
    title: 'Conversão Otimizada',
    description: 'Estruturas baseadas em gatilhos mentais e UX para gerar mais leads.'
  },
  {
    title: 'Presença Profissional',
    description: 'Sua marca vista como autoridade no seu nicho de atuação.'
  },
  {
    title: 'Soluções sob Medida',
    description: 'Nada de modelos prontos. Cada projeto é construído do zero para você.'
  },
  {
    title: 'Suporte VIP',
    description: 'Acompanhamento direto e transparente durante e após o desenvolvimento.'
  }
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="bg-zinc-900/50 border border-white/5 rounded-[40px] p-8 md:p-16 relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-[80px] -mr-32 -mt-32" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-purple-500 font-semibold mb-4">Vantagens Competitivas</h2>
              <h3 className="text-4xl font-bold text-white mb-8">Por que escolher a <span className="text-purple-500">VEXX</span> para seu próximo nível?</h3>
              <p className="text-gray-400 mb-10 text-lg leading-relaxed">
                Combinamos excelência técnica com visão de negócio. Nosso objetivo não é apenas entregar um site, mas sim uma ferramenta de crescimento para sua empresa.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle2 className="text-purple-500 w-5 h-5 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-bold text-sm mb-1">{benefit.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-white/10 rounded-2xl p-4 md:p-8 aspect-video flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="h-2 w-1/2 bg-white/10 rounded-full" />
                  <div className="h-2 w-3/4 bg-white/20 rounded-full" />
                  <div className="h-2 w-2/3 bg-purple-500/40 rounded-full" />
                  <div className="grid grid-cols-3 gap-4 mt-8">
                    <div className="h-20 bg-white/5 rounded-xl border border-white/5" />
                    <div className="h-20 bg-purple-500/20 rounded-xl border border-purple-500/20" />
                    <div className="h-20 bg-white/5 rounded-xl border border-white/5" />
                  </div>
                </div>
              </div>
              
              {/* Stats floaters */}
              <motion.div 
                initial={{ x: 20, y: 20, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                className="absolute -top-6 -right-6 p-4 bg-black border border-white/10 rounded-2xl shadow-2xl"
              >
                <p className="text-xs text-gray-400">Google PageSpeed</p>
                <p className="text-2xl font-bold text-green-500">99/100</p>
              </motion.div>
              
              <motion.div 
                initial={{ x: -20, y: -20, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                className="absolute -bottom-6 -left-6 p-4 bg-black border border-white/10 rounded-2xl shadow-2xl"
              >
                <p className="text-xs text-gray-400">Conversion Boost</p>
                <p className="text-2xl font-bold text-purple-500">+42%</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
