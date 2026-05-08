import { Rocket, Mail, Phone, MessageCircle, Send, AtSign } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <Rocket className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tighter text-white uppercase">VEXX</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Arquitetando soluções digitais de alto impacto para marcas que não aceitam o comum. O futuro do seu negócio começa aqui.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/vexx_web" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-all">
                <AtSign className="w-5 h-5" />
              </a>
              <a href="https://wa.me/5521980202308" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="mailto:VEXX.Architecture@gmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-all">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Serviços</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Sites Institucionais</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Landing Pages Premium</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">E-commerce de Luxo</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Sistemas Web (SaaS)</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Consultoria Tech</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#home" className="hover:text-purple-400 transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-purple-400 transition-colors">Sobre a VEXX</a></li>
              <li><a href="#servicos" className="hover:text-purple-400 transition-colors">Nossos Serviços</a></li>
              <li><a href="#portfolio" className="hover:text-purple-400 transition-colors">Portfólio</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Privacidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contato</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-purple-500" />
                <a href="mailto:VEXX.Architecture@gmail.com" className="hover:text-purple-400 transition-colors">
                  VEXX.Architecture@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-purple-500" />
                <a href="https://wa.me/5521980202308" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                  +55 (21) 98020-2308
                </a>
              </li>
              <li className="flex items-center gap-3">
                <AtSign className="w-4 h-4 text-purple-500" />
                <a href="https://www.instagram.com/vexx_web" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                  @vexx_web
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs text-center md:text-left">
            © {new Date().getFullYear()} VEXX Digital Architecture. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs">
            Desenvolvido com <span className="text-purple-600">❤</span> por VEXX Tech
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
