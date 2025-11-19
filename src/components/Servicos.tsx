import { Shield, Camera, Lock, Users, Eye, Clock } from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: "Segurança Patrimonial",
    description: "Vigilância 24h com profissionais treinados para proteger seu patrimônio."
  },
  {
    icon: Camera,
    title: "Vigilância Eletrônica",
    description: "Sistema de câmeras CCTV com monitoramento em tempo real."
  },
  {
    icon: Lock,
    title: "Controle de Acesso",
    description: "Sistemas modernos de controle de entrada e saída de pessoas."
  },
  {
    icon: Eye,
    title: "Monitoramento 24h",
    description: "Central de monitoramento com resposta imediata a incidentes."
  },
  {
    icon: Users,
    title: "Segurança para Eventos",
    description: "Equipe especializada para garantir segurança em eventos."
  },
  {
    icon: Clock,
    title: "Rondas Periódicas",
    description: "Rondas programadas para inspeção e prevenção de riscos."
  }
]

export default function Servicos() {
  return (
    <>
      <section className="py-20">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="relative z-10 text-4xl font-semibold lg:text-5xl text-gray-900 mb-4">
        Nossos <span className="text-[#fab909]">Serviços</span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Soluções completas de segurança patrimonial para proteger o que mais importa
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => {
        const Icon = service.icon
        return (
          <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition group">
            <div className="w-16 h-16 bg-[#fab909]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#fab909] transition">
              <Icon className="text-[#fab909] group-hover:text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600">
              {service.description}
            </p>
          </div>
        )
      })}
    </div>
  </div>
</section>
    </>
  );
}
