import { Phone, ArrowRight } from 'lucide-react'
export default function Cta(){
    return(<>
    <section className="relative py-20">
  <div 
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/cta-bg.jpg')" }}
  />
  <div className="absolute inset-0 bg-black/70" />
  
  <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
   <section className="py-20 bg-gradient-to-r from-[#fab909] to-[#d9a308]">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold text-white mb-4">
      Proteja Seu Patrimônio Agora
    </h2>
    <p className="text-white/90 text-lg mb-8">
      Entre em contacto conosco e receba uma proposta personalizada. 
      Atendimento 24 horas por dia, 7 dias por semana.
    </p>
    
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <a 
        href="tel:+244123456789"
        className="flex items-center gap-2 bg-white text-[#fab909] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
      >
        <Phone size={20} />
        +244 123 456 789
      </a>
      
      <a 
        href="#contacto"
        className="flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#fab909] transition"
      >
        Solicitar Orçamento
        <ArrowRight size={20} />
      </a>
    </div>
  </div>
</section>
  </div>
</section>
    </>);
}