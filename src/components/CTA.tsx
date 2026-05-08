import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 border border-purple-500/20 rounded-[48px] p-8 md:p-20 text-center relative overflow-hidden">
            {/* Animated background blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full animate-pulse" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Pronto para elevar seu <br />
                <span className="text-purple-400">posicionamento digital?</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                Estamos com vagas abertas para novos projetos este mês. Garanta sua consultoria inicial e transforme sua visão em realidade técnica.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center">
                <a
                  href="https://wa.me/5521980202308?text=Ol%C3%A1%20VEXX%2C%20quero%20um%20or%C3%A7amento"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-10 py-5 bg-white text-black font-extrabold rounded-2xl hover:bg-purple-50 transition-all flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1"
                >
                  <MessageCircle className="w-6 h-6" />
                  Solicitar Orçamento
                </a>
                <a
                  href="#servicos"
                  className="w-full px-10 py-5 bg-white/5 text-white font-bold rounded-2xl border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-3"
                >
                  Ver nossa metodologia
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/5521980202308?text=Ol%C3%A1%20VEXX%2C%20gostaria%20de%20uma%20consultoria%20gratuita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-10 py-5 bg-purple-600 text-white font-extrabold rounded-2xl hover:bg-purple-700 transition-all flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(147,51,234,0.25)]"
                >
                  Consultoria gratuita
                </a>
                <a
                  href="https://wa.me/5521980202308?text=Ol%C3%A1%20VEXX%2C%20quero%20chamar%20no%20WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-10 py-5 bg-white/5 text-white font-bold rounded-2xl border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-3"
                >
                  Chamar no WhatsApp
                </a>
              </div>

              <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/40 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  Suporte 24/7
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  Entrega em até 15 dias*
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  Design 100% Exclusivo
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
