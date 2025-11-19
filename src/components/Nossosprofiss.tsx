import Image from 'next/image'

const team = [
  {
    name: "João Silva",
    role: "Diretor de Operações",
    image: "/tm.jpg",
    experience: "15 anos de experiência"
  },
  {
    name: "Maria Santos",
    role: "Coordenadora de Segurança",
    image: "/tm2.jpg",
    experience: "12 anos de experiência"
  },
  {
    name: "Carlos Mendes",
    role: "Especialista em Vigilância",
    image: "/tm3.jpg",
    experience: "10 anos de experiência"
  },
  {
    name: "Ana Costa",
    role: "Gestora de Monitoramento",
    image: "/tm4.jpg",
    experience: "8 anos de experiência"
  }
]

export default function Nossosdiferencias(){
  return(
    <>
    <section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="relative z-10 leading-tight text-4xl font-semibold lg:text-5xl text-gray-900 mb-4">
        Nossa <span className="text-[#fab909]">Equipe Expert</span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Profissionais altamente qualificados e dedicados à sua segurança
      </p>
    </div>

    {/* Team Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {team.map((member, index) => (
        <div key={index} className="group">
          <div className="relative overflow-hidden rounded-lg mb-4">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-80 object-cover group-hover:scale-110 transition duration-300"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm font-semibold">{member.experience}</p>
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
          <p className="text-gray-600 font-medium">{member.role}</p>
        </div>
      ))}
    </div>
  </div>
</section>
    </>
  );
}